# Script Master: 12 AWS Basics — Static Site with S3 and CloudFront

## Metadata

- Lesson ID: 12
- Title: AWS בסיסי: S3, CloudFront, אימות ורולבק
- Target duration: 10:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

לחבר את מה שנבנה ב-Cursor לפריסה **מוגבלת ומקצועית ב-AWS**: אתר סטטי ב-**S3** מאחורי **CloudFront**, עם הבנה של Region, הרשאות מינימליות (IAM ברמת עיקרון), משתני סביבה וסודות, בדיקות אחרי deploy, ו-**מנטליות רולבק** — בלי ללמד את כל הענן.

## למה AWS כאן ולא במסלול הבסיסי

- במסלול הבסיסי השתמשנו ב-**Vercel** (B13) לנתיב קצר וברור.
- כאן נלמד שכבת תשתית: חשבון, אזור, אחסון, CDN, והפרדת סודות — מתאים לסיכון ולשליטה שצוותים דורשים.

## Scene List

### S01 | 00:00-00:30 | Hook

- Visual: Vercel לוגו קטן → AWS Console.
- Narration:
  "Vercel נותן פריסה מהירה. AWS מכריחים להבין כמה החלטות תשתית: איפה נמצאים הנתונים, מי רשאי לגעת, ואיך מחזירים גרסה אם משהו השתבש. זה השיעור שמחברים delivery לענן אמיתי — בנתיב אחד מצומצם."

### S02 | 00:30-01:20 | The Narrow Path We Teach

- Visual: דיאגרמה: build artifacts → S3 bucket → CloudFront → URL.
- Narration:
  "לא נלמד את כל AWS. נלמד נתיב אחד: קבצים סטטיים ב-bucket ב-S3, חשיפה לעולם דרך CloudFront, בדיקה קצרה, ומה עושים כשצריך לחזור אחורה. כל דבר אחר — לתיעוד או לקורס ענן נפרד."

### S03 | 01:20-02:15 | Account, Region, and Least Privilege (Concept)

- Visual: בחירת Region; תזכורת IAM.
- Narration:
  "חשבון AWS, בחירת Region עקבית, והרעיון של הרשאות מינימליות: משתמש או תפקיד שמיועד רק להעלאה והפצה — לא Administrator לכל הפרויקט. אם אין לכם עדיין IAM מסודר — לפחות תדעו שזו היעד."

### S04 | 02:15-03:25 | S3 Bucket for Static Hosting

- Visual: יצירת bucket, העלאת `index.html`, חסימת גישה ישירה לעומת גישה דרך CloudFront.
- Narration:
  "ה-bucket הוא האחסון. לפרויקט סטטי מעלים את תוצרי הבנייה — לא את מקור ה-TypeScript הגולמי אם יש build. מבינים למה בדרך כלל לא פותחים את האתר ישירות מה-bucket לציבור, אלא דרך CDN."

### S05 | 03:25-04:35 | CloudFront in Front

- Visual: התחלה של distribution, origin ל-bucket, כתובת דומיין CloudFront.
- Narration:
  "CloudFront מפיץ את הקבצים מהקצה, מקטין עומס על ה-bucket, ונותן נקודת כניסה יציבה לבדיקות. לא חייבים להבין כל הגדרה — חייבים להבין שהכתובת שאתם בודקים היא זו שהמשתמשים ייראו."

### S06 | 04:35-05:40 | Secrets and Config

- Visual: אין API keys ב-repo; הערה על Parameter Store / Secrets Manager כרעיון.
- Narration:
  "לאתר סטטי טהור לרוב אין סודות בצד הדפדפן. אם יש צורך ב-backend או במפתחות — הם לא ב-Git ולא בצ'אט. ב-AWS יש מקומות ייעודיים; בשלב הזה מכירים את העיקרון ולא מקימים את כל השירותים."

### S07 | 05:40-06:50 | Post-Deploy Verification

- Visual: רענון דף, קוד סטטוס, גרסת קובץ.
- Narration:
  "אחרי deploy מריצים smoke check קצר: הדף נטען, נכסים סטטיים נטענים, אין שגיאות קריטיות בקונסול. אם משהו חסר — חוזרים ל-artifacts ול-cache לפני שמאשימים את המודל."

### S08 | 06:50-07:55 | Rollback Mindset

- Visual: commit טוב מול commit רע; העלאה מחדש או invalidation.
- Narration:
  "רולבק אצלנו הוא לא כפתור קסם: זה לחזור לגרסת קבצים שידועה שעובדת, לפרוס אותה מחדש, ואם צריך — לנקות או לרענן CDN. חשוב מזה: מתי לא משחררים ל-production בכלל."

### S09 | 07:55-08:50 | Use Cursor for the Checklist, Not the Keys

- Visual: prompt ל-checklist בלי להדביק secrets.
- Narration:
  "מבקשים מ-Cursor רשימת בדיקות, סדר פעולות, ונקודות כשל נפוצות — בלי להדביק מפתחות. ה-agent הוא עוזר תהליך, לא מקום לאחסן סודות."

### S10 | 08:50-10:00 | Close

- Visual: שיעור 13 capstone / publishing.
- Narration:
  "עכשיו יש לכם שני מוחות פריסה: Vercel למהירות, ו-AWS לנתיב סטטי מבוקר. בשיעור המסכם נחבר את הלופ המלא; אחריו נסגור איך אורזים workflow לפרסום ולוקליזציה."

## Prompt Asset

`I need a constrained AWS deployment checklist for a static site using S3 + CloudFront only. Assume build output is in /dist. List steps in order: bucket policy mindset, upload strategy, CloudFront origin, basic verification, common failure points (403/404), and rollback concept. Do not ask me to paste secrets; tell me where secrets belong if the project later needs them. Keep it concise.`

## Recording Notes

- לא להציג Access Keys אמיתיים או ARNs רגישים.
- אם ממשק AWS השתנה, להדגים עקרון: אחסון → CDN → בדיקה.
- להדגיש שהשיעור מכוון לסטטי; אפליקציות עם שרת דורשות שירותים נוספים.

## Action Item

לכתוב checklist אישי של חמש נקודות: Region, bucket, CloudFront URL, בדיקה אחרי deploy, ומה תעשו ברולבק — בלי לפתוח יותר משירות אחד מעבר ל-S3 ו-CloudFront לפרויקט סטטי.
