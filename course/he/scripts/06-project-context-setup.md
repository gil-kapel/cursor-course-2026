# Script Master: 06 Project Context Setup

## Metadata

- Lesson ID: 06
- Title: הקשר פרויקט: rules, skills, memory, MCPs ותוספים
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך מגדירים ל-Cursor הקשר פרויקט יציב: כללים, skills, זיכרון, MCPs ותוספים, כדי לצמצם בלבול ולשפר דיוק.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: repo בלי הקשר מול repo עם הקשר מסודר.
- Narration:
  "Cursor יכול להיות מרשים גם בלי הקשר, אבל הוא הופך לכלי עבודה אמיתי רק כשמגדירים לו את הפרויקט נכון. בשיעור הזה נבנה את שכבת ההכוונה שהופכת תשובות טובות לעבודה עקבית."

### S02 | 00:25-01:10 | What Project Context Means

- Visual: תרשים של rules, skills, memory, MCPs, add-ons.
- Narration:
  "Project context הוא כל מה שעוזר ל-Cursor להבין איך לעבוד בפרויקט שלכם: מה חשוב לכם, אילו תבניות אתם מעדיפים, איזה כלים חיצוניים יש לו, ואיך הוא צריך להתנהג."

### S03 | 01:10-02:05 | Rules

- Visual: קובץ rules או דוגמה לעקרונות עבודה.
- Narration:
  "Rules הם כללי ברירת המחדל. הם מגדירים סגנון עבודה, שכבות, naming, בטיחות, ואיך נותנים תשובה. אם אתם חוזרים שוב ושוב על אותם תיקונים, כנראה שחסר לכם rule."

### S04 | 02:05-03:00 | Skills

- Visual: skill relevant to a task.
- Narration:
  "Skills הם ידע פרוצדורלי ארוז היטב. במקום להסביר כל פעם מחדש איך לעשות migration, לפרוס, או ליצור תוסף, skill טוב מכניס תהליך עבודה מוכן. זה חוסך prompt ארוך ומשפר עקביות."

### S05 | 03:00-03:55 | Project Memory

- Visual: תבנית קצרה של memory file.
- Narration:
  "Memory הוא המקום לשמור החלטות יציבות על הפרויקט: ארכיטקטורה, conventions, ספריות מועדפות, ודברים שאסור לשבור. זה לא מקום לתיעוד כל פרט קטן, אלא לזיכרון שחייב לעבור בין משימות."

### S06 | 03:55-05:05 | MCPs

- Visual: רשימת קטגוריות MCPs והדגשה של security.
- Narration:
  "MCPs מחברים את Cursor לכלים חיצוניים כמו browser, cloud, docs או GitHub. היתרון עצום, אבל גם האחריות. לא מפעילים הכול. בוחרים רק מה שרלוונטי, עם הרשאות מינימליות, ועם הבנה ברורה מה הכלי יודע לקרוא או לבצע."

### S07 | 05:05-06:00 | Add-ons and Extensions

- Visual: רשימת add-ons מומלצים לפי workflow.
- Narration:
  "תוספים והרחבות משלימים את החוויה. כאן חשוב לא להתפזר. בוחרים רק add-ons שמחזקים את התהליך: Git, linting, deployment, docs או browser tools. יותר מדי תוספים יוצרים רעש במקום יעילות."

### S08 | 06:00-07:10 | Minimal Safe Setup

- Visual: structure מוצע לתיקיית פרויקט.
- Narration:
  "בשלב ראשון מספיק להקים setup מינימלי: rules בסיסיים, skill או שניים שאתם באמת משתמשים בהם, memory קצר, MCPים רלוונטיים בלבד, ותוסף אחד או שניים משלימים. עדיף מעט וברור מאשר הרבה ולא עקבי."

### S09 | 07:10-08:10 | Let Cursor Propose the Setup

- Visual: prompt של setup context.
- Narration:
  "במקום להתחיל מאפס, אפשר לבקש מ-Cursor להציע context setup לפי סוג הפרויקט. הוא יכול להציע structure, rules, MCPs ותוספים, ואז אתם מאשרים רק מה שמתאים. זה בדיוק המקום שבו Plan ו-Agent עובדים יחד טוב."

### S10 | 08:10-09:00 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא נעבור מלבנות הקשר ללופ העבודה עצמו: איך לוקחים פיצ'ר חדש, מתכננים אותו, מממשים, בודקים, ומבצעים דיבוג בסבבים קטנים."

## Prompt Asset

`Set up a clean project context for Cursor in this repo. Propose rules, reusable prompts, minimal project memory, MCP servers to enable, and recommended add-ons/extensions. Show suggested file structure and security notes (least privilege, secrets handling), then ask for approval before creating anything.`

## Recording Notes

- להציג גם רשימת "לא להפעיל הכול בבת אחת".
- להדגיש least privilege בעת אזכור MCPs.
- להראות structure קטן וברור, לא עץ קבצים עמוס מדי.

## Action Item

לנסח setup מינימלי לפרויקט אחד שלכם: `rules` בסיסיים, זיכרון קצר של החלטות חשובות, ו-MCP אחד או שניים שבאמת נחוצים.
