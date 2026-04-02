# Script Master: 06 Implementing the First Slice With Guardrails

## Metadata

- Lesson ID: 06
- Title: מימוש slice ראשון עם guardrails
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך עוברים מ-plan למימוש בפועל בלי לתת ל-Agent להתרחב מעבר למה שהתכוונו: slice אחד, גבולות ברורים, ו-stop conditions שמחזירים שליטה.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: Plan טוב על המסך ואז Agent שמנסה לגעת ביותר מדי קבצים.
- Narration:
  "גם אחרי שסידרנו את ה-scope, הסכנה לא נעלמת. ברגע שעוברים לביצוע, קל מאוד לתת ל-Agent לעשות קצת יותר ממה שביקשנו. השיעור הזה עוסק בלהישאר בשליטה בזמן המימוש."

### S02 | 00:25-01:20 | Restate the Slice Before Editing

- Visual: summary קצר של slice ראשון: goal, files, constraints.
- Narration:
  "לפני פעולה אחת, מנסחים מחדש את ה-slice: מה בדיוק נכנס, אילו קבצים כנראה ייגעו, ומה אסור לשנות. זה נשמע כפול, אבל זו הנקודה שבה מונעים את רוב הזליגות."

### S03 | 01:20-02:15 | Define Explicit Guardrails

- Visual: prompt עם constraints ברורים.
- Narration:
  "עכשיו מגדירים guardrails מפורשים: אל תיגע ב-public API, אל תוסיף dependency, עצור אחרי יצירת המבנה, עבוד בשכבה אחת בלבד, והסבר מה שינית לפני שממשיכים. Agent טוב מגיב טוב יותר לגבולות ברורים."

### S04 | 02:15-03:10 | Start With the Smallest Useful Edit

- Visual: שינוי קטן ראשון, לא feature מלא.
- Narration:
  "הביצוע הראשון לא צריך 'לסיים את המשימה'. הוא צריך לפתוח את הנתיב הנכון. לפעמים זה רק skeleton, לפעמים חיבור לוגיקה, ולפעמים placeholder שאפשר לבדוק סביבו."

### S05 | 03:10-04:10 | Stop and Read the Diff

- Visual: diff ראשון על המסך.
- Narration:
  "אחרי כל מעבר משמעותי, עוצרים וקוראים את ה-diff. לא רק אם זה עובד, אלא האם זה נשאר בתוך הגבולות שביקשנו. אם נוספו קבצים מיותרים או קפיצה בין שכבות, לא ממשיכים אוטומטית."

### S06 | 04:10-05:15 | Ask for a Change Summary, Not a Victory Speech

- Visual: בקשה לסיכום שינויים קצר.
- Narration:
  "בשלב הזה לא מבקשים מה-Agent 'לשכנע' אתכם. מבקשים summary קצר: מה השתנה, למה, ומה עדיין לא נעשה. זה עוזר לבדוק שהביצוע באמת תואם את ה-slice ולא הפך לפרויקט צד."

### S07 | 05:15-06:20 | Decide: Continue, Adjust, or Roll Back the Slice

- Visual: שלוש אפשרויות על המסך.
- Narration:
  "אחרי ה-diff הראשון יש שלוש תשובות טובות: להמשיך לאותו slice, לצמצם או לתקן לפני המשך, או לעצור ולחזור אחורה. ההרגל החשוב הוא להבין שגם עצירה היא התקדמות אם היא מונעת טעות עמוקה יותר."

### S08 | 06:20-07:30 | Common Overreach Patterns

- Visual: anti-patterns כמו file explosion, hidden refactor, dependency drift.
- Narration:
  "זליגות נפוצות הן refactor שלא ביקשתם, rename רוחבי, הוספת dependency כי 'זה יותר נקי', או נגיעה בשכבות שלא היו חלק מה-slice. כל אלה אולי נשמעים הגיוניים, אבל הם שוברים את יכולת הבקרה."

### S09 | 07:30-09:00 | Close

- Visual: מעבר לשלב validation.
- Narration:
  "בשיעור הבא לא נמשיך מיד ל-slice הבא. קודם נלמד לעצור ולאמת: אילו checks מריצים, מה באמת מוכיח שהשינוי בטוח, ואיך לא לבלבל בין 'עבר build' לבין 'יש confidence'."

## Prompt Asset

`Implement only the first safe slice of this feature. Before editing, restate the scope, expected files, and constraints. Keep the diff minimal, do not refactor unrelated code, and stop after the first meaningful checkpoint. Then summarize what changed, what remains, and any risks or surprises before doing anything else.`

## Recording Notes

- להראות דוגמה שבה Agent באמת מנסה לגלוש מעט מעבר למה שביקשנו.
- להדגיש diff reading כחלק מהמימוש עצמו, לא רק כשלב review מאוחר.
- לא לסיים את השיעור עם "הכול גמור", אלא עם checkpoint ברור.

## Action Item

לבחור slice קטן אחד, להגדיר לו שלושה guardrails מפורשים, לממש checkpoint ראשון בלבד, ואז לעצור ולבדוק אם ה-diff באמת נשאר בגבולות.
