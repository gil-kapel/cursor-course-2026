# שיעור 2.9 — על המסך

---

## 00:00 – 01:00

Cursor פתוח. `docs/implementation-plan.md` פתוח.
זום על Slice 1: רשימת משימות + empty state.
Overlay: **Implement only Slice 1**.

## 01:00 – 02:15

פתיחת Agent mode (או Composer ב-`Cmd+I`).
מצרפים את `@docs/implementation-plan.md` ומסמכי רקע.

פרומפט:

> אתה Builder Agent. מטרה: לממש רק Slice 1 מהתוכנית. קלט: implementation-plan + prd + architecture + ui-plan. פלט: diff קטן + verification. אל תיגע ב-Slice 2.

## 02:15 – 03:30

הסוכן מציע diff.
מעבר על הקבצים: האם הכל שייך ל-Slice 1?
אם יש סטייה (למשל לוגיקת מחיקה שלא תוכננה) — דוחים.
Accept רק את מה ששייך.

## 03:30 – 04:45

הרצה ב-preview / דפדפן.
בדיקה: רשימה ריקה מוצגת? CTA "Create first task" עובד? EmptyState נראה נכון?

## 04:45 – 06:00

חזרה ל-`docs/implementation-plan.md`.
בדיקה: מה הושלם, מה נשאר.

Overlay:
- Slice 1 ממומש
- Diff נשאר בגבול התוכנית
- חוזרים לתוכנית לפני Slice 2

כותרת סיום: **Lesson 2.10 — Code Review Agent**.
