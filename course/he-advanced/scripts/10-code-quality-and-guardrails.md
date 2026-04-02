# Script Master: 10 Code Review and Guardrails Before Merge

## Metadata

- Lesson ID: 10
- Title: Code Review ושומרי סף לפני merge
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך review הופך לשומר סף אמיתי לפני merge: לא חיפוש מחמאות, אלא חיפוש רגרסיות, assumptions מסוכנים, בדיקות חסרות ו-diff גדול מדי.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: שינוי "עובד" מקומית אבל מכניס רגרסיה.
- Narration:
  "אחת האשליות הכי מסוכנות בעבודה עם AI היא לחשוב שאם הקוד נראה סביר, הכול בסדר. בפועל, הרבה בעיות נכנסות דווקא דרך שינויים שנראים הגיוניים במבט ראשון."

### S02 | 00:25-01:10 | The Core Principle

- Visual: תרשים של implement -> review -> validate -> commit.
- Narration:
  "המטרה היא לא לסמוך פחות על Cursor, אלא לבנות מסלול שבו גם אם הוא טועה, הטעות נעצרת לפני merge. לכן review איננו טקס. הוא נקודת החלטה שבה מחפשים סיכון, לא רק שלמות תחבירית."

### S03 | 01:10-02:05 | Ask for Risk Review, Not Praise

- Visual: prompt review טוב מול prompt כללי כמו 'מה דעתך על הקוד'.
- Narration:
  "כשמבקשים review, לא שואלים 'האם זה טוב'. מבקשים לחפש סיכונים: רגרסיות, edge cases, השפעת API או schema, פגיעות אבטחה, ו-validation חסר. review טוב הוא חשדני, לא מעודד."

### S04 | 02:05-03:00 | Guardrail 1: Small Diffs

- Visual: diff קטן מול diff ענק.
- Narration:
  "הגנה ראשונה היא diff קטן. ככל שהשינוי מצומצם יותר, כך קל יותר לסקור אותו ולוודא שהוא לא שבר משהו. אם ה-diff גדול מדי בשביל review אנושי סביר, כנראה ה-scope לא היה נכון."

### S05 | 03:00-03:55 | Guardrail 2: Validation Checks

- Visual: lint, tests, build, manual check.
- Narration:
  "הגנה שנייה היא אימות. review טוב לא עומד לבדו. הוא צריך לפגוש evidence: test, lint, typecheck, build או smoke check ידני. בלי evidence, review נשאר הערכה אינטואיטיבית."

### S06 | 03:55-05:00 | Guardrail 3: Explicit Constraints

- Visual: prompt עם constraints כמו 'אל תשנה API', 'השאר diff מינימלי'.
- Narration:
  "הגנה שלישית היא להגדיר גבולות מפורשים. אפשר לבקש: אל תשנה public API, אל תיגע בסכימה, אל תוסיף dependencies, עצור לפני merge, והסבר למה כל קובץ touched בכלל רלוונטי. Cursor מגיב הרבה יותר טוב כשגבולות review ברורים."

### S07 | 05:00-06:00 | Common Failure Patterns

- Visual: anti-patterns on screen.
- Narration:
  "הכשל הנפוץ הוא לבקש 'תתקן ותעשה clean up על הדרך'. עוד כשל הוא לקבל change גדול בלי לשאול למה נגעו בקבצים שלא קשורים. ועוד כשל הוא לדלג על review אמיתי כי 'כבר בדקתי שזה רץ'. כל אלה מגדילים את הסיכוי לרגרסיה."

### S08 | 06:00-07:00 | A Practical Review Checklist

- Visual: checklist קצרה.
- Narration:
  "לפני merge אפשר לעבור על checklist קצר: האם השינוי הכי קטן שאפשר, האם נגע רק במה שרלוונטי, האם יש סיכון לנתיב קיים, האם יש evidence מספק, והאם הייתי מוכן להסביר את ה-diff הזה לאדם נוסף. אם לא, עוד לא סיימנו."

### S09 | 07:00-08:00 | Let Cursor Review Its Own Change Carefully

- Visual: prompt של review ביקורתי.
- Narration:
  "אפשר ורצוי לבקש מ-Cursor לעשות review לעצמו, אבל בצורה נכונה: לחפש בעיות, לא לייפות את התוצאה. זה לא תחליף לשיקול הדעת שלכם, אבל זו שכבת הגנה מעשית לפני merge."

### S10 | 08:00-08:30 | Close

- Visual: מעבר לשיעור context advanced / handoff.
- Narration:
  "בשיעור הבא נרחיב את התמונה מה-diff הבודד לסטנדרט עבודה רחב יותר של הפרויקט והצוות: rules, memory, MCPs והקשר שעובר בין אנשים ומשימות."

## Prompt Asset

`Review this change as a skeptical senior engineer before merge. Do not start with praise or a generic summary. Look for regressions, risky assumptions, missing validation, edge cases, API or schema impact, and any sign that the diff is larger than necessary. Then tell me the smallest next actions required to make this change safer to merge.`

## Recording Notes

- להדגיש ש-review כאן הוא gate לפני merge, לא הערת צד.
- להראות diff שנראה "סביר" אבל מסתיר סיכון behavior או scope.
- לסיים עם checklist קצר שאפשר להפעיל על כל PR.

## Action Item

לקחת שינוי אחד מהעבודה האחרונה שלכם ולהעביר אותו דרך checklist קצר של pre-merge: האם ה-diff קטן מספיק, האם יש risk ברור, האם יש evidence מספק, והאם אפשר להסביר למה כל קובץ שנגעתם בו באמת נחוץ.
