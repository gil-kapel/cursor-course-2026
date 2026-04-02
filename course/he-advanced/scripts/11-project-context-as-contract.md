# Script Master: 11 Project Context as an Operating Contract

## Metadata

- Lesson ID: 11
- Title: הקשר פרויקט מתקדם: rules, memory, MCPs ותוספים כחוזה עבודה
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך project context עובר מ"נוחות ל-Cursor" ל"חוזה עבודה" עבור ה-repo והצוות: rules שמונעים קפיצות שכבה, memory ששומר החלטות יציבות, MCPs עם least privilege, ותוספים שתומכים ב-review ובאיכות.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: אותו repo עם context חלש מול context ברור ומחייב.
- Narration:
  "בשלב הזה בקורס כבר ברור שהבעיה איננה רק מה לבקש מה-agent. הבעיה היא מה קורה כשאותו repo פוגש עוד משימה, עוד מפתח, ועוד thread. כאן project context הופך מחומר עזר לחוזה עבודה."

### S02 | 00:25-01:15 | From Convenience to Contract

- Visual: two columns: "nice to have" מול "operating contract".
- Narration:
  "Context בסיסי עוזר לקבל תשובות טובות. Context מתקדם מגדיר איך עובדים: אילו שכבות מותר לגעת, מה נחשב validation מספיק, ואילו החלטות כבר לא פותחים מחדש בכל משימה."

### S03 | 01:15-02:15 | Rules That Prevent Architectural Drift

- Visual: rules לדוגמה על שכבות, naming וגבולות שינוי.
- Narration:
  "Rules טובים לא אומרים 'תכתוב קוד יפה'. הם מונעים drift. למשל: route לא קורא ישירות ל-data layer, לא קופצים יותר משתי שכבות בקריאה אחת, לא מוסיפים dependency בלי הסבר, ועוצרים לפני שינוי public API."

### S04 | 02:15-03:10 | Memory for Stable Decisions

- Visual: memory file עם החלטות יציבות, tradeoffs וספריות מועדפות.
- Narration:
  "Memory נועד להחלטות שחייבות לשרוד בין משימות: ארכיטקטורה, conventions, ספריות מועדפות, constraints סביב cache, async או schema. זה לא יומן עבודה; זה הזיכרון הקבוע של הפרויקט."

### S05 | 03:10-04:10 | MCPs With Least Privilege

- Visual: MCP אחד או שניים עם סימון הרשאות מינימליות.
- Narration:
  "MCP הוא מכפיל כוח, אבל גם surface area לסיכון. לכן לא מפעילים הכול. בוחרים רק מה שצריך, עם least privilege, ועם הבנה ברורה מה הכלי יודע לקרוא או לבצע. אם אין סיבה חדה, לא מחברים."

### S06 | 04:10-05:05 | Extensions That Support the Workflow

- Visual: GitLens, lint, Error Lens, Markdown tools.
- Narration:
  "גם תוספים צריכים לשרת את ה-workflow החדש: review, lint, בעיות על השורה, ו-docs נקיים. לא מחליפים את Cursor בעוד שכבת AI, אלא מחזקים visibility ואיכות."

### S07 | 05:05-06:10 | Let the Pain of the Capstone Shape the Context

- Visual: חיבור בין בעיות אמיתיות שראינו לבין rules/memory חדשים.
- Narration:
  "הדרך הטובה ביותר לעדכן context היא לא מלמעלה למטה, אלא מהכאבים האמיתיים של ה-capstone. אם היתה זליגה בין שכבות, מוסיפים rule. אם החלטה חזרה שלוש פעמים, מוסיפים memory. context טוב גדל מתוך בעיות אמיתיות."

### S08 | 06:10-07:15 | Minimal Contract, Not a Bureaucracy Layer

- Visual: short contract file versus giant process document.
- Narration:
  "המטרה היא לא לבנות בירוקרטיה. חוזה עבודה טוב הוא קצר, קריא, ואכיף. מספיק כדי ליישר קו, לא מספיק כדי להכביד. אם אף אחד לא יקרא אותו, הוא לא באמת context."

### S09 | 07:15-08:20 | A Practical Contract Template

- Visual: template עם sections: architecture, constraints, validation, tools.
- Narration:
  "תבנית טובה כוללת ארבעה אזורים: איך המערכת בנויה, מה אסור לשבור, איך מאמתים שינוי, ואילו כלים חיצוניים מותר להפעיל. עם זה גם Cursor וגם אדם חדש יכולים להיכנס למשימה מהר יותר."

### S10 | 08:20-09:00 | Close

- Visual: מעבר ל-handoff ו-PR prep.
- Narration:
  "בשיעור הבא נעביר את החוזה הזה הלאה: איך עושים handoff, איך כותבים PR summary, ואיך משאירים את ההקשר חי גם כשהמשימה עוברת בין אנשים."

## Prompt Asset

`Help me turn this repository's current working assumptions into a small operating contract for Cursor and the team. Propose four sections only: architecture boundaries, stable project decisions, validation expectations, and allowed MCP/tool usage with least privilege. Keep it short, explicit, and focused on preventing risky drift rather than describing everything in the repo.`

## Recording Notes

- להשתמש בכאבים אמיתיים מה-capstone כדי להצדיק כל rule או memory entry.
- להדגיש "חוזה עבודה" ולא "עוד מסמך הסבר".
- להראות פחות options ויותר decision points.

## Action Item

לנסח חוזה עבודה קצר לפרויקט אחד שלכם עם ארבעה חלקים בלבד: גבולות ארכיטקטורה, החלטות יציבות, ציפיות validation, וכלי חוץ שמותר להפעיל.
