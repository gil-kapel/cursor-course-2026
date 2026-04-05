# Lesson 2.1 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

ברוכים הבאים למודול השני. עד עכשיו עבדתם עם Cursor כמו עם עוזר חכם אחד. מהשיעור הזה והלאה אנחנו משנים גישה: לא "צ'אט שעושה הכל", אלא סביבת Agent שבה כל מומחה מקבל תפקיד ברור.

כדי שצוות כזה יעבוד טוב, צריך להכיר שני סוגים שונים של הוראות: **Rules** ו־**Skills**. אם לא נבין את ההבדל ביניהם, נתחיל לערבב בין חוקי פרויקט קבועים לבין תהליכי עבודה לפי צורך.

תחשבו על זה כך: ה־Rules הם חוקי הבית של הפרויקט. ה־Skills הם ספרי העבודה שהסוכן פותח רק כשהמשימה באמת דורשת אותם.

---

## 01:00 – 02:30

בואו נתחיל מהראשון. **Rule** הוא הנחיה רחבה שחלה על כל הפרויקט או על סוג קבצים מסוים. כאן נגדיר סטנדרטים כמו מבנה קוד, ספריות מועדפות, או הנחיות כתיבה.

למשל: "אנחנו משתמשים ב־Tailwind", או "פונקציות ב־TypeScript צריכות להיות עם טיפוסים ברורים". בדרך כלל הם יושבים ב־`.cursor/rules` בתוך קבצי `mdc`, והערך שלהם הוא עקביות. הסוכן לא צריך שנזכיר לו את אותו סט חוקים בכל משימה מחדש.

לעומת זאת, **Skill** לא אומר לסוכן "איך להתנהג בפרויקט", אלא "איך לבצע סוג מסוים של עבודה". הוא יכול להוסיף ידע שחסר למודל, או להכתיב workflow מסודר כמו כתיבת PRD, תכנון ארכיטקטורה, סקירת אבטחה, או דיבאג שיטתי.

---

## 02:30 – 04:00

עכשיו תסתכלו על מבנה הקבצים. לרוב תראו `.cursor/rules` מצד אחד ו־`.cursor/skills` מצד שני. בתוך כל תיקיית Skill תמצאו בדרך כלל `SKILL.md`, ובתוכו תיאור, טריגרים, workflow, ולעיתים גם assets או scripts.

ההבדל הזה חשוב גם ברמת העלות וגם ברמת הפוקוס. אנחנו לא רוצים שה־Agent יטען כל Skill בכל משימה. לכן לכל Skill יש תיאור קצר שאומר מתי כדאי להשתמש בו. זו דרך לשמור על קונטקסט נקי, מדויק, וגם חסכוני יותר.

בסוף השיעור הזה אתם אמורים לדעת לענות על שאלה פשוטה: מה תמיד פעיל בפרויקט, ומה נשלף רק כשיש משימה מתאימה.

---

## 04:00 – 05:30

לסיכום:
**Rule** הוא ברירת מחדל של הפרויקט.
**Skill** הוא מומחיות שנכנסת לפעולה כשיש צורך.

הפעולה שלכם אחרי השיעור פשוטה: לפתוח את הפרויקט, לבדוק מה יש ב־`.cursor/rules` וב־`.cursor/skills`, ולבקש מה־Agent לסכם לכם מה הוא מצא. אם הוא מזהה גם קובץ legacy כמו `.cursorrules`, זה כבר בונוס טוב.

בשיעור הבא, 2.2, נעבור מהמבנה על הדיסק לניהול צוות אמיתי בתוך Cursor: איך יוצרים Agents נפרדים, למה לכל Agent צריך תפקיד ברור, ומתי פותחים קונטקסט חדש במקום להמשיך שיחה ישנה.

נתראה שם.

---

## Appendix — English prompt (check project context)

```text
You are a Cursor workspace reviewer. Goal: inspect my project for active Rules and installed Skills. Context: check `.cursor/rules`, `.cursor/skills`, and any legacy `.cursorrules` file if it exists. Output: a short summary with 1) active project rules, 2) available skills, and 3) anything outdated or missing. Constraints: do not change files; keep it concise and practical.
```
