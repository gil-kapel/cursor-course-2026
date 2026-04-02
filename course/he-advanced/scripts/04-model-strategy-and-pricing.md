# Script Master: 04 Safe Feature Slicing

## Metadata

- Lesson ID: 04
- Title: פירוק feature לפרוסות בטוחות
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להפוך feature רחב לתוכנית delivery שאפשר לבצע בצעדים קטנים: עם acceptance criteria, סדר תלות ברור, ו-stop conditions שמונעים מה-Agent "לברוח".

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: בקשה עמומה כמו "תוסיף dashboard חדש" מול repo עם כמה שכבות.
- Narration:
  "הרבה בעיות עם AI לא מתחילות בקוד גרוע. הן מתחילות ב-scope גרוע. אם ביקשתם feature רחב מדי, גם Agent מצוין ינסה לגעת ביותר מדי מקומות בבת אחת."

### S02 | 00:25-01:20 | Define Acceptance Criteria First

- Visual: רשימת acceptance criteria ו-non-goals.
- Narration:
  "לפני שמפרקים עבודה, צריך לדעת מה נחשב הצלחה. מנסחים acceptance criteria ברורים, וגם מה לא נכנס לסיבוב הזה. בלי גבולות כאלה, כל שינוי קטן מתנפח."

### S03 | 01:20-02:15 | Find the Dependency Order

- Visual: flow של data, service, UI או שכבות דומות.
- Narration:
  "עכשיו שואלים: מה תלוי במה. האם צריך קודם API? קודם schema? קודם UI? סדר התלות קובע את סדר העבודה. אם מדלגים עליו, הסוכן יתחיל לאלתר."

### S04 | 02:15-03:20 | Choose the Smallest Safe Slice

- Visual: feature מפורק לשלושה או ארבעה slices.
- Narration:
  "הסוד הוא לא לבחור את החלק הכי חשוב, אלא את החלק הכי קטן שאפשר לממש ולאמת. קטן מספיק כדי להבין מה השתנה, וגדול מספיק כדי לקדם את ה-feature באמת."

### S05 | 03:20-04:20 | Define Stop Conditions

- Visual: prompt עם ניסוח כמו "implement slice 1 only and stop".
- Narration:
  "בשלב הזה מגדירים ל-Agent מתי לעצור. למשל: לגעת רק בשכבה אחת, ליצור רק את המבנה הבסיסי, או לעצור אחרי diff ראשון. stop condition טוב מונע תיקון יתר והרפתקאות מיותרות."

### S06 | 04:20-05:35 | Build a Delivery Plan

- Visual: תוכנית קצרה: slice, files, validation, risk.
- Narration:
  "עכשיו אפשר לבקש Plan אמיתי: slice ראשון, קבצים צפויים, איך נאמת, ומה עלול להישבר. זו כבר לא חקירה מופשטת, אלא תוכנית עבודה שאפשר לצאת ממנה לביצוע."

### S07 | 05:35-06:45 | Common Failure Pattern

- Visual: prompt רחב מדי מול prompt ממוקד.
- Narration:
  "הכשל הקלאסי נראה תמים: 'תוסיף את כל הפיצ'ר ותוודא שהכול עובד'. זה נשמע יעיל, אבל בפועל זו הזמנה לשינוי רחב מדי, בדיקה שטחית מדי, ו-debug ארוך מדי."

### S08 | 06:45-08:00 | Good Slice, Good Review

- Visual: diff קטן ונוח לסקירה.
- Narration:
  "כש-slice בנוי טוב, גם ה-review נהיה פשוט יותר. אפשר להבין מה השתנה, לבדוק רק את מה שצריך, ולדעת אם להתקדם לשלב הבא או לעצור. slicing טוב הוא לא רק כלי מימוש, אלא גם כלי איכות."

### S09 | 08:00-09:00 | Close

- Visual: המעבר מ-plan לביצוע של slice אחד.
- Narration:
  "בשיעור הבא ניקח את ה-slice הראשון ונבנה עבורו אסטרטגיית context ומודלים: כמה context באמת צריך, מתי Auto מספיק, ומתי כדאי להיות יותר מכוונים."

## Prompt Asset

`Help me turn this feature request into a safe delivery plan for an existing repository. Do not implement anything yet. First define acceptance criteria and non-goals, then identify the dependency order, then break the work into the smallest safe slices. For each slice, list likely files, key risks, and a stop condition so the agent does not overreach.`

## Recording Notes

- להראות feature שבאמת יכול להתפרק לכמה שכבות.
- לא להסתפק בפירוק "UI ואז backend" אם זה לא משקף את ה-repo המצולם.
- להדגיש שהמטרה היא reviewable slices, לא רק "ניהול זמן".

## Action Item

לקחת feature אמיתי אחד, לנסח לו acceptance criteria ו-non-goals, ואז לפרק אותו לפחות לשני slices שאפשר לבצע ולאמת בנפרד.
