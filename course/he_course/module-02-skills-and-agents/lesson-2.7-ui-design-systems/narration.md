# Lesson 2.7 — Voiceover (ElevenLabs / Hebrew)

Plain paragraphs for TTS. Section headers match on-screen beats. Trim pauses in ElevenLabs after timing the cut.

---

## 00:00 – 01:00

בשיעור הזה אני הולך לעשות דוגמה אחת מלאה מהתחלה עד הסוף.

אני לוקח את הזרימה שבנינו בשיעור הקודם: משתמש בוחר חבילה, נפתח לו חלון צד לתשלום, והוא צריך להבין מיד מה בחר, כמה זה עולה, ומה הדבר הבא שהוא צריך לעשות.

אני מתחיל ב־Cursor עם `@docs/ux-flows.md` ו־`@docs/architecture.md`, כי אני לא רוצה לקפוץ ישר לעיצוב. קודם אני רוצה שהסוכן יעזור לי לסגור את כל שאלות ה־UI שחסרות.

---

## 01:00 – 02:15

עכשיו אני פותח את ה־Agent, נותן לו את שני הקבצים, ומבקש ממנו לבנות לי מסמך UI אמיתי עבור הזרימה הזו.

אני עושה את זה קודם כול כדי שלא אגיע ל־Stitch עם בקשה ריקה. אני רוצה שהסוכן ישאל אותי מה הסגנון שאני מחפש, איזה רכיבים חייבים להופיע בחלון הצד, מה צריך לראות מעל ה־CTA, ואיך המסך הזה נראה במובייל.

כלומר, בשלב הזה אני לא מחפש "תוצאה יפה". אני מחפש בהירות. אם המסמך טוב, העיצוב שיבוא אחר כך יהיה הרבה יותר חזק.

---

## 02:15 – 03:30

עכשיו יש לי `docs/ui-plan.md`. אני פותח אותו ומוודא שיש בו רכיבים, states, נגישות, responsive behavior, וגם כיוון ויזואלי.

באותו רגע אני מוסיף עוד שכבה: אתר השראה שאני אוהב. לא כדי להעתיק אותו, אלא כדי להסביר מה אני אוהב בו. אולי את ההיררכיה. אולי את ריווח הכרטיסים. אולי את הדרך שבה אזור התשלום נראה אמין וברור.

למה אני עושה את זה? כי רוב האנשים אומרים "תעשה לי משהו יפה", וזה לא מספיק. השראה טובה עוזרת להפוך טעם עמום להנחיה שאפשר לעבוד איתה.

---

## 03:30 – 04:45

עכשיו אני עובר ל־Stitch עם שני דברים ביד: מסמך UI מסודר, ואתר השראה.

אני מעלה את החומר, מסביר שאני רוצה מסך בחירת חבילה עם חלון צד לתשלום, ושומר על אותו עיקרון מה־UX: כמה שפחות חיכוך, וכמה שיותר בהירות על הצעד הבא.

חשוב להגיד את זה בקול: כאן אנחנו מלמדים את הזרימה הידנית. במודול ה־MCP נחזור לכלים כאלה מזווית אוטומטית יותר. כרגע אני רוצה שהסטודנט יבין את השרשרת המלאה.

---

## 04:45 – 06:00

אחרי ש־Stitch מייצר כיוון, אני לא משאיר אותו שם. אני מוריד את התוצרים הרלוונטיים, מחזיר אותם ל־Cursor, ופותח אותם ליד `docs/ui-plan.md`.

עכשיו יש לי משהו אמיתי לעבוד ממנו: לא רק רעיון, לא רק זרימה, ולא רק עיצוב מנותק. יש לי מסמך חשיבה, יש לי כיוון ויזואלי, ויש לי חומר שאפשר לקחת למימוש.

וזו בדיוק הנקודה של השיעור הזה: הסוכן עוזר לי לחשוב, Stitch עוזר לי לראות, ו־Cursor הוא המקום שבו כל זה חוזר להיות buildable.

בשיעור הבא, 2.8, אני לא ניגש ישר לקוד. קודם אני עובר ל־Plan mode, לוקח את כל מה שבניתי עד עכשיו, ובונה תוכנית מימוש מסודרת לפי slices.

---

## Appendix — English prompt (UI + Stitch handoff)

```text
You are a UI systems agent. Goal: prepare a complete UI handoff that can be used both for design generation and implementation. Context: check `@docs/ux-flows.md` and `@docs/architecture.md`, ask me any missing UI questions, and use one reference site I like as inspiration. Output: save `docs/ui-plan.md` with components, states, accessibility requirements, responsive behavior, visual direction, and a Stitch-ready handoff section. Constraints: do not jump straight to visuals before asking clarifying UI questions; make the result usable both in Stitch and later in Cursor.
```
