#!/usr/bin/env python3
"""Vendor agent skills into he_beginner_v2 Module 2 lesson folders (git sparse checkout)."""

from __future__ import annotations

import argparse
import hashlib
import shutil
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
MODULE = REPO_ROOT / "course/he_beginner_v2/module-02-skills-and-agents"


def run(cmd: list[str], *, cwd: Path | None = None) -> None:
    subprocess.run(cmd, cwd=cwd, check=True)


def sparse_copy_github(
    owner: str,
    repo: str,
    subpath: str,
    dest: Path,
) -> None:
    """Clone repo with sparse checkout of ``subpath`` into ``dest``."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists():
        shutil.rmtree(dest)
    key = hashlib.sha256(f"{owner}/{repo}:{subpath}".encode()).hexdigest()[:12]
    tmp = Path("/tmp") / f"asm_skill_vendor_{key}"
    if tmp.exists():
        shutil.rmtree(tmp)
    repo_dir = tmp / "repo"
    run(
        [
            "git",
            "clone",
            "--depth",
            "1",
            "--filter=blob:none",
            "--sparse",
            f"https://github.com/{owner}/{repo}.git",
            str(repo_dir),
        ]
    )
    run(["git", "-C", str(repo_dir), "sparse-checkout", "set", subpath])
    src = repo_dir / subpath
    if not src.is_dir():
        raise FileNotFoundError(f"Expected directory after sparse checkout: {src}")
    shutil.copytree(src, dest)
    shutil.rmtree(tmp)


# (lesson_dir, dest_folder, owner, repo, path_in_repo, tier recommended|improve)
JOBS: list[tuple[str, str, str, str, str, str]] = [
    # 2.1 — >80
    ("lesson-2.1-skills-intro", "skill-creator", "openclaw", "openclaw", "skills/skill-creator", "recommended"),
    ("lesson-2.1-skills-intro", "make-skill-template", "github", "awesome-copilot", "skills/make-skill-template", "recommended"),
    (
        "lesson-2.1-skills-intro",
        "skill-development",
        "anthropics",
        "claude-code",
        "plugins/plugin-dev/skills/skill-development",
        "recommended",
    ),
    (
        "lesson-2.1-skills-intro",
        "cursor-subagent-creator",
        "tech-leads-club",
        "agent-skills",
        "packages/skills-catalog/skills/(creation)/cursor-subagent-creator",
        "recommended",
    ),
    # 2.1 — improve
    (
        "lesson-2.1-skills-intro",
        "_to-improve/creating-cursor-rules-skill",
        "pr-pm",
        "prpm",
        ".claude/skills/creating-cursor-rules-skill",
        "improve",
    ),
    # 2.2
    ("lesson-2.2-product-agent-prd", "prd-awesome-copilot", "github", "awesome-copilot", "skills/prd", "recommended"),
    ("lesson-2.2-product-agent-prd", "prd-ralph-snarktank", "snarktank", "ralph", "skills/prd", "recommended"),
    (
        "lesson-2.2-product-agent-prd",
        "_to-improve/doc-prd-aidoc-flow",
        "vladm3105",
        "aidoc-flow-framework",
        ".claude/skills/doc-prd",
        "improve",
    ),
    # 2.3
    (
        "lesson-2.3-tech-lead-architecture",
        "software-architecture",
        "davila7",
        "claude-code-templates",
        "cli-tool/components/skills/development/software-architecture",
        "recommended",
    ),
    ("lesson-2.3-tech-lead-architecture", "sql-openclaw", "openclaw", "skills", "skills/ivangdavila/sql", "recommended"),
    (
        "lesson-2.3-tech-lead-architecture",
        "system-design-qodex",
        "qodex-ai",
        "ai-agent-skills",
        "skills/system-design",
        "recommended",
    ),
    # 2.4
    ("lesson-2.4-ux-user-flow", "user-journeys", "alinaqi", "claude-bootstrap", "skills/user-journeys", "recommended"),
    (
        "lesson-2.4-ux-user-flow",
        "ui-ux-designer",
        "sickn33",
        "antigravity-awesome-skills",
        "skills/ui-ux-designer",
        "recommended",
    ),
    (
        "lesson-2.4-ux-user-flow",
        "_to-improve/user-research-flows",
        "ravidorr",
        "claude-skills-library",
        "skills/user-research-flows",
        "improve",
    ),
    (
        "lesson-2.4-ux-user-flow",
        "_to-improve/ux-flow-diagram",
        "cantagestudio",
        "CosmicAtlasPacker",
        ".claude/skills/ux-flow-diagram",
        "improve",
    ),
    # 2.5
    (
        "lesson-2.5-ui-design-systems",
        "shadcn-ui",
        "google-labs-code",
        "stitch-skills",
        "skills/shadcn-ui",
        "recommended",
    ),
    (
        "lesson-2.5-ui-design-systems",
        "tailwind-design-system",
        "wshobson",
        "agents",
        "plugins/frontend-mobile-development/skills/tailwind-design-system",
        "recommended",
    ),
    (
        "lesson-2.5-ui-design-systems",
        "ui-design-system",
        "davila7",
        "claude-code-templates",
        "cli-tool/components/skills/creative-design/ui-design-system",
        "recommended",
    ),
    (
        "lesson-2.5-ui-design-systems",
        "_to-improve/tailwind-best-practices",
        "mastra-ai",
        "mastra",
        ".claude/skills/tailwind-best-practices",
        "improve",
    ),
    # 2.6
    (
        "lesson-2.6-security-agent",
        "security-threat-model-openai",
        "openai",
        "skills",
        "skills/.curated/security-threat-model",
        "recommended",
    ),
    (
        "lesson-2.6-security-agent",
        "security-threat-model-davila7",
        "davila7",
        "claude-code-templates",
        "cli-tool/components/skills/security/security-threat-model",
        "recommended",
    ),
    (
        "lesson-2.6-security-agent",
        "vulnerability-scanner",
        "davila7",
        "claude-code-templates",
        "cli-tool/components/skills/security/vulnerability-scanner",
        "recommended",
    ),
    (
        "lesson-2.6-security-agent",
        "_to-improve/threat-modeling-expert",
        "sickn33",
        "antigravity-awesome-skills",
        "skills/threat-modeling-expert",
        "improve",
    ),
    # 2.7
    (
        "lesson-2.7-dev-agent-composer",
        "full-stack-developer-cursor",
        "sandraschi",
        "advanced-memory-mcp",
        ".cursor/skills/full-stack-developer",
        "recommended",
    ),
    (
        "lesson-2.7-dev-agent-composer",
        "fullstack-developer",
        "Shubhamsaboo",
        "awesome-llm-apps",
        "awesome_agent_skills/fullstack-developer",
        "recommended",
    ),
    (
        "lesson-2.7-dev-agent-composer",
        "full-stack-orchestration-full-stack-feature",
        "sickn33",
        "antigravity-awesome-skills",
        "skills/full-stack-orchestration-full-stack-feature",
        "recommended",
    ),
    # 2.8
    ("lesson-2.8-code-review-agent", "code-review-weaverse", "Weaverse", ".claude", "skills/code-review", "recommended"),
    (
        "lesson-2.8-code-review-agent",
        "code-review-jackyst0",
        "JackyST0",
        "awesome-agent-skills",
        "examples/code-review",
        "recommended",
    ),
    # 2.9
    (
        "lesson-2.9-qa-tests-agent",
        "qa-test-planner",
        "davila7",
        "claude-code-templates",
        "cli-tool/components/skills/ai-research/qa-test-planner",
        "recommended",
    ),
    (
        "lesson-2.9-qa-tests-agent",
        "unit-testing-test-generate",
        "sickn33",
        "antigravity-awesome-skills",
        "skills/unit-testing-test-generate",
        "recommended",
    ),
    ("lesson-2.9-qa-tests-agent", "_to-improve/test-cases", "cexll", "myclaude", "skills/test-cases", "improve"),
    # 2.10
    (
        "lesson-2.10-debug-agent",
        "debugger",
        "Shubhamsaboo",
        "awesome-llm-apps",
        "awesome_agent_skills/debugger",
        "recommended",
    ),
    (
        "lesson-2.10-debug-agent",
        "error-detective",
        "sickn33",
        "antigravity-awesome-skills",
        "skills/error-detective",
        "recommended",
    ),
    (
        "lesson-2.10-debug-agent",
        "stack-trace-decoder",
        "latestaiagents",
        "agent-skills",
        "skills/developer/debug-detective/stack-trace-decoder",
        "recommended",
    ),
    (
        "lesson-2.10-debug-agent",
        "_to-improve/debug",
        "parcadei",
        "Continuous-Claude-v3",
        ".claude/skills/debug",
        "improve",
    ),
    # 2.11
    (
        "lesson-2.11-local-db",
        "epic-database",
        "epicweb-dev",
        "epic-stack",
        "docs/skills/epic-database",
        "recommended",
    ),
    ("lesson-2.11-local-db", "sql-openclaw", "openclaw", "skills", "skills/ivangdavila/sql", "recommended"),
    (
        "lesson-2.11-local-db",
        "sqlite-inspector",
        "mikopbx",
        "Core",
        ".claude/skills/sqlite-inspector",
        "recommended",
    ),
]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--lesson", help="Only process one lesson folder name prefix")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    jobs = JOBS
    if args.lesson:
        jobs = [j for j in JOBS if j[0] == args.lesson]
        if not jobs:
            print(f"No jobs for {args.lesson}", file=sys.stderr)
            return 1

    for lesson, folder, owner, repo, subpath, tier in jobs:
        if args.lesson and lesson != args.lesson:
            continue
        dest = MODULE / lesson / "bundled-skills" / folder
        print(f"[{tier}] {lesson} -> {folder} ({owner}/{repo}:{subpath})")
        if args.dry_run:
            continue
        try:
            sparse_copy_github(owner, repo, subpath, dest)
        except subprocess.CalledProcessError as e:
            print(f"FAILED git step: {e}", file=sys.stderr)
            return 1
        except Exception as e:
            print(f"FAILED {dest}: {e}", file=sys.stderr)
            return 1

    if not args.dry_run:
        write_improvement_docs()
    return 0


IMPROVEMENT_NOTES: dict[str, str] = {
    "lesson-2.1-skills-intro/_to-improve/creating-cursor-rules-skill": (
        "**Applied (course patch):** load triggers; Cursor 2.x table; Next.js-style `.mdc` example."
    ),
    "lesson-2.2-product-agent-prd/_to-improve/doc-prd-aidoc-flow": (
        "**Applied (course addendum):** lean PRD vs SDD decision table; pointer to `prd-awesome-copilot`."
    ),
    "lesson-2.4-ux-user-flow/_to-improve/user-research-flows": (
        "**Applied (course patch):** UI handoff section (screens, states, edge cases, example)."
    ),
    "lesson-2.4-ux-user-flow/_to-improve/ux-flow-diagram": (
        "**Applied (course patch):** when not to diagram; Mermaid + size limit; ASCII kept."
    ),
    "lesson-2.5-ui-design-systems/_to-improve/tailwind-best-practices": (
        "**Applied (course patch):** path generalization table; read order vs `tailwind-design-system`."
    ),
    "lesson-2.6-security-agent/_to-improve/threat-modeling-expert": (
        "**Applied (course patch):** STRIDE one-question table; pointers to bundled OpenAI/davila7 skills."
    ),
    "lesson-2.9-qa-tests-agent/_to-improve/test-cases": (
        "**Applied (course patch):** Given/When/Then; Vitest/RTL stub; Playwright IDs; optional fuzz note."
    ),
    "lesson-2.10-debug-agent/_to-improve/debug": (
        "**Applied (course patch):** evidence ritual; Composer smallest-diff workflow."
    ),
}


def write_improvement_docs() -> None:
    for lesson in sorted({j[0] for j in JOBS}):
        path = MODULE / lesson / "bundled-skills" / "TO_IMPROVE.md"
        lines = [
            f"# Bundled skills — improvement backlog (`{lesson}`)",
            "",
            "Folders under `bundled-skills/_to-improve/` were lower-scored picks; **course patches** are embedded in each "
            "`SKILL.md` (re-cloning upstream without re-applying patches will drop them—commit before `bundle_module02_skills.py`).",
            "",
            "| Folder | Status |",
            "|--------|--------|",
        ]
        rows = 0
        for key, note in sorted(IMPROVEMENT_NOTES.items()):
            if not key.startswith(lesson):
                continue
            folder = key.split("/", 1)[1]
            lines.append(f"| `{folder}` | {note} |")
            rows += 1
        if rows == 0:
            lines.append(
                "| — | No `_to-improve/` skills vendored for this lesson (only **≥ 81** copies). |"
            )
        lines.extend(
            [
                "",
                "Recommended copies (score **≥ 81**, i.e. strictly > 80) live directly under `bundled-skills/<name>/` (not in `_to-improve/`).",
                "",
            ]
        )
        path.write_text("\n".join(lines), encoding="utf-8")

    # Per-module README
    readme = MODULE / "bundled-skills" / "README.md"
    readme.parent.mkdir(parents=True, exist_ok=True)
    readme.write_text(
        "\n".join(
            [
                "# Module 2 — vendored agent skills",
                "",
                "Each lesson’s `bundled-skills/` directory contains **read-only copies** of upstream skills "
                "(via sparse `git clone`) for offline use and course stability.",
                "",
                "- **Recommended** copies: score **> 80** in that lesson’s `AGENT_SKILLS.md`.",
                "- **`_to-improve/`**: score **72–80** with concrete upgrade notes in `TO_IMPROVE.md` beside them.",
                "",
                "To refresh from upstream, re-run from repo root:",
                "",
                "```bash",
                "python3 scripts/bundle_module02_skills.py",
                "```",
                "",
                "Commit hashes are not pinned; for reproducibility consider recording `git rev-parse HEAD` "
                "inside each cloned repo before vendor, or switch this script to shallow clone at a tag.",
                "",
            ]
        ),
        encoding="utf-8",
    )


if __name__ == "__main__":
    raise SystemExit(main())
