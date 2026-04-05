# Lesson 4.2 — Remote DB with Supabase

Hebrew-first lesson assets; this index is in English to match the course README.

## Files in this folder

| File | Purpose |
|------|---------|
| [on-screen.md](on-screen.md) | Screen recording beat sheet (timestamps + visual directions) |
| [narration.md](narration.md) | Hebrew voiceover copy for ElevenLabs (aligned to the same timestamps) |

## Syllabus topic

How to move a small, working **local data model** into **Supabase** without turning the lesson into cloud theater: keep the same schema, create the hosted tables, wire environment variables safely, and add the minimum practical **RLS** needed for a first real app.

## Practical outcomes

- Translate a local SQLite-style schema into hosted Supabase tables.
- Set project environment variables without leaking secrets into the repo.
- Connect the app to Supabase and prove that one read and one write work.
- Understand what `anon` vs service credentials mean at a practical level.
- Add a simple first-pass RLS policy instead of leaving the database open.

## Next

- [Lesson 4.3 — GitHub prep](../lesson-4.2-github-prep/README.md)
