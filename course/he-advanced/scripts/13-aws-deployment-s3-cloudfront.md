# Script Master: 13 AWS Basics — Static Site with S3 and CloudFront

## Metadata

- Lesson ID: 13
- Title: פריסה, אימות ורולבק — AWS בסיסי (S3 + CloudFront)
- Target duration: 10:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

לחבר את מה שנבנה ב-Cursor לפריסה **מוגבלת ומקצועית ב-AWS**: אתר סטטי ב-**S3** מאחורי **CloudFront**, עם הבנה של Region, הרשאות מינימליות, סודות מחוץ ל-repo, בדיקות אחרי deploy, ומנטליות **rollback**.

## למה AWS כאן ולא במסלול הבסיסי

- במסלול הבסיסי השתמשנו ב-**Vercel** לנתיב קצר וברור.
- כאן נלמד שכבת תשתית מעט יותר אמיתית: אחסון, CDN, verification ודרך חזרה כשמשהו משתבש.

## Scene List

### S01 | 00:00-00:30 | Hook

- Visual: מעבר קצר מ-Vercel ל-AWS Console.
- Narration:
  "Vercel נותן מהירות. AWS מכריחים להבין יותר שליטה: איפה הקבצים יושבים, מי ניגש אליהם, ואיך חוזרים לגרסה יציבה אם deploy אחד שבר משהו. זה שיעור release, לא שיעור ענן כללי."

### S02 | 00:30-01:20 | The Narrow Path We Teach

- Visual: דיאגרמה: build artifacts -> S3 bucket -> CloudFront -> live URL.
- Narration:
  "לא נלמד את כל AWS. נלמד נתיב אחד מצומצם: אתר סטטי, bucket אחד, distribution אחד, URL אחד לבדיקה, ורעיון ברור של rollback. כל דבר מעבר לזה שייך כבר ל-stack אחר."

### S03 | 01:20-02:15 | Region, Access, and Least Privilege

- Visual: בחירת Region ותזכורת על IAM.
- Narration:
  "עוד לפני deploy צריך לחשוב תפעולית: באיזה Region עובדים, מי רשאי להעלות artifacts, ומי לא אמור להחזיק Administrator בלי צורך. לא חייבים לבנות IAM מושלם בשיעור הזה, אבל חייבים להבין למה least privilege משנה."

### S04 | 02:15-03:20 | S3 as Artifact Storage

- Visual: bucket עם קבצי build.
- Narration:
  "ה-bucket כאן הוא מקום לתוצרי build, לא למחסן של כל ה-repo. מעלים רק את מה שצריך כדי לשרת את האתר החי. זה נשמע טריוויאלי, אבל זאת בדיוק המשמעת שמבדילה release נקי מבלגן."

### S05 | 03:20-04:25 | CloudFront as the Public Edge

- Visual: distribution מול origin ב-S3.
- Narration:
  "CloudFront הוא לא רק עוד שירות. הוא שכבת ההגשה הציבורית שלכם. הוא זה שהמשתמשים יפגשו, והוא זה שבודקים אחרי deploy. לא חייבים להבין כל toggle, אבל חייבים להבין את התפקיד שלו ב-release."

### S06 | 04:25-05:20 | Secrets Stay Out of the Repo

- Visual: תזכורת חזותית: no secrets in Git / no secrets in chat.
- Narration:
  "גם אם האתר סטטי, חשוב להטמיע את ההרגל עכשיו: סודות לא יושבים ב-Git ולא מודבקים ל-agent. אם בעתיד יש backend, API keys או credentials, הם שייכים למקום ייעודי ולא ל-thread העבודה."

### S07 | 05:20-06:30 | Post-Deploy Verification

- Visual: smoke checks אחרי URL חי.
- Narration:
  "deploy לא נגמר כשקבצים עלו. הוא נגמר כשבדקתם URL חי: שהדף נטען, שה-assets עולים, שאין שגיאות קריטיות, ושהגרסה החדשה היא באמת זו שאתם מצפים לראות."

### S08 | 06:30-07:40 | Rollback Mindset

- Visual: known good artifact מול broken release.
- Narration:
  "Rollback כאן הוא קודם כול מנטליות. אתם צריכים לדעת מהי הגרסה האחרונה שידועה כתקינה, ואיך לחזור אליה אם ה-release החדש לא עומד ב-smoke checks. לפעמים האומץ לא לשחרר הוא חלק מהמקצועיות."

### S09 | 07:40-08:50 | Use Cursor for Process, Not for Secrets

- Visual: prompt ל-checklist ו-failure points.
- Narration:
  "Cursor יכול לעזור לבנות checklist, להסביר failure points, ולסכם verification steps. אבל הוא לא המקום למפתחות, tokens או credentials. הוא עוזר לתהליך release, לא מחליף משמעת תשתית."

### S10 | 08:50-10:00 | Close

- Visual: מעבר לשיעור packaging/localization.
- Narration:
  "עכשיו יש לנו release אמיתי: שינוי, review, handoff, deploy, verification ו-rollback mindset. בשיעור האחרון נראה איך אורזים workflow כזה הלאה: publishing, export ולוקליזציה."

## Prompt Asset

`I need a constrained AWS deployment checklist for a static site using S3 + CloudFront only. Assume build output is in /dist. List the steps in order: bucket setup mindset, upload strategy, CloudFront origin, basic verification, common 403/404 failure points, and rollback concept. Do not ask me to paste secrets. Tell me where secrets belong if the project later needs them. Keep it concise and operational.`

## Recording Notes

- לא להציג Access Keys אמיתיים או פרטים רגישים.
- להדגים את העיקרון: artifacts -> S3 -> CloudFront -> verify.
- להדגיש שזה נתיב סטטי מצומצם, לא קורס ענן רחב.

## Action Item

לכתוב לעצמכם checklist release קצר של חמש נקודות: Region, artifact location, CloudFront URL, smoke checks, ומהו ה-known good state שאליו תחזרו אם ה-release ייכשל.
