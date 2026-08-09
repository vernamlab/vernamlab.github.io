#!/usr/bin/env python3
"""Verify generated publication data before Docusaurus builds the site."""

import json
import re
from pathlib import Path


DATA = Path(__file__).resolve().parents[1] / "src" / "data" / "facultyPublications.json"
EXPECTED_FACULTY = (
    "Fatemeh Ganji",
    "Patrick Schaumont",
    "Berk Sunar",
    "Shahin Tajik",
)


def title_key(title):
    return re.sub(r"[^a-z0-9]", "", title.casefold())


def main():
    publications = json.loads(DATA.read_text(encoding="utf-8"))
    if tuple(publications) != EXPECTED_FACULTY:
        raise SystemExit("Generated data does not contain exactly the four expected faculty lists")

    for faculty, entries in publications.items():
        if not entries:
            raise SystemExit(f"Generated publication list is empty for {faculty}")
        titles = [title_key(entry["title"]) for entry in entries]
        if len(titles) != len(set(titles)):
            raise SystemExit(f"Generated publication list contains duplicate titles for {faculty}")
        expected_order = sorted(
            entries,
            key=lambda entry: (-(entry["year"] or 0), entry["title"].casefold()),
        )
        if entries != expected_order:
            raise SystemExit(f"Generated publication list is not sorted for {faculty}")

    print(", ".join(f"{faculty}: {len(entries)}" for faculty, entries in publications.items()))


if __name__ == "__main__":
    main()
