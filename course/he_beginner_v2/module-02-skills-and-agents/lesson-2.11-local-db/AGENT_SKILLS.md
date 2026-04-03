# Lesson 2.11 — Local DB (SQLite / JSON)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `epicweb-dev/epic-database` | **90** | Epic Stack docs-as-skill; pragmatic local/Postgres/SQLite patterns. |
| `sql` (playbooks / asm-index curated) | **88** | Cross-DB literacy; supports schema and query thinking. |
| `mikopbx/sqlite-inspector` | **83** | SQLite inspection / debugging workflow; **verified** GitHub tree URL. |
| `niller2005/database-sqlite` | **65** | Personal-project skill; OK if you want a second SQLite angle—lower authority. |
| `benchflow-ai/sqlite-database-expert` | **—** | Frequently listed in registries but the published **tree URL 404s** at time of writing—**skip** until fixed. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | epic-database | `github:https://github.com/epicweb-dev/epic-stack/tree/main/docs/skills/epic-database` |
| 2 | sql (curated) | `playbooks:https://playbooks.com/skills/openclaw/skills/sql` |
| 3 | sqlite-inspector | `github:https://github.com/mikopbx/Core/tree/develop/.claude/skills/sqlite-inspector` |

For **JSON-only** persistence (no SQL), rely on your dev agent skill from lesson 2.7 or search `asm search "JSON file persistence local storage"` and apply the same ≥72 rule.

```bash
asm add skill 'github:https://github.com/epicweb-dev/epic-stack/tree/main/docs/skills/epic-database'
asm add skill 'playbooks:https://playbooks.com/skills/openclaw/skills/sql'
asm add skill 'github:https://github.com/mikopbx/Core/tree/develop/.claude/skills/sqlite-inspector'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise local-data \
  epic-database sql sqlite-inspector \
  --desc "Local SQLite/JSON data modeling, migrations, and safe queries for dev."
```
