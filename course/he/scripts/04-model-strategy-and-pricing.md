# Script Master: 04 Model Strategy and Pricing

## Metadata

- Lesson ID: 04
- Title: מודלים ותמחור: איך לבחור נכון
- Target duration: 09:00
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך בוחרים מודל לפי סוג משימה, איכות נדרשת, מהירות ועלות, כולל הבנה בסיסית של tokens, עלות input מול output, ואיך לקרוא דפי תמחור בלי להיבהל.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: prompt אחד מול כמה מודלים אפשריים.
- Narration:
  "אחת הטעויות הכי נפוצות היא להשתמש תמיד באותו מודל. בשיעור הזה נבנה אסטרטגיית בחירה פשוטה: איזה מודל לתכנון, איזה למימוש, איזה לדיבוג, ומתי זה משפיע על העלות."

### S02 | 00:25-01:20 | Core Idea

- Visual: טבלה עם task type, quality, speed, cost.
- Narration:
  "לא שואלים 'מה המודל הכי טוב', אלא 'מה המודל הכי מתאים למשימה הזאת'. יש משימות שדורשות עומק reasoning, יש משימות קצרות שחייבות מהירות, ויש משימות שבהן מספיק דיוק טוב במחיר נמוך יותר."

### S03 | 01:20-02:15 | Planning Tasks

- Visual: דוגמת task של ארכיטקטורה.
- Narration:
  "למשימות תכנון, פירוק בעיה, חשיבה על tradeoffs או ניסוח תוכנית, בדרך כלל כדאי מודל חזק יותר. כאן האיכות של reasoning חוסכת סיבובים מיותרים בהמשך."

### S04 | 02:15-03:05 | Implementation Tasks

- Visual: דוגמת שינוי קטן בקוד.
- Narration:
  "לשינויים קטנים, תיקונים ממוקדים, או פעולות רפטטיביות, לעיתים מספיק מודל מהיר יותר וזול יותר. אם המשימה ברורה וההקשר קטן, אין סיבה לשלם על עומק שלא צריך."

### S05 | 03:05-03:55 | Debugging Tasks

- Visual: הודעת שגיאה, stack trace, והצעת root cause.
- Narration:
  "בדיבוג, הבחירה תלויה במורכבות. אם יש stack trace ברור ושינוי קטן, אפשר מודל מהיר. אם הבעיה מערכתית, יש הרבה קבצים מעורבים, או שהסימפטום לא ברור, עדיף מודל עם reasoning חזק יותר."

### S06 | 03:55-04:45 | Review and Risky Changes

- Visual: diff ארוך או PR review.
- Narration:
  "בריוויו, ברפקטור או בשינויים עם סיכון גבוה, שווה לבחור מודל שיכול לזהות רגרסיות וסיכונים, אפילו אם הוא מעט יקר יותר. כאן טעות יקרה יותר מהחיסכון."

### S07 | 04:45-05:40 | What Is a Token

- Visual: משפט שמתפצל ליחידות token קטנות עם ספירה על המסך.
- Narration:
  "כדי להבין עלות, צריך להבין קודם מה זה token. טוקן הוא לא בדיוק מילה ולא בדיוק תו. אפשר לחשוב עליו כיחידת טקסט קטנה שהמודל סופר. לפעמים זו מילה שלמה, לפעמים חלק ממילה, ולפעמים סימן פיסוק. כלל אצבע נפוץ הוא בערך ארבעה תווים באנגלית לטוקן אחד, אבל בשפות אחרות זה משתנה. חשוב גם לזכור שמודלים שונים משתמשים ב-tokenizer מעט שונה, ולכן אותה פסקה יכולה להיספר קצת אחרת בין ספקים. וגם הפרומפט שלכם, גם היסטוריית הצ'אט, גם קבצים שהמודל קורא, וגם התשובה שלו, כולם נספרים בטוקנים."

### S08 | 05:40-06:35 | Input vs Output Cost

- Visual: תרשים דו-צדדי: what you send vs what the model returns.
- Narration:
  "עכשיו ההבחנה החשובה: input tokens הם כל מה שאתם שולחים למודל, כולל הפרומפט, היסטוריה, rules, וקבצים או קטעי קוד שנכנסים להקשר. output tokens הם כל מה שהמודל מחזיר. בהרבה ספקים, output יקר יותר מ-input. לכן תשובה ארוכה מאוד, reasoning ארוך, או כמה סיבובי תיקון, יכולים לעלות יותר מפרומפט קצר וברור. במילים פשוטות: לא רק מה ששלחתם עולה כסף, אלא גם כמה המודל מדבר בחזרה."

