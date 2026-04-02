# טיפים: הרשמית Claude Code for VS Code (ב-Cursor)

מסמך מרוכז **למנחים ולעורכים** — מבוסס על התיעוד הרשמי של ההרחבה ([Visual Studio Code · Claude Code](https://code.claude.com/docs/en/vs-code)). לפני הקלטה: לוודא גרסת Cursor/VS Code תואמת (בתיעוד: VS Code **1.98.0+** לדרישות ההרחבה; בפסקת Troubleshooting מופיע גם **1.85.0+** — עדכנו לפי מה שמוצג אצלכם).

## ממשק וניווט

- **פאנל Claude Code**: נפתח דרך אייקון ה-**Spark** בסרגל הצד ([מקור](https://code.claude.com/docs/en/vs-code)).
- **Diff**: למתוח את סרגל הצד **רחב יותר** כדי לראות שינויים inline; ללחוץ עליהם להרחבה ([מקור](https://code.claude.com/docs/en/vs-code)).
- **שיחות**: גישה להיסטוריית שיחות; אפשר **מספר סשנים במקביל** ([מקור](https://code.claude.com/docs/en/vs-code)).

## תכנון ועריכות

- **Plan mode**: תוכנית עם אפשרות **לערוך** את התוכנית של קלוד **לפני** שמקבלים ([מקור](https://code.claude.com/docs/en/vs-code)).
- **מצב קבלת עריכות אוטומטית** (auto-accept): קיים בהרחבה — לשקול **אישור ידני** למתחילים ([מקור](https://code.claude.com/docs/en/vs-code)).
- **קבצים**: אפשר **@-mention** לקבצים, ולצרף קבצים ותמונות דרך בורר הקבצים של המערכת ([מקור](https://code.claude.com/docs/en/vs-code)).

## פקודות ומקלדת

- **Slash commands**: רוב פקודות ה-slash מה-CLI זמינות גם בהרחבה ([מקור](https://code.claude.com/docs/en/vs-code)).
- **קיצורי מקלדת**: תמיכה ברוב הקיצורים מה-CLI ([מקור](https://code.claude.com/docs/en/vs-code)).

## MCP (חשוב ל-B11)

- **הגדרת שרתי MCP מלאה**: לפי התיעוד, עדיין דרך **ה-CLI תחילה**; ההרחבה משתמשת בהגדרות שנשמרו שם ([מקור](https://code.claude.com/docs/en/vs-code) — סעיף *Not Yet Implemented*).

## אינטגרציה ישנה: CLI + עורך (Legacy)

- הרצת `claude` מ**מסוף משולב** של העורך: שיתוף הקשר (בחירה/טאב), diff ב-IDE, הפניות לקבצים (`Cmd+Option+K` ב-Mac / `Alt+Ctrl+K` ב-Windows/Linux), שיתוף דיאגנוסטיקות ([מקור](https://code.claude.com/docs/en/vs-code)).
- ב-**Cursor**: לוודא שפקודת `cursor` ב-PATH (מקביל ל-`code` ב-VS Code) — Command Palette → התקנת פקודת מעטפת ([מקור](https://code.claude.com/docs/en/vs-code)).

## בטיחות

- עם הרשאות עריכה אוטומטיות, הסוכן עלול לגעת בקבצי הגדרות של ה-IDE — **מצב מאושר ידנית**, **Restricted Mode** ל-workspaces לא מהימנים, ופרומפטים ממקורות מהימנים בלבד ([מקור](https://code.claude.com/docs/en/vs-code)).

## עדיין לא בהרחבה (לעדכן מול התיעוד)

- Checkpoints, הגדרת subagents מלאה דרך UI, חלק מקיצורי הזיכרון/`!` bash, השלמת נתיבים ב-Tab — רשומים תחת *Not Yet Implemented* ([מקור](https://code.claude.com/docs/en/vs-code)).
