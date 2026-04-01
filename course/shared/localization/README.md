# Localization Kit

## Goal

לאפשר לשכפל כל שיעור משפת המקור לשפות נוספות בלי לשבור timing, prompts או עקביות טרמינולוגית.

## What This Kit Includes

- `script-master-template.md`
- `caption-master-template.srt`
- `terminology-glossary-template.csv`
- הנחיות עבודה לשימור scene IDs ותזמון

## Source of Truth Order

1. Script master
2. Voice term glossary
3. Caption master
4. Localized script
5. Localized captions

## Localization Workflow

### 1. Freeze the Hebrew source

- לא מתרגמים לפני שהתסריט העברי סופי.
- scene IDs חייבים להיות יציבים.
- אם משנים scene boundaries, מעדכנים גם captions.

### 2. Duplicate the script master

- מעתיקים את קובץ המקור לשפה החדשה.
- שומרים metadata זהה.
- משאירים `scene_id` ו-`target_time` ללא שינוי.

### 3. Translate for speech, not word-by-word

- התרגום צריך להיות טבעי בדיבור.
- שומרים על אותו רעיון בכל scene.
- אם בשפה החדשה צריך יותר מילים, מקצרים ניסוח כדי להישאר קרובים לזמן היעד.

### 4. Respect the glossary

- terms כמו `Cursor`, `Agent`, `Plan mode`, `Vercel`, `GitHub`, `MCP` נשארים באנגלית אם זו ההחלטה בגלוסריום.
- לא משנים term באמצע הסדרה.

### 5. Rebuild captions from the localized script

- לא לתרגם ישירות מה-caption העברי אם אפשר.
- בונים captions מהתסריט המתורגם ואז מסנכרנים מול הקול החדש.

### 6. QA the localized lesson

- לבדוק עקביות טרמינולוגית.
- לבדוק שהמסך עדיין מתאים לקריינות.
- לבדוק שאין אזכורים מקומיים שלא מתאימים לשוק החדש.

## Recommended File Naming

- Hebrew script: `01-intro-and-outcomes.he.md`
- English script: `01-intro-and-outcomes.en.md`
- Hebrew captions: `01-intro-and-outcomes.he.srt`
- English captions: `01-intro-and-outcomes.en.srt`

## Localization Rules

- לא משנים lesson IDs.
- לא משנים scene order בלי סיבה אמיתית.
- שומרים על hook, demo, mistakes, recap גם בתרגום.
- prompt assets יכולים להישאר באנגלית אם זה משרת reliability.
- אם מחליטים לתרגם prompts, שומרים גם גרסה אנגלית מקורית.

## Ready Check Before Translating

- Hebrew script final
- Hebrew captions approved
- Glossary reviewed
- UI in screen recording generic enough for reuse
- Pricing references not overly specific
