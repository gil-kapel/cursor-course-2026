# Lesson 2.3 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

הגענו לשלב שבו אנחנו הופכים את התיאוריה למציאות, ומביאים סקילים חדשים לתוך הפרויקט שלנו. הכלי שבו נשתמש הוא **ASM** - Agent Skill Manager.

חשוב להבין: ASM לא מחליף את Cursor. הוא המנהל שמסדר לנו את ספריית הסקילים על הדיסק, רושם אותם נכון, ומסנכרן אותם כך שה־Agent באמת יוכל להשתמש בהם.

לפני שמתחילים, עוצרים לבדיקה אחת פשוטה: האם יש בפרויקט `asm.toml`? אם לא, לא ממשיכים אוטומטית. מריצים קודם `asm init`, ורק אז עובדים. זו בדיוק דוגמה טובה להרגל בטיחות למתחילים.

---

## 01:00 – 02:30

הצעד הראשון הוא חיפוש. אנחנו משתמשים ב־`asm search` עם שאילתה קונקרטית, לא כללית מדי. למשל "skill creator" או "PRD agent".

אבל לא מסתמכים רק על תוצאות החיפוש. במקביל אנחנו משווים אותן למסמך `AGENT_SKILLS.md` של הקורס. המסמך הזה עוזר לנו להעריך איכות: איזה סקיל באמת מתאים ל־Cursor, איזה מקור אמין, ואיזה סקיל כדאי להכניס לפרויקט שלנו.

המטרה היא לא "להתקין כמה שיותר", אלא לבחור סקיל אחד טוב, שאנחנו באמת מבינים למה הוא נכנס.

---

## 02:30 – 04:00

מצאתם סקיל מתאים? מצוין. עכשיו מתקינים עם `asm add skill`.

אבל כאן מגיע שלב שמתחילים נוטים לפספס: כדי שהשינוי באמת יגיע למבנה ש־Cursor קורא, צריך להריץ גם **`asm sync`**. בלי זה, ההתקנה לא באמת הושלמה מבחינת סביבת העבודה שלכם.

אם יש לכם כמה סקילים שעובדים יחד, אפשר גם להשתמש ב־`asm create expertise` כדי לקבץ אותם תחת התמחות אחת. זה שימושי כשאתם רוצים לבנות "צוות" מקצועי שלם במקום Skill בודד.

הבדיקה שלכם פשוטה: אחרי `asm sync`, אתם אמורים לראות את הסקיל גם בדיסק וגם במקום שה־Agent קורא ממנו.

---

## 04:00 – 05:00

עכשיו סגרנו את שלושת שיעורי היסוד של המודול: הבנו את ההבדל בין Rule ל־Skill, למדנו לנהל Agents נפרדים, והכנסנו סקילים אמיתיים לפרויקט עם ASM.

בשיעור הבא, 2.4, נפעיל את השרשרת המלאה ונעבור לסוכן המוצר. ניקח רעיון גולמי ונהפוך אותו למסמך `docs/prd.md` שאפשר לבנות עליו את כל הפרויקט.

נתראה שם.

---

## Appendix — English prompt (ASM search)

```text
You are my ASM guide. Goal: help me find and install one high-quality skill for this project. Context: run `asm search "skill creator"`, compare the results with `course/he_course/module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md`, then recommend the best match. Output: show 1) the best skill, 2) why it wins, and 3) the exact next commands to add and sync it. Constraints: if `asm.toml` is missing, tell me to run `asm init` first; do not install anything until I confirm.
```
