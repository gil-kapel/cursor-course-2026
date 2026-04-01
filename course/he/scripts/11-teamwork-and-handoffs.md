# Script Master: 11 Teamwork and Handoffs

## Metadata

- Lesson ID: 11
- Title: עבודה בצוות והעברת משימות
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך מעבירים משימה, הקשר ו-next steps בין אנשים שעובדים עם Cursor, כך שהעבודה תמשיך בלי לאבד החלטות, assumptions או סיכונים פתוחים.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: מפתח חדש פותח thread ארוך ולא מבין מה כבר נוסה.
- Narration:
  "בצוות, הבעיה היא לא רק מה Cursor יודע. הבעיה היא מה האדם הבא לא יודע. בלי handoff מסודר, כל משימה מתחילה כמעט מאפס."

### S02 | 00:25-01:10 | What a Good Handoff Solves

- Visual: before/after של handoff מבולגן מול handoff ברור.
- Narration:
  "Handoff טוב שומר זמן, מצמצם חזרות, ומקטין סיכון. הוא עוזר לאדם הבא להבין מה המטרה, מה כבר נעשה, מה לא עבד, ומה הדבר הבא שכדאי לנסות."

### S03 | 01:10-02:05 | The Minimum Handoff Structure

- Visual: template של Goal, Current State, Risks, Next Step.
- Narration:
  "ברוב המקרים מספיק מבנה קצר של ארבעה חלקים: מה המטרה, מה המצב הנוכחי, אילו סיכונים או שאלות פתוחות נשארו, ומה הצעד הבא המומלץ. זה הרבה יותר טוב מהדבקת thread שלם."

### S04 | 02:05-03:00 | Separate Facts From Assumptions

- Visual: שתי עמודות: facts לעומת assumptions.
- Narration:
  "חשוב להבדיל בין מה שידוע לבין מה שחשוד. למשל, 'הבדיקה הזאת נכשלה' הוא fact. 'כנראה הבעיה ב-service' הוא assumption. ההפרדה הזאת מונעת מהאדם הבא לרדוף אחרי ניחוש כאילו הוא עובדה."

### S05 | 03:00-03:55 | Include the Right Context, Not All Context

- Visual: handoff קצר עם links/files רלוונטיים בלבד.
- Narration:
  "גם handoff יכול להיות עמוס מדי. לא מצרפים הכול. מצרפים רק את הקבצים, השגיאות, ה-diff או ההחלטות שבאמת צריך כדי להמשיך. handoff טוב הוא context management בין אנשים."

### S06 | 03:55-05:00 | Use Cursor to Draft the Handoff

- Visual: prompt שמבקש handoff summary.
- Narration:
  "בסוף סשן עבודה אפשר לבקש מ-Cursor לנסח handoff מסודר: מה הושלם, מה עדיין פתוח, ומה מומלץ לעשות עכשיו. זה מעולה כשעוברים בין מפתחים, בין ימים, או בין modes."

### S07 | 05:00-06:00 | Team Conventions Matter

- Visual: naming conventions ל-branches, prompts ו-status notes.
- Narration:
  "בצוות קטן, conventions פשוטים עושים הבדל גדול. למשל מבנה קבוע ל-handoff, שמות ברורים ל-branches, ותיעוד קצר של state נוכחי. לא צריך מערכת כבדה, צריך עקביות."

### S08 | 06:00-07:00 | Common Handoff Failures

- Visual: anti-patterns.
- Narration:
  "הכשל הנפוץ הוא handoff מעורפל כמו 'זה כמעט עובד'. כשל נוסף הוא לא לציין מה כבר נוסה ומה נכשל. ועוד כשל הוא להעביר מסקנות בלי הראיות שתומכות בהן. זה משאיר את האדם הבא עם יותר שאלות מתשובות."

### S09 | 07:00-08:00 | A Reusable Handoff Pattern

- Visual: handoff template filled in.
- Narration:
  "דפוס טוב הוא לסיים כל משימה עם חבילת handoff קצרה: goal, current status, relevant files, failed attempts, open risks, next recommended step. ככה גם אדם אחר וגם Cursor יכולים להמשיך בצורה חלקה."

### S10 | 08:00-08:30 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא ניקח את מה שבנינו ונחבר אותו לעולם האמיתי של deploy: איך מעלים פרויקט לענן, איך בוחרים ספק, ואיך מבדילים בין preview ל-production."

## Prompt Asset

`Create a concise handoff for another developer working with Cursor. Include: 1) goal, 2) current status, 3) relevant files or artifacts, 4) what was already tried, 5) open risks or unknowns, and 6) the smallest recommended next step. Separate confirmed facts from assumptions.`

## Recording Notes

- להראות handoff אחד גרוע מול handoff אחד טוב.
- להדגיש שהמטרה היא המשכיות, לא תיעוד מושלם.
- לשמור על template קצר מספיק לשימוש יומיומי.

## Action Item

לכתוב handoff קצר למשימה אחת פתוחה אצלכם, עם ארבעה חלקים לפחות: מטרה, מצב נוכחי, מה כבר נוסה, ומהו הצעד הבא המומלץ.
