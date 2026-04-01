# Script Master: 12 Cloud Deployment: Vercel and Alternatives

## Metadata

- Lesson ID: 12
- Title: פריסה לענן: Vercel ואלטרנטיבות
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך מחברים את מה שנבנה ב-Cursor לפריסה אמיתית: deploy בסיסי, env vars, preview מול production, ושיקולים בבחירת ספק כמו Vercel, Render, Netlify, Railway או Fly.io.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: פרויקט עובד מקומית אבל עדיין לא נגיש ברשת.
- Narration:
  "לבנות פיצ'ר מקומית זה לא סוף הדרך. עד שהפרויקט רץ בענן, עם build תקין וכתובת אמיתית, העבודה עדיין לא הושלמה."

### S02 | 00:25-01:15 | The Core Deployment Picture

- Visual: local -> Git provider -> cloud provider -> live URL.
- Narration:
  "בפשטות, deploy הוא שרשרת ברורה: קוד עובר ל-repo, ספק הענן בונה אותו, מגדיר סביבה, ומעלה גרסה שאפשר לבדוק. ברגע שמבינים את השרשרת הזאת, גם שגיאות deploy נהיות הרבה פחות מסתוריות."

### S03 | 01:15-02:10 | Why Vercel Is a Good Starting Point

- Visual: דוגמת dashboard של Vercel.
- Narration:
  "Vercel הוא נקודת פתיחה טובה במיוחד לפרויקטי frontend ו-full stack פשוטים, כי החיבור ל-Git מהיר, ה-preview builds נוחים, והחוויה למתחילים חלקה יחסית. זה לא תמיד הספק היחיד, אבל הוא קל מאוד להדגמה."

### S04 | 02:10-03:10 | Preview vs Production

- Visual: שני labels על המסך: preview ו-production.
- Narration:
  "אחת ההבחנות הכי חשובות היא בין preview ל-production. Preview מיועד לבדיקה של שינוי לפני merge או שחרור. Production הוא מה שהמשתמשים באמת רואים. אם לא שומרים על ההבחנה הזאת, קל מאוד לשחרר מוקדם מדי."

### S05 | 03:10-04:05 | Environment Variables

- Visual: env vars במסך הגדרות, עם הדגשה לא להדליף secrets.
- Narration:
  "env vars הם חלק קריטי מהפריסה. מפתחות API, credentials וכתובות שירותים לא נכנסים לקוד. הם נשמרים בהגדרות הסביבה של ספק הענן. זו גם נקודת בטיחות: לא מדביקים secrets בצ'אט ולא מקומיטים אותם ל-repo."

### S06 | 04:05-05:05 | Common Deployment Failures

- Visual: build failed, missing env, wrong start command.
- Narration:
  "רוב כשלי הפריסה הראשונים חוזרים על עצמם: build command שגוי, env var חסר, הגדרת framework לא מתאימה, או תלות שעבדה מקומית אבל לא בענן. ברגע שיודעים לחפש את המקומות האלה, הדיבוג מתקצר משמעותית."

### S07 | 05:05-06:10 | Choosing an Alternative Provider

- Visual: טבלה קצרה של Vercel, Render, Netlify, Railway, Fly.io.
- Narration:
  "לא כל פרויקט מתאים לאותו ספק. Vercel חזק מאוד ב-frontend. Render ו-Railway נוחים לאפליקציות backend ושירותים מתמשכים. Netlify טוב לאתרים סטטיים ולפרונטנד. Fly.io מתאים כשצריך יותר שליטה על הרצה. המטרה היא לא לזכור הכול, אלא להבין איזה סוג פרויקט אתם מפריסים."

### S08 | 06:10-07:10 | Use Cursor to Prepare Deployment

- Visual: prompt שמבקש checklist ל-deploy.
- Narration:
  "לפני deploy אפשר לבקש מ-Cursor להכין checklist: מה build command, אילו env vars צריך, מה health check סביר, ומה צריך לבדוק ב-preview לפני promotion ל-production. זה שימוש מצוין ב-AI כמסדר תהליך."

### S09 | 07:10-08:20 | A Safe First Deployment Flow

- Visual: flow קצר של push -> preview -> validate -> production.
- Narration:
  "זרימת deploy בטוחה נראית כך: מעלים שינוי קטן, בודקים preview, מאמתים env vars, מריצים smoke test קצר, ורק אז מקדמים ל-production. לא חייבים מערכת DevOps כבדה כדי לעבוד מסודר."

### S10 | 08:20-09:00 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא נחבר את הכול לפרויקט מסכם קטן, ונעבור יחד על המסלול המלא: context, planning, implementation, review, debugging ו-deploy."

## Prompt Asset

`Prepare a deployment checklist for this project. Identify the likely platform fit first (Vercel, Render, Netlify, Railway, or Fly.io), then list build/start requirements, required env vars, preview validation steps, common failure points, and the safest order for a first deployment.`

## Recording Notes

- להדגיש preview מול production.
- להזכיר secrets handling בצורה מפורשת.
- לא להפוך את השיעור להשוואה עמוקה מדי בין כל ספקי הענן.

## Action Item

להכין checklist deploy ראשוני לפרויקט אחד שלכם: פלטפורמה מתאימה, `build` command, `env vars` נדרשים, ושלוש בדיקות קצרות ל-preview.
