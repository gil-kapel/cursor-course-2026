# Lesson 2.13 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:30

זה השיעור שסוגר את המודול בצורה הכי פרקטית: גם Agent מעולה וגם Skill טוב לא יצילו אתכם אם פתיחת המשימה שלכם חלשה. כשהפתיח עמום, גם הסוכן הכי טוב מתחיל לנחש.

---

## 01:30 – 03:30

לכן אנחנו עובדים עם תבנית פשוטה לפתיחת כל משימה:
תפקיד. מטרה. קבצים רלוונטיים עם `@`. פלט רצוי. מגבלות. ו"סיימנו כש...".

זה נשמע קטן, אבל זו כמעט כל התורה של עבודה עקבית עם Agents. אתם לא כותבים "תבנה לי משהו". אתם כותבים פתיח שמסביר מי אתם צריכים שיהיה הסוכן, מה המטרה, איזה קבצים רלוונטיים, איזה פלט אתם מצפים לקבל, ומתי המשימה נחשבת גמורה.

---

## 03:30 – 05:00

אותו עיקרון עובד גם ל־PRD, גם ל־Review, וגם ל־Debug. לכל משימה יש הקשר אחר. ולכן גם כאן החוק חוזר: **Task חדש = Context חדש**. אל תגררו שיחה ישנה או Agent עמוס למשימה אחרת רק כי הכול כבר פתוח.

---

## 05:00 – 06:00

התרגיל שלכם: קחו משימה אחת שעשיתם במודול - למשל PRD, Build או Review - וכתבו לה פתיח חד ב־4 עד 5 שורות. אחר כך הריצו את אותו Agent פעם אחת עם פתיח חלש, ופעם אחת עם פתיח חד, והשוו את התוצאה. אתם תראו מיד כמה הפתיחה משנה את איכות החשיבה.

אם תשמרו לעצמכם 2–3 פתיחים כאלה, בניתם לעצמכם כבר playbook ראשון של פיתוח עם Cursor. זה גם מה שיכין אתכם למודול הבא, שבו נתחיל לעבוד עם MCP וכלים חיים - ושם prompt חד וקונטקסט נקי חשובים אפילו יותר.

---

## Appendix — English prompt kit

```text
Planning prompt:
You are a planning agent. Goal: propose the best approach before any code changes. Context: @docs/prd.md @docs/architecture.md. Output: a short plan with risks and open questions. Constraints: do not edit files yet.

Implementation prompt:
You are a development agent. Goal: implement one small vertical slice. Context: @docs/prd.md @docs/architecture.md @docs/ui-plan.md. Output: a proposed diff plus verification steps. Constraints: keep the change narrow and wait for review before applying.

Debug prompt:
You are a debug agent. Goal: identify the root cause of this failure. Context: [paste terminal error] + relevant @files. Output: verification steps, likely cause, minimal fix, rerun checklist. Constraints: do not guess and do not rewrite unrelated code.
```
