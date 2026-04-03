# Lesson 2.5 — UI agent (design systems & libraries)

**Vendored in this repo:** copies live under this lesson’s `bundled-skills/` — top-level folders are skills scored **≥ 81** (strictly **> 80**) in `AGENT_SKILLS.md`; `bundled-skills/_to-improve/` holds **72–80** candidates with edit notes in `bundled-skills/TO_IMPROVE.md`. Refresh from the course root: `python3 scripts/bundle_module02_skills.py`.

ASM: `asm search`, `asm add skill <source>`, `asm sync` from your project root.

## Scoring (0–100)

Lesson fit (30) · Authority (30) · Ecosystem signal (20) · Cursor fit (10) · Overlap (−10). **Recommended ≥ 72.**

---

## Ranked candidates

| Skill (id) | Score | Notes |
|------------|-------|--------|
| `shadcn-ui` (stitch-skills, curated) | **96** | shadcn/ui + Tailwind composition; aligns with common React stacks. |
| `wshobson/tailwind-design-system` | **90** | Very visible Tailwind + design-token patterns. |
| `davila7/ui-design-system` | **88** | UI system thinking from Claude Code Templates. |
| `mastra-ai/tailwind-best-practices` | **77** | Tailwind quality bar; overlap with `tailwind-design-system` (−5). |
| `sickn33/tailwind-design-system` | **78** | Fork-style duplicate of wshobson pack; prefer wshobson unless you standardize on sickn33. |
| `hopeoverture/tailwind-shadcn-ui-setup` | **62** | Niche app context; **not recommended** as default. |

---

## Recommended installs

| Priority | Skill | Source |
|----------|--------|--------|
| 1 | shadcn-ui | `github:https://github.com/google-labs-code/stitch-skills/tree/main/skills/shadcn-ui` |
| 2 | tailwind-design-system | `github:https://github.com/wshobson/agents/tree/main/plugins/frontend-mobile-development/skills/tailwind-design-system` |
| 3 | ui-design-system | `github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/creative-design/ui-design-system` |

Optional (Tailwind depth): `github:https://github.com/mastra-ai/mastra/tree/main/.claude/skills/tailwind-best-practices`

```bash
asm add skill 'github:https://github.com/google-labs-code/stitch-skills/tree/main/skills/shadcn-ui'
asm add skill 'github:https://github.com/wshobson/agents/tree/main/plugins/frontend-mobile-development/skills/tailwind-design-system'
asm add skill 'github:https://github.com/davila7/claude-code-templates/tree/main/cli-tool/components/skills/creative-design/ui-design-system'
asm sync
```

---

## Suggested expertise bundle

```bash
asm create expertise ui-design-systems \
  shadcn-ui tailwind-design-system ui-design-system \
  --desc "Apply design systems: components, tokens, Tailwind, shadcn/ui."
```
