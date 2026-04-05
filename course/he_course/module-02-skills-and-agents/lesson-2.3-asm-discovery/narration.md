# Lesson 2.3 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

הגענו לשלב שבו אנחנו מכניסים סקילים חדשים לפרויקט. הכלי שמנהל את זה הוא **ASM** - Agent Skill Manager.

אבל שימו לב לשינוי החשוב של השיעור הזה: אנחנו לא עובדים מול ASM בצורה "טרמינל־ראשונה", וגם לא בצורה "הסוכן אומר ואני מקליד". אנחנו עובדים דרך ה־Agent מקצה לקצה.

ה־Agent בודק את המצב, בוחר את הפעולה, מפעיל את הזרימה, ואז אנחנו בודקים את התוצאה דרך הקבצים שנוצרו או התעדכנו.

---

## 01:00 – 02:30

הצעד הראשון הוא לבקש מה־Agent לבדוק את מצב הפרויקט. האם יש `asm.toml`? האם ASM כבר מאותחל? האם יש בסביבה הזו משהו שחסר לפני שממשיכים?

זו נקודה חשובה למתחילים: לא רצים ישר לפקודות. קודם נותנים ל־Agent למפות את המצב, ואז ממשיכים לפי מה שהוא מצא.

אם חסר `asm.toml`, ה־Agent אמור להגיד שהוא צריך להכין את ה־ASM setup קודם. אם הכול מוכן, הוא ממשיך לשלב הבא.

---

## 02:30 – 04:00

עכשיו אנחנו מבקשים מה־Agent למצוא skill מתאים. הוא יכול לבדוק מול ASM, להשוות את התוצאות מול `AGENT_SKILLS.md`, ולהסביר לנו איזה skill באמת שווה להכניס לפרויקט.

המטרה היא לא "להתקין כמה שיותר", אלא לבחור skill אחד טוב, להבין למה הוא מתאים, ורק אז להמשיך.

אחרי הבחירה, ה־Agent מבצע את זרימת ה־ASM, ואם צריך גם יוצר expertise לקבוצה של skills. ההבדל הוא שעכשיו אנחנו לא מנחשים את הזרימה, ולא מנהלים אותה ידנית - אנחנו נותנים ל־Agent להוביל אותה ואז בודקים את התוצאה.

---

## 04:00 – 05:00

הבדיקה שלנו פשוטה: בסוף התהליך אנחנו אמורים לראות כמה קבצים ברורים.

קודם כול `asm.toml`, שהוא קובץ ההגדרה של ASM ברמת הפרויקט.
אחר כך `.asm/main_asm.md`, שבו רואים את תמונת המצב ש־ASM מנהל.
ואז `.cursor/skills`, שם אמור להופיע הסקיל עצמו, בדרך כלל בתוך תיקייה משלו עם `SKILL.md`.

זה בדיוק ההרגל שאנחנו רוצים לבנות: להשתמש ב־Agent כדי להבין, לתכנן, ולהפעיל את הכלים הנכונים, ואז לדעת לבדוק את הקבצים שהשתנו. לא להתחיל מהקלדה עיוורת, אלא מהבנה.

בשיעור הבא, 2.4, ניקח את אותו רעיון של עבודה מודרכת עם Agent ונפעיל את סוכן המוצר כדי להפוך רעיון גולמי למסמך `docs/prd.md`.

נתראה שם.

---

## Appendix — English prompt (ASM through the agent)

```text
You are my ASM guide inside Cursor. Goal: add one useful skill to this project through an agent-led ASM workflow. Context: first inspect whether `asm.toml` exists and whether ASM looks initialized, then compare likely skills against `course/he_course/module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md`. Output: 1) current ASM readiness, 2) the best skill to add and why, 3) perform the ASM steps if the project is ready, and 4) tell me which files I should inspect afterward, including `asm.toml`, `.asm/main_asm.md`, and `.cursor/skills`. Constraints: explain what you are doing before each step, do not assume ASM is initialized, and treat the workspace files as the main verification surface.
```
