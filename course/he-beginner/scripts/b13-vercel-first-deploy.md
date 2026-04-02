# Script Master: B13 First Deploy with Vercel

## Metadata

- Lesson ID: B13
- Title: פריסה ראשונה עם Vercel
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording
- Track: beginner

## Lesson Goal

לחבר מאגר GitHub אחד (אחרי B12) ל-**Vercel**, לקבל כתובת חיה, להבין **preview** מול **production** ברמת מתחילים, ולדעת היכן מגדירים משתני סביבה — בלי לשים סודות בקוד או בצ'אט.

## Examples (דוגמאות קונקרטיות)

### זרימה אחת פשוטה

- Repo ב-GitHub עם אתר סטטי או פרויקט קטן מ-B10
- התחברות ל-Vercel עם חשבון GitHub
- Import Project → בחירת אותו repo
- Deploy → פתיחת ה-URL שמוצג

### מה זה preview לעומת production (בקצרה)

- **Preview**: גרסה לבדיקה, לרוב אחרי push לענף או PR — לא בהכרח מה שהעולם רואה כ"רשמי"
- **Production**: מה שמוגדר כגרסה החיה העיקרית של האתר

### מה לא עושים בשיעור הזה

- דומיין מותאם אישית
- הגדרות build מורכבות
- ניתוח עמוק של שרתים או serverless

## User tasks — pause and verify (עצירות בכיתה)

**הנחיה למנחה:** דורשים ש-B12 הושלם (קוד ב-GitHub). אם מישהו דילג — לחזור ל-push לפני Vercel.

### משימה 1 — לחבר את ה-repo ל-Vercel (אחרי S03)

- **עצירה:** אחרי ייבוא הפרויקט מה-GitHub.
- **מה לעשות:** לייבא את אותו repo שדחפתם ב-B12 ל-Vercel ולהפעיל deploy ראשון.
- **איך לוודא הצלחה:** מופיע פרויקט ב-dashboard של Vercel עם build שהסתיים (או עם הודעת שגיאה ברורה שאפשר לטפל בה).

### משימה 2 — לפתוח URL חי (אחרי S04)

- **עצירה:** אחרי סיום deploy מוצלח.
- **מה לעשות:** לפתוח את כתובת האתר שנתן Vercel ולוודא שהדף נטען.
- **איך לוודא הצלחה:** רואים את התוכן הצפוי (גם אם מינימלי) בדפדפן.

### משימה 3 — לזהות preview מול production (אחרי S05)

- **עצירה:** אחרי ההסבר על preview ו-production.
- **מה לעשות:** לרשום במשפט אחד: איזו כתובת או מצב הייתם משתפים עם מישהו חיצוני לבדיקה, ואיזו הייתם מגדירים כ"רשמית" אצלכם.
- **איך לוודא הצלחה:** ההבחנה לא מבלבלת בין "בדקתי" ל"שחררתי".

## Scene List

### S01 | 00:00-00:35 | Hook

- Visual: GitHub repo → Vercel → דפדפן עם URL.
- Narration:
  "יש לכם קוד ב-GitHub — מצוין. עכשיו הופכים אותו לאתר עם כתובת אמיתית. נשתמש ב-Vercel כספק אחד ברור, בלי להתפזר."

### S02 | 00:35-01:30 | Why One Vendor Here

- Narration:
  "במסלול הבסיסי בוחרים נתיב אחד שעובד לרוב האתרים הפשוטים. Vercel מתחבר ל-GitHub בקלות ונותן preview ו-production בלי להפוך אתכם למנהלי ענן."

### S03 | 01:30-03:30 | Import from GitHub and Deploy

- Visual: vercel.com — New Project, Import, Deploy.
- Narration:
  "מתחברים ל-Vercel, מייבאים את ה-repo, מאשרים הגדרות ברירת מחדל לפרויקט פשוט, ומריצים deploy. אם ה-build נכשל — מעתיקים את הודעת השגיאה ושואלים ב-Ask מה הכי סביר שחסר."
- Instructor cue: עצירה — **משימה 1** (חיבור repo ו-deploy).

### S04 | 03:30-04:45 | Open the Live URL

- Visual: לחיצה על הקישור ב-Vercel.
- Narration:
  "אחרי deploy מוצלח יש כתובת. פותחים אותה, מרעננים, בודקים שהדף נטען. זו נקודת הניצחון של המסלול הבסיסי מבחינת 'עולם רואה את מה שבניתי'."
- Instructor cue: עצירה — **משימה 2** (פתיחת URL חי).

### S05 | 04:45-05:50 | Preview vs Production (Beginner Level)

- Visual: שני תוויות או שני קישורים בממשק.
- Narration:
  "חשוב לא לבלבל: לפעמים יש לכם קישור לבדיקה וקישור לגרסה שמוגדרת כ-production. בשיתוף חיצוני — מסבירים מה בדקתם ומה באמת חי."
- Instructor cue: עצירה — **משימה 3** (preview מול production).

### S06 | 05:50-06:50 | Environment Variables (Concept Only)

- Narration:
  "אם האתר צריך מפתח API — לא בקובץ ב-GitHub ולא בצ'אט. ב-Vercel יש מקום להגדרת משתני סביבה. בשלב הזה רק יודעים שזה קיים; אם אין לכם סודות — מדלגים."

### S07 | 06:50-07:50 | What We Skip (On Purpose)

- Narration:
  "דומיין משלכם, rollback מורכב, ותשתית AWS — שייכים למסלול המתקדם. כאן השלמנו פריסה ראשונה בטוחה וברורה."

### S08 | 07:50-09:00 | Close — Basic Track Complete

- Visual: קורס מתקדם.
- Narration:
  "סיימתם את המסלול הבסיסי: מ-Cursor דרך GitHub ועד כתובת חיה. במסלול המתקדם תלמדו פריסה עם אימות, סיכונים ורולבק — כולל בסיס ב-AWS. תודה שהגעתם עד כאן."

## Prompt Asset

`My static or simple web project is already on GitHub at [REPO URL]. I want a first deploy on Vercel only. Give me a short checklist: connect GitHub to Vercel, import the repo, run deploy, find the live URL, and tell preview vs production in two sentences. Mention where to set env vars in Vercel if needed, and warn not to paste secrets into chat or commit them.`

## Recording Notes

- לא להציג מפתחות אמיתיים.
- אם הממשק של Vercel השתנה, להדגים את העקרון לא שם כל כפתור.
- לוודא שהדמו משתמש באותו repo כמו ב-B12.

## Action Item

לפתוח את כתובת האתר מ-Vercel ולשמור אותה (סימנייה או הערה) עם משפט אחד: האם זה preview או production אצלכם.
