# Lesson 2.4 — UX agent (flows & screen logic)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `uv run scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `alinaqi/user-journeys` | **86** | Journey-centric; matches “flows” learning goal. |
| `sickn33/ui-ux-designer` | **84** | Broad UX coverage; pairs well with journey work. |
| `ravidorr/user-research-flows` | **80** | Research + flow articulation. |
| `cantagestudio/ux-flow-diagram` | **72** | Diagram-oriented flows; acceptable if you want diagram-style outputs. |
| `x-school-academy/dev-swarm-stage-ux` | **58** | Swarm-stage specific; **not recommended** for beginners. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | user-journeys | `github:https://github.com/alinaqi/claude-bootstrap/tree/main/skills/user-journeys` |
| 2 | ui-ux-designer | `github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/ui-ux-designer` |
| 3 | user-research-flows | `github:https://github.com/ravidorr/claude-skills-library/tree/main/skills/user-research-flows` |

Optional (diagram emphasis): `github:https://github.com/CANTAGESTUDIO/CosmicAtlasPacker/tree/main/.claude/skills/ux-flow-diagram`

```bash
asm add skill 'github:https://github.com/alinaqi/claude-bootstrap/tree/main/skills/user-journeys'
asm add skill 'github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/ui-ux-designer'
asm add skill 'github:https://github.com/ravidorr/claude-skills-library/tree/main/skills/user-research-flows'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise ux-flows \
  user-journeys ui-ux-designer user-research-flows \
  --desc "User journeys, flows, and screen-level behavior before UI polish."
```
