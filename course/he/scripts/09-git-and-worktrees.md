# Script Master: 09 Git and Worktrees

## Metadata

- Lesson ID: 09
- Title: Git ו-Worktrees
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך עובדים במקביל על פיצ'ר ותיקון בלי ללכלך את הענף הראשי: branch נפרד, worktree נפרד, וזרימת עבודה ברורה שמקטינה בלבול וסיכון.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: שני שינויים שונים מתערבבים באותו working directory.
- Narration:
  "אחת הדרכים הכי מהירות להסתבך עם Cursor היא לעבוד על כמה דברים שונים באותה תיקייה. פתאום תיקון דחוף ופיצ'ר חדש מתערבבים, וקשה להבין מה שייך למה."

### S02 | 00:25-01:15 | The Core Idea

- Visual: תרשים של repo אחד עם שני worktrees ושני branches.
- Narration:
  "Worktree נותן לכם עותק עבודה נוסף של אותו repository, מחובר לענף אחר. במקום לעשות checkout הלוך ושוב, אתם מחזיקים שני מצבים במקביל: למשל פיצ'ר אחד בתיקייה אחת ובאג דחוף בתיקייה אחרת."

### S03 | 01:15-02:10 | Branches vs Worktrees

- Visual: side-by-side של branch switching מול worktree נפרד.
- Narration:
  "Branch בלבד לא פותר את כל הבעיה, כי עדיין יש לכם תיקייה אחת. כל מעבר דורש checkout, stash או commit חלקי. Worktree מוסיף בידוד פיזי: כל משימה מקבלת סביבת עבודה משלה, ולכן גם Cursor נשאר ממוקד יותר."

### S04 | 02:10-03:10 | When To Open a Worktree

- Visual: checklist קצרה על המסך.
- Narration:
  "מתי כדאי לפתוח worktree? כשיש תיקון דחוף במקביל לפיצ'ר, כשאתם רוצים להשוות שני כיווני מימוש, או כשלא נוח לעצור עבודה קיימת. אם המשימות שונות במטרה או ב-risk, בדרך כלל מגיע להן בידוד."

### S05 | 03:10-04:15 | Practical Flow

- Visual: flow של main -> new branch -> new worktree -> open in Cursor.
- Narration:
  "הזרימה המעשית פשוטה: שומרים על הענף הראשי נקי, פותחים branch חדש למשימה, יוצרים worktree עבורו, ואז פותחים את התיקייה החדשה ב-Cursor. מכאן כל prompt, כל diff וכל בדיקה שייכים רק למשימה הזאת."

### S06 | 04:15-05:20 | Why This Helps Cursor

- Visual: Cursor רואה diff קטן וממוקד בכל worktree.
- Narration:
  "זה לא רק Git hygiene. זה גם עוזר ל-Cursor לעבוד טוב יותר. כשכל worktree מכיל משימה אחת, יש פחות קבצים לא רלוונטיים, פחות diff מבולגן, ופחות סיכוי שה-agent יערבב בין שני כיווני עבודה."

### S07 | 05:20-06:25 | Common Mistakes

- Visual: anti-patterns כמו שינוי ישיר ב-main או reuse של אותו branch.
- Narration:
  "הטעויות הנפוצות הן לעבוד ישירות על main, למחזר branch ישן למשימה חדשה, או לשכוח באיזה תיקייה אתם בכלל נמצאים. כל טעות כזאת פוגעת ביכולת שלכם לבדוק, לסקור ולהחזיר שליטה כשמשהו נשבר."

### S08 | 06:25-07:20 | Safe Rules of Thumb

- Visual: ארבעה כללים קצרים.
- Narration:
  "חוקי אצבע טובים הם: משימה אחת לכל branch, branch אחד לכל worktree, לא מתקנים issue דחוף בתוך worktree של פיצ'ר, ותמיד בודקים status לפני commit. הפשטות הזאת חוסכת הרבה כאב."

### S09 | 07:20-08:00 | Ask Cursor To Suggest the Workflow

- Visual: prompt של Git/worktree workflow.
- Narration:
  "אם אתם לא בטוחים איך לחלק את העבודה, אפשר לבקש מ-Cursor להציע workflow: מתי לפתוח branch, מתי worktree, ואיך לקרוא לענפים כדי לא להתבלבל. זה טוב במיוחד כשיש כמה משימות תלויות."

### S10 | 08:00-08:30 | Close

- Visual: preview לשיעור הבא.
- Narration:
  "בשיעור הבא נוסיף שכבת הגנה נוספת: איכות קוד ושומרי סף. נלמד איך לגרום ל-Cursor לא רק לכתוב קוד, אלא גם לעצור לפני שהוא מכניס סיכון מיותר."

## Prompt Asset

`Help me set up a safe Git workflow for this task. Recommend whether I should create a new branch and a separate worktree, suggest clear branch/worktree names, explain the order of steps, and list the main mistakes to avoid so this work stays isolated from my current changes.`

## Recording Notes

- להראות visually ששתי תיקיות שונות מחוברות לאותו repo.
- לא להעמיס בפקודות Git מתקדמות; להישאר ב-workflow המעשי.
- להדגיש ש-worktree הוא כלי לבידוד משימות, לא רק טריק של Git.

## Action Item

לבחור משימה אמיתית אחת שצריכה בידוד, ולהחליט מראש מה יהיה שם ה-`branch` ומה יהיה שם ה-`worktree` שלה.
