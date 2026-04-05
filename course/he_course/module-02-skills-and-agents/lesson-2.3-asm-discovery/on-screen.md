# שיעור 2.3 — על המסך (הוראות צילום)

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## 00:00 – 01:00

פתיחת משטח ה־Agent בתוך Cursor.
הדבקה של הפרומפט מה־Appendix.
ה־Agent מתחיל בבדיקת readiness של ASM: האם יש `asm.toml`, האם ASM נראה מאותחל, ומה צריך לבדוק לפני שממשיכים.
ה־Explorer פתוח ברקע כדי שאפשר יהיה לראות את הקבצים שה־Agent מזכיר.
כיתוב overlay: **ASM through the Agent**.

---

## 01:00 – 02:30

ה־Agent מסביר מה מצב הפרויקט ומציע את השלב הבא.
אם אין `asm.toml`, מראים את ה־Agent מסביר שצריך להשלים ASM setup לפני התקנת skill.
אם יש `asm.toml`, מראים את ה־Agent ממליץ על חיפוש skill מתאים.

פתיחת `AGENT_SKILLS.md` של שיעור 2.1 בטאב נפרד.
גלילה על טבלת הציון והדגשת skill מומלץ.
Overlay קטן: **Inspect -> compare -> choose**.

---

## 02:30 – 04:00

ה־Agent מבצע את זרימת ה־ASM מתוך העבודה שלו.
לא פותחים טרמינל בשלב הזה.
המצלמה נשארת על ה־Agent ועל ה־Explorer.
פותחים `asm.toml` כדי להראות את קובץ ה־setup של הפרויקט.
אחר כך פותחים `.asm/main_asm.md` כדי להראות את תמונת המצב של ASM.
אחר כך פותחים `.cursor/skills` ומדגימים שהסקיל החדש מופיע שם בתוך תיקייה משלו עם `SKILL.md`.
זום קצר על העובדה שהאימות נעשה דרך הקבצים, לא דרך פלט CLI.

---

## 04:00 – 05:00

ה־Agent מסביר מתי כדאי ליצור expertise, ומציע דוגמה לקבוצה קטנה של skills.
אם רוצים, מראים את ההסבר ברמת הרעיון בלבד - לא חייבים להדגים עוד פעולה.

מסך סיכום עם 3 שורות:
- `Ask the agent to inspect first`
- `Let the agent run the ASM flow`
- `Verify with project files: asm.toml, .asm, .cursor/skills`

כותרת סיום: **Next — Lesson 2.4: Product Agent**.
