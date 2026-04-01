# Script Master: 07 Build Loop From Scratch

## Metadata

- Lesson ID: 07
- Title: לופ עבודה לבניית פיצ'ר מאפס
- Target duration: 09:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד תהליך קבוע לבניית פיצ'ר: מטרה ברורה, תכנון, מימוש קטן, ולידציה, דיבוג וחזרה על הסבב.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: פיצ'ר חדש נשבר כשהוא נבנה בבת אחת.
- Narration:
  "הדרך הכי מהירה להתעייף מ-Cursor היא לבקש ממנו לבנות פיצ'ר גדול בבת אחת. הדרך הנכונה היא לעבוד בלופ: plan, implement, validate, debug, ואז עוד סיבוב קטן."

### S02 | 00:25-01:10 | Start With Acceptance Criteria

- Visual: רשימת acceptance criteria קצרה.
- Narration:
  "לפני כל קוד, מגדירים מה הפיצ'ר צריך לעשות. לא במילים כלליות, אלא בתנאי קבלה. אם תנאי הקבלה לא ברורים, גם ה-Agent לא יהיה ברור."

### S03 | 01:10-02:05 | Plan the Smallest Slice

- Visual: פירוק feature לשלבים קטנים.
- Narration:
  "אחרי שיש יעד, לא מתכננים את כל העולם. בוחרים את הפרוסה הכי קטנה שאפשר לבנות ולבדוק. לדוגמה: קודם UI, אחר כך שירות, אחר כך persistence. כל שלב צריך להיות קטן מספיק כדי שתוכלו לוודא שהוא באמת עובד."

### S04 | 02:05-03:10 | Implement One Slice

- Visual: Cursor agent מממש שלב אחד בלבד.
- Narration:
  "עכשיו נותנים ל-Agent לבצע רק את הפרוסה הראשונה. לא feature שלם, אלא יחידה קטנה וברורה. זה המקום לדרוש שינויים מינימליים, קוד קריא, והסבר קצר מה בדיוק השתנה."

### S05 | 03:10-04:10 | Validate Immediately

- Visual: בדיקה ידנית, lint, test, או הרצה מקומית.
- Narration:
  "אחרי כל שינוי קטן, עוצרים ובודקים. אפשר בדיקה ידנית, אפשר test, אפשר lint, תלוי בפרויקט. המטרה היא לא לצבור שינויים לפני validation, אלא לזהות בעיה מיד כשהיא נוצרה."

### S06 | 04:10-05:20 | Debug the Smallest Failure

- Visual: כישלון בדיקה קטן ותיקון ממוקד.
- Narration:
  "אם משהו נשבר, לא מרחיבים scope. עוברים למצב debug, שואלים מה הסיבה הכי סבירה, מה התיקון הכי קטן, ואיך מאמתים אותו. חוזרים ללופ רק אחרי שהבעיה נפתרה."

### S07 | 05:20-06:35 | Repeat the Loop

- Visual: loop diagram.
- Narration:
  "הלופ הזה חוזר על עצמו לכל פרוסת פיצ'ר. acceptance criteria, plan, implement, validate, debug אם צריך. החזרתיות הזאת אולי נשמעת איטית, אבל בפועל היא חוסכת המון תיקוני עומק אחר כך."

### S08 | 06:35-07:45 | Prompts That Enforce the Loop

- Visual: prompt של build loop.
- Narration:
  "כדי לשמור על המשמעת הזאת, אפשר לבקש מ-Cursor לעבוד בדיוק לפי השלבים, עם pause בין שלבים גדולים. זה חשוב במיוחד כשיש נטייה לדלג ישר לביצוע."

### S09 | 07:45-08:40 | Common Failure Pattern

- Visual: prompt רחב מדי מול prompt ממוקד.
- Narration:
  "כשל נפוץ הוא לבקש 'בנה לי מערכת שלמה'. בקשה כזאת יוצרת קפיצות בין שכבות, פוגעת בבקרה, ומקשה על דיבוג. תמיד מחזירים את ה-feature לפרוסה הכי קטנה שאפשר להבין."

### S10 | 08:40-09:30 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא נלמד מה עושים כשדברים משתבשים: איך לדבג נכון, איך לצמצם scope, ואיך לחזור לשליטה בלי לדרדר את הקוד עוד יותר."

## Prompt Asset

`Help me build [feature_name] using an iterative loop: 1) define acceptance criteria, 2) create implementation plan, 3) implement in small steps, 4) run validation checks, 5) debug and refine. Pause for approval between major steps.`

## Recording Notes

- להשתמש בדוגמת feature פשוטה עם 2 או 3 slices.
- להראות במפורש pause אחרי כל שלב.
- לא להעמיס בלופ עם יותר מדי terminology.

## Action Item

לבחור feature קטן אחד, לכתוב לו `acceptance criteria`, ואז לפרק אותו לפרוסה ראשונה שאפשר לממש ולאמת באותו יום.
