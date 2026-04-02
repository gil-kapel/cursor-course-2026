# Script Master: 08 Debugging Regressions and Regaining Control

## Metadata

- Lesson ID: 08
- Title: דיבוג רגרסיות והתאוששות מבלאגן
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

ללמד איך לעבור מרגרסיה שנוצרה במהלך delivery לתהליך דיבוג מסודר: סימפטום, ראיות, היפותזות, תיקון קטן, אימות וחזרה ללופ בלי להעמיק את הבלגן.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: בדיקה שעברה קודם ועכשיו נכשלת, או מסך שנשבר אחרי שינוי.
- Narration:
  "הרגע שבו הכי קל לאבד שליטה הוא לא בתחילת המשימה, אלא דווקא אחרי שכבר התקדמנו. משהו עבד, עשינו שינוי, ועכשיו יש regression. בשיעור הזה נלמד איך לעצור את הסחף ולחזור ל-debug מסודר."

### S02 | 00:25-01:15 | Start From the Broken Behavior

- Visual: behavior שבור, test failure או error log.
- Narration:
  "הצעד הראשון הוא לא פתרון, אלא הגדרה מדויקת של מה נשבר עכשיו לעומת מה עבד קודם. מה השתנה בהתנהגות, איפה זה מופיע, ואיך אפשר לשחזר את זה שוב."

### S03 | 01:15-02:15 | Gather Only the Evidence That Matters

- Visual: diff אחרון, test output, log ממוקד.
- Narration:
  "אוספים רק את מה שמקדם את החקירה: ה-diff האחרון, בדיקה שנכשלה, log רלוונטי, או צילום מסך. לא זורקים חצי repo לתוך השיחה. regression טוב מדבגים מהעדויות הקרובות ביותר לשינוי."

### S04 | 02:15-03:15 | Ask for Ranked Hypotheses

- Visual: prompt שמבקש היפותזות לפי סבירות.
- Narration:
  "בשלב הזה לא מבקשים תיקון מיידי. קודם מבקשים היפותזות מדורגות: מה ההסבר הסביר ביותר, איזו ראיה תומכת בו, ואיך נבדוק אותו. כך עוברים מחיפוש עיוור לחקירה מסודרת."

### S05 | 03:15-04:20 | Choose the Smallest Safe Fix

- Visual: תיקון קטן אחד בלבד.
- Narration:
  "אחרי שיש היפותזה סבירה, בוחרים את התיקון הכי קטן שיכול לאמת אותה. לא פותחים refactor חדש בזמן debug. ככל שהתיקון קטן יותר, כך קל יותר לדעת אם הוא באמת פתר את ה-regression."

### S06 | 04:20-05:20 | Verify the Fix Against the Original Symptom

- Visual: אותה בדיקה שנכשלה קודם, מורצת שוב.
- Narration:
  "כל תיקון חייב להיבדק מול אותו סימפטום שפתח את הדיבוג. אם לא חזרתם בדיוק לנקודת הכשל, עדיין לא הוכחתם שהבעיה נפתרה."

### S07 | 05:20-06:20 | Recovery Options

- Visual: checklist של isolate, compare, revert slice thinking.
- Narration:
  "אם התיקון לא עבד, לא מתפרקים. אפשר לבודד עוד יותר, להשוות מול ה-state האחרון שעבד, או לחזור ל-slice הקטן ביותר שאפשר לחשוב עליו. המטרה היא לחזור לשליטה, לא לנצח מהר."

### S08 | 06:20-07:20 | Common Anti-Patterns

- Visual: רשימת anti-patterns.
- Narration:
  "מה לא עושים? לא מבקשים 'תתקן הכול'. לא משנים כמה דברים בבת אחת. לא מוסיפים clean up תוך כדי. ולא נותנים ל-debug להפוך שוב למשימת build חדשה בתחפושת."

### S09 | 07:20-08:20 | Prompt That Enforces Safe Debugging

- Visual: prompt שמבקש היפותזה, fix קטן, verification.
- Narration:
  "כדי לשמור על התהליך, משתמשים ב-prompt שמכריח את Cursor לדרג היפותזות, לבחור fix קטן אחד, ולהגדיר verification לפני edit נוסף. כך הדיבוג נשאר משמעת, לא תחושת בטן."

### S10 | 08:20-08:30 | Close

- Visual: מעבר ל-worktrees ו-Git.
- Narration:
  "בשיעור הבא נשתמש בכל המשמעת הזאת בתוך workflow מקביל: branches ו-worktrees, כדי שפיצ'ר חדש ו-bugfix דחוף לא ידרכו אחד על השני."

## Prompt Asset

`I introduced a regression while working on this feature. First describe the exact broken behavior and the likely cause based on the latest diff and current evidence. Then rank the most probable hypotheses, propose the smallest safe fix to test first, and define how we will verify it against the original symptom before making any larger changes.`

## Recording Notes

- להשתמש ברגרסיה שבאמת נולדה מה-capstone, לא בתקלה מנותקת.
- להראות שה-debug מתחיל מה-diff האחרון ולא מהיסטוריה אינסופית.
- להדגיש התאוששות מבלאגן, לא רק "פתרון שגיאה".

## Action Item

לקחת regression אמיתי אחד, לנסח מה נשבר עכשיו לעומת מה עבד קודם, לצרף שתי ראיות בלבד, ולכתוב היפותזה אחת שאתם בודקים לפני כל שינוי רחב יותר.
