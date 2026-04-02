# Script Master: 03 Reading an Unfamiliar Codebase With Ask and Plan

## Metadata

- Lesson ID: 03
- Title: קריאת codebase לא מוכר עם Ask ו-Plan
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך נכנסים ל-repo קיים בצורה בטוחה: להבין שכבות, נקודות כניסה וקבצים רלוונטיים לפני שמפעילים Agent על שינוי אמיתי.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: בקשה רחבה כמו "תוסיף את הפיצ'ר" מול repo גדול יחסית.
- Narration:
  "הטעות הכי יקרה בתחילת עבודה על codebase קיים היא לקפוץ ישר ל-Agent. אם לא הבנתם איך המערכת בנויה, גם מודל טוב יתחיל לנחש."

### S02 | 00:25-01:15 | Start From the Ticket, Not the Files

- Visual: issue, task description או PRD קצר.
- Narration:
  "לא מתחילים מ-random browsing. מתחילים מהבעיה העסקית או מה-ticket. קודם מגדירים מה הפיצ'ר אמור לעשות, ורק אז שואלים איפה במערכת זה כנראה יושב."

### S03 | 01:15-02:20 | Ask for a Project Map

- Visual: שאלה ב-Ask על מבנה ה-repo והקבצים החשובים.
- Narration:
  "בשלב הראשון מבקשים map, לא implementation. אילו מודולים כנראה רלוונטיים? מהן נקודות הכניסה? איפה הנתיב של הבקשה מתחיל ואיפה הוא נגמר? זו חקירה, לא ביצוע."

### S04 | 02:20-03:20 | Plan the Reading Path

- Visual: plan קצר של קבצים לקריאה וסדר הבדיקה.
- Narration:
  "אחרי שיש map ראשוני, מבקשים Plan לקריאה: באיזה קובץ להתחיל, לאילו סמלים לעקוב, ואיפה לעצור כדי לא להתפזר. גם חקירה צריכה סדר."

### S05 | 03:20-04:30 | Identify Layers and Boundaries

- Visual: תרשים של route, service, data, UI או שכבות דומות.
- Narration:
  "הדבר החשוב ביותר הוא לזהות boundaries. איפה ה-UI נגמר? איפה הלוגיקה העסקית? איפה הגישה לנתונים? בלי זה, קל מאוד לבקש מ-Cursor לעשות קפיצות שכבה מסוכנות."

### S06 | 04:30-05:40 | Ask for Missing Context and Risks

- Visual: רשימה של unknowns, assumptions ו-risks.
- Narration:
  "במקום לבקש פתרון מוקדם מדי, מבקשים מ-Cursor להגיד מה עדיין חסר: איזה קבצים עוד צריך לקרוא, אילו הנחות הוא מניח, ומה הסיכונים אם ניגע בנקודה הלא נכונה."

### S07 | 05:40-07:00 | Produce a Short Working Map

- Visual: summary קצר: relevant files, flow, risks, open questions.
- Narration:
  "המטרה של השיעור הזה איננה להבין את כל המערכת. המטרה היא לייצר working map קטן: אילו קבצים רלוונטיים, מה הזרימה כנראה, מה עדיין לא ברור, ומה לא נוגעים בו עדיין."

### S08 | 07:00-08:30 | Close

- Visual: מעבר מה-map לפירוק feature.
- Narration:
  "מעולה. עכשיו כשיש לנו map, אפשר לעבור לשלב הבא: לפרק את ה-feature לפרוסות בטוחות, במקום לבקש שינוי גדול ולגלות בדיעבד שהוא נגע ביותר מדי שכבות."

## Prompt Asset

`I need to implement a feature in an unfamiliar repository. Do not write code yet. First, help me understand the codebase: identify the likely files and layers involved, explain the request flow at a high level, list open questions, and point out the safest places to start reading. End with a short working map I can use before implementation.`

## Recording Notes

- לבחור repo שבו באמת יש כמה שכבות, לא דף HTML בודד.
- להראות בבירור את המעבר מ-Ask ל-Plan בלי לערוך קבצים.
- להדגיש שהמטרה היא מספיק הבנה כדי לעבוד, לא מיפוי אינסופי של כל repo.

## Action Item

לבחור repo אחד אמיתי, לבקש מ-Cursor working map קצר למשימה אחת, ולשמור את ארבעת הסעיפים: קבצים רלוונטיים, זרימה משוערת, סיכונים, ושאלות פתוחות.
