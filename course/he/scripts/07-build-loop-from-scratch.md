# Script Master: 07 Validation Before the Next Step

## Metadata

- Lesson ID: 07
- Title: ולידציה: tests, lint ו-checklists לפני שממשיכים
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

לבנות הרגל של validation מיידי אחרי כל slice: לבחור את הבדיקות הנכונות, להבין מה הן מוכיחות ומה לא, ולעצור לפני שממשיכים לעוד שינויים.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: שינוי שעבר build אבל עדיין שבר behavior.
- Narration:
  "אחת הטעויות הכי נפוצות היא לחשוב ש-validation הוא רק 'להריץ משהו ולראות שאין אדום'. בפועל, בדיקה טובה צריכה לענות על השאלה: מה בדיוק אימתנו עכשיו."

### S02 | 00:25-01:20 | Pick Checks That Match the Slice

- Visual: טבלה קצרה של slice type מול check type.
- Narration:
  "לא כל slice דורש את אותו סט בדיקות. שינוי UI קטן לא בהכרח צריך אותן בדיקות כמו שינוי בשכבת data. הרעיון הוא לא להריץ הכול תמיד, אלא לבחור checks שמכסים את הסיכון האמיתי של השינוי."

### S03 | 01:20-02:15 | Types of Validation

- Visual: lint, typecheck, unit test, integration test, manual smoke check.
- Narration:
  "יש כמה שכבות validation: lint לסגנון ולפעמים ללוגיקה, typecheck לחוזים, tests להתנהגות, ו-smoke check ידני למסך או ל-flow. יחד הן בונות confidence, אבל כל אחת בודקת משהו אחר."

### S04 | 02:15-03:20 | What Passed Does Not Prove

- Visual: checklist של blind spots.
- Narration:
  "חשוב לא פחות להבין מה validation לא הוכיח. build ירוק לא אומר שאין regression. test אחד שעבר לא אומר שה-flow המלא בטוח. confidence אמיתי מגיע כשאתם יודעים גם את גבולות ההוכחה."

### S05 | 03:20-04:20 | Ask Cursor to Propose the Right Validation

- Visual: prompt שמבקש validation plan קטן.
- Narration:
  "במקום לנחש, אפשר לבקש מ-Cursor להציע validation מותאם ל-slice: אילו checks להריץ, איזה risk כל check מכסה, ואיפה עדיין יש blind spot. זה עוזר להפוך את הבדיקה לחלק מהעבודה, לא לנספח."

### S06 | 04:20-05:20 | Read the Output Critically

- Visual: log או test output עם חלק חשוב מודגש.
- Narration:
  "גם אחרי הרצה לא מדלגים ישר להמשך. קוראים את התוצאה: מה באמת עבר, מה דולג, ומה אזהרה שכדאי לא להתעלם ממנה. validation טוב כולל קריאה, לא רק לחיצה על enter."

### S07 | 05:20-06:20 | Decide If Confidence Is Enough

- Visual: שלוש תשובות על המסך: continue, add one more check, stop and debug.
- Narration:
  "אחרי הבדיקות שואלים: האם יש מספיק confidence כדי להמשיך? לפעמים כן. לפעמים צריך עוד check קטן. ולפעמים הבדיקה לא נתנה תשובה מספקת, ואז לא מתקדמים ל-slice הבא."

### S08 | 06:20-07:30 | Common Validation Anti-Patterns

- Visual: anti-patterns כמו 'רץ build וזהו' או 'נבדוק בסוף'.
- Narration:
  "הכשלים הנפוצים הם לדחות בדיקות לסוף, להריץ pipeline ארוך שלא קשור ל-slice, או להסתפק ב-'אין שגיאה'. כל אחד מהם מייצר תחושת ביטחון שקרית."

### S09 | 07:30-09:00 | Close

- Visual: build ירוק ואז regression שמתגלה.
- Narration:
  "בשיעור הבא נראה מה קורה כשגם עם כל הזהירות משהו נשבר: איך מדבגים regression אמיתי, אוספים ראיות, ובוחרים את התיקון הקטן ביותר במקום להיכנס לפאניקה."

## Prompt Asset

`I just implemented one safe slice in this repository. Propose the smallest useful validation plan before I continue. Match the checks to the actual risk of the change, explain what each check proves and what it does not prove, then tell me whether the result is enough confidence to continue, or whether I should run one more targeted check first.`

## Recording Notes

- להראות validation אמיתי של ה-capstone, לא דוגמאות מלאכותיות.
- להדגיש את ההבדל בין green output לבין real confidence.
- לא להפוך את השיעור לדיון כללי על testing philosophy.

## Action Item

לקחת slice אחד שלכם, לבחור לו שני checks רלוונטיים בלבד, ולכתוב ליד כל אחד מה הוא מוכיח ומה הוא עדיין לא מוכיח.
