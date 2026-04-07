# שיעור 2.5 — על המסך (הוראות צילום)

**המשך הדוגמה:** אפליקציית ניהול משימות. בשיעור הזה — מ-PRD לארכיטקטורה, שמור ב-`docs/architecture.md`. צילום מסך חי.

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## הכנה לפני ההקלטה

- `docs/prd.md` קיים מ-2.4
- סקיל `tech-lead-architecture-agent` מותקן ב-`.cursor/skills/`

---

## 00:00 – 00:50 · PRD כקלט

**מה על המסך:** Split view — `docs/prd.md` בצד אחד, Agent בצד שני.

**פעולה:** הקלדת `@docs/prd.md` בשורת הפרומפט.

**Overlay** (4 שניות): "Tech Lead — מ-PRD לארכיטקטורה"

---

## 00:50 – 02:10 · הסוכן מחליט

**הקלדה (פרומפט):**

```text
You are a tech lead architecture agent. Goal: turn my PRD into a practical technical plan. Context: check @docs/prd.md. Output: save docs/architecture.md with tech stack, folder structure, data model notes, API boundaries, and implementation slices. Constraints: be explicit, prefer a simple stack, and end with "what is missing for slice 1?".
```

Enter. **זום** על החלטות: סטאק, מבנה תיקיות, מה לא בונים ב-V1.

---

## 02:10 – 03:30 · הקובץ נוצר

**מה על המסך:** `docs/architecture.md` נפתח.

**זום** על סעיפים: Stack, Data Model, Folder Structure, Implementation Slices.

**הדגמה:** `@docs/architecture.md` בשיחה חדשה — להראות שאפשר לצרף גם PRD וגם ארכיטקטורה ביחד.

**Overlay** (3 שניות): "architecture.md = הסכם טכני לכל הסוכנים הבאים"

---

## 03:30 – 04:45 · מה חסר לפרוסה הראשונה?

**הקלדה:**

```text
What's missing for Slice 1? Give me specific file names and install order.
```

Enter. **זום** על רשימה קונקרטית: קבצים, חבילות, סדר.

---

## 04:45 – 05:45 · סיכום

**מה על המסך:** Explorer — תיקיית `docs/` עם `prd.md` ו-`architecture.md`.

**Overlay** (5 שניות):

```text
Artifact: docs/architecture.md
בדיקה: סטאק + תיקיות + גבולות + פרוסות מימוש
הבא: 2.6 — UX עם @docs/prd.md + @docs/architecture.md
```

סגירה.

---

## הערות הפקה

- הסוכן חייב **לבחור** סטאק, לא לתת רשימת אופציות. אם נותן אופציות — להדק.
- `docs/architecture.md` חייב להישמר כקובץ.
- שאלת "מה חסר לפרוסה הראשונה?" חייבת להחזיר תשובה קונקרטית, לא כללית.
