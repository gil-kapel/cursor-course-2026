# Script Master: 12 Teamwork, PR Prep, and Handoffs

## Metadata

- Lesson ID: 12
- Title: עבודה בצוות: handoff, PR prep ותקשורת סביב שינוי
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך מעבירים שינוי הלאה בצורה מקצועית: handoff ברור, PR summary קצר, הפרדה בין facts ל-assumptions, ותקשורת שמאפשרת לאדם הבא או ל-reviewer להמשיך בלי לפתוח מחדש את כל המשימה.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: reviewer פותח diff טוב אבל בלי הקשר.
- Narration:
  "בצוות, קוד טוב לבדו לא מספיק. אם האדם הבא לא מבין למה נגעתם, מה כבר נבדק, ומה עוד מסוכן, העבודה נתקעת. השיעור הזה עוסק בהעברת הקשר, לא רק בהעברת קבצים."

### S02 | 00:25-01:15 | What the Next Person Actually Needs

- Visual: before/after של handoff מעורפל מול handoff ברור.
- Narration:
  "האדם הבא לא צריך את כל ה-thread. הוא צריך להבין מה המטרה, מה הושלם, מה עדיין פתוח, ואיפה הסיכון. ככל שהחבילה הזאת ברורה יותר, כך פחות זמן הולך לאיבוד על שחזור הקשר."

### S03 | 01:15-02:10 | Facts, Assumptions, and Open Questions

- Visual: שלוש עמודות.
- Narration:
  "Handoff טוב מפריד בין facts, assumptions ו-open questions. 'הבדיקה הזו עברה' הוא fact. 'כנראה הבעיה בשכבת השירות' הוא assumption. 'לא בדקנו edge case של X' הוא open question. ההפרדה הזאת חוסכת הרבה כיוונים שגויים."

### S04 | 02:10-03:10 | The Minimum Handoff Package

- Visual: template קצר: goal, current state, relevant files, tried already, risks, next step.
- Narration:
  "ברוב המקרים מספיק מבנה קצר: מה המטרה, מה המצב הנוכחי, אילו קבצים רלוונטיים, מה כבר נוסה, מה מסוכן עדיין, ומה הצעד הבא הקטן ביותר. לא תיעוד מושלם. המשכיות."

### S05 | 03:10-04:15 | PR Summary as Communication, Not Decoration

- Visual: PR summary קצר לעומת תיאור גנרי.
- Narration:
  "PR summary טוב איננו קישוט. הוא מסביר למה השינוי קיים, אילו החלטות התקבלו, ומה נבדק. reviewer טוב צריך להגיע ל-diff עם הקשר, לא לגלות הכול לבד מתוך עשרות קבצים."

### S06 | 04:15-05:15 | Include the Right Evidence

- Visual: links לדיפים, tests, screenshots או artifacts רלוונטיים.
- Narration:
  "לא מצרפים הכול. מצרפים את הראיות הנכונות: diff קטן, test output רלוונטי, צילום מסך אם יש שינוי UI, או artifact שמוכיח שהשינוי באמת עובד. communication טובה היא context management בין אנשים."

### S07 | 05:15-06:15 | Use Cursor to Draft, Then Trim

- Visual: Cursor מנסח handoff או PR summary, ואז עריכה ידנית.
- Narration:
  "Cursor יכול לנסח handoff או PR summary טובים, אבל לא משאירים אותם גולמיים. נותנים לו לייצר טיוטה, ואז מקצרים, מתקנים assumptions, ומוודאים שהמסר נשאר חד ואנושי."

### S08 | 06:15-07:15 | Team Conventions Matter

- Visual: naming conventions, status note format, PR structure.
- Narration:
  "בצוות קטן, conventions פשוטים עושים הבדל גדול: מבנה קבוע ל-handoff, תבנית PR קצרה, ואותה שפה סביב status, risks ו-next step. זה לא process כבד; זה friction נמוך שחוסך בלגן."

### S09 | 07:15-08:20 | Common Failure Patterns

- Visual: anti-patterns כמו 'זה כמעט עובד' או PR בלי test plan.
- Narration:
  "הכשלים הנפוצים הם handoff מעורפל, PR בלי test plan, או מסקנות בלי evidence. עוד כשל הוא להעביר לאדם הבא thread שלם במקום סיכום חד. כל אלה גורמים לצוות לעבוד קשה יותר מהנדרש."

### S10 | 08:20-09:00 | Close

- Visual: מעבר לשיעור deploy/release.
- Narration:
  "בשיעור הבא נצא מה-repo אל העולם האמיתי: deploy, verification ו-rollback. שם נראה איך סוגרים שינוי עד הסוף, לא רק בתוך הקוד אלא גם בגרסה חיה."

## Prompt Asset

`Create a concise team handoff and PR preparation package for this repository change. Include: goal, current status, relevant files or artifacts, what was already tried, confirmed facts vs assumptions, open risks, test evidence, and the smallest recommended next step. Then draft a short PR summary focused on why this change exists and how to review it safely.`

## Recording Notes

- להראות handoff אחד גרוע מול handoff/PR prep אחד טוב.
- להדגיש ש-summary ו-handoff הם כלי acceleration ל-review, לא עבודת אדמיניסטרציה.
- לשמור את התבנית קצרה מספיק לשימוש יומיומי.

## Action Item

לכתוב handoff קצר ו-PR summary קצר לשינוי אחד שלכם, עם goal, מצב נוכחי, evidence, סיכונים פתוחים, והצעד הבא המומלץ.
