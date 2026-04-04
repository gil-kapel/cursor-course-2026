# Lesson 2.10 — Debug agent (evidence → fix)

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |
| [AGENT_SKILLS.md](AGENT_SKILLS.md) | Ranked skills, ASM install lines, suggested expertise bundle |

## Syllabus topic

From stack traces and logs to a minimal repro and targeted patch—without guessing across the whole codebase.

## Learning outcomes

- Move from **evidence** (logs, stack traces, failing command) to a **minimal repro** and a **small, safe fix**.
- Avoid “debugging by rewriting” large unrelated areas.

## Where this sits

- **Phase:** Implementation — feedback loop whenever CI, terminal, or runtime errors appear.
- **Prerequisite:** A runnable project or test command; paste errors into chat or attach log files (`@`).
- **Next:** [Lesson 2.11 — Local DB](../lesson-2.11-local-db/README.md) when features need persistence beyond in-memory state.
