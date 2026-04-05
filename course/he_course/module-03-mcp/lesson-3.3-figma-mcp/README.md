# Lesson 3.3 — Figma MCP for precise frontend handoff

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

How to use Figma MCP after the frontend direction already exists, so the student can inspect the real design, extract layout and state details, and make the implementation more accurate inside the app.

## Practical outcomes

- Use Figma MCP to inspect one real screen or section in detail.
- Extract spacing, structure, copy, and interaction states before changing code.
- Turn design details into a focused implementation plan for one section or component.
- Improve an existing frontend section instead of generating a whole new one.
- Verify that the implementation is closer to the design after the changes.

## Student task

- Choose one section that already exists in your app or was drafted in the previous lesson.
- Open the matching design in Figma MCP.
- Extract the most useful details: structure, spacing, text, states, and component breakdown.
- Improve that one section in the app so it matches the design more closely.
- Write down 3 concrete UI differences you fixed.

## Prompt

`You are a UI implementation assistant. Goal: use Figma MCP to help me match one section in my app to the design more accurately. Context: the section is [screen/section], and I want to improve the existing implementation. Output: a short component breakdown, the most important spacing/copy/state details, and the top UI fixes to make next. Constraints: focus on one section only, prefer precision over speed, and treat generated code as reference only.`

## Next

- [Lesson 3.4 — Web search / fetch and other practical MCPs](../lesson-3.4-web-search-fetch/README.md)
