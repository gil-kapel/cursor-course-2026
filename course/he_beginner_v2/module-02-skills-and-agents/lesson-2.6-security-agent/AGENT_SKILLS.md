# Lesson 2.6 — Security agent (sanity checks & risks)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `openai/security-threat-model` | **96** | OpenAI curated `.curated/` skill; strong baseline for threat modeling. |
| `davila7/security-threat-model` | **90** | Same topic from Davila7 open-source agent template pack; excellent companion checklist. |
| `davila7/vulnerability-scanner` | **85** | Practical “find issues in this codebase” angle; complements threat model. |
| `tech-leads-club/security-threat-model` | **80** | Good catalog copy; redundant if you already use OpenAI + davila7. |
| `sickn33/threat-modeling-expert` | **76** | Broad threat content; slightly generic vs curated rows above. |
| `harperaa/security-prompts-threat-modeling` | **58** | Small repo signal; **not recommended** as primary. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | security-threat-model (OpenAI) | `github:https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model` |
| 2 | security-threat-model (davila7) | `github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/security/security-threat-model` |
| 3 | vulnerability-scanner | `github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/security/vulnerability-scanner` |

If two skills map to the same folder name, install one with `asm add skill … --name security-threat-model-openai` (or similar).

```bash
asm add skill 'github:https://github.com/openai/skills/tree/main/skills/.curated/security-threat-model'
asm add skill 'github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/security/security-threat-model'
asm add skill 'github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/security/vulnerability-scanner'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise security-review \
  security-threat-model vulnerability-scanner \
  --desc "Threat modeling, data-handling review, and dependency/config sanity checks."
```

Adjust names to match what ASM installed on disk.
