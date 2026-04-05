# Lesson 2.4 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 00:50

עכשיו כשיש לנו Rules, Skills ו־Agents, הגיע הזמן להפעיל את הסוכן הראשון בשרשרת: **סוכן המוצר**.

הטעות הכי גדולה שרוב האנשים עושים עם AI היא לבקש "תבנה לי אפליקציה" ולקוות לטוב. זה אולי נשמע מהיר, אבל זו התחלה מעורפלת שמכריחה את המודל לנחש.

התפקיד של סוכן המוצר הוא לא לכתוב קוד. התפקיד שלו הוא לקחת רעיון גולמי ולהפוך אותו למסמך עבודה ברור.

---

## 00:50 – 02:30

בפועל, אנחנו פותחים את משטח ה־Agent ונותנים לו תפקיד ברור: להפוך רעיון למסמך PRD. לא רק פיצ'רים, אלא גם בעיה, משתמשים, גבולות גזרה, וקריטריוני קבלה.

שימו לב לעבודה הנכונה: במקום להתחיל מיד בתשובה ארוכה, אנחנו מבקשים קודם שאלות הבהרה. אם הסוכן לא שואל שאלות, הוא כנראה ממלא חורים בעצמו - וזה סימן לעצור ולהדק את הבקשה.

PRD טוב עוזר לנו להחליט לא רק מה כן בונים, אלא גם מה לא נכנס עכשיו.

---

## 02:30 – 03:45

עוד כלל חשוב: לא משאירים את ה־PRD בתוך השיחה. אנחנו מבקשים לשמור אותו לקובץ `docs/prd.md`.

למה דווקא קובץ? כי זה הופך את התכנון שלנו לחפץ אמיתי בפרויקט. בשיעורים הבאים נוכל לצרף אותו עם `@docs/prd.md`, וכל Agent אחר יקבל בדיוק את אותו מקור אמת.

אם בסוף השיעור יש לכם `docs/prd.md`, כבר יש לכם תוצר שאפשר להצביע עליו.

---

## 03:45 – 05:15

PRD טוב לא נגמר רק ב"חזון". הוא צריך גם לחשוף סיכונים ושאלות פתוחות. למשל: מי רשאי למחוק משימה? מה קורה אם יש כמה משתמשים על אותו פריט? אילו דברים נשארים מחוץ לגרסה הראשונה?

זה החלק שבו אנחנו חוסכים לעצמנו בלבול יקר בהמשך. עדיף לפתור שאלות כאלו בטקסט, לפני שנוגעים בארכיטקטורה ובקוד.

---

## 05:15 – 06:15

לסיכום: התחלנו מרעיון, השתמשנו ב־Agent עם Skill נכון, וסיימנו עם `docs/prd.md`.

הבדיקה שלכם פשוטה: פתחו את הקובץ וודאו שיש בו בעיה, משתמשים, scope, flows, acceptance criteria, וגם risks או open questions.

בשיעור הבא, 2.5, ניקח את `docs/prd.md` ונעביר אותו לסוכן הארכיטקטורה כדי להחליט איך הולכים לבנות את המוצר הזה בפועל.

---

## Appendix — English prompt (start PRD)

```text
You are a product requirements agent. Goal: turn my rough app idea into a usable PRD. Context: I want a small task management app for teams. Output: markdown saved to `docs/prd.md` with problem, users, scope, key flows, acceptance criteria, and risks/open questions. Constraints: ask me 3-5 clarifying questions before drafting; keep V1 scope tight and explicit.
```
