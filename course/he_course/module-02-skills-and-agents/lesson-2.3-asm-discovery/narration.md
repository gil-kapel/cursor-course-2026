# Lesson 2.3 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

הגענו לשלב שבו אנחנו לא רק מדברים על Skills, אלא ממש מתקינים אחד לפרויקט. הכלי שמנהל את זה הוא **ASM** - Agent Skill Manager.

והפעם אנחנו עושים משהו חשוב מאוד: מתקינים Skill אמיתי לשיעור הבא. לא דוגמה כללית, אלא את הסקיל של סוכן המוצר, כדי ש־2.4 יתחיל כבר מתוך סביבת עבודה מוכנה.

כלומר, בשיעור הזה חייב להיות ברור גם **מה** קורה, גם **איך** זה קורה, וגם **איפה** רואים שזה באמת הותקן.

---

## 01:00 – 02:30

הצעד הראשון הוא לבקש מה־Agent לבדוק את מצב ה־ASM בפרויקט. האם יש `asm.toml`? האם ASM כבר מאותחל? האם יש משהו שחסר לפני שאפשר להתקין Skill?

אם חסר `asm.toml`, זה אומר שעדיין אין שכבת ASM מסודרת בפרויקט. אם הוא קיים, סימן שיש לנו בסיס לעבוד ממנו.

כאן חשוב לעצור על ההסבר: `asm.toml` הוא קובץ ההגדרה של ASM. אחר כך נראה גם את `.asm/main_asm.md`, שמציג את התמונה ש־ASM מנהל, ובסוף נבדוק שהסקיל עצמו הגיע אל `.cursor/skills`.

---

## 02:30 – 04:00

עכשיו אנחנו מבקשים מה־Agent לבחור Skill אחד קונקרטי לשיעור הבא. בדמו הזה אנחנו רוצים להתקין את `product-prd-agent`, כי זה בדיוק הסקיל שנשתמש בו בשיעור הבא.

ה־Agent לא רק בוחר - הוא גם מסביר למה. הוא משווה מול טבלת הדירוג, מסביר למה זה הסקיל הנכון, ואז מפעיל את זרימת ה־ASM כדי להוסיף אותו לפרויקט.

זה המקום שבו חייבים להיות ברורים במלל: ASM הוא מה שמכניס את הסקיל לסביבת העבודה. ובסוף הזרימה, אנחנו אמורים לראות את הסקיל עצמו בתוך `.cursor/skills/product-prd-agent/SKILL.md`.

---

## 04:00 – 05:00

ועכשיו מגיע שלב האימות. קודם בודקים את `asm.toml`. אחר כך פותחים את `.asm/main_asm.md` ורואים שה־ASM מכיר את מה שמותקן. ואז פותחים את `.cursor/skills/product-prd-agent/SKILL.md`, ושם רואים את הסקיל עצמו במקום שבו Cursor באמת יכול להשתמש בו.

אם שלושת הדברים האלו ברורים לכם, הבנתם את הסיפור המלא: ASM לא רק "עשה משהו ברקע". הוא שינה את סביבת העבודה שלכם בצורה שאפשר לראות, להסביר, ולהשתמש בה מיד.

בשיעור הבא, 2.4, נשתמש בדיוק בסקיל שהתקנו עכשיו כדי להפוך רעיון גולמי למסמך `docs/prd.md`.

נתראה שם.

---

## Appendix — English prompt (ASM install for next lesson)

```text
You are my ASM guide inside Cursor. Goal: install the product PRD skill for the next lesson through an agent-led ASM workflow. Context: first inspect whether `asm.toml` exists and whether ASM looks initialized, then recommend the right product skill for the next lesson. Output: 1) current ASM readiness, 2) why `product-prd-agent` is or is not the right choice, 3) perform the install flow if the project is ready, and 4) tell me to verify `asm.toml`, `.asm/main_asm.md`, and `.cursor/skills/product-prd-agent/SKILL.md`. Constraints: explain what you are doing, do not skip the setup check, and use the resulting files as the main proof that installation worked.
```
