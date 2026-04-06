# שיעור 2.9 — על המסך (הוראות צילום)

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## 00:00 – 01:00

Cursor פתוח.
`docs/implementation-plan.md` או `docs/slice-01.md` פתוח על המסך.
זום על החלק שמגדיר את Slice 1: package list + open payment side panel.
כיתוב overlay: **Implement only the first slice**.

---

## 01:00 – 02:15

העכבר פותח את Composer (`Cmd+I` ב־Mac, `Ctrl+I` ב־Windows) או עובר ל־Agent Mode.
מצרפים את מסמך ה־slice ואת מסמכי הרקע הרלוונטיים.
הדבקת הפרומפט מה־Appendix.
צפייה בסוכן מתחיל לנתח ומציע שינויים בכמה קבצים.

הערת צילום: הקריין מסביר למה קוראים שוב את ה־slice לפני שמתחילים.

---

## 02:15 – 03:30

מעבר על ה־diff של אחד הקבצים.
הדגמה של Accept לקובץ אחד והערת follow-up לקובץ אחר.
הדגשה ויזואלית: האם השינוי באמת שייך רק לפתיחת חלון הצד ולהצגת החבילות?
אם יש סטייה, מראים איך עוצרים ומחזירים את הסוכן לגבול של Slice 1.

---

## 03:30 – 04:45

הצגת התוצאה במסך או preview.
מראים את רשימת החבילות.
אחר כך לחיצה על חבילה, ופתיחה של חלון הצד לתשלום.

הערת צילום: הקריין מסביר למה דווקא זה הקריטריון להצלחה של השלב הזה.

---

## 04:45 – 06:00

חזרה קצרה ל־`docs/implementation-plan.md` או `docs/slice-01.md`.
הדגשה של מה הושלם ומה נשאר ל־Slice הבא.
Split view:
- מצד אחד ה־preview
- מצד שני מסמך התוכנית

Overlay מסכם:
- `Slice 1 implemented`
- `Diff stayed inside the planned boundary`
- `Return to the plan before Slice 2`

כותרת סיום: **Lesson 2.10 — Code Review Agent**.
