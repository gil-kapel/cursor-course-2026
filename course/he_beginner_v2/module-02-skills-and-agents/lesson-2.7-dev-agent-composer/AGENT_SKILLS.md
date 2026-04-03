# Lesson 2.7 — Dev agent (Composer / implementation)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `sandraschi/full-stack-developer` | **92** | Upstream lives under `.cursor/skills/`—strong **Cursor fit** for this course. |
| `shubhamsaboo/fullstack-developer` | **88** | Popular general full-stack implementation skill. |
| `sickn33/full-stack-orchestration-full-stack-feature` | **85** | End-to-end feature orchestration across layers. |
| `baz-scm/full-stack-development` | **70** | Reviewer-oriented naming; weaker as a student default. |
| `byteagenten/full-stack-feature` | **55** | Marketplace-specific; **not recommended** as core. |
| `cornmanwtf/full-stack-feature-generator` | **45** | Low signal; **not recommended**. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | full-stack-developer (Cursor path) | `github:https://github.com/sandraschi/advanced-memory-mcp/tree/master/.cursor/skills/full-stack-developer` |
| 2 | fullstack-developer | `github:https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/awesome_agent_skills/fullstack-developer` |
| 3 | full-stack-orchestration-full-stack-feature | `github:https://github.com/sickn33/antigravity-awesome-skills/tree/main/skills/full-stack-orchestration-full-stack-feature` |

Use `asm add skill … --name` if the two “full-stack-developer” skills collide on disk.

```bash
asm add skill 'github:https://github.com/sandraschi/advanced-memory-mcp/tree/master/.cursor/skills/full-stack-developer'
asm add skill 'github:https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/awesome_agent_skills/fullstack-developer'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise dev-implementation \
  full-stack-developer fullstack-developer \
  --desc "Implement features across frontend, backend, and glue code with clear commits."
```
