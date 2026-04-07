#!/usr/bin/env python3
"""Link Module 2 lesson skills into Cursor discovery paths (single source of truth).

There is **one** copy of each skill on disk: the lesson folder under
`course/he_course/module-02-skills-and-agents/...`.

This script creates **symlinks** so Cursor (and optional compatible tools) can find skills:

- `.cursor/skills/<skill-name>` → relative path into the matching lesson folder (primary path for this course)
- `.claude/skills` → `../.cursor/skills` (optional compatibility symlink only; ignore if you use Cursor alone)

Re-run after adding a lesson skill or changing folder names:

    uv run scripts/sync_module02_project_skills.py

Windows: creating directory symlinks may require Developer Mode or an elevated shell;
if linking fails, edit skills only under the lesson paths and adjust your tool config manually.
"""

from __future__ import annotations

import os
import shutil
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
MODULE2 = REPO_ROOT / "course" / "he_course" / "module-02-skills-and-agents"

SKILL_SOURCES = [
    MODULE2 / "lesson-2.1-skills-intro" / "cursor-skill-foundation",
    MODULE2 / "lesson-2.4-product-agent-prd" / "product-prd-agent",
    MODULE2 / "lesson-2.5-tech-lead-architecture" / "tech-lead-architecture-agent",
    MODULE2 / "lesson-2.6-ux-user-flow" / "ux-user-flow-agent",
    MODULE2 / "lesson-2.7-ui-design-systems" / "ui-design-systems-agent",
    MODULE2 / "lesson-2.9-dev-agent-composer" / "dev-composer-agent",
    MODULE2 / "lesson-2.10-code-review-agent" / "code-review-cleanup-agent",
    MODULE2 / "lesson-2.11-qa-tests-agent" / "qa-tests-agent",
    MODULE2 / "lesson-2.12-debug-agent" / "debug-fix-agent",
]

CURSOR_SKILLS = REPO_ROOT / ".cursor" / "skills"
CLAUDE_SKILLS = REPO_ROOT / ".claude" / "skills"


def _remove_path(path: Path) -> None:
    if path.is_symlink():
        path.unlink()
    elif path.is_dir():
        shutil.rmtree(path)
    elif path.exists():
        path.unlink()


def _symlink_dir(target_link: Path, source_dir: Path) -> None:
    """Create target_link as a symlink to source_dir (source must exist)."""
    if not source_dir.is_dir():
        raise NotADirectoryError(f"Skill source is not a directory: {source_dir}")
    _remove_path(target_link)
    rel = os.path.relpath(source_dir.resolve(), target_link.parent.resolve())
    try:
        target_link.symlink_to(rel, target_is_directory=True)
    except OSError as exc:
        print(f"ERROR: could not symlink {target_link} -> {rel}: {exc}", file=sys.stderr)
        raise


def main() -> int:
    CURSOR_SKILLS.mkdir(parents=True, exist_ok=True)

    for source_dir in SKILL_SOURCES:
        if not source_dir.exists():
            raise FileNotFoundError(f"Missing source skill: {source_dir}")
        target_link = CURSOR_SKILLS / source_dir.name
        _symlink_dir(target_link, source_dir)
        print(f"Linked {source_dir.name} -> {target_link.relative_to(REPO_ROOT)}")

    _remove_path(CLAUDE_SKILLS)
    CLAUDE_SKILLS.parent.mkdir(parents=True, exist_ok=True)
    try:
        CLAUDE_SKILLS.symlink_to("../.cursor/skills", target_is_directory=True)
    except OSError as exc:
        print(
            f"ERROR: could not symlink {CLAUDE_SKILLS} -> ../.cursor/skills: {exc}",
            file=sys.stderr,
        )
        raise
    print(f"Linked {CLAUDE_SKILLS.relative_to(REPO_ROOT)} -> ../.cursor/skills")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
