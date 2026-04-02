# Script Master: 09 Branches and Worktrees for Parallel Work

## Metadata

- Lesson ID: 09
- Title: Git, branches ו-worktrees לעבודה מקבילה
- Target duration: 08:30
- Language: Hebrew
- Format: avatar narration + screen recording

## Lesson Goal

להראות איך עובדים במקביל על פיצ'ר, bugfix או ניסוי בלי ללכלך את קו העבודה הראשי: branch נפרד, worktree נפרד, וזרימת עבודה ששומרת על בידוד, בהירות ויכולת review.

## Scene List

### S01 | 00:00-00:25 | Hook

- Visual: שני שינויים שונים מתערבבים באותו working directory.
- Narration:
  "אחת הדרכים הכי מהירות להסתבך עם Cursor היא לעבוד על כמה דברים שונים באותה תיקייה. פתאום תיקון דחוף ופיצ'ר חדש מתערבבים, וקשה להבין מה שייך למה."

### S02 | 00:25-01:15 | The Core Idea

- Visual: תרשים של repo אחד עם שני worktrees ושני branches.
- Narration:
  "Worktree נותן לכם עותק עבודה נוסף של אותו repository, מחובר לענף אחר. במקום לערבב הכול באותה תיקייה, מחזיקים כמה מסלולי עבודה מופרדים: פיצ'ר אחד כאן, bugfix דחוף שם, ואולי אפילו ניסוי צדדי בנפרד."

### S03 | 01:15-02:10 | Branches vs Worktrees

- Visual: side-by-side של branch switching מול worktree נפרד.
- Narration:
  "Branch בלבד לא תמיד מספיק, כי עדיין יש לכם תיקייה אחת והקשר עבודה אחד. Worktree מוסיף בידוד פיזי: כל משימה מקבלת סביבת עבודה משלה, ולכן גם Cursor נשאר ממוקד יותר ב-diff ובשיחה הנכונים."

### S04 | 02:10-03:10 | When To Open a Worktree

- Visual: checklist קצרה על המסך.
- Narration:
  "מתי כדאי לפתוח worktree? כשיש bugfix במקביל לפיצ'ר, כשאתם רוצים להשוות שני כיווני מימוש, או כשלא נכון לעצור עבודה קיימת. אם המשימות שונות במטרה, בהקשר או ברמת הסיכון, בדרך כלל מגיע להן בידוד."

### S05 | 03:10-04:15 | Practical Flow

- Visual: flow של main -> new branch -> new worktree -> open in Cursor.
- Narration:
  "הזרימה המעשית פשוטה: שומרים על baseline נקי, פותחים branch חדש למשימה, יוצרים worktree, ופותחים אותו ב-Cursor. מרגע זה כל prompt, כל diff וכל בדיקה שייכים למשימה אחת בלבד."

### S06 | 04:15-05:20 | Why This Helps Cursor

- Visual: Cursor רואה diff קטן וממוקד בכל worktree.
- Narration:
  "זה לא רק Git hygiene. זה גם משפר את עבודת Cursor. כשכל worktree מייצג משימה אחת, יש פחות קבצים לא רלוונטיים, פחות diff מבולגן, ופחות סיכוי שה-agent יערבב בין שני כיווני עבודה."

### S07 | 05:20-06:25 | Common Mistakes

- Visual: anti-patterns כמו שינוי ישיר ב-main או reuse של אותו branch.
- Narration:
  "הטעויות הנפוצות הן לעבוד ישירות על main, למחזר branch ישן למשימה חדשה, או לשכוח באיזה worktree אתם בכלל נמצאים. כל טעות כזאת פוגעת ביכולת לסקור, להשוות ולהחזיר שליטה כשמשהו נשבר."

### S08 | 06:25-07:20 | Safe Rules of Thumb

- Visual: ארבעה כללים קצרים.
- Narration:
  "חוקי אצבע טובים הם: משימה אחת לכל branch, branch אחד לכל worktree, לא מתקנים issue דחוף בתוך worktree של פיצ'ר, ותמיד בודקים status לפני commit. הפשטות הזאת חוסכת הרבה כאב ובלבול."

### S09 | 07:20-08:00 | Ask Cursor To Suggest the Workflow

- Visual: prompt של Git/worktree workflow.
- Narration:
  "אם אתם לא בטוחים איך לחלק את העבודה, אפשר לבקש מ-Cursor להציע workflow: מתי branch רגיל מספיק, מתי כדאי worktree, ואיך לקרוא לענפים ולתיקיות כך שלא תתבלבלו בהמשך."

### S10 | 08:00-08:30 | Close

- Visual: מעבר לשיעור review.
- Narration:
  "בשיעור הבא נעבור משלב הבידוד לשלב הבדיקה האנושית: איך עושים review שמחפש סיכונים אמיתיים לפני merge, ולא מסתפק ב'נראה לי בסדר'."

## Prompt Asset

`Help me isolate this repository task safely. Tell me whether I need just a new branch or a separate worktree as well, suggest clear names for both, explain the order of steps, and list the mistakes that would cause this task to leak into my current work or confuse later review.`

## Recording Notes

- להראות visually ששתי תיקיות שונות משרתות שני workflows שונים.
- לא להעמיס בפקודות Git מתקדמות; לשמור על השיעור שימושי.
- להדגיש ש-worktree משפר גם את רמת הפוקוס של Cursor, לא רק את סדר העבודה האנושי.

## Action Item

לבחור משימה אחת שבאמת מתחרה עם משימה אחרת, ולהחליט מראש האם היא צריכה רק `branch` או גם `worktree`, ומה יהיו השמות הברורים שלהם.