### S09 | 06:35-07:50 | Real Cost Examples

- Visual: טבלת pricing קצרה עם 3-4 שורות מודגשות.
- Narration:
  "אם מסתכלים על דף המודלים של Cursor, רואים שתי שכבות תמחור. ב-Auto, נכון לזמן ההקלטה, המחיר הוא בערך 1.25 דולר למיליון input tokens ו-6 דולר ל-output. אם בוחרים מודל ספציפי, משלמים לפי מחיר ה-API שלו. לדוגמה, GPT-5.4 הוא בערך 2.5 דולר ל-input ו-15 דולר ל-output, Claude 4.6 Sonnet הוא 3 ו-15, ו-Gemini 2.5 Flash הוא בערך 0.3 ו-2.5. חשוב להבין: מיליון טוקנים הוא רק יחידת השוואה. אין לפנייה שלכם מספר טוקנים קבוע, כי כל מודל יכול לספור קצת אחרת וכל קריאה יכולה לכלול היסטוריה שונה, קבצים אחרים, logs אחרים ותשובה באורך אחר. לכן context management טוב, כלומר לשלוח רק מה שרלוונטי ולבקש תשובות ממוקדות, יכול להוריד גם input וגם output. מה שמשנה בפועל הוא כמה קונטקסט שלחתם, כמה תשובה ביקשתם, והאם באמת הייתם צריכים מודל יקר למשימה הזאת."

### S10 | 07:50-08:35 | Ask Cursor for a Routing Strategy

- Visual: prompt model strategy.
- Narration:
  "במקום להחליט כל פעם מחדש, אפשר לבקש מ-Cursor לבנות אסטרטגיית model routing לפרויקט, ואפילו לשמור אותה ב-AGENTS.md או ב-Cursor rule. כלל פשוט שעובד טוב הוא: Auto כברירת מחדל למשימות יומיומיות, מעבר למודל חזק יותר לתכנון, refactor ודיבוג מורכב, ומודל זול יותר למשימות קצרות וברורות. חשוב להבין: Auto לא מבטיח מודל קבוע, אלא נותן ל-Cursor לבחור בשבילכם דינמית."

### S11 | 08:35-09:00 | Close

- Visual: מעבר ל-next lesson.
- Narration:
  "מעולה. עכשיו כשיש לכם בסיס למודלים ולעלות, נעבור לשיעור הבא ונראה איך לנהל context נכון, כדי לשלוח פחות רעש, לקבל תשובות מדויקות יותר, ולשלם רק על מה שבאמת צריך."

## Prompt Asset

`Create a Cursor model-routing strategy for this project using real currently supported Cursor models and current Cursor pricing. Recommend when to stay on Auto versus explicitly choose GPT-5.4, GPT-5.4 mini, Claude 4.6 Sonnet, and Gemini 2.5 Flash for planning, implementation, refactors, and debugging. Explain the tradeoff between input tokens, output tokens, context size, response length, and quality. Show how better context management can reduce both token usage and total cost. Note that Auto cannot be pinned to one exact model. Give a practical cost-aware workflow.`

## Recording Notes

- להציג את המספרים בתור דוגמאות ציבוריות "נכון לזמן ההקלטה", לא כהבטחה קבועה.
- להבדיל במפורש בין `Auto + Composer` לבין בחירת מודל ספציפי לפי `API pricing`.
- לציין שתמחור ב-Cursor או בספקים אחרים יכול להיות שונה מתמחור API ישיר.
- להסביר ש-token הוא יחידת ספירה של טקסט, לא "מילה".
- לציין שלאותה משימה יכולים להיות מספרי tokens שונים בין מודלים ובין קריאות שונות.
- לדבר על קטגוריות שימוש: planning, implementation, debugging, review.
- לחבר במפורש בין context management טוב לבין ירידה בעלות input ו-output.
- להוסיף דיסקליימר קצר: "בדקו את הממשק הנוכחי והתמחור העדכני".

## Action Item

ליצור טבלת החלטה קטנה לעצמכם: איזה מודל תבחרו ל-`planning`, איזה ל-`implementation`, איזה ל-`debugging`, ואיפה תעדיפו `Auto` כברירת מחדל.
