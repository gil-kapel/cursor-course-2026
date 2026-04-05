# Lesson 2.3 — ASM: Discovery and installation

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

Practical workflow with the **Agent Skill Manager (ASM)** through the **Agent** itself. Learning how to ask Cursor to inspect the current ASM setup, recommend a skill using the course rubric, perform the ASM steps inside the agent workflow, and then verify the resulting project files instead of relying on a terminal-first flow.

## Practical outcomes

- Ask the agent to inspect whether ASM is ready in the current project.
- Let the agent recommend one skill based on `AGENT_SKILLS.md` and explain why it is the best fit.
- Let the agent handle the ASM workflow, then verify the updated files in the workspace.
- Understand when an expertise bundle is useful for grouping related skills.

## Verify

- You can point to `asm.toml` as the project-level ASM setup file.
- You can point to `.asm/main_asm.md` as the generated ASM registry view.
- You can open `.cursor/skills/<skill-name>/SKILL.md` and confirm the installed skill exists where Cursor can use it.
- You can explain the difference between "let the agent operate ASM" and "manage the whole flow manually in the CLI".

## Next

- [Lesson 2.4 — Product / research agent (PRD)](../lesson-2.4-product-agent-prd/README.md)
