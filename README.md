# Cursor Course

Hebrew-first Cursor curriculum, lesson production files, and a small **Next.js** learner UI: **`/`** התחלה מהירה (setup + downloads), **`/course`** נגן שיעורים עם פרומפטים ורשימות משימות.

[![Course tree](https://img.shields.io/badge/course-he__course-5a7d6a?style=flat-square)](course/he_course/README.md)
[![Language](https://img.shields.io/badge/content-Hebrew-5a7d6a?style=flat-square)](course/he_course/)
[![Repo](https://img.shields.io/badge/repo-cursor__course-8b9dc9?style=flat-square)](#repository-layout)

---

## What’s in the repo

| Area | Path | What you get |
| --- | --- | --- |
| **Hebrew curriculum** | [`course/he_course/README.md`](course/he_course/README.md) | Module/lesson index, Module 2 agent skills, `on-screen.md` / `narration.md` per lesson |
| **Web app** | [`src/`](src/) | Static-export Next app; playlist and setup UI driven by [`src/data/courseData.ts`](src/data/courseData.ts) |
| **Module 2 skills in the project** | [`scripts/sync_module02_project_skills.py`](scripts/sync_module02_project_skills.py) | Symlinks lesson skills into `.cursor/skills` |
| **Vendor upstream skills** | [`scripts/bundle_module02_skills.py`](scripts/bundle_module02_skills.py) | Refreshes `bundled-skills/` under each Module 2 lesson |
| **Shared production** | [`course/shared/`](course/shared/) | Templates, localization notes, publish QA |

---

## Repository layout

```text
cursor_course/
├── .github/workflows/         # e.g. deploy to GitHub Pages
├── README.md
├── src/                       # Next.js UI
├── scripts/                   # Module 2 skill sync + bundle
├── .env.example               # Optional: base path, public repo URLs
└── course/
    ├── he_course/             # Canonical Hebrew course (modules, lessons, skills)
    └── shared/                # Cross-course templates and production docs
```

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for fast start, [http://localhost:3000/course](http://localhost:3000/course) for the playlist.

---

## GitHub Pages (static export)

The app uses **`next build`** with static `out/` (see [`next.config.ts`](next.config.ts): `output: 'export'`, optional `NEXT_PUBLIC_BASE_PATH`).

1. On GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Push to **`main`** (or run the deploy workflow manually).
3. Published URL: **`https://<owner>.github.io/<repository>/`**. CI can set `NEXT_PUBLIC_BASE_PATH` to the repo name so `_next` and internal routes work under a project URL.

Local preview matching Pages: `NEXT_PUBLIC_BASE_PATH=<repo-name> npm run build`, then serve `out/` (for example `npx serve out`).

---

## Notes

- Lesson copy, beatsheets, and skill paths under **`course/he_course/`** are the source of truth referenced by app data and scripts.
- Pricing and Cursor UI change—verify before teaching.
