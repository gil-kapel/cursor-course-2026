# Script Master: B04 Git as Save Points (GUI Only)

## Metadata

- Lesson ID: B04
- Title: Git כרשת ביטחון (נקודות שמירה)
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording
- Track: beginner

## Lesson Goal

להציג Git כמכונת זמן / save points; commit ראשון דרך Source Control ב-Cursor בלי שורת פקודה; הודעות commit ברורות.

## Examples (דוגמאות קונקרטיות)

### הודעות commit טובות למתחילים

- `add first practice note`
- `update page title text`
- `save working version before agent changes`

### הודעות commit חלשות שכדאי להימנע מהן

- `fix`
- `stuff`
- `changes`

### מתי לעשות commit

- לפני שינוי גדול של Agent.
- אחרי נקודת יציבות קטנה שעובדת.
- לפני שמנסים כיוון ניסיוני שלא בטוחים לגביו.

## User tasks — pause and verify (עצירות בכיתה)

**הנחיה למנחה:** כל התרגול כאן מתבצע דרך הממשק הגרפי של Source Control.

### משימה 1 — לאתחל מאגר מקומי (אחרי S03)

- **עצירה:** אחרי `Initialize Repository`.
- **מה לעשות:** לאתחל Git בתיקיית התרגול דרך הממשק.
- **איך לוודא הצלחה:** Source Control כבר לא מציע רק את כפתור האתחול, והפרויקט מזוהה כמאגר מקומי.

### משימה 2 — commit ראשון אמיתי (אחרי S04)

- **עצירה:** אחרי שלב ה-stage וה-commit.
- **מה לעשות:** לשנות קובץ קטן, להוסיף ל-stage, ולבצע commit עם הודעה ברורה של 3-6 מילים.
- **איך לוודא הצלחה:** יש נקודת שמירה חדשה בהיסטוריה, וההודעה לא גנרית כמו `fix`.

### משימה 3 — כלל "שמירה לפני ניסוי" (אחרי S06)

- **עצירה:** אחרי ההסבר על commit לפני עבודת Agent מסוכנת.
- **מה לעשות:** לכתוב לעצמכם כלל עבודה אחד שמתחיל ב-"לפני שאני מבקש שינוי גדול, אני..."
- **איך לוודא הצלחה:** הכלל מזכיר commit או save point לפני ניסוי.

## Scene List

### S01 | 00:00-00:40 | Hook

- Visual: סוכן משנה הרבה קבצים ב-diff.
- Narration:
  "סוכן יכול ליצור ולמחוק קבצים מהר. אם משהו השתבש, אתם רוצים כפתור 'חזרה לשמירה האחרונה'. Git הוא הכפתור הזה — ונלמד אותו קודם מהממשק הגרפי."

### S02 | 00:40-01:35 | Analogy: Game Saves and Google Docs History

- Visual: אייקונים ציוריים.
- Narration:
  "Commit הוא נקודת שמירה במשחק, או צילום של גרסה ב-Google Docs. לא 'ענפים' ולא 'מיזוג' בשלב הזה — רק: שמרתי מצב, אפשר לחזור אם צריך."

### S03 | 01:35-02:45 | Initialize Repository (GUI)

- Visual: Source Control → Initialize Repository.
- Narration:
  "בפעם הראשונה בפרויקט, מאתחלים מאגר מקומי מתפריט ניהול הגרסאות. זה יוצר תיקייה נסתרת שמתעדת היסטוריה — עדיין בלי GitHub."
- Instructor cue: עצירה — **משימה 1** (לאתחל מאגר מקומי).

### S04 | 02:45-04:00 | Stage and Commit

- Visual: קובץ משתנה → + ל-stage → הודעה → Commit.
- Narration:
  "משנים קובץ קטן — רואים צבע בשינוי. מוסיפים ל-stage, כותבים הודעה בעברית או באנגלית שמסבירה מה נשמר, לוחצים Commit. זו נקודת השמירה."
- Instructor cue: עצירה — **משימה 2** (commit ראשון אמיתי).

### S05 | 04:00-05:00 | Status Colors (Conceptual)

- Visual: ירוק / צהוב / אפור בהסבר.
- Narration:
  "לא חייבים לזכור כל צבע. העיקרון: קבצים חדשים, קבצים ערוכים, ומה כבר ב-commit. אם משהו נראה מוזן — עוצרים ושואלים את Cursor ב-Ask."

### S06 | 05:00-06:00 | Before Risky Agent Work

- Visual: צ'קליסט על המסך.
- Narration:
  "לפני שמבקשים מהאייג'נט שינוי גדול — commit. זה לוקח שניות וחוסך שעות. 'שמירה לפני ניסוי'."
- Instructor cue: עצירה — **משימה 3** (שמירה לפני ניסוי).

### S07 | 06:00-07:00 | What We Skip (On Purpose)

- Visual: ענפים, merge, origin — מסומנים "מסלול מתקדם".
- Narration:
  "לא נלמד כאן worktrees, branches מורכבים, או פתרון קונפליקטים. זה במסלול המתקדם. כאן רק ביטחון בסיסי."

### S08 | 07:00-08:00 | Optional: GitHub Desktop Mention

- Visual: לוגו GitHub Desktop.
- Narration:
  "אם הממשק ב-Cursor עדיין מבלבל, אפשר להשתמש גם ב-GitHub Desktop לאותן פעולות בסיסיות — אותו רעיון של commit."

### S09 | 08:00-08:30 | Close

- Visual: B05.
- Narration:
  "בשיעור הבא נחבר חשבון Cursor, נבין מנוי בקצרה, ונבחר מודל בלי לבזבז."

## Prompt Asset

`I initialized a git repo in Cursor for my practice folder. Explain in simple steps (for a non-developer) how to stage changed files, write a good commit message in one line, and commit using only the Source Control UI. Also remind me when to commit before asking the Agent for big changes.`

## Recording Notes

- להדגים commit אמיתי על קובץ טקסט.
- לא להכניס ל-CLI של git בבסיסי.

## Action Item

לבצע commit אחד עם הודעה משמעותית (לא "fix") אחרי שינוי קטן בפרויקט התרגול.
