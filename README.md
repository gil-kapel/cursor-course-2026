# Cursor Course · Hebrew-first package

Scripts, prompts, captions, and production docs for a practical Cursor course.

[![Lessons](https://img.shields.io/badge/lessons-15-2d5a4a?style=flat-square)](course/he/docs/course-outline.md)
[![Language](https://img.shields.io/badge/content-Hebrew-5a7d6a?style=flat-square)](course/he/scripts/)
[![Repo](https://img.shields.io/badge/repo-cursor__course-8b9dc9?style=flat-square)](#repository-layout)

---

## What’s inside

| Area | Path | What you get |
| --- | --- | --- |
| **Course map** | [`course/he/docs/course-outline.md`](course/he/docs/course-outline.md) | 15 lessons, arcs, outcomes |
| **Recording & TTS** | [`course/he/docs/recording-and-elevenlabs-guide.md`](course/he/docs/recording-and-elevenlabs-guide.md) | Screen capture, ElevenLabs, action items |
| **Terminology** | [`course/he/docs/hebrew-tts-glossary.md`](course/he/docs/hebrew-tts-glossary.md) | Consistent Hebrew / English terms |
| **Lesson scripts** | [`course/he/scripts/`](course/he/scripts/) | Scene lists, prompts, recording notes |
| **Prompts** | [`course/he/prompts/`](course/he/prompts/) | Copy-paste assets per lesson |
| **Captions** | [`course/he/captions/`](course/he/captions/) | Hebrew `.srt` per lesson |
| **Model routing** | [`AGENTS.md`](AGENTS.md) | Cursor model hints for this repo |
| **Shared templates** | [`course/shared/`](course/shared/) | Briefs, production pipeline, localization |

---

## Repository layout

```text
cursor_course/
├── AGENTS.md
├── README.md
└── course/
    ├── he/
    │   ├── captions/          # *.he.srt (15 lessons)
    │   ├── docs/              # outline + production guides
    │   ├── prompts/           # one prompt file per lesson
    │   └── scripts/           # Script Master per lesson
    └── shared/
        ├── localization/
        ├── production/
        └── templates/
```

---

## Lesson index (quick jump)

| # | Script | Captions | Prompt |
| --- | --- | --- | --- |
| 01 | [`01-intro-and-outcomes.md`](course/he/scripts/01-intro-and-outcomes.md) | [`01-intro-and-outcomes.he.srt`](course/he/captions/01-intro-and-outcomes.he.srt) | [`01-intro-and-outcomes.prompt.txt`](course/he/prompts/01-intro-and-outcomes.prompt.txt) |
| 02 | [`02-installation-mac-windows.md`](course/he/scripts/02-installation-mac-windows.md) | [`02-installation-mac-windows.he.srt`](course/he/captions/02-installation-mac-windows.he.srt) | [`02-installation-mac-windows.prompt.txt`](course/he/prompts/02-installation-mac-windows.prompt.txt) |
| 03 | [`03-signup-and-subscription.md`](course/he/scripts/03-signup-and-subscription.md) | [`03-signup-and-subscription.he.srt`](course/he/captions/03-signup-and-subscription.he.srt) | [`03-signup-and-subscription.prompt.txt`](course/he/prompts/03-signup-and-subscription.prompt.txt) |
| 04 | [`04-model-strategy-and-pricing.md`](course/he/scripts/04-model-strategy-and-pricing.md) | [`04-model-strategy-and-pricing.he.srt`](course/he/captions/04-model-strategy-and-pricing.he.srt) | [`04-model-strategy-and-pricing.prompt.txt`](course/he/prompts/04-model-strategy-and-pricing.prompt.txt) |
| 04b | [`04b-context-management.md`](course/he/scripts/04b-context-management.md) | [`04b-context-management.he.srt`](course/he/captions/04b-context-management.he.srt) | [`04b-context-management.prompt.txt`](course/he/prompts/04b-context-management.prompt.txt) |
| 05–14 | [`course/he/scripts/`](course/he/scripts/) | [`course/he/captions/`](course/he/captions/) | [`course/he/prompts/`](course/he/prompts/) |

---

## Suggested workflow

1. Open [`course/he/docs/course-outline.md`](course/he/docs/course-outline.md) and pick a lesson.
2. Record from the matching [`course/he/scripts/`](course/he/scripts/) **Script Master** (scenes + narration).
3. Export TTS using [`course/he/docs/recording-and-elevenlabs-guide.md`](course/he/docs/recording-and-elevenlabs-guide.md).
4. Align or tweak [`course/he/captions/*.he.srt`](course/he/captions/) to the final edit (timings follow scene blocks; extend the last cue to ~2s before lesson end).
5. Before publish, run through [`course/shared/production/publish-qa-checklist.md`](course/shared/production/publish-qa-checklist.md).

---

## Notes

- Captions are **summary subtitles** (not full verbatim transcripts), timed to approximate scene blocks; adjust after picture lock.
- Pricing and UI change—scripts include “as of recording” disclaimers; verify before teaching.

### Closing

Hebrew-first delivery, structured for localization when you add more languages.
