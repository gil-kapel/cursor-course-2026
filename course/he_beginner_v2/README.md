# ממנהלי מוצר למפתחי AI עם Cursor

קורס בעברית למנהלי מוצר ולמתחילים שרוצים לעבור מצ'אט גנרי לעבודה מסודרת עם Cursor — מהקמת סביבת עבודה ועד פרויקטים מקצה לקצה, סוכנים (Skills), MCP ודיפלוי.

## איך המבנה עובד

| רמה | מה זה אומר |
|-----|------------|
| **תיקיית מודול** (`module-XX-...`) | יחידת לימוד גדולה: מטרה, קשת נושאים |
| **תיקיית שיעור** (`lesson-X.Y-...`) | שיעור בודד; בפנים קובץ `README.md` עם מזהה השיעור וכותרת בעברית |

קישורים לשיעורים (שלד בלבד — תוכן לימודי יתווסף בהמשך):

### מודול 1: מבוא ויסודות – בונים את שולחן העבודה

**מטרת המודול:** להכין את סביבת העבודה, להסיר חסמים טכניים, להבין את המודלים העסקיים של המערכת, ולהכיר את כלי הליבה של Cursor.

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 1.1 | מה זה קלוד וקורסור (ואיך מתקינים) — הבדלים בין צ'אט רגיל לעורך קוד, התקנת Cursor, והוספת ההרחבה הרשמית; פתיחת תיקיית Workspace | [module-01-intro-and-workbench/lesson-1.1-claude-cursor-and-install](module-01-intro-and-workbench/lesson-1.1-claude-cursor-and-install/README.md) |
| 1.2 | חיבור מנויים ומודלים (Tiers & Limits) — חיבור למנוי (API או Cursor Pro), הבדלים בין חינם לבתשלום, ניהול מכסות במודלים חזקים (למשל Claude 3.5 Sonnet) | [module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models](module-01-intro-and-workbench/lesson-1.2-subscriptions-and-models/README.md) |
| 1.3 | טרמינל, גיט (Git) ורשתות ביטחון — הורדת "חרדת המסך השחור"; הסבר לפני Enter; Git כ"שמור משחק" ומוודא שה-AI לא מסתכל על קוד ישן | [module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety](module-01-intro-and-workbench/lesson-1.3-terminal-git-and-safety/README.md) |
| 1.4 | סיור מודרך במערכת — Cmd+K (עריכה נקודתית), Cmd+L (צ'אט מרחבי), Cmd+I (קומפוזר / ייצור רוחבי) | [module-01-intro-and-workbench/lesson-1.4-guided-ui-tour](module-01-intro-and-workbench/lesson-1.4-guided-ui-tour/README.md) |
| 1.5 | קונטקסט (Context) — איך "המוח" עובד; חלון הקשר; זיכרון השיחה; רעש בקונטקסט; ניקוי שולחן עבודה וצ'אטים חדשים כדי למנוע בלבול | [module-01-intro-and-workbench/lesson-1.5-context-window](module-01-intro-and-workbench/lesson-1.5-context-window/README.md) |

### מודול 2: סוכנות ה-AI שלך – פיתוח מבוסס Skills

**מטרת המודול:** לנהל את קלוד כאוסף עובדים מתמחים, עם חבילת פרומפטים/סקילים מובנית שמלווה את מחזור חיי הפיתוח.

#### שלב התכנון (Planning)

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 2.1 | מבוא לסקילים — הורדת "תיקיית הסוכנים" של הקורס והפעלת קובץ חוקים (`.cursorrules`) לתפקיד ספציפי | [module-02-skills-and-agents/lesson-2.1-skills-intro](module-02-skills-and-agents/lesson-2.1-skills-intro/README.md) |
| 2.2 | סוכן מחקר ותכנון (Product Agent) — מעבר מרעיון ל-PRD מפורט | [module-02-skills-and-agents/lesson-2.2-product-agent-prd](module-02-skills-and-agents/lesson-2.2-product-agent-prd/README.md) |
| 2.3 | סוכן ארכיטקטורה (Tech Lead Agent) — תרגום אפיון להחלטות טכנולוגיות ומבנה תיקיות | [module-02-skills-and-agents/lesson-2.3-tech-lead-architecture](module-02-skills-and-agents/lesson-2.3-tech-lead-architecture/README.md) |
| 2.4 | סוכן UX — זרימת משתמש (User Flow) ולוגיקה מאחורי המסכים | [module-02-skills-and-agents/lesson-2.4-ux-user-flow](module-02-skills-and-agents/lesson-2.4-ux-user-flow/README.md) |
| 2.5 | סוכן UI — הלבשת השלד עם ספריות עיצוב | [module-02-skills-and-agents/lesson-2.5-ui-design-systems](module-02-skills-and-agents/lesson-2.5-ui-design-systems/README.md) |
| 2.6 | סוכן אבטחה (Security Agent) — בדיקת סבירות וסיכונים (נתונים, הרשאות) | [module-02-skills-and-agents/lesson-2.6-security-agent](module-02-skills-and-agents/lesson-2.6-security-agent/README.md) |

#### שלב המימוש והפרודקשן (Implementation & Production)

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 2.7 | סוכן מתכנת (Dev Agent) — עבודה בקומפוזר לכתיבת קוד | [module-02-skills-and-agents/lesson-2.7-dev-agent-composer](module-02-skills-and-agents/lesson-2.7-dev-agent-composer/README.md) |
| 2.8 | סוכן בודק קוד (Code Review Agent) — ייעול וניקוי שאריות | [module-02-skills-and-agents/lesson-2.8-code-review-agent](module-02-skills-and-agents/lesson-2.8-code-review-agent/README.md) |
| 2.9 | סוכן טסטים (QA Agent) — בדיקות למקרי קצה | [module-02-skills-and-agents/lesson-2.9-qa-tests-agent](module-02-skills-and-agents/lesson-2.9-qa-tests-agent/README.md) |
| 2.10 | סוכן דיבאג (Debug Agent) — משגיאות טרמינל לתיקונים נקודתיים | [module-02-skills-and-agents/lesson-2.10-debug-agent](module-02-skills-and-agents/lesson-2.10-debug-agent/README.md) |

#### ניהול נתונים בסיסי

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 2.11 | Local DB — SQLite / JSON לנתונים זמניים בפיתוח | [module-02-skills-and-agents/lesson-2.11-local-db](module-02-skills-and-agents/lesson-2.11-local-db/README.md) |

### מודול 3: כוחות על עם שרתי MCP (Model Context Protocol)

**מטרת המודול:** לפרוץ את גבולות העורך ולתת לקלוד גישה בזמן אמת למידע מכלים חיצוניים.

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 3.1 | מבוא ל-MCP — מה הפרוטוקול ואיך מחברים שרת חדש בהגדרות Cursor | [module-03-mcp/lesson-3.1-mcp-intro](module-03-mcp/lesson-3.1-mcp-intro/README.md) |
| 3.2 | אינטגרציית Notion MCP — משיכת דרישות מ-PRD לתוך Cursor | [module-03-mcp/lesson-3.2-notion-mcp](module-03-mcp/lesson-3.2-notion-mcp/README.md) |
| 3.3 | אינטגרציית Figma MCP — מעיצוב לקוד | [module-03-mcp/lesson-3.3-figma-mcp](module-03-mcp/lesson-3.3-figma-mcp/README.md) |
| 3.4 | Web Search / Fetch — אינטרנט למחקר מתחרים, תיעוד עדכני ופתרון בעיות | [module-03-mcp/lesson-3.4-web-search-fetch](module-03-mcp/lesson-3.4-web-search-fetch/README.md) |

### מודול 4: אינטגרציות ודיפלוימנט (Deployments)

**מטרת המודול:** להוציא את האפליקציה מהמחשב, לחבר שירותי ענן, ולהעלות לאוויר.

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 4.1 | Remote DB עם Supabase — מעבר מ-Local DB לענן; Auth מאובטח | [module-04-deployments/lesson-4.1-supabase-remote-db](module-04-deployments/lesson-4.1-supabase-remote-db/README.md) |
| 4.2 | הכנה לפריסה עם GitHub — אריזת הפרויקט ודחיפה לענן GitHub | [module-04-deployments/lesson-4.2-github-prep](module-04-deployments/lesson-4.2-github-prep/README.md) |
| 4.3 | פריסה דרך Vercel — חיבור ל-GitHub, Build, קבלת URL ציבורי | [module-04-deployments/lesson-4.3-vercel-deploy](module-04-deployments/lesson-4.3-vercel-deploy/README.md) |

### מודול 5: פרויקטים מעשיים מקצה לקצה

**מטרת המודול:** ליישם את כל הידע, הסוכנים והכלים כדי לבנות מוצרים אמיתיים מאפס עד מוצר עובד.

| שיעור | נושא | תיקייה |
|-------|------|--------|
| 5.1 | פרויקט א' — אוטומציה אישית (עיבוד נתונים / קבצים); CSV ו-@mentions; דיבאג עם הדבקת לוג | [module-05-capstone-projects/lesson-5.1-project-automation-data](module-05-capstone-projects/lesson-5.1-project-automation-data/README.md) |
| 5.2 | פרויקט ב' — דף נחיתה אינטראקטיבי; Hero; קטלוג / רשימת מוצרים | [module-05-capstone-projects/lesson-5.2-project-landing-page](module-05-capstone-projects/lesson-5.2-project-landing-page/README.md) |
| 5.3 | סיכום הקורס — מבט על הדרך: מצרכני צ'אט למנהלי מוצר מבוססי AI ופרויקטים עצמאיים | [module-05-capstone-projects/lesson-5.3-course-wrap-up](module-05-capstone-projects/lesson-5.3-course-wrap-up/README.md) |

---

## הערת עבודה

בשלב הנוכחי יש כאן **רק שלד**: מבנה תיקיות, קישורים ותוכן עניינים. סקריפטים, פרומפטים, הקלטות וחומרי עומק לכל שיעור יתווספו בהמשך, שיעור אחר שיעור.

מסלול מתחילים קודם במאגר זה: [he-beginner](../he-beginner) — `he_beginner_v2` לא חייב לשכפל את אותו מבנה קבצים.
