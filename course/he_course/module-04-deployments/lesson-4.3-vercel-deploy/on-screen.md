# שיעור 4.4 — על המסך (הוראות צילום)

טיימקודים ליעדי עריכה; לכוונן אחרי picture lock.

---

## 00:00 – 01:30

פתיחת Vercel dashboard וחיבור ריפו קיים מ-GitHub.

Overlay: **Deploy is not done until the live app works**.

---

## 01:30 – 03:30

מעבר על הגדרות הפריסה:
- framework preset
- build command
- output directory אם רלוונטי
- environment variables

מראים במפורש שה-secrets מוזנים ב-Vercel ולא בקוד.

---

## 03:30 – 05:00

אחרי deploy:
- פתיחת ה-URL הציבורי
- בדיקת מסך אחד אמיתי
- בדיקת flow אחד אמיתי
- אם יש דאטה, בדיקת fetch אחד או פעולה אחת מול Supabase

אפשר להראות בקצרה logs או deployment details כדי לחזק את לולאת הדיבוג.

---

## 05:00 – 06:30

מסך סיכום עם 3 bullets:
- Vercel קורא את הריפו, אבל אתם אחראים להגדרות
- env vars שייכים לענן, לא לקוד
- deploy נבדק דרך flow אמיתי, לא רק דרך מסך הצלחה

כותרת סיום: **Module 5 — Build real projects end to end**.
