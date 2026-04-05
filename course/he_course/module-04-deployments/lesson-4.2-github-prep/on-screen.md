# שיעור 4.3 — על המסך (הוראות צילום)

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## 00:00 – 01:30

פתיחה על חלון הטרמינל או ממשק Source Control. מראים `git status` או רשימת קבצים ששונו.

Overlay: **Before push: inspect what you are really sending**.

---

## 01:30 – 03:30

מעבר על קבצים רגישים או מיותרים שלא אמורים להידחף:
- `.env`
- קובץ DB מקומי אם לא רוצים לשתף אותו
- תוצרי build

אחר כך פתיחת `.gitignore` ו-README קצר. מראים שה-README כולל:
- מה הפרויקט
- איך מריצים
- אילו env vars נדרשים

---

## 03:30 – 05:00

הדגמת commit מסודר אחד:
- בדיקת diff
- staging
- הודעת commit קצרה וברורה

אפשר להראות branch קטן או להסביר מתי `main` מספיק ומתי עדיף branch.

Overlay: **Small clean push beats messy heroic push**.

---

## 05:00 – 06:30

Push ל-GitHub ופתיחת הריפו בדפדפן:
- רואים README
- רואים שאין `.env`
- רואים שהקבצים נראים נקיים

מסך סיכום עם 3 bullets:
- לא דוחפים סודות
- README קטן חוסך בלבול
- ריפו נקי מקל על הפריסה

כותרת סיום: **Lesson 4.4 — Vercel deploy**.
