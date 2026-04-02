# Cursor Course · Hebrew-first package

Scripts, prompts, captions, and production docs for **two Hebrew tracks**: a **beginner** path (**Cursor** + **Claude Code for VS Code**) for learners with little or no dev background, and an **advanced** **Cursor** path for professional end-to-end workflows. Content overlaps by design so people can move from basics to advanced without gaps.

[![Beginner](https://img.shields.io/badge/beginner-B01--B13-5a7d6a?style=flat-square)](course/he-beginner/docs/course-outline.md)
[![Advanced](https://img.shields.io/badge/advanced-14_lessons-2d5a4a?style=flat-square)](course/he-advanced/docs/course-outline.md)
[![Language](https://img.shields.io/badge/content-Hebrew-5a7d6a?style=flat-square)](course/he-advanced/scripts/)
[![Repo](https://img.shields.io/badge/repo-cursor__course-8b9dc9?style=flat-square)](#repository-layout)

---

## Learning paths

| Track | Outline | Audience | Lesson assets |
| --- | --- | --- | --- |
| **Beginner** | [`course/he-beginner/docs/course-outline.md`](course/he-beginner/docs/course-outline.md) | Non-developers; terminal/Git anxiety; first agent projects with **Claude Code** in **Cursor** | [`course/he-beginner/README.md`](course/he-beginner/README.md) — Script Masters, prompts, captions for **B01–B13** |
| **Advanced** | [`course/he-advanced/docs/course-outline.md`](course/he-advanced/docs/course-outline.md) | Devs / power users; worktrees, MCP matrix, deploy, team | [`course/he-advanced/scripts/`](course/he-advanced/scripts/), [`course/he-advanced/prompts/`](course/he-advanced/prompts/), [`course/he-advanced/captions/`](course/he-advanced/captions/) |

**Overlap map (beginner ↔ advanced):** [`course/he-beginner/docs/cross-track-overlap.md`](course/he-beginner/docs/cross-track-overlap.md)

---

## What’s inside

| Area | Path | What you get |
| --- | --- | --- |
| **Beginner course map** | [`course/he-beginner/docs/course-outline.md`](course/he-beginner/docs/course-outline.md) | 13 lessons (B01–B13), arcs, outcomes |
| **Beginner lesson assets** | [`course/he-beginner/scripts/`](course/he-beginner/scripts/), [`course/he-beginner/prompts/`](course/he-beginner/prompts/), [`course/he-beginner/captions/`](course/he-beginner/captions/) | Same pattern as advanced: script + `.prompt.txt` + `.he.srt` |
| **Advanced course map** | [`course/he-advanced/docs/course-outline.md`](course/he-advanced/docs/course-outline.md) | 14 lessons, arcs, outcomes |
| **Recording & TTS** | [`course/he-advanced/docs/recording-and-elevenlabs-guide.md`](course/he-advanced/docs/recording-and-elevenlabs-guide.md) | Screen capture, ElevenLabs, action items (shared) |
| **Terminology** | [`course/he-advanced/docs/hebrew-tts-glossary.md`](course/he-advanced/docs/hebrew-tts-glossary.md) | Consistent Hebrew / English terms (shared) |
| **Advanced lesson scripts** | [`course/he-advanced/scripts/`](course/he-advanced/scripts/) | Scene lists, prompts, recording notes |
| **Advanced prompts** | [`course/he-advanced/prompts/`](course/he-advanced/prompts/) | Copy-paste assets per lesson |
| **Advanced captions** | [`course/he-advanced/captions/`](course/he-advanced/captions/) | Hebrew `.srt` per lesson |
| **Model routing** | [`AGENTS.md`](AGENTS.md) | Cursor model hints for this repo |
| **Shared templates** | [`course/shared/`](course/shared/) | Briefs, production pipeline, localization |

---

## Repository layout

```text
cursor_course/
├── AGENTS.md
├── README.md
└── course/
    ├── he-advanced/           # Advanced track (Hebrew)
    │   ├── captions/          # *.he.srt (15 lessons)
    │   ├── docs/              # outline + production guides
    │   ├── prompts/           # one prompt file per lesson (+ extras)
    │   └── scripts/           # Script Master per lesson
    ├── he-beginner/           # Beginner track (Hebrew)
    │   ├── captions/          # B01–B13 *.he.srt
    │   ├── docs/              # course-outline, cross-track overlap
    │   ├── prompts/
    │   └── scripts/
    └── shared/
        ├── localization/
        ├── production/
        └── templates/
```

---

## Lesson index — beginner track (B01–B13)

Full table with Hebrew titles: [`course/he-beginner/README.md`](course/he-beginner/README.md).

---

## Lesson index — advanced track (quick jump)

| # | Script | Captions | Prompt |
| --- | --- | --- | --- |
| 01 | [`01-intro-and-outcomes.md`](course/he-advanced/scripts/01-intro-and-outcomes.md) | [`01-intro-and-outcomes.he.srt`](course/he-advanced/captions/01-intro-and-outcomes.he.srt) | [`01-intro-and-outcomes.prompt.txt`](course/he-advanced/prompts/01-intro-and-outcomes.prompt.txt) |
| 02 | [`02-installation-mac-windows.md`](course/he-advanced/scripts/02-installation-mac-windows.md) | [`02-installation-mac-windows.he.srt`](course/he-advanced/captions/02-installation-mac-windows.he.srt) | [`02-installation-mac-windows.prompt.txt`](course/he-advanced/prompts/02-installation-mac-windows.prompt.txt) |
| 03 | [`03-signup-and-subscription.md`](course/he-advanced/scripts/03-signup-and-subscription.md) | [`03-signup-and-subscription.he.srt`](course/he-advanced/captions/03-signup-and-subscription.he.srt) | [`03-signup-and-subscription.prompt.txt`](course/he-advanced/prompts/03-signup-and-subscription.prompt.txt) |
| 04 | [`04-model-strategy-and-pricing.md`](course/he-advanced/scripts/04-model-strategy-and-pricing.md) | [`04-model-strategy-and-pricing.he.srt`](course/he-advanced/captions/04-model-strategy-and-pricing.he.srt) | [`04-model-strategy-and-pricing.prompt.txt`](course/he-advanced/prompts/04-model-strategy-and-pricing.prompt.txt) |
| 04b | [`04b-context-management.md`](course/he-advanced/scripts/04b-context-management.md) | [`04b-context-management.he.srt`](course/he-advanced/captions/04b-context-management.he.srt) | [`04b-context-management.prompt.txt`](course/he-advanced/prompts/04b-context-management.prompt.txt) |
| 06 (extras) | — | — | [`06-install-recommended-extensions.prompt.txt`](course/he-advanced/prompts/06-install-recommended-extensions.prompt.txt) — bulk-install all extensions from lesson 06 |
| 05–14 | [`course/he-advanced/scripts/`](course/he-advanced/scripts/) | [`course/he-advanced/captions/`](course/he-advanced/captions/) | [`course/he-advanced/prompts/`](course/he-advanced/prompts/) |

---

## Suggested workflow

### Advanced track

1. Open [`course/he-advanced/docs/course-outline.md`](course/he-advanced/docs/course-outline.md) and pick a lesson.
2. Record from the matching [`course/he-advanced/scripts/`](course/he-advanced/scripts/) **Script Master** (scenes + narration).
3. Export TTS using [`course/he-advanced/docs/recording-and-elevenlabs-guide.md`](course/he-advanced/docs/recording-and-elevenlabs-guide.md).
4. Align or tweak [`course/he-advanced/captions/*.he.srt`](course/he-advanced/captions/) to the final edit (timings follow scene blocks; extend the last cue to ~2s before lesson end).
5. Before publish, run through [`course/shared/production/publish-qa-checklist.md`](course/shared/production/publish-qa-checklist.md).

### Beginner track

1. Follow [`course/he-beginner/docs/course-outline.md`](course/he-beginner/docs/course-outline.md) (B01–B13) and the index in [`course/he-beginner/README.md`](course/he-beginner/README.md).
2. Record from [`course/he-beginner/scripts/`](course/he-beginner/scripts/) **Script Masters**; use matching [`prompts/*.prompt.txt`](course/he-beginner/prompts/) in demos.
3. Align [`course/he-beginner/captions/*.he.srt`](course/he-beginner/captions/) after picture lock; reuse recording/TTS guide and glossary from `course/he-advanced/docs/`.

---

## Notes

- Captions are **summary subtitles** (not full verbatim transcripts), timed to approximate scene blocks; adjust after picture lock.
- Pricing and UI change—scripts include “as of recording” disclaimers; verify before teaching.

### Closing

Hebrew-first delivery, structured for localization when you add more languages.
