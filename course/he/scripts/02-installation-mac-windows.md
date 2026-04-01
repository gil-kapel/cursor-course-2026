# Script Master: 02 Installation on macOS and Windows

## Metadata

- Lesson ID: 02
- Title: התקנת Cursor על macOS ו-Windows
- Target duration: 07:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להוביל התקנה ראשונה של Cursor בצורה נקייה ולוודא שהמשתמש מוכן לשיעורים הבאים.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: Cursor לא מותקן, ואז פתיחה מוצלחת של האפליקציה.
- Narration:
  "התקנה נכונה חוסכת המון בלבול בהמשך. בשיעור הזה נתקין את Cursor, נפתח פרויקט ראשון, ונבדוק שהכול עובד לפני שממשיכים."

### S02 | 00:25-01:10 | Download

- Visual: אתר ההורדה הרשמי והבחירה בין macOS ל-Windows.
- Narration:
  "נכנסים לאתר הרשמי של Cursor ומורידים את הגרסה המתאימה למערכת ההפעלה שלכם. אם אתם על Mac, שימו לב אם המחשב שלכם מבוסס Apple Silicon או Intel. ב-Windows פשוט בוחרים את קובץ ההתקנה הרגיל."

### S03 | 01:10-02:10 | Install on macOS

- Visual: גרירת האפליקציה ל-Applications, פתיחה ראשונה, אישור הרשאות.
- Narration:
  "ב-macOS פותחים את קובץ ההתקנה, גוררים את Cursor ל-Applications, ואז פותחים את האפליקציה. אם macOS מציג אזהרת אבטחה, מאשרים פתיחה דרך ההגדרות או דרך חלון האישור הרגיל."

### S04 | 02:10-03:10 | Install on Windows

- Visual: הרצת installer, next-next-finish, פתיחה ראשונה.
- Narration:
  "ב-Windows מריצים את קובץ ההתקנה, ממשיכים עם ההגדרות ברירת המחדל, ומפעילים את Cursor. אם Windows Defender מבקש אישור, מאשרים רק לאחר שווידאתם שהקובץ הגיע מהאתר הרשמי."

### S05 | 03:10-04:00 | First Launch Setup

- Visual: מסכי setup ראשונים.
- Narration:
  "בפתיחה הראשונה Cursor עשוי לשאול על import של הגדרות, theme או קיצורי מקלדת. אפשר לבחור מה שנוח לכם. בשלב הזה המטרה היא רק להיכנס במהירות למסך העבודה."

### S06 | 04:00-05:05 | Open First Folder

- Visual: פתיחת תיקייה ריקה או repo קיים.
- Narration:
  "עכשיו פותחים תיקייה ראשונה. לא משנה אם זו תיקייה ריקה או פרויקט קיים. אנחנו רק רוצים לוודא ש-Cursor יכול לטעון workspace, להציג קבצים, ולעבוד עליהם."

### S07 | 05:05-06:00 | Sanity Check

- Visual: פתיחת chat / agent, הרצת prompt בדיקה.
- Narration:
  "כדי לוודא שהכול עובד, נריץ prompt פשוט שמבקש מ-Cursor לזהות את מערכת ההפעלה, להסביר מה יש בתיקייה, ולהציע next steps. אם הוא מגיב בצורה תקינה, אנחנו מוכנים."

### S08 | 06:00-06:50 | Common Errors

- Visual: רשימת תקלות נפוצות.
- Narration:
  "אם האפליקציה לא נפתחת, בודקים הרשאות מערכת. אם התיקייה לא נטענת, מנסים workspace אחר. אם אין תגובה מה-agent, בודקים חיבור לחשבון וחיבור אינטרנט. חשוב לפתור את זה עכשיו, לפני שמתקדמים למודים ולמודלים."

### S09 | 06:50-07:30 | Close

- Visual: טקסט קצר של next lesson.
- Narration:
  "מעולה. Cursor מותקן ועובד. בשיעור הבא נעבור על פתיחת חשבון, בחירת מנוי, והבנה מתי באמת צריך לשלם."

## Prompt Asset

`I’m setting up Cursor for the first time. Detect my OS and give me a step-by-step install checklist with verification after each step. Include common errors and fixes. Keep it beginner-friendly and concise.`

## Recording Notes

- לצלם גם מסך macOS וגם מסך Windows, או להשתמש ב-B-roll משלים.
- להציג את prompt הבדיקה על המסך כ-overlay.
- אם יש שינוי UI קטן בגרסאות עתידיות, לשמור את הניסוח כללי ולא תלוי בכפתור בודד.

## Action Item

להתקין את Cursor, לפתוח תיקיית פרויקט אחת, ולהריץ בדיקת sanity קצרה שמוודאת שה-editor, הטרמינל וה-agent זמינים.
