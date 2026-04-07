# שיעור 2.11 — על המסך

---

## 00:00 – 01:00

Cursor פתוח. `docs/prd.md` פתוח — זום על Acceptance Criteria.
Overlay: **Step 7: QA Agent**.

## 01:00 – 02:30

פתיחת Agent עם `@docs/prd.md` והקוד הנוכחי.

פרומפט:

> אתה QA Agent. מטרה: תוכנית בדיקות + טסט אוטומטי אחד. קלט: acceptance criteria מ-prd + הקוד. פלט: happy path, edge cases, failure modes. שמור ל-`docs/test-plan.md`, ואז כתוב טסט אחד שמכסה מקרה קריטי.

הסוכן מייצר תוכנית. זום על: "Empty state check", "Missing title validation", "Delete last task behavior".

## 02:30 – 03:45

פתיחת `docs/test-plan.md`.
גלילה על Test Cases.
זום על "Edge cases" ו-"Failure modes".

## 03:45 – 05:00

הסוכן כותב טסט (למשל `tests/task.test.ts`).
הרצה בטרמינל. ירוק — מצוין.
(אופציונלי: הדגמת כשל מכוון ותיקונו.)

## 05:00 – 06:00

Overlay:
- `docs/test-plan.md` נשמר
- טסט אוטומטי אחד עובר

כותרת סיום: **Lesson 2.12 — Debug Agent**.
