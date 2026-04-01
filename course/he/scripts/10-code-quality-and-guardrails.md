# Script Master: 10 Code Quality and Guardrails

## Metadata

- Lesson ID: 10
- Title: איכות קוד ושומרי סף
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך מונעים מ-Cursor להכניס קוד מסוכן, לא קריא או לא בדוק: דרך בקשות review נכונות, שומרי סף טכניים, ואימות לפני commit או merge.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: שינוי "עובד" מקומית אבל מכניס רגרסיה.
- Narration:
  "אחת האשליות הכי מסוכנות בעבודה עם AI היא לחשוב שאם הקוד נראה סביר, הכול בסדר. בפועל, הרבה בעיות נכנסות דווקא דרך שינויים שנראים הגיוניים במבט ראשון."

### S02 | 00:25-01:10 | The Core Principle

- Visual: תרשים של implement -> review -> validate -> commit.
- Narration:
  "המטרה היא לא לסמוך פחות על Cursor, אלא לבנות מסלול שבו גם אם הוא טועה, הטעות נעצרת מוקדם. לכן צריך שומרי סף: review, lint, tests, ו-checklist ברור לפני commit."

### S03 | 01:10-02:05 | Ask for Risk Review, Not Praise

- Visual: prompt review טוב מול prompt כללי כמו 'מה דעתך על הקוד'.
- Narration:
  "כשמבקשים review, לא שואלים 'האם זה טוב'. מבקשים לחפש סיכונים: רגרסיות, edge cases, פגיעות אבטחה, פגיעה ב-readability, או בדיקות חסרות. review טוב הוא חשדני, לא מעודד."

### S04 | 02:05-03:00 | Guardrail 1: Small Diffs

- Visual: diff קטן מול diff ענק.
- Narration:
  "הגנה ראשונה היא diff קטן. ככל שהשינוי מצומצם יותר, כך קל יותר לסקור אותו ולוודא שהוא לא שבר משהו. אם Cursor מנסה לשנות חצי מערכת כדי לפתור בעיה קטנה, זה סימן לעצור."

### S05 | 03:00-03:55 | Guardrail 2: Validation Checks

- Visual: lint, tests, build, manual check.
- Narration:
  "הגנה שנייה היא אימות. לא כל שינוי צריך pipeline ענק, אבל כל שינוי צריך לפחות בדיקה אחת רלוונטית: test, lint, typecheck, build או בדיקה ידנית חוזרת. בלי זה אין לכם הוכחה."

### S06 | 03:55-05:00 | Guardrail 3: Explicit Constraints

- Visual: prompt עם constraints כמו 'אל תשנה API', 'השאר diff מינימלי'.
- Narration:
  "הגנה שלישית היא להגדיר גבולות מפורשים. אפשר לבקש: אל תשנה public API, אל תיגע בסכימה, אל תוסיף dependencies, עצור לפני commit, והסבר סיכון לפני עריכה. Cursor מגיב הרבה יותר טוב כשגבולות המשימה ברורים."

### S07 | 05:00-06:00 | Common Failure Patterns

- Visual: anti-patterns on screen.
- Narration:
  "הכשל הנפוץ הוא לבקש 'תתקן ותעשה clean up על הדרך'. עוד כשל הוא לקבל change גדול בלי לשאול למה נגעו בקבצים שלא קשורים. ועוד כשל הוא לדלג על בדיקות כי 'זה נראה בסדר'. כל אלה מגדילים את הסיכוי לרגרסיה."

### S08 | 06:00-07:00 | A Practical Review Checklist

- Visual: checklist קצרה.
- Narration:
  "לפני commit אפשר לעבור על checklist קצר: האם השינוי הכי קטן שאפשר, האם נגע רק במה שרלוונטי, האם יש סיכון לנתיב קיים, האם יש בדיקה או ולידציה, והאם הייתי מוכן להסביר את ה-diff הזה לאדם נוסף. אם לא, עוד לא סיימנו."

### S09 | 07:00-08:00 | Let Cursor Review Its Own Change Carefully

- Visual: prompt של review ביקורתי.
- Narration:
  "אפשר ורצוי לבקש מ-Cursor לעשות review לעצמו, אבל בצורה נכונה: לחפש בעיות, לא לייפות את התוצאה. זה לא תחליף לבדיקה שלכם, אבל זו שכבת הגנה מעשית לפני שממשיכים."

### S10 | 08:00-08:30 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא נעבור מעבודה אישית לעבודה משותפת: איך עושים handoff מסודר בין אנשים, כך שגם ההקשר וגם ה-next steps עוברים בצורה ברורה."

## Prompt Asset

`Review this change as a skeptical senior engineer. Do not summarize the diff first. Look for regressions, risky assumptions, missing validation, edge cases, API or schema impact, and places where the change is larger than necessary. Then give me the smallest next actions to make it safer before commit.`

## Recording Notes

- להדגיש ש-review טוב מחפש בעיות ולא מחמאות.
- להראות diff קטן מול diff גדול.
- לסיים עם checklist קצר שאפשר ממש להשתמש בו ביום-יום.

## Action Item

לקחת שינוי אחד מהעבודה האחרונה שלכם ולהעביר אותו דרך checklist קצר: diff קטן, סיכון קיים, בדיקה אחת רלוונטית, ושאלה האם באמת צריך את כל השינוי הזה.
