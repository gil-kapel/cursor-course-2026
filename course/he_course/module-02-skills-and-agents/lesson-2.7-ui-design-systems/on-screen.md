# שיעור 2.7 — על המסך (הוראות צילום)

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## 00:00 – 01:00

Cursor פתוח.
פותחים את הקובץ:
`course/he_course/module-02-skills-and-agents/lesson-2.7-ui-design-systems/ui-design-systems-agent/SKILL.md`

העכבר מדגיש שזה ה־repo skill של השיעור.
אחר כך פתיחת ה־Agent ובקשה לעזור לסנכרן את skill של הקורס אל תוך `.cursor/skills`.
כיתוב overlay: **Step 1: sync the course UI skill**.

---

## 01:00 – 02:15

ה־Agent מסביר שצריך להריץ:
`uv run scripts/sync_module02_project_skills.py`

מראים את ההרצה.
אחר כך פותחים `.cursor/skills/ui-design-systems-agent/SKILL.md`.
זום קצר כדי להראות שה־skill באמת סונכרן למקום שבו Cursor יכול להשתמש בו.

הערת צילום: הקריין מסביר שהאימות חשוב, כי כל המשך השיעור בנוי על השימוש בסקיל הזה.

---

## 02:15 – 03:30

בטאב אחד `docs/ux-flows.md`, בטאב שני `docs/architecture.md`.
הדגשת הזרימה של "package selection -> payment".
פתיחת ה־Agent עם שני הקבצים.
הסוכן שואל שאלות משלימות על:
- visual style
- trust cues
- mobile behavior
- CTA placement

---

## 03:30 – 04:45

אחרי סבב ראשון של שאלות, רואים את הסוכן מבקש:
go to Dribbble dashboard search, choose one favorite design, and upload it here.

מעבר קצר לדפדפן על [Dribbble dashboard search](https://dribbble.com/search/dashboard).
בחירת reference אחד רלוונטי.
חזרה ל־Cursor והעלאת התמונה או הקישור לתוך השיחה.

אחר כך הסוכן יוצר את `docs/ui-plan.md`.
זום על סעיפים של:
- components
- states
- accessibility
- visual direction
- Stitch-ready prompt

זום על החלק שבו הסוכן מסביר מה נלקח מה־reference:
- hierarchy
- spacing
- trust cues
- payment clarity

---

## 04:45 – 06:00

מעבר ל־Stitch באתר.
העתקה של ה־prompt שהסוכן חידד.
הדבקה לתוך Stitch יחד עם ההשראה.
צפייה ב־Stitch מייצר draft למסך בחירת חבילה עם Side Panel לתשלום.

אחר כך מציגים הורדה של קבצים או export רלוונטי מ־Stitch.
חזרה ל־Cursor.
פתיחת התיקייה שאליה החזרנו את חומרי העיצוב.

Split view:
- מצד אחד `.cursor/skills/ui-design-systems-agent/SKILL.md`
- מצד שני `docs/ui-plan.md`
- אחר כך חומרי Stitch שחזרו לפרויקט

Overlay מסכם:
- `Sync the repo skill`
- `Verify it in .cursor/skills`
- `Let that skill lead the conversation`
- `Upload a Dribbble reference`
- `Run a stronger Stitch prompt`
- `Bring the result back to Cursor`

כותרת סיום: **Lesson 2.8 — Plan Agent / Slice Planning**.
