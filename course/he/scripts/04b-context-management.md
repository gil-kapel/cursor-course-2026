# Script Master: 04b Context Management

## Metadata

- Lesson ID: 04b
- Title: ניהול הקשר: פחות טוקנים, יותר דיוק
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך לנהל את ה-context של כל משימה כך שהמודל יקבל בדיוק את מה שצריך, בלי רעש מיותר, וכך לשפר דיוק, לצמצם עלות, ולהפחית output ארוך שלא באמת צריך.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: משתמש מדביק חצי repository לצ'אט ואז מקבל תשובה מבולבלת.
- Narration:
  "הרבה משתמשים חושבים שאם יזרקו יותר context, הם יקבלו תשובה טובה יותר. בפועל, יותר מדי context יכול לבלבל את המודל, לייקר את הקריאה, ולהחזיר תשובה ארוכה שלא באמת מקדמת את המשימה."

### S02 | 00:25-01:15 | What Context Actually Includes

- Visual: שכבות על המסך: prompt, history, selected code, files, logs, rules.
- Narration:
  "כשאנחנו אומרים context, הכוונה היא לא רק למשפט שכתבתם עכשיו. זה כולל גם היסטוריית צ'אט, קבצים או snippets שצירפתם, logs, selection מהעורך, rules של הפרויקט, ולפעמים גם תוצרים מסיבובים קודמים. כל אלה נכנסים יחד להקשר שהמודל רואה."

### S03 | 01:15-02:10 | More Context Is Not Always Better

- Visual: side-by-side של prompt ממוקד מול prompt עמוס.
- Narration:
  "הטעות הנפוצה היא לחשוב שיותר מידע תמיד עוזר. אבל אם אתם נותנים עשרה קבצים כשצריך שניים, או היסטוריה ישנה שכבר לא רלוונטית, אתם מכניסים רעש. המודל צריך לנחש מה חשוב, והסיכוי לפספוס עולה."

### S04 | 02:10-03:10 | Cost and Token Impact

- Visual: מונה input tokens ו-output tokens שעולה ככל שמוסיפים context.
- Narration:
  "לניהול context יש גם השלכה ישירה על העלות. כל קובץ נוסף, כל log ארוך, וכל היסטוריה מיותרת מגדילים את ה-input. ואם הניסוח שלכם רחב מדי, תקבלו גם output ארוך יותר. כלומר context management טוב לא רק משפר דיוק, אלא גם יכול להוריד גם input וגם output."

### S05 | 03:10-04:15 | Technique 1: Narrow the Scope

- Visual: בקשה כמו 'תתקן הכול' מול בקשה עם קובץ, שגיאה ויעד ברור.
- Narration:
  "הטכניקה הראשונה היא לצמצם scope. לא מבקשים 'תנתח את כל הפרויקט', אלא 'תבדוק את הקובץ הזה מול השגיאה הזאת'. מצרפים רק את הראיות הרלוונטיות: קטע קוד, שגיאה, diff אחרון או צילום מסך. פחות מידע, אבל מדויק יותר."

### S06 | 04:15-05:20 | Technique 2: Summarize and Start Fresh

- Visual: thread ארוך ואז handoff summary קצר ל-thread חדש.
- Narration:
  "הטכניקה השנייה היא לא לגרור thread לנצח. אם המשימה השתנתה, או אם כבר יש הרבה סיבובים, עדיף לסכם בקצרה מה ידוע ולעבור לשיחה חדשה. סיכום טוב של שלוש עד חמש נקודות כמעט תמיד עדיף על עשרות הודעות ישנות."

### S07 | 05:20-06:20 | Technique 3: Control the Output Shape

- Visual: בקשה פתוחה מול בקשה עם output format ברור.
- Narration:
  "ניהול context הוא גם ניהול התשובה. אם תבקשו 'תסביר הכול', תקבלו output ארוך ויקר יותר. אם תבקשו 'תן שלוש סיבות סבירות', 'הצע diff מינימלי', או 'עצור אחרי plan', אתם שולטים באורך התשובה ומקטינים גם רעש וגם עלות."

### S08 | 06:20-07:20 | Separate Stable Context From Task Context

- Visual: project rules בצד אחד, task evidence בצד שני.
- Narration:
  "חשוב להפריד בין שני סוגי context. יש context יציב של הפרויקט, כמו rules, conventions ו-memory. ויש context משתנה של המשימה הנוכחית, כמו הקובץ, השגיאה או היעד המיידי. כשההפרדה הזאת ברורה, לא צריך לחזור על הכול בכל פעם, אבל גם לא מעמיסים חומר לא רלוונטי."

### S09 | 07:20-08:00 | Practical Prompt Pattern

- Visual: prompt שמבקש קודם לזהות איזה context באמת חסר.
- Narration:
  "דפוס טוב הוא לא להתחיל ישר בפתרון. אפשר לבקש מ-Cursor קודם להגיד איזה context באמת חסר, איזה קבצים הוא צריך, ואיזה מידע אפשר להשמיט. כך בונים שיחה יותר יעילה כבר מההודעה הראשונה."

### S10 | 08:00-08:30 | Close

- Visual: מעבר לשיעור הבא.
- Narration:
  "מעולה. עכשיו כשברור איך לנהל context, נעבור לשיעור הבא ונראה איך לבחור את mode הנכון לכל שלב: Ask, Plan, Agent ו-Debug."

## Prompt Asset

`Before solving this task, tell me the minimum context you actually need. Use only the most relevant files, logs, or code snippets, summarize what is already known in 3 to 5 bullets, ask for any missing inputs, and keep your response concise. If the task has changed from earlier messages, suggest starting a fresh thread with a short handoff summary.`

## Recording Notes

- להראות side-by-side של prompt עמוס מול prompt ממוקד.
- להמחיש visually איך input tokens עולים כשמוסיפים history וקבצים.
- להבדיל בין project context קבוע לבין task context משתנה.
- להדגיש שניהול context טוב מוריד גם עלות וגם בלבול.

## Action Item

לקחת prompt אמיתי אחד שלכם, לקצר אותו לגרסה ממוקדת יותר, ולהשאיר רק את הקבצים, השגיאות או היעד שבאמת נחוצים למשימה.
