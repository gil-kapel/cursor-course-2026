# Lesson 2.7 — UI agent + Stitch workflow

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

Using the course repo's own `ui-design-systems-agent` as the center of the lesson: opening the skill in the repo, syncing it into `.cursor/skills`, verifying that Cursor can use it, and then spending the rest of the lesson in one continuous interaction with that exact skill. The skill leads the UI interview, asks for a Dribbble reference when needed, sharpens the Stitch prompt through conversation, and helps produce implementation-ready material. This lesson teaches the manual workflow; the later MCP module can automate parts of it.

## Practical outcomes

- Install the course repo skill `ui-design-systems-agent` into the workspace flow for this lesson.
- Run `uv run scripts/sync_module02_project_skills.py` and verify the skill appears under `.cursor/skills/ui-design-systems-agent/`.
- Let that installed skill ask missing UI questions in short rounds before jumping into visuals.
- Use a Dribbble reference upload to make the visual direction concrete.
- Save a broader UI handoff to `docs/ui-plan.md`.
- Produce a strong Stitch-ready prompt from the course documents and visual inspiration.
- Run Stitch on the web and bring the resulting design files back into Cursor for implementation.

## Verify

- You can point to both the repo skill at `module-02-skills-and-agents/lesson-2.7-ui-design-systems/ui-design-systems-agent/SKILL.md` and the synced copy at `.cursor/skills/ui-design-systems-agent/SKILL.md`.
- `docs/ui-plan.md` includes components, states, accessibility notes, responsive behavior, inspiration references, and a Stitch-ready prompt.
- You can show where the uploaded Dribbble reference changed the final visual direction.
- You can explain what came from the agent and what came from Stitch.
- You finish the lesson with material that can be implemented in Cursor, not just discussed.

## Next

- [Lesson 2.8 — Implementation plan agent (Plan mode gate)](../lesson-2.8-security-agent/README.md)
