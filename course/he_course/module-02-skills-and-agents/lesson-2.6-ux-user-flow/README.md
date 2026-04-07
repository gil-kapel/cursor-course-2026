# Lesson 2.6 — UX agent (zero-friction flows)

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

Defining user journeys with a strong focus on **zero friction** and **always knowing the next action**. The skill should lead an interactive UX interview, ask the missing questions in short rounds, and only then produce the handoff covering success paths, empty states, loading indicators, error handling, and low-friction conversion flows such as opening a purchase side panel instead of forcing the user into unnecessary page jumps.

## Practical outcomes

- Save the main flows to `docs/ux-flows.md`.
- Define empty, loading, error, and permission-related edge states before UI work.
- Add explicit "next best action" guidance to each critical flow.
- Design at least one zero-friction flow, such as package selection to payment without sending the user to a totally different page.
- Use different agent modes for different UX jobs: `Ask` for friction audit, `Plan` for structuring the flow, and `Agent` for saving the final artifact.
- Let the UX skill ask follow-up questions in short rounds instead of relying on one big prompt.
- Work through at least two real examples instead of staying at the level of abstract UX advice.

## Verify

- `docs/ux-flows.md` covers the main path plus at least one failure or edge case.
- At least one flow clearly explains how the user keeps moving forward with low friction.
- The UI lesson can use this file without guessing the screen logic.
- You can explain why you used each mode on screen and what output it gave you.
- You can point to places where the skill asked clarifying questions before writing the final flow.

## Next

- [Lesson 2.7 — UI agent (design systems)](../lesson-2.7-ui-design-systems/README.md)
