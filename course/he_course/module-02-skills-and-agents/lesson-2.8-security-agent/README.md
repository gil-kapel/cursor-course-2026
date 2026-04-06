# Lesson 2.8 — Implementation plan agent (Plan mode gate)

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

Before writing implementation code, the student should enter **Plan mode** and ask a planning agent to combine all existing course documents into one ordered implementation plan or three slice plans. This is the gate between design and execution: identifying blockers, sequencing slices, and deciding what gets built first.

## Practical outcomes

- Use Plan mode before implementation instead of jumping straight into Composer.
- Create `docs/implementation-plan.md` or a small set of slice plans such as `docs/slice-01.md`, `docs/slice-02.md`, and `docs/slice-03.md`.
- Decide what gets built first and what stays out of slice 1.
- Surface blockers, including security or dependency blockers, before coding starts.

## Verify

- You finish with one clear build order, not just a pile of documents.
- Slice 1 is concrete enough to implement without guessing.
- The next lesson can build from the plan file directly.

## Next

- [Lesson 2.9 — Dev agent (slice-by-slice implementation)](../lesson-2.9-dev-agent-composer/README.md)
