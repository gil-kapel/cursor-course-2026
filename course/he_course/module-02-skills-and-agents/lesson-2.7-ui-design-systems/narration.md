# Lesson 2.7 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

בשיעור הזה אני עושה דוגמה אחת מלאה מהתחלה עד הסוף, אבל הפעם כל השיעור בנוי סביב Skill אחד מאוד מסוים: `ui-design-systems-agent`.

אני מתחיל מהקובץ עצמו בתוך הקורס:
`course/he_course/module-02-skills-and-agents/lesson-2.7-ui-design-systems/ui-design-systems-agent/SKILL.md`.

אני מראה שזה ה־repo skill שלנו, ואז אני מבקש מה־Agent לעזור לי לסנכרן אותו אל תוך `.cursor/skills`, כדי ש־Cursor באמת יוכל להשתמש בו בתוך העבודה.

---

## 01:00 – 02:15

כאן חשוב להסביר משהו פשוט: ה־Skill כבר קיים בריפו, אבל כדי לעבוד איתו בצורה רגילה בתוך הפרויקט, אנחנו מסנכרנים את Skills של מודול 2 אל תוך `.cursor/skills`.

לכן אני מבקש מה־Agent להריץ איתי את זרימת ההתקנה של סקיל הקורס הזה, ובפועל מה שאנחנו עושים הוא `uv run scripts/sync_module02_project_skills.py`.

אחר כך אני פותח את `.cursor/skills/ui-design-systems-agent/SKILL.md` ומוודא שהסקיל באמת שם. זה רגע חשוב, כי מכאן והלאה כל השיעור הוא אינטראקציה עם הסקיל הזה, לא עם רעיון כללי של "סוכן UI".

---

## 02:15 – 03:30

עכשיו אני לוקח את אותה זרימה מהשיעור הקודם: משתמש בוחר חבילה, נפתח לו חלון צד לתשלום, והוא צריך להבין מיד מה בחר, כמה זה עולה, ומה הדבר הבא שהוא צריך לעשות.

אני מצרף ל־Agent את `@docs/ux-flows.md` ואת `@docs/architecture.md`, אבל אני לא מבקש ממנו ישר לכתוב מסמך. אני רוצה להשתמש בדיוק ב־`ui-design-systems-agent` שהתקנתי כרגע, ולתת לו להוביל את השיחה.

אני מחפש שאלות כמו:
מה חייב להופיע ליד ה־CTA?
איך המסך הזה צריך להרגיש - יוקרתי, פשוט, מהיר, בטוח?
מה קורה במובייל?
מה המשתמש צריך לראות כדי לסמוך על התשלום?

---

## 03:30 – 04:45

ואם עדיין אין כיוון ויזואלי מספיק טוב, אני רוצה שהסקיל יעצור אותי ויגיד לי: עכשיו לך ל־Dribbble, חפש dashboard, תבחר עיצוב שאתה אוהב, ותעלה אותו לכאן.

אחרי כמה סבבים כאלה, ואחרי שהעליתי reference שאני אוהב מ־Dribbble, הסקיל לא רק בונה `docs/ui-plan.md`, אלא גם מייצר לי prompt הרבה יותר חזק ל־Stitch.

זה רגע חשוב מאוד. אני לא עובר ל־Stitch עם ניסוח חלש כמו "תעשה לי משהו יפה". אני רוצה prompt שמבוסס על הזרימה, על ה־components, על ה־states, על trust cues, ועל אתר השראה שאני בוחר.

כלומר, עד כאן הסקיל עזר לי לחשוב, לשאול, לעצור בזמן, לבקש ממני reference, ורק אז לדייק. זה כבר workflow אמיתי, לא prompt חד־פעמי.

---

## 04:45 – 06:00

עכשיו אני פותח את Stitch באתר, לוקח את ה־prompt שהסוכן חידד לי, ומריץ אותו.

אני מראה על המסך איך אני מזין את הבקשה, איך אני מוסיף את ההשראה, ואיך אני שומר על אותו רעיון מה־UX: כמה שפחות חיכוך, וכמה שיותר בהירות על הצעד הבא.

חשוב להגיד את זה בקול: כאן אנחנו עדיין בזרימה ידנית. במודול ה־MCP נלמד איך לחבר תהליכים כאלה בצורה אוטומטית יותר. כרגע אני רוצה שהסטודנט יבין את כל השרשרת.

---

אחרי ש־Stitch מייצר כיוון, אני מוריד את התוצרים הרלוונטיים, מחזיר אותם ל־Cursor, ופותח אותם ליד `docs/ui-plan.md`.

עכשיו יש לי את כל מה שאני צריך: גם repo skill שהותקן נכון, גם שיחה חכמה עם הסוכן דרך אותו skill, גם prompt חזק, גם draft ויזואלי, וגם קבצים שחזרו לפרויקט.

וזו הנקודה של השיעור הזה: מתחילים מהסקיל של הקורס, מסנכרנים אותו, מוודאים שהוא פעיל, ואז עושים את כל תהליך ה־UI דרך האינטראקציה עם אותו skill.

בשיעור הבא, 2.8, אני לוקח את כל מה שבניתי עד עכשיו ועובר ל־Plan mode כדי להפוך את זה לתוכנית slices מסודרת.

---

## Appendix — English prompt (UI + Stitch handoff)

```text
I want to use the installed `ui-design-systems-agent` skill from this course repo for this whole UI workflow. First, help me verify that the repo skill is synced into `.cursor/skills/ui-design-systems-agent/`. Then use that skill to lead a short UI interview based on `@docs/ux-flows.md` and `@docs/architecture.md`. Ask questions in small rounds, send me to Dribbble dashboard search if the visual direction is still vague, and only then save `docs/ui-plan.md` and write a strong Stitch-ready prompt.
```
