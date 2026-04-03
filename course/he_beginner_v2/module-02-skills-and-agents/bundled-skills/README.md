# Module 2 — vendored agent skills

Each lesson’s `bundled-skills/` directory contains **read-only copies** of upstream skills (via sparse `git clone`) for offline use and course stability.

- **Recommended** copies: score **strictly greater than 80** (the tables use **≥ 81**) in that lesson’s `AGENT_SKILLS.md`.
- **`_to-improve/`**: score **72–80** with concrete upgrade notes in `TO_IMPROVE.md` beside them.

To refresh from upstream, re-run from repo root:

```bash
python3 scripts/bundle_module02_skills.py
```

**Warning:** that command **re-downloads** skills and **overwrites** `bundled-skills/`, including **`_to-improve/`** edits (course patches in `SKILL.md`). Commit or stash before refreshing; re-apply patches from git history if needed.

Commit hashes are not pinned; for reproducibility consider recording `git rev-parse HEAD` inside each cloned repo before vendor, or switch this script to shallow clone at a tag.

**Licenses:** Each folder may include upstream `LICENSE` files. Vendored content keeps the original authors’ terms; do not strip license notices when editing forks for class.
