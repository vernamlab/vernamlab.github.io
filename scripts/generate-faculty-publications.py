#!/usr/bin/env python3
"""Generate the faculty publication data from the Scholar exports."""

import json
import re
from pathlib import Path
from xml.etree import ElementTree
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "src" / "data" / "facultyPublications.json"
WORD_NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}

SOURCES = {
    "Fatemeh Ganji": ROOT / "scholar-data" / "ganji.docx",
    "Patrick Schaumont": ROOT / "scholar-data" / "schaumont_cleaned.bib",
    "Berk Sunar": ROOT / "scholar-data" / "sunar_cleaned.bib",
    "Shahin Tajik": ROOT / "scholar-data" / "tajik_cleaned.bib",
}


def docx_bibliography(path):
    with ZipFile(path) as archive:
        document = ElementTree.fromstring(archive.read("word/document.xml"))
    paragraphs = []
    for paragraph in document.findall(".//w:body/w:p", WORD_NS):
        paragraphs.append("".join(node.text or "" for node in paragraph.findall(".//w:t", WORD_NS)))
    return "\n".join(paragraphs)


def split_entries(bibliography):
    starts = list(re.finditer(r"(?m)^@\w+\s*\{", bibliography))
    return [bibliography[start.start() : starts[index + 1].start()].strip()
            for index, start in enumerate(starts)
            if index + 1 < len(starts)] + ([bibliography[starts[-1].start():].strip()] if starts else [])


def field(entry, name):
    match = re.search(rf"(?mi)^\s*{name}\s*=\s*", entry)
    if not match:
        return ""
    position = match.end()
    if entry[position] in "{\"":
        opening = entry[position]
        closing = "}" if opening == "{" else '"'
        depth = 0
        value_start = position + 1
        for index in range(value_start, len(entry)):
            character = entry[index]
            if opening == "{" and character == "{" and (index == 0 or entry[index - 1] != "\\"):
                depth += 1
            elif character == closing and (index == 0 or entry[index - 1] != "\\"):
                if depth == 0:
                    return entry[value_start:index]
                depth -= 1
    return entry[position:].split(",", 1)[0].strip()


def clean(value):
    replacements = {
        r"\&": "&", r"\L": "Ł", r'\"a': "ä", r'\"o': "ö", r'\"u': "ü",
        r"\ss": "ß", "{": "", "}": "", "~": " ",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    return re.sub(r"\s+", " ", value).strip()


def publication(entry):
    venue = field(entry, "journal") or field(entry, "booktitle") or field(entry, "howpublished")
    if not venue:
        venue = field(entry, "publisher") or field(entry, "note")
    return {
        "title": clean(field(entry, "title")),
        "authors": clean(field(entry, "author")).replace(" and ", ", "),
        "venue": clean(venue),
        "year": int(field(entry, "year")) if field(entry, "year").isdigit() else None,
    }


def title_key(title):
    return re.sub(r"[^a-z0-9]", "", title.casefold())


def main():
    output = {}
    for faculty, path in SOURCES.items():
        bibliography = docx_bibliography(path) if path.suffix == ".docx" else path.read_text(encoding="utf-8")
        unique = {}
        for entry in split_entries(bibliography):
            item = publication(entry)
            key = title_key(item["title"])
            if key and key not in unique:
                unique[key] = item
        output[faculty] = sorted(unique.values(), key=lambda item: (-(item["year"] or 0), item["title"].casefold()))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Generated " + ", ".join(f"{name}: {len(items)}" for name, items in output.items()))


if __name__ == "__main__":
    main()
