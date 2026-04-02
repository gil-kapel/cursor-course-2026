# Hebrew-First Production Pipeline

## Goal

לייצר תהליך קבוע שאפשר להריץ על כל שיעור:

`lesson brief -> script master -> screen recording -> ElevenLabs avatar/voice -> captions -> QA -> publish`

## Source of Truth

- התסריט הוא מקור האמת.
- כל סצנה מקבלת `scene_id` קבוע.
- כל קטע קריינות נכתב בשפה מדוברת וקצרה.
- כל overlay על המסך נגזר ישירות מהתסריט ולא נכתב מחדש ידנית.

## Folder Conventions

- `course/he-advanced/docs/`: מסמכי קורס מתקדם בעברית
- `course/he-advanced/scripts/`: תסריטי מקור בעברית למסלול המתקדם
- `course/shared/templates/`: תבניות שיעור ועזרי הפקה
- `course/shared/production/`: pipeline, גלוסריום, צ'קליסטים
- `course/shared/localization/`: assets לשפות נוספות

## Roles

### 1. Curriculum owner

- מאשר מטרה, תוצאה, וקצב הלמידה של כל שיעור.

### 2. Script owner

- כותב script master.
- מקצר משפטים לשפה מדוברת.
- שומר על scene IDs יציבים.

### 3. Screen recorder

- מצלם את הדמו לפי script checklist.
- מוודא שכל קליק, prompt ו-output מופיעים ברור על המסך.

### 4. Voice / Avatar producer

- מזין את הקריינות ל-ElevenLabs.
- בודק הגייה של terms טכניים.
- שומר naming עקבי ל-assets.

### 5. QA reviewer

- בודק התאמה בין script, וידאו, captions ו-UI בפועל.

## Recommended Production Flow

### Stage 1: Prepare the lesson brief

- להעתיק את `lesson-brief-template.md`.
- למלא lesson goal, prerequisites, demo result ו-common mistakes.
- לאשר שהשיעור מסתיים בפעולה אחת ברורה ללומד.

### Stage 2: Write script master

- כל scene קצרה עם:
  - `scene_id`
  - `target_time`
  - `visual`
  - `narration`
- משפטים קצרים.
- רעיון אחד למשפט.
- ללא פסקאות ארוכות.

### Stage 3: Prepare on-screen assets

- לבחור prompt אחד מרכזי לשיעור.
- להכין overlays קצרים:
  - lesson title
  - 1-3 takeaways
  - prompt overlay
  - common mistake callout

### Stage 4: Record screen capture

- לנקות desktop והודעות קופצות.
- לפתוח רק חלונות נחוצים.
- להשתמש ב-zoom עדין במקום תנועות חדות.
- להתחיל כל take משנייה אחת של שקט לצורכי עריכה.

## Screen Recording Checklist

- UI מעודכן ליום הצילום.
- project demo מוכן מראש.
- prompts מוכנים להדבקה.
- terminal/font size קריא.
- theme קבוע לאורך הסדרה.
- notifications כבויות.
- אין מידע רגיש במסך.

### Stage 5: Generate voice or talking avatar in ElevenLabs

- להדביק את הקריינות scene-by-scene.
- להשתמש בקול קבוע לכל הסדרה.
- לשמור קצב דיבור יציב בין שיעורים.
- לבדוק כל scene לפני export מלא.

## ElevenLabs Voice Settings Baseline

- Voice style: professional, warm, confident
- Pace: medium
- Energy: medium-high
- Stability: medium
- Pronunciation: use glossary for technical terms

## Avatar Guidance

- לשמור framing עקבי בין שיעורים.
- avatar מופיע בעיקר בפתיחה, במעברים, ובסיכום.
- בזמן demo ארוך, לתת עדיפות למסך ולא לאווטאר.

### Stage 6: Caption generation

- לייצר captions מה-script master, לא מ-ASR בלבד.
- אחר כך להשוות לאודיו הסופי.
- לפצל שורות ארוכות.
- לשמור terms טכניים קבועים.

## Caption Rules

- מקסימום 2 שורות על המסך.
- לא יותר מ-42 תווים לשורה אם אפשר.
- לא לפצל term טכני בין שורות.
- שמות מוצרים כמו `Cursor`, `Plan mode`, `Vercel`, `GitHub` נשארים באנגלית.

### Stage 7: QA

- להשוות scene-by-scene:
  - script מול voice
  - voice מול captions
  - captions מול מה שנראה במסך
- לבדוק שה-prompt שמופיע על המסך תואם לקבצי המקור.

### Stage 8: Export and archive

- לשמור export סופי לכל שיעור.
- לשמור גם source pack:
  - script master
  - caption master
  - prompt asset
  - glossary version
  - notes on UI version

## Naming Convention

- Script: `01-intro-and-outcomes.md`
- Captions: `01-intro-and-outcomes.he.srt`
- Prompt asset: `01-intro-and-outcomes.prompt.txt`
- Rendered video: `01-intro-and-outcomes.he.mp4`
- Localized video: `01-intro-and-outcomes.en.mp4`

## Risk Controls

- לא להקליט מספרי מחירים קשיחים בלי בדיקה באותו יום.
- לא להציג UI שעלול להשתנות בלי ניסוח גמיש בקריינות.
- לא לשמור secrets ב-screen recording.
- לא להסתמך על auto-captions בלבד.

## Done Definition Per Lesson

- lesson brief מלא
- script master מאושר
- prompt asset זמין
- screen recording נקי
- ElevenLabs audio/avatar מאושר
- captions מסונכרנות
- QA passed
- source pack נשמר ללוקליזציה
