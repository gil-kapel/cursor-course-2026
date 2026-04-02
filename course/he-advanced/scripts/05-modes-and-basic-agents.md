# Script Master: 05 Context and Model Strategy for a Real Repository

## Metadata

- Lesson ID: 05
- Title: אסטרטגיית context ומודלים ל-repo אמיתי
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך לבחור context, model ו-output shape עבור slice אמיתי ב-repo קיים, כך שמקבלים דיוק טוב יותר, פחות רעש, ועלות שמתאימה למשימה.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: אותה משימה מקבלת תשובה עמוסה אחת ותשובה ממוקדת אחת.
- Narration:
  "לפעמים הבעיה היא לא המודל. לפעמים הבעיה היא שנתתם לו יותר מדי context, ביקשתם תשובה רחבה מדי, או הפעלתם את אותו workflow על משימה שלא דומה לקודמת."

### S02 | 00:25-01:15 | Separate Stable Context From Task Context

- Visual: שני טורים: project rules מול task evidence.
- Narration:
  "השלב הראשון הוא להפריד בין context יציב של הפרויקט לבין context משתנה של המשימה. rules, conventions ו-memory שייכים לשכבה אחת. diff אחרון, log, ticket וקובץ ספציפי שייכים לשכבה אחרת."

### S03 | 01:15-02:20 | Start With the Smallest Useful Scope

- Visual: בחירה של שניים או שלושה קבצים במקום חצי repo.
- Narration:
  "גם ב-repo גדול, לא חייבים לשלוח הכול. שואלים: מה המינימום שצריך כדי להבין את ה-slice הזה? אם בוחרים נכון, מקבלים פחות ניחושים, פחות עלות, ופחות output שצריך לקרוא."

### S04 | 02:20-03:20 | When Auto Is Enough

- Visual: task קטן וברור על המסך.
- Narration:
  "לשינויים ממוקדים, לקריאה קצרה, או ליישום slice שכבר הוגדר טוב, לרוב אפשר להישאר על Auto. אם הבעיה ברורה וה-scope קטן, אין צורך לנהל כל קריאה כמו ניתוח מוח."

### S05 | 03:20-04:20 | When to Pick a Stronger Model

- Visual: task עם tradeoffs, refactor או debug רחב יותר.
- Narration:
  "כשיש ארכיטקטורה, tradeoffs, review מסוכן, או debug מערכתִי, שווה לעבור למודל חזק יותר. כאן המחיר של reasoning טוב הוא לעיתים קטן לעומת המחיר של כיוון שגוי."

### S06 | 04:20-05:10 | When a Faster or Cheaper Model Is Enough

- Visual: משימות חזרתיות או mechanical changes.
- Narration:
  "יש גם מקרים הפוכים: rename, formatting guidance, changes רפטטיביים או שאלות קצרות. כאן אפשר לעתים לבחור מודל מהיר וזול יותר, כל עוד הבעיה ברורה וה-risk נמוך."

### S07 | 05:10-06:15 | Control the Output Shape

- Visual: prompt פתוח מול prompt שמבקש bullets, plan קצר או diff מינימלי.
- Narration:
  "לא מספיק לבחור model טוב. צריך גם לבחור output shape טוב. אם תבקשו 'תסביר הכול', תקבלו תשובה ארוכה. אם תבקשו 'שלוש היפותזות', 'plan בחמישה צעדים', או 'diff מינימלי בלבד', תקבלו משהו שמקדם עבודה."

### S08 | 06:15-07:30 | Create a Routing Policy for This Repo

- Visual: טבלה קטנה: planning, slice implementation, review, debug.
- Narration:
  "במקום להחליט כל פעם מחדש, מגדירים policy קטן לפרויקט. למשל: Auto כברירת מחדל, מודל חזק יותר לתכנון או review מסוכן, מודל מהיר למשימות mechanical. לא תורה מסיני, אלא ברירת מחדל חכמה."

### S09 | 07:30-09:00 | Close

- Visual: המעבר לשיעור המימוש.
- Narration:
  "עכשיו יש לנו גם map, גם slices, וגם אסטרטגיית context ומודלים. בשיעור הבא אפשר סוף סוף לבצע: לממש slice ראשון עם guardrails, לעצור בזמן, ולבדוק מה באמת השתנה."

## Prompt Asset

`Create a practical context and model strategy for implementing one safe slice in this repository. First separate stable project context from task-specific context. Then tell me the minimum files, logs, and requirements needed for this slice. Recommend when to stay on Auto and when to explicitly choose a stronger or cheaper model for planning, implementation, review, and debugging. Keep the output concise and action-oriented.`

## Recording Notes

- לא להפוך את השיעור לשיעור תמחור תיאורטי.
- להראות context אמיתי מתוך ה-capstone, לא דוגמאות מנותקות.
- להדגיש שהמטרה היא precision per task, לא "המודל הכי טוב".

## Action Item

לבנות policy קצר לפרויקט שלכם: מהו ה-stable context, מהו ה-task context, מתי נשארים על `Auto`, ומתי בוחרים מודל אחר לתכנון, review או debug.
