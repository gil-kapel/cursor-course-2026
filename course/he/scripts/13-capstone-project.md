# Script Master: 13 Capstone Project

## Metadata

- Lesson ID: 13
- Title: פרויקט מסכם
- Target duration: 09:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

לחבר את כל שיטת העבודה של הקורס לפרויקט קטן אחד: הגדרת מטרה, context, בחירת mode, לופ מימוש, review, debug ו-deploy, כך שהלומד יראה את התמונה השלמה מקצה לקצה.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: overview מהיר של mini project עם checkpoints.
- Narration:
  "עד עכשיו למדנו את החלקים בנפרד. עכשיו הזמן לחבר אותם. בשיעור הזה נבנה mini project קטן ונעבור על כל הלופ מהתחלה ועד תוצאה עובדת."

### S02 | 00:25-01:10 | Define the Outcome

- Visual: acceptance criteria קצרים על המסך.
- Narration:
  "כמו בכל משימה טובה, מתחילים בתוצאה ברורה. לא 'נבנה משהו', אלא מגדירים מה בדיוק צריך לעבוד בסוף: מה ה-user flow, מה נחשב הצלחה, ואיך נבדוק את זה."

### S03 | 01:10-02:00 | Set the Context

- Visual: rules, prompt, relevant files, constraints.
- Narration:
  "אחרי שהמטרה ברורה, מגדירים context נכון. בוחרים את הקבצים הרלוונטיים, מזכירים constraints חשובים, ומחליטים איזה מידע לא צריך להכניס. כאן מתחיל החיסכון ברעש."

### S04 | 02:00-03:00 | Choose the Right Mode

- Visual: Ask -> Plan -> Agent -> Debug flow.
- Narration:
  "עכשיו בוחרים mode. אפשר להתחיל ב-Ask כדי להבין את הקיים, לעבור ל-Plan כדי לפרק את ה-feature, להשתמש ב-Agent למימוש, ולעבור ל-Debug רק אם משהו נשבר. זו בדיוק השרשרת שבנינו לאורך הקורס."

### S05 | 03:00-04:00 | Implement in Small Slices

- Visual: feature מפורק ל-2 או 3 slices.
- Narration:
  "גם בפרויקט מסכם לא בונים הכול בבת אחת. לוקחים slice קטן, מממשים, עוצרים, בודקים, ואז ממשיכים. כל פעם יחידה אחת שאפשר להבין ולאמת."

### S06 | 04:00-05:00 | Review and Guardrails

- Visual: diff review + validation checks.
- Narration:
  "אחרי כל שלב מפעילים guardrails: review ממוקד, lint או test רלוונטי, ובדיקה שה-diff עדיין קטן וברור. המטרה היא לא להגיע לסוף ואז לגלות שלא שלטנו בדרך."

### S07 | 05:00-06:10 | Debug Only When Needed

- Visual: תקלה קטנה ותהליך תיקון מסודר.
- Narration:
  "אם יש תקלה, לא משנים כיוון בבהלה. מנסחים סימפטום, אוספים ראיות, בוחרים תיקון קטן, ומאמתים. זה אותו תהליך שראינו קודם, רק בתוך flow אמיתי."

### S08 | 06:10-07:15 | Isolate Work with Git

- Visual: branch/worktree ייעודיים לפרויקט.
- Narration:
  "כדי לשמור על הפרויקט נקי, גם כאן עובדים עם branch ברור, ואם צריך עם worktree נפרד. זה הופך את כל הסשן לקל יותר לסקירה, בטוח יותר, וקל יותר להעברה לאדם אחר."

### S09 | 07:15-08:20 | Deploy the Result

- Visual: preview deployment קצר.
- Narration:
  "כשהפיצ'ר עובד מקומית, לא עוצרים. מעלים preview, בודקים שהכול רץ גם מחוץ למחשב שלכם, ומוודאים שה-config וה-env תואמים. זו הסגירה האמיתית של הלופ."

### S10 | 08:20-09:30 | What the Student Can Now Do

- Visual: recap קצר של כל שלבי ה-course workflow.
- Narration:
  "זה הרגע לראות את התמונה המלאה: אתם כבר יודעים לבחור מודל, לנהל context, לבחור mode, לבנות בלופ קטן, להפעיל guardrails, לדבג, לעבוד עם Git ו-worktrees, ולהעלות לענן. כלומר לא רק להשתמש ב-Cursor, אלא לעבוד איתו בצורה מקצועית. ובשיעור האחרון נסגור את המעגל: איך אורזים את כל זה לפרסום, יצוא ולוקליזציה."

## Prompt Asset

`Help me complete a small project end to end using the Cursor workflow from this course. Start by defining acceptance criteria, then identify the minimum context, choose the right mode for each stage, implement in small slices, suggest review/validation checks, and finish with a deployment checklist. Pause between major stages.`

## Recording Notes

- לבחור mini project קטן מאוד כדי שה-flow ירגיש אמיתי ולא דחוס.
- להראות checkpoints ברורים לאורך השיעור.
- לסיים בתחושת "עכשיו אני יכול לעבוד לבד".

## Action Item

לבחור mini project אחד, לכתוב לו מטרה ו-`acceptance criteria`, ואז להגדיר את הסדר שבו תעברו בין `context`, `Plan`, `Agent`, `review`, `debug` ו-`deploy`.
