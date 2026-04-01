# Script Master: 05 Modes and Basic Agents

## Metadata

- Lesson ID: 05
- Title: מודים ואייג'נטים בסיסיים
- Target duration: 08:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להסביר מתי להשתמש ב-Ask, Plan, Agent ו-Debug, ואיך אותו צורך מקבל טיפול שונה בכל mode.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: אותה משימה מוצגת ארבע פעמים בארבעה modes.
- Narration:
  "הרבה משתמשים עובדים עם Cursor כאילו יש רק כפתור אחד. בפועל, הבחירה ב-mode משנה את איכות התוצאה, את רמת הסיכון, ואת כמות הסיבובים שתעשו אחר כך."

### S02 | 00:25-01:15 | The Core Decision

- Visual: decision tree קצר על המסך.
- Narration:
  "השאלה הראשונה היא לא מה לכתוב ב-prompt, אלא באיזה mode לעבוד. אם אתם רק חוקרים, תשאלו. אם צריך לתכנן, תעברו ל-Plan. אם הגיע הזמן לבצע, תעברו ל-Agent. ואם יש תקלה שצריך לחקור, Debug הוא המצב הנכון."

### S03 | 01:15-02:10 | Ask Mode

- Visual: chat עם שאלה על קוד או על מבנה הפרויקט.
- Narration:
  "Ask mode מתאים להבנת מצב, חיפוש תשובות, השוואת אפשרויות, והסבר על הקוד בלי לבצע שינוי. זה המצב הנכון כשאתם עדיין לא בטוחים מה צריך לעשות."

### S04 | 02:10-03:10 | Plan Mode

- Visual: דוגמת תוכנית מסודרת לפני ביצוע.
- Narration:
  "Plan mode מתאים כשיש כמה דרכי מימוש, כשצריך החלטה ארכיטקטונית, או כשאתם רוצים לראות מסלול עבודה לפני שמבצעים שינוי בפועל. זה מוריד טעויות ומכריח אתכם לחשוב לפני עריכה."

### S05 | 03:10-04:10 | Agent Mode

- Visual: agent מבצע שינוי קוד מדורג.
- Narration:
  "Agent mode הוא המצב של ביצוע. כאן Cursor יכול לקרוא, לערוך, להריץ בדיקות ולעבוד על המשימה בפועל. זה לא מצב למחקר פתוח, אלא לביצוע עם יעד ברור ועם הגבלות ברורות."

### S06 | 04:10-05:05 | Debug Mode

- Visual: stack trace, root cause, fix plan.
- Narration:
  "Debug mode מתאים כשמשהו נשבר ואתם רוצים חקירה מסודרת. במקום לבקש 'תתקן', מבקשים קודם להבין מה קרה, מה ההיפותזות, ואיך מאמתים את התיקון הכי קטן והכי בטוח."

### S07 | 05:05-06:10 | Same Task, Different Modes

- Visual: אותה משימה, למשל 'להוסיף פיצ'ר login', מוצגת בכל mode.
- Narration:
  "אותה משימה יכולה להתחיל ב-Ask כדי להבין דרישות, לעבור ל-Plan כדי לפרק לשלבים, להמשיך ל-Agent כדי לממש, ואז להגיע ל-Debug אם בדיקה נשברת. כלומר modes הם לא תחרות, הם רצף עבודה."

### S08 | 06:10-07:20 | Practical Rules of Thumb

- Visual: רשימת 4 חוקים קצרים.
- Narration:
  "אם אתם לא בטוחים, תתחילו ב-Ask. אם יש tradeoffs, תעברו ל-Plan. אם הדרישות ברורות, תעברו ל-Agent. ואם יש בעיה לא צפויה, תעצרו ותעברו ל-Debug. החוק הזה לבד משפר משמעותית את העבודה."

### S09 | 07:20-08:00 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא ניקח את modes האלו ונחבר אותם להגדרת הקשר לפרויקט: rules, skills, memory, MCPs ותוספים, כדי ש-Cursor יעבוד טוב כבר מהצעד הראשון."

## Prompt Asset

`Teach me when to use each Cursor mode for this project. Give me a simple decision tree (ask vs plan vs agent vs debug), then provide one concrete example task per mode.`

## Recording Notes

- להראות את אותו use case בכל ארבעת המצבים.
- לשמור את הדוגמאות קצרות ולא תיאורטיות.
- להשתמש ב-overlay של decision tree בתחילת השיעור ובסופו.

## Action Item

לבחור ארבע משימות אמיתיות שאתם עושים ב-Cursor ולשייך כל אחת ל-`Ask`, `Plan`, `Agent` או `Debug`.
