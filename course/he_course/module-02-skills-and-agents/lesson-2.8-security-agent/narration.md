# Lesson 2.8 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

בשיעור הזה אני ממשיך את אותה דוגמה מהשיעור הקודם.

יש לי כבר PRD, ארכיטקטורה, מסמך UX, ומסמך UI עבור זרימת בחירת חבילה ותשלום בחלון צד. עכשיו אני עדיין לא רוצה לממש. אני רוצה קודם לעצור ולבנות תוכנית.

לכן אני מעביר את הסוכן ל־**Plan mode**. זה חשוב, כי כרגע אני לא רוצה קוד. אני רוצה סדר.

---

## 01:00 – 02:15

עכשיו אני מצרף את כל המסמכים:
`@docs/prd.md`,
`@docs/architecture.md`,
`@docs/ux-flows.md`,
ו־`@docs/ui-plan.md`.

אני עושה את זה כי אני רוצה שהתוכנית לא תישען רק על מסמך אחד. אם אני אתכנן רק לפי ה־UI, אני עלול לפספס אילוצים טכניים. אם אתכנן רק לפי הארכיטקטורה, אני עלול לפספס את הזרימה של המשתמש.

כלומר, המטרה שלי כאן היא לבנות תמונה אחת מסודרת מכל מה שכבר יצרתי.

---

## 02:15 – 03:30

עכשיו אני מבקש מהסוכן לפרק את העבודה ל־slices.

למשל:
Slice 1 - להציג את החבילות ולפתוח את חלון הצד.
Slice 2 - לחבר את הלוגיקה של התשלום.
Slice 3 - להוסיף polish, states, ושגיאות.

אני מסביר את זה בקול כי זה כל הערך של השיעור: לא "מה אפשר לבנות", אלא "מה בונים קודם כדי לא להסתבך".

---

## 03:30 – 04:45

בשלב הזה אני בודק שהתוכנית לא נשארת ברמת כותרות. אני רוצה שלכל slice יהיה:
מטרה,
קבצים צפויים,
בדיקת הצלחה,
וגבול ברור של out of scope.

למה זה חשוב? כי בלי זה Composer יתחיל לגלוש. ברגע שהתוכנית חדה, גם המימוש הבא יהיה הרבה יותר מדויק.

---

## 04:45 – 06:00

עכשיו אני שומר את התוצאה כ־`docs/implementation-plan.md` או כסדרת קבצי slice.

אני פותח את המסמך, מסתכל במיוחד על Slice 1, ושואל את עצמי: אם אני עובר עכשיו לשיעור הבא, האם ברור לי בדיוק מה אני מבקש מהסוכן לממש?

אם התשובה היא כן, התוכנית טובה. אם לא, אני עדיין נשאר ב־Plan mode ומשפר אותה.

בשיעור הבא, 2.9, אני לוקח בדיוק את Slice 1 הזה, ועובר ל־Composer כדי לממש רק אותו.

---

## Appendix — English prompt (Plan mode implementation gate)

```text
You are a planning agent in Plan mode. Goal: turn all existing product, architecture, UX, and UI documents into a clean implementation plan before any coding starts. Context: check `@docs/prd.md`, `@docs/architecture.md`, `@docs/ux-flows.md`, and `@docs/ui-plan.md`. Output: either save `docs/implementation-plan.md` or create `docs/slice-01.md`, `docs/slice-02.md`, and `docs/slice-03.md`, with clear build order, blockers, expected files, and verification for each slice. Constraints: do not implement code yet; keep Slice 1 small and concrete; call out any blocker that should be solved before implementation.
```
