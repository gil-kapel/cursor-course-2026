# Script Master: B12 GitHub — Remote Backup and First Push

## Metadata

- Lesson ID: B12
- Title: גיבוי בענן: GitHub ו-push ראשון
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording
- Track: beginner

## Lesson Goal

חשבון GitHub, מאגר ראשון, חיבור הפרויקט המקומי ל-remote, ו-push ראשון — כך שהקוד וההיסטוריה נשמרים בענן ונראים ב-GitHub. **ללא** פריסה לספק נפרד בשיעור הזה; זה מגיע ב-B13 עם Vercel.

## Examples (דוגמאות קונקרטיות)

### מה אמור להופיע ב-GitHub אחרי push מוצלח

- רשימת קבצים שמתאימה לפרויקט המקומי
- לפחות commit אחד עם הודעה ברורה
- ענף (לרוב `main`) עם היסטוריה

### טעויות נפוצות ב-push ראשון

- יצירת repo עם README כשדוחפים פרויקט קיים — עלול ליצור קונפליקט; לעקוב אחרי ההנחיות על המסך
- לשכוח לבצע commit מקומי לפני push
- להריץ פקודות Git בלי להבין — חוזרים ל-B03

## User tasks — pause and verify (עצירות בכיתה)

**הנחיה למנחה:** המטרה בשיעור הזה היא **רק** GitHub + push. הפריסה ל-URL חי ב-B13.

### משימה 1 — מאגר GitHub (אחרי S02)

- **עצירה:** אחרי יצירת החשבון וה-repo.
- **מה לעשות:** ליצור repository או לזהות repo קיים לפרויקט התרגול.
- **איך לוודא הצלחה:** יש URL של GitHub שאפשר לפתוח בדפדפן.

### משימה 2 — push ראשון (אחרי S04)

- **עצירה:** אחרי החיבור ל-remote וההסבר מה עושה push.
- **מה לעשות:** לבצע push מהפרויקט המקומי ל-GitHub.
- **איך לוודא הצלחה:** ה-commit והקבצים מופיעים ב-GitHub, לא רק במחשב המקומי.

### משימה 3 — לוודא שרואים את הקוד בענן (אחרי S05)

- **עצירה:** אחרי ההדגמה של בדיקה ב-GitHub.
- **מה לעשות:** לפתוח את ה-repo בדפדפן ולוודא שקובץ אחד לפחות שאתם מכירים מופיע שם.
- **איך לוודא הצלחה:** מישהו אחר יכול לראות את אותו קוד בלי גישה למחשב שלכם (לפי הגדרות ה-repo).

## Scene List

### S01 | 00:00-00:40 | Hook

- Visual: תיקייה מקומית → לוגו GitHub → רשימת קבצים באתר.
- Narration:
  "עד עכשיו הכול היה על המחשב שלכם. GitHub הוא גיבוי ונקודת שיתוף: אחרי push הקוד שלכם נשמר בענן ואפשר להמשיך ממנו לפריסה — בשיעור הבא."

### S02 | 00:40-01:50 | Create GitHub Account and Empty Repo

- Visual: github.com new repository.
- Narration:
  "יוצרים חשבון אם אין, פותחים repository. אם דוחפים פרויקט קיים, בוחרים לפי ההנחיות על המסך — לפעמים בלי README ראשוני כדי לא ליצור התנגשות."
- Instructor cue: עצירה — **משימה 1** (מאגר GitHub).

### S03 | 01:50-03:10 | Connect Remote and Push (GUI-First)

- Visual: Cursor / Git UI — publish או הגדרת remote.
- Narration:
  "מחברים את המאגר המקומי ל-remote. ב-Cursor יש לעיתים Publish או הגדרת `origin`. אם הסוכן מציע פקודות — חוזרים ל-B03 לפני הרצה."

### S04 | 03:10-04:20 | What Push Does (Plain Language)

- Narration:
  "Push מעתיק את היסטוריית ה-commits לשרת GitHub. זה גיבוי, שקיפות, ונקודת יציאה לכל מה שיבוא אחר כך — כולל פריסה."
- Instructor cue: עצירה — **משימה 2** (push ראשון).

### S05 | 04:20-05:30 | Verify on GitHub

- Visual: דפדפן — קבצים ו-commit ב-repo.
- Narration:
  "נכנסים ל-GitHub ובודקים: הקבצים שם, ההודעה על ה-commit הגיונית. אם משהו חסר — חוזרים ל-Cursor ולא לנחש."
- Instructor cue: עצירה — **משימה 3** (לוודא קוד בענן).

### S06 | 05:30-06:40 | Secrets Stay Out of the Repo (Teaser)

- Narration:
  "מפתחות API וסיסמאות לא שייכים ל-commit. אם צריך סוד לפרויקט — נגדיר אותו אצל ספק הפריסה. בשיעור הבא, עם Vercel, נראה איפה זה יושב ברמת מתחילים."

### S07 | 06:40-07:30 | Bridge to B13

- Visual: לוגו Vercel קטן, "Next: B13".
- Narration:
  "עכשיו שהקוד ב-GitHub, אפשר לחבר את אותו repo ל-Vercel ולקבל כתובת חיה. זה השיעור הבא — אל תדלגו עליו אם אתם רוצים URL אמיתי."

### S08 | 07:30-08:30 | Close

- Visual: B13.
- Narration:
  "בשיעור הבא נפרוס עם Vercel: ייבוא מה-GitHub, deploy, והבדל בסיסי בין preview ל-production. אחרי זה המשך טבעי למסלול המתקדם."

## Prompt Asset

`I have a local project in Cursor with git initialized. I created a GitHub repository at [URL]. Give me a beginner-safe checklist to connect the local repo to GitHub and push main (or the default branch), using GUI steps when possible. Do NOT include Vercel or other deploy platforms yet — only GitHub. Warn me in one line about not committing secrets.`

## Recording Notes

- לא להציג מפתחות אמיתיים.
- להפריד בבירור: B12 = GitHub בלבד; B13 = Vercel.

## Action Item

לבצע push אחד ל-GitHub ולפתוח את ה-repo בדפדפן כדי לוודא שהקבצים מופיעים בענן.
