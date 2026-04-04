# Lesson 2.3 — Tech lead (architecture & structure)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `davila7/software-architecture` | **93** | Davila7 open-source agent template pack; repo boundaries, structure, tradeoffs. |
| `sql` (playbooks / asm-index curated) | **88** | Strong data-model and SQL literacy—supports architecture decisions. |
| `qodex-ai/ai-agent-skills@system-design` | **82** | System-design patterns; install often via skills.sh / `npx`. |
| `NeoLabHQ/software-architecture` | **74** | DDD-flavored; good if you adopt DDD language. |
| `fullfran/software-architecture` | **52** | Low signal / example repo context; **not recommended**. |
| `simplerick0/software-architecture` | **48** | Personal config bundle; **not recommended** as course default. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | software-architecture | `github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/development/software-architecture` |
| 2 | sql (curated) | `playbooks:https://playbooks.com/skills/openclaw/skills/sql` |

Optional (system design): `npx skills add qodex-ai/ai-agent-skills@system-design` (from `asm search` if you need the exact line), then `asm sync` if your setup picks it up.

```bash
asm add skill 'github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/development/software-architecture'
asm add skill 'playbooks:https://playbooks.com/skills/openclaw/skills/sql'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise tech-lead-architecture \
  software-architecture sql \
  --desc "Spec to folders, boundaries, APIs, and data model choices."
```
