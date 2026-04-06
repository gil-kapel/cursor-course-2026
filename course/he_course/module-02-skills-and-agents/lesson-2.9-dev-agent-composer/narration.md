# Lesson 2.9 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

עכשיו אני ממשיך את אותה דוגמה מהשיעורים הקודמים.

יש לי כבר תוכנית. יש לי slices. ועכשיו אני לא מבקש מהסוכן לבנות את כל המוצר, אלא רק את החלק הראשון: להציג את החבילות, ולאפשר פתיחה של חלון הצד לתשלום.

זה חשוב, כי אני רוצה להראות איך מימוש טוב מתחיל מהגדרה צרה וברורה, לא מבקשה כללית מדי.

---

## 01:00 – 02:15

אני פותח את `docs/implementation-plan.md` או `docs/slice-01.md`, ומסתכל רגע על Slice 1 לפני שאני אפילו עובר ל־Composer.

אני עושה את זה כדי לוודא שלסוכן ולי יש אותה הבנה: מה בונים עכשיו, אילו קבצים צפויים להשתנות, ומה עדיין לא נכנס לשלב הזה.

רק אחרי שזה ברור אני פותח את Composer, מצרף את ה־slice ואת מסמכי הרקע, ומבקש מהסוכן לממש רק את מה שהוגדר שם.

---

## 02:15 – 03:30

עכשיו הסוכן מציע diff. כאן אני עוצר ומסביר למה זה שלב קריטי.

אני לא בודק רק אם הקוד "נראה טוב". אני בודק אם הוא באמת שייך ל־Slice 1. אם פתאום נכנסים לכאן לוגיקות של תשלום מלא, states של שגיאה שלא תכננתי עדיין, או קבצים שלא קשורים לפתיחת חלון הצד - אני עוצר.

כלומר, התוכנית היא לא המלצה. היא הגבול של המימוש.

---

## 03:30 – 04:45

אחרי שאישרתי רק את מה ששייך לשלב הזה, אני בודק את התוצאה.

במקרה שלנו, אני רוצה לראות שני דברים:
שהחבילות מוצגות,
ושלחיצה על חבילה פותחת את חלון הצד כמו שהגדרנו ב־UX וב־UI.

אני מסביר את זה בקול כי כאן רואים את החיבור האמיתי בין כל השיעורים הקודמים: PRD, ארכיטקטורה, UX, UI, תוכנית slices - ועכשיו מימוש.

---

## 04:45 – 06:00

אחרי שה־slice עובד, אני חוזר למסמך התוכנית ובודק מה סומן כבוצע ומה נשאר ל־Slice הבא.

זה הרגל חשוב מאוד: לא "עשינו שינוי, יאללה נמשיך", אלא מימוש, בדיקה, ואז חזרה לתוכנית.

לסיכום: לקחתי Slice 1 מתוך תוכנית מסודרת, מימשתי אותו ב־Composer, ובדקתי שהוא עובד בלי לגלוש לשאר הפרויקט.

בשיעור הבא, 2.10, אני מפעיל את סוכן ה־Code Review כדי לעבור על מה שבניתי לפני שממשיכים ל־Slice הבא.

---

## Appendix — English prompt (Implement slice 1)

```text
You are a development agent working in Composer. Goal: implement only Slice 1 from the current plan. Context: check `@docs/implementation-plan.md` or `@docs/slice-01.md`, plus any supporting docs you need such as `@docs/prd.md`, `@docs/architecture.md`, and `@docs/ui-plan.md`. Output: propose a small multi-file implementation for Slice 1, then wait for my review before applying changes. Constraints: do not drift into Slice 2 or unrelated work; follow the planned file boundaries; include verification steps before you finish.
```
