# Lesson 2.4 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 00:50

בשיעור הקודם התקנו Skill אמיתי עם ASM. עכשיו אנחנו משתמשים בו.

לפני שמתחילים לכתוב את הפרומפט, פותחים לרגע את `.cursor/skills/product-prd-agent/SKILL.md`. זה רגע חשוב, כי הוא מחבר בין שיעור ההתקנה לשיעור השימוש. עכשיו ברור מה הותקן, איפה הוא יושב, ולמה ה־Agent יודע לעבוד בתור סוכן מוצר.

מכאן אפשר לעבור לרעיון עצמו.

---

## 00:50 – 02:30

עכשיו הגיע הזמן להפעיל את **סוכן המוצר**. הטעות הכי גדולה שרוב האנשים עושים עם AI היא לבקש "תבנה לי אפליקציה" ולקוות לטוב. זו התחלה עמומה שמכריחה את המודל לנחש.

התפקיד של סוכן המוצר הוא לא לכתוב קוד. התפקיד שלו הוא לקחת רעיון גולמי ולהפוך אותו למסמך עבודה ברור: מה הבעיה, מי המשתמשים, מה בתוך הגרסה הראשונה, ומה עדיין בחוץ.

שימו לב לעבודה הנכונה: במקום להתחיל ישר מתשובה ארוכה, אנחנו מבקשים קודם שאלות הבהרה. אם הסוכן לא שואל שאלות, הוא כנראה ממלא חורים לבד - וזה סימן לעצור ולהדק את הבקשה.

---

## 02:30 – 03:45

עוד כלל חשוב: לא משאירים את ה־PRD בתוך השיחה. אנחנו מבקשים לשמור אותו לקובץ `docs/prd.md`.

למה דווקא קובץ? כי זה הופך את התכנון שלנו לחפץ אמיתי בפרויקט. בשיעורים הבאים נוכל לצרף אותו עם `@docs/prd.md`, וכל Agent אחר יקבל בדיוק את אותו מקור אמת.

אם בסוף השיעור יש לכם גם את ה־Skill המותקן וגם את `docs/prd.md`, החיבור בין 2.3 ל־2.4 באמת נסגר.

---

## 03:45 – 05:15

PRD טוב לא נגמר רק בחזון. הוא צריך גם לחשוף סיכונים ושאלות פתוחות. למשל: מי רשאי למחוק משימה? מה קורה אם יש כמה משתמשים על אותו פריט? אילו דברים נשארים מחוץ לגרסה הראשונה?

זה החלק שבו אנחנו חוסכים לעצמנו בלבול יקר בהמשך. עדיף לפתור שאלות כאלה בטקסט, לפני שנוגעים בארכיטקטורה ובקוד.

---

## 05:15 – 06:00

לסיכום: התחלנו ב־Skill שהותקן בעזרת ASM, השתמשנו בו דרך ה־Agent, וסיימנו עם `docs/prd.md`.

הבדיקה שלכם פשוטה: פתחו את `.cursor/skills/product-prd-agent/SKILL.md`, ואז את `docs/prd.md`, ותוודאו שאתם מבינים גם **איך** הסקיל נכנס לפרויקט וגם **מה** הוא עזר לכם לייצר.

בשיעור הבא, 2.5, ניקח את `docs/prd.md` ונעביר אותו לסוכן הארכיטקטורה כדי להחליט איך בונים את המוצר הזה בפועל.

---

## Appendix — English prompt (start PRD)

```text
You are the installed `product-prd-agent`. Goal: turn my rough app idea into a usable PRD. Context: I want a small task management app for teams, and I want the result saved in the project. Output: markdown saved to `docs/prd.md` with problem, users, scope, key flows, acceptance criteria, and risks/open questions. Constraints: ask me 3-5 clarifying questions before drafting; keep V1 scope tight and explicit.
```
