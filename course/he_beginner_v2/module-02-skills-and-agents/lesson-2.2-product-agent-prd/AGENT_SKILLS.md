# Lesson 2.2 — Product / research agent (PRD)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root (`asm.toml`).

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `github/prd` | **94** | Awesome Copilot PRD skill; strong default for PRD structure. |
| `snarktank/prd` | **88** | Ralph ecosystem; alternative tone/sections—good second opinion. |
| `inkeep/prd` | **76** | Was a solid PM-doc skill; **upstream path removed** from `inkeep/agents` — use vendored `doc-prd-aidoc-flow` as a comparison stand-in. |
| `khazp/vibe-prd` | **62** | Informal “vibe” framing; **not recommended** for formal PM practice. |
| `vladm3105/aidoc-flow-framework@doc-prd` | **58** | Narrow doc-flow framework; **not recommended** as core PRD skill. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | prd (Awesome Copilot) | `github:https://github.com/github/awesome-copilot/tree/main/skills/prd` |
| 2 | prd (Ralph / snarktank) | `github:https://github.com/snarktank/ralph/tree/main/skills/prd` |

Optional (vendored here for editing): see `bundled-skills/_to-improve/doc-prd-aidoc-flow/` — the upstream Inkeep `prd` path was removed from that repo; this aidoc-flow `doc-prd` skill is a stand-in to compare against Awesome Copilot’s `prd`.

```bash
asm add skill 'github:https://github.com/github/awesome-copilot/tree/main/skills/prd'
asm add skill 'github:https://github.com/snarktank/ralph/tree/main/skills/prd'
asm sync
```

---

## Suggested expertise bundle

Install **one** primary PRD skill first (`github/awesome-copilot`). If you add the Ralph `prd` as well, give it a distinct name so bundles do not collide:

```bash
asm add skill 'github:https://github.com/snarktank/ralph/tree/main/skills/prd' --name prd-ralph
asm sync
asm create expertise product-prd \
  prd prd-ralph \
  --desc "Turn ideas into structured PRDs, user stories, and acceptance criteria."
```

If you keep only a single `prd` skill on disk, pass just that one name to `asm create expertise`.
