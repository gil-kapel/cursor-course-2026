# Lesson 2.2 (app playlist) — Skill anatomy: triggers, good vs bad patterns — folder `lesson-2.12-skill-anatomy`

English index; Hebrew narration and screen beats live beside this file.

## Syllabus topic

How the agent **decides** to use a skill (frontmatter as the trigger surface), **progressive disclosure** (metadata vs full body), and what makes a **`SKILL.md`** maintainable vs useless.

## Prerequisites

- [Lesson 2.1](../lesson-2.1-skills-intro/README.md) — Rules vs Skills and two value types.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet |
| [narration.md](narration.md) | Hebrew voiceover (ElevenLabs) |

## Hands-on reference in this repo

Use **`dev-composer-agent/SKILL.md`** under [lesson-2.7-dev-agent-composer](../lesson-2.7-dev-agent-composer/dev-composer-agent/SKILL.md) as the worked example for triggers, workflow steps, output shape, and common mistakes.

## Learning outcomes

- Explain why **`description` (and `name`) in YAML frontmatter** matter before the body is loaded.
- Contrast **good** skills (trigger-rich description, numbered workflow, explicit output, quality gates) with **bad** skills (vague triggers, essay body, no output template).
- Decompose a real `SKILL.md` into: triggers, steps, deliverable shape, failure modes.

## Next

- [Lesson 2.3 — ASM discovery & install](../lesson-2.13-asm-discovery/README.md)
- Then [Lesson 2.4 — PRD](../lesson-2.2-product-agent-prd/README.md)
