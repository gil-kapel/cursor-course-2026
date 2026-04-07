# שיעור 2.4 — על המסך (הוראות צילום)

**דוגמה אחת לאורך כל המודול:** אפליקציית ניהול משימות לצוות קטן. בשיעור הזה — מרעיון גולמי ל-PRD שמור בקובץ. צילום מסך חי בלבד.

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## הכנה לפני ההקלטה

- Cursor פתוח על הפרויקט
- `product-prd-agent` מותקן ב-`.cursor/skills/` (מ-2.3)
- תיקיית `docs/` לא קיימת עדיין (הסוכן ייצור אותה)

---

## 00:00 – 00:50 · פתיחה — מה הותקן ומה הרעיון

**מה על המסך:** Cursor. העכבר פותח `.cursor/skills/product-prd-agent/SKILL.md`.

**פעולה:** זום קצר על שם הסקיל — רק להראות שהוא שם מ-2.3.

**Overlay** (4 שניות): "סוכן מוצר — מרעיון ל-PRD"

---

## 00:50 – 02:30 · הפעלת סוכן המוצר

**מצב:** `Agent`.

**הקלדה (פרומפט):**

```text
You are the installed product-prd-agent. Goal: turn my rough app idea into a usable PRD. Context: I want a small task management app for teams, and I want the result saved in the project. Output: markdown saved to docs/prd.md with problem, users, scope, key flows, acceptance criteria, and risks/open questions. Constraints: ask me 3-5 clarifying questions before drafting; keep V1 scope tight and explicit.
```

Enter. **זום** על הסוכן שואל שאלות הבהרה.

**תשובות (דוגמה):** צוות 3-5 אנשים. משימות פשוטות — כותרת, תיאור, סטטוס. V1 בלי התראות ובלי אינטגרציות.

**זום** על הסוכן מייצר PRD — כותרות: Problem, Users, Scope, User Flow, Acceptance Criteria.

---

## 02:30 – 03:45 · הקובץ נוצר

**מה על המסך:** הסוכן יוצר `docs/prd.md`. פתיחת הקובץ ב-Explorer.

**זום** על מבנה ה-Markdown: סעיפים, זרימה, קריטריוני קבלה.

**הדגמה:** הקלדת `@docs/prd.md` בשיחה חדשה — להראות איך מושכים את ההקשר הלאה לסוכנים אחרים.

**Overlay** (3 שניות): "PRD = קובץ בפרויקט, לא הודעה בצ'אט"

---

## 03:45 – 05:15 · הוספת סיכונים ושאלות פתוחות

**הקלדה:**

```text
הוסף סעיף סיכונים ושאלות פתוחות. למשל: מי רשאי למחוק משימה? מה קורה כשיש שני אנשים על אותו פריט?
```

Enter. **זום** על `docs/prd.md` מתעדכן — סעיף Risks ו-Open Questions.

**Overlay** (3 שניות): "שאלות עכשיו = פחות בלבול אחר כך"

---

## 05:15 – 06:00 · סיכום

**מה על המסך:** Split view — `docs/prd.md` בצד אחד.

**Overlay** (5 שניות):

```text
Artifact: docs/prd.md
בדיקה: בעיה, משתמשים, היקף, זרימה, AC, סיכונים
הבא: 2.5 — ארכיטקטורה עם @docs/prd.md
```

סגירה.

---

## הערות הפקה

- הרעיון (task management) חוזר בכל שיעורי המודול — חשוב שה-PRD יהיה קונקרטי מספיק כדי שסוכנים הבאים יוכלו להמשיך ממנו.
- הסוכן חייב **לשאול שאלות** לפני כתיבה — אם לא, זה סימן ל-skill חלש.
- `docs/prd.md` חייב להישמר כקובץ, לא רק להופיע בצ'אט.
