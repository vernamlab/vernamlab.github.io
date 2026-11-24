"""Keep upstream development source maps out of the public documentation."""

import re
from pathlib import Path


SOURCE_MAP_REFERENCE = re.compile(
    r"\n(?://# sourceMappingURL=[^\n]*|/\*# sourceMappingURL=[^\n]*\*/)\s*\Z"
)


def on_post_build(config):
    """Remove developer source maps and their references from generated assets."""
    for source_map in Path(config.site_dir, "assets").rglob("*.map"):
        asset = source_map.with_suffix("")
        if asset.is_file() and asset.suffix in {".css", ".js"}:
            content = asset.read_text(encoding="utf-8")
            asset.write_text(SOURCE_MAP_REFERENCE.sub("\n", content), encoding="utf-8")
        source_map.unlink()
