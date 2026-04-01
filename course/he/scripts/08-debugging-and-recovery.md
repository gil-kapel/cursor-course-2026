# Script Master: 08 Debugging and Recovery

## Metadata

- Lesson ID: 08
- Title: דיבוג והתאוששות מתקלות
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך לעבור ממצב של תקלה וחוסר ודאות לתהליך דיבוג מסודר: סימפטום, היפותזה, תיקון קטן, אימות וחזרה למסלול.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: build נכשל או UI שבור.
- Narration:
  "הרגע שבו Cursor נהיה הכי מסוכן הוא גם הרגע שבו הכי קל לאבד שליטה: כשהקוד נשבר. בשיעור הזה נלמד לא לרוץ לתיקון אקראי, אלא להפעיל תהליך דיבוג שמחזיר ודאות."

### S02 | 00:25-01:15 | Start From the Symptom

- Visual: הודעת שגיאה אחת על המסך.
- Narration:
  "הצעד הראשון הוא לא פתרון, אלא ניסוח הסימפטום. מה בדיוק נשבר, איפה זה קורה, ומה רואים. ככל שהתיאור חד יותר, כך ה-agent פחות ימציא הסברים לא רלוונטיים."

### S03 | 01:15-02:10 | Gather Evidence

- Visual: error logs, test output, relevant diff.
- Narration:
  "אוספים רק את הראיות שקשורות לבעיה: stack trace, diff אחרון, בדיקה שנכשלה, או צילום מסך. לא זורקים את כל הפרויקט. דיבוג טוב מתחיל במידע ממוקד, לא ברעש."

### S04 | 02:10-03:05 | Ask for Probable Root Causes

- Visual: prompt לדיבוג.
- Narration:
  "בשלב הזה לא מבקשים 'תתקן'. קודם מבקשים מ-Cursor להציע root causes אפשריים, מדורגים לפי סבירות. זה מעביר אותנו מחיפוש עיוור לחשיבה מסודרת."

### S05 | 03:05-04:05 | Choose the Smallest Safe Fix

- Visual: תיקון קטן אחד בלבד.
- Narration:
  "אחרי שיש היפותזה סבירה, בוחרים את התיקון הכי קטן שיכול לאמת אותה. לא משנים חמישה קבצים אם אפשר לשנות אחד. ככל שהתיקון קטן יותר, כך קל יותר להבין אם הוא באמת פתר את הבעיה."

### S06 | 04:05-05:05 | Verify the Fix

- Visual: rerun test או בדיקה ידנית חוזרת.
- Narration:
  "כל תיקון חייב אימות. מריצים שוב את אותה בדיקה, או משחזרים את אותו סימפטום. אם לא בדקתם, לא דיבגתם. רק ניחשתם."

### S07 | 05:05-06:05 | Recovery Options

- Visual: checklist של rollback, isolate, compare.
- Narration:
  "אם התיקון לא עבד, יש שלוש פעולות בטוחות: לחזור צעד אחד אחורה, לצמצם עוד יותר את ה-scope, או להשוות מול ה-state האחרון שעבד. העיקר הוא לא להעמיק את השינוי בלי שליטה."

### S08 | 06:05-07:10 | Common Anti-Patterns

- Visual: רשימת anti-patterns.
- Narration:
  "מה לא עושים? לא מבקשים 'תתקן הכול'. לא משנים כמה משתנים בבת אחת. לא עוברים בין modes בלי סיבה. ולא מוסיפים לוגיקה חדשה תוך כדי דיבוג של בעיה קיימת."

### S09 | 07:10-08:00 | Prompt That Enforces Safe Debugging

- Visual: debug prompt on screen.
- Narration:
  "כדי לשמור על התהליך, משתמשים ב-prompt שמכריח את Cursor להסביר סיבה אפשרית, להציע תיקון קטן, ולהגדיר צעדי אימות ו-roll back. זה הופך דיבוג מפעולה אינטואיטיבית לתהליך."

### S10 | 08:00-08:30 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא ניקח את כל המשמעת הזאת ונחבר אותה לעבודה עם Git ו-worktrees, כדי לפתח פיצ'רים ולתקן באגים במקביל בלי ללכלך את העבודה הראשית."

## Prompt Asset

`I have a failing change. First, summarize probable root causes from current errors/logs. Then propose the smallest safe fix, with verification steps and rollback options. Keep changes minimal and explain risk before editing.`

## Recording Notes

- להשתמש בתקלה פשוטה וברורה.
- להראות את ההבדל בין תיקון אקראי לתהליך מסודר.
- להדגיש rollback options בלי להיכנס לפקודות מסוכנות.

## Action Item

לקחת תקלה אחת אמיתית, לכתוב את הסימפטום שלה במשפט אחד, לצרף שתי ראיות רלוונטיות בלבד, ולהגדיר מהו התיקון הקטן ביותר שכדאי לבדוק קודם.
