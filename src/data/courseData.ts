import type { Course } from './types';
import { getPublicCourseSkillsRepoBase, agentSkillsMarkdownUrl } from './studentSetup';

/** Raw download for lesson 2.1 AGENT_SKILLS.md (same tree as חומרי השיעור). */
const lesson21AgentSkillsPath =
  'course/he_beginner_v2/module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md';

const lesson27DevComposerSkillPath =
  'course/he_beginner_v2/module-02-skills-and-agents/lesson-2.7-dev-agent-composer/dev-composer-agent/SKILL.md';

function lesson21AgentSkillsRawUrl(): string {
  const base = getPublicCourseSkillsRepoBase().replace(/\/$/, '');
  const github = base.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)$/);
  if (github) {
    const [, owner, repo] = github;
    return `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/main/${lesson21AgentSkillsPath}`;
  }
  return `https://raw.githubusercontent.com/gil-kapel/cursor-course-2026/refs/heads/main/${lesson21AgentSkillsPath}`;
}

const publicAgentSkills21Raw = lesson21AgentSkillsRawUrl();
const publicAgentSkills21Blob = agentSkillsMarkdownUrl(lesson21AgentSkillsPath) ?? '';
const publicDevComposerSkillBlob = agentSkillsMarkdownUrl(lesson27DevComposerSkillPath) ?? '';

export const courseData: Course = {
  id: 'cursor-course-he-v2',
  title: 'ממנהלי מוצר למפתחי AI עם Cursor',
  description:
    'קורס מעשי בעברית למנהלי מוצר ומתחילים, מהקמת סביבת עבודה, דרך Skills ו-MCP, ועד פרויקטים מקצה לקצה.',
  author: {
    name: 'יאיר ברק',
    title: 'מרצה הקורס',
    initials: 'יב',
  },
  chapters: [
    {
      id: 'module-1',
      title: 'מבוא ובניית סביבת העבודה',
      icon: 'Laptop',
      lessons: [
        {
          id: '1.1',
          title: 'מה זה Cursor (א): הורדה והתקנה',
          duration: '05:00',
          status: 'available',
          badge: 'FREE',
          notes: [
            'יעד אורך פרק: כ־3–6 דקות; אותו נושא עשוי להתפצל לשני פרקים בפלייליסט.',
            'Cursor הוא עורך קוד וסביבת עבודה; הצ׳אט והקומפוזר מובנים באפליקציה.',
          ],
          prompts: [
            `Set up ASM in this project and leave it in a working state.

ASM (Agent Skill Manager) is a project-local skill system. It installs skills into \`.asm/\`, builds \`.asm/main_asm.md\`, groups skills into expertises, and syncs the router into the active agent config.

Do this in order:

1. Check whether \`asm\` is already installed. If not, install it with:
   \`curl -LsSf https://raw.githubusercontent.com/gil-kapel/asm/main/install.sh | sh\`

2. Check whether this repo already has ASM initialized by looking for \`asm.toml\`.
   - If ASM is not initialized, run \`asm init\`.
   - If ASM is already initialized, do not recreate it.

3. Inspect the current project briefly and choose the most relevant skill search queries for this repo.
   - Prefer curated, high-signal skills.
   - Do not install a large pile of generic skills.

4. Search and install only the most relevant skills.
   - Use \`asm search "<query>"\`.
   - Use \`asm add skill <source>\` for the best matches.

5. Configure expertise routing for the current project task or stack.
   - Run \`asm expertise auto "<task description>"\` with a concrete description of what this project needs.

6. Sync ASM into the active agent config.
   - Run \`asm sync\`.

7. If \`ASM_CLOUD_API_URL\` is configured and there is at least one local skill worth checking, run one cloud analysis:
   - \`asm skill analyze <skill-name> --cloud\`

8. At the end, report:
   - whether ASM was installed or already present
   - whether the workspace was initialized or already initialized
   - which skills were installed
   - which expertise was selected or created
   - which agent config(s) were synced
   - whether cloud analysis was run, and where the scorecard was saved

Success criteria:
- \`asm.toml\` exists
- \`.asm/main_asm.md\` exists
- at least one relevant skill is installed
- at least one expertise is active or created
- agent sync completed successfully`,
          ],
          checklist: [
            'הורידו והתקינו מ־cursor.com/download, הפעילו והתחברו לחשבון',
            'צרו תיקייה לפרויקט → File → Open Folder — ודאו שעץ הקבצים נראה בצד',
            'מהאפליקציית הקורס: העתיקו את פרומפט ההתקנה (פרומפטים / התקנה מהירה) → צ׳אט ב-Cursor (⌘L) על אותה תיקייה והריצו',
          ],
        },
        {
          id: '1.2',
          title: 'מנויים ומודלים',
          duration: '08:15',
          status: 'available',
          badge: 'FREE',
          prompts: [
            'אני בשיעור "מנויים ומודלים" בקורס Cursor. הסבר לי בקצרה איך לבחור מודל ב-Cursor (מהיר מול חזק / Auto), ואיך לנהל שימוש חכם ביום־יום. תן כלל אצבע אחד.',
          ],
          notes: [
            'כלל אצבע: התחילו במודל מהיר לרוב המשימות; עברו למודל חזק כשיש לוגיקה כבדה או תוצאה לא מספקת.',
          ],
          transcript: `Cursor מציע בחירת מודלים מתוך האפליקציה — לפעמים מודל מהיר ליום־יום, לפעמים מודל חזק יותר למשימות מורכבות, ולפעמים מצב Auto. השמות והמסלולים משתנים, אז תמיד מסתכלים על מה שמופיע אצלכם ב-Cursor Settings ובדף התמחור של Cursor.

כלל אצבע: אל תדליקו את המודל הכי יקר על שאלות קטנות. תנו למודל המהיר לעשות את רוב העבודה, ושמרו את החזק לרגעים שבהם באמת צריך עומק.

הטיפ הכי חשוב: עקבו אחרי המכסה שלכם ואחרי מה שכל מודל "שורף" — זה חוסך כסף ותסכול.`,
          checklist: [
            'בהגדרות Cursor (⌘,): מנוי / מכסה (Usage) — בחרו מודל מהיר ליום־יום',
            'אותה בקשה קצרה פעמיים: מודל מהיר מול חזק — הבינו מה נצרך מהמכסה',
          ],
        },
        {
          id: '1.3',
          title: 'טרמינל, Git ורשתות ביטחון',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'לפני שאני מריץ פקודה בטרמינל: הסבר לי בצורה פשוטה מה הפקודה הבאה עושה, מה הסיכונים, ומה חלופה בטוחה יותר אם יש: [הדבק כאן את הפקודה]',
            'עזרו לי להבין Git בפרויקט שלי: מה זה קומיט, איך לראות מה השתנה, ומה צעד מינימלי אחרי שינוי קטן בקוד לפני שאמשיך לבנות.',
          ],
          notes: [
            'הטרמינל הוא חלון טקסט שבו כותבים הוראות. לא מפחיד, לא מסתורי.',
            'ההרגל המקצועי: לפני שלוחצים Run, שואלים את הסוכן ב-Cursor "הסבר לי מה הפקודה הזאת עושה".',
            'Git = שמירת משחק. קומיט = תמונת מצב. לפני כל שינוי גדול, קומיט. תמיד.',
          ],
          transcript: `רוב האנשים שמתחילים לעבוד עם AI קופאים ברגע שהם רואים חלון שחור עם טקסט ירוק. זה נראה כמו משהו שרק מתכנתים מבינים.

מה זה בעצם הטרמינל? תחשבו על מה שאתם עושים עם העכבר: לוחצים על תיקייה כדי לפתוח אותה, גוררים קובץ. כל הפעולות האלה קיימות גם כפקודות טקסט. הטרמינל הוא פשוט מקום שבו כותבים את הפעולות האלה במלל.

ההרגל המקצועי: לפני שלוחצים Run, שואלים את הסוכן ב-Cursor "הסבר לי מה הפקודה הזאת עושה".

גיט עושה בדיוק את מה ש"שמירת משחק" עושה בוידאו-גיים. כל "שמירה" בגיט נקראת קומיט. קומיט הוא תמונת מצב של הפרויקט שלכם ברגע מסוים.

לפני כל שינוי גדול, קומיט. תמיד. הלולאה שלכם: קומיט, בונים, קומיט, בונים.`,
          checklist: [
            'טרמינל (Terminal → New Terminal): לפני Run — שאלו בצ׳אט מה הפקודה עושה ומה הסיכון; הריצו רק כשברור',
            'אם יש Git: שינוי קטן → commit אחד עם הודעה קצרה. אם אין Git — דעו שתמונת מצב לפני שינוי גדול שווה זהב',
          ],
        },
        {
          id: '1.4',
          title: 'סיור בממשק: Cmd+K, Cmd+L ו-Composer',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'סיכום קצר: מתי להשתמש ב-Cmd+K (או Ctrl+K) לעומת Cmd+L לעומת Cmd+I ב-Cursor? תן דוגמה אחת לכל כלי לפי סוג המשימה (שורה בודדת / חשיבה / בנייה רבת־קבצים).',
          ],
          notes: [
            'Cmd+K: עריכה בשורה. שינוי נקודתי, מהיר.',
            'Cmd+L: צ\'אט לצד הקוד. לחשוב, לשאול, לבדוק כיוון.',
            'Cmd+I: Composer. בנייה מאפס, עבודה על כמה קבצים בו-זמנית.',
          ],
          transcript: `שיעור 1.4 הוא סיור בכלי הבנייה עצמם. יש ב-Cursor שלושה כלים מרכזיים לעבודה עם הסוכן.

Cmd+K: עריכה בשורה. עומדים על השורה, לוחצים Command-K. נפתחת שורת קלט קטנה בתוך הקוד. כותבים בעברית מה רוצים. הסוכן עושה את השינוי ומציג diff.

Cmd+L: הצ\'אט לצד הקוד. כאן מדברים עם הסוכן בחופשיות: שואלים שאלות, מסבירים מה רוצים לבנות.

Cmd+I: Composer. הכלי החזק ביותר. הסוכן יכול לעבוד על כמה קבצים בו-זמנית. הוא לא רק עונה, הוא בונה.

שלושה כלים, שלוש סיטואציות. יש שורה שרוצים לשנות: K. חושבים בקול: L. בונים דבר חדש: I.`,
          checklist: [
            '⌘K: שינוי קטן בשורה — סקירת diff לפני אישור',
            '⌘L + @ לקובץ: שאלה אחת על הקוד',
            '⌘I: משימה על שני קבצים לפחות — לפני «קבל הכל» עברו על רשימת הקבצים',
          ],
        },
        {
          id: '1.5',
          title: 'חלון הקונטקסט והרגלים',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'כתוב עבורי פתיחה לשיחה חדשה ב-Cursor: בדיוק 3 שורות — המטרה, הקבצים הרלוונטיים (אזכרו שימוש ב-@), והפלט שאני רוצה לקבל. הנושא: [מלא כאן].',
          ],
          notes: [
            'חלון הקונטקסט = לוח לבן. כל הודעה נכתבת עליו, וכשהוא מתמלא המודל "שוכח" הקשר ישן.',
            'הרגל 1: שיחה חדשה כשמחליפים נושא.',
            'הרגל 2: @ במקום הדבקת קוד.',
            'הרגל 3: פתיחת שיחה עם הקשר תמציתי (3 שורות).',
          ],
          transcript: `יש שאלה שעולה אצל כולם: "למה הסוכן ענה לי מצוין לפני עשר דקות, ועכשיו הוא אומר הבל?"

זו לא תקלה. זה חלון הקונטקסט, ולהבין אותו זה ההבדל בין מי שמתוסכל מהמודל לבין מי שמפיק ממנו עבודה עקבית.

תחשבו על לוח לבן במשרד. כל הודעה שאתם כותבים, כל תשובה שהסוכן נותן, נכתב על הלוח. כשהלוח מתמלא, התשובות הולכות ונחלשות.

שלושה הרגלים: פתחו שיחה חדשה כשמחליפים נושא. השתמשו ב-@ במקום להדביק קוד. פתחו שיחה חדשה עם הקשר תמציתי.

מודול 1 נגמר. עשיתם את הכי קשה, התחלתם. במודול 2 אנחנו מתחילים לבנות עם Skills.`,
          checklist: [
            'שיחה ארוכה: שימו לב איך איכות התשובה בסוף — זה חלון הקונטקסט',
            'הרגל מנצח: נושא חדש → שיחה חדשה; קוד ארוך → @ לקובץ; פתיחה בשלוש שורות (מטרה, @קבצים, פלט רצוי)',
          ],
        },
      ],
    },
    {
      id: 'module-2',
      title: 'הסוכנות שלך: פיתוח מבוסס Skills',
      icon: 'Users',
      lessons: [
        {
          id: '2.1',
          title: 'מבוא ל-Skills — כללים, סקילים וסוגי ערך',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'סקיל הוא הרחבה לפרומפט של הסוכן: מוסיף ערך או בהזרקת ידע (ספריות, דפוסים) או בתזמור תהליך (PRD, ארכיטקטורה, דיבאג).',
            'כלל Cursor (Rule) ב־‎.cursor/rules/*.mdc‎: קונבנציות פרויקט — סטאק, שמות, גבולות; לא תסריט רב-שלבי שלם.',
            'סקילים בפרויקט: ‎.cursor/skills/<שם>/SKILL.md‎; ‎.cursorrules‎ בראש הריפו = מורשת.',
            'המשך הארכה: שיעור 2.2 (טריגרים ואיכות סקיל), שיעור 2.3 (חיפוש והתקנה עם ASM), ואז שרשרת הסוכנים מ־2.4.',
          ],
          prompts: [
            'אני בשיעור «מבוא ל-Skills» בקורס Cursor. הסבר לי בקצרה: (1) מה ההבדל בין Rule ב־.cursor/rules לבין Skill ב־.cursor/skills בגרסה עדכנית של Cursor, (2) מתי כל אחד, (3) שני סוגי הערך של סקיל — הזרקת ידע מול תזמור תהליך — עם דוגמה אחת לכל סוג.',
          ],
          transcript: `ברוכים הבאים למודול השני. עד עכשיו עבדתם עם הסוכן כמו עם עוזר אחד. מכאן אנחנו בונים צוות מומחים — וכל מומחה מתחיל מהבנה של הכלים: Rule ו-Skill.

סקיל הוא קובץ הדרכה שמורחב את מה שהמודל יודע לעשות במשימה מסוימת. יש שני סוגי ערך עיקריים: הראשון, הזרקת ידע — טריקים, דפוסים וספריות שהמודל לא «נושא» איתו בצורה מספיק מדויקת. השני, תזמור תהליך — סדר פעולות קבוע: איך לכתוב PRD, איך לתכנן ארכיטקטורה, איך לדבג עם ראיות.

כלל Cursor, Rule, זה משהו אחר: זה ההחלטות של הפרויקט שלכם. איזה סטאק, איך קוראים לדברים, מה מותר ומה אסור — כדי שהקוד יהיה אחיד בלי לשכפל את אותו משפט בכל שיחה. Rules נמצאים בדרך כלל תחת .cursor/rules בקבצי mdc; סקילים תחת .cursor/skills.

כלל אצבע: Rule = «איך אנחנו עובדים בפרויקט הזה». Skill = «איך לבצע משימה מסוג X בצורה חוזרת ומסודרת». פרומפט חד-פעמי בצ׳אט = משהו שלא שווה לשמור בקבצים.

בשיעורים 2.2 ו-2.3 נעמיק איך הסוכן בוחר סקיל, מה עושה סקיל טוב, ואיך מחפשים ומתקינים עם ASM. אחר כך נצא לדרך עם סוכן המוצר.`,
          checklist: [
            '⌘, → Rules / Project rules; בעץ הקבצים: ‎.cursor/rules‎ מול ‎.cursor/skills‎ — Rule = קונבנציית פרויקט, Skill = תהליך/ידע למשימה; פרומפט חד-פעמי כשלא שווה קובץ',
            `AGENT_SKILLS.md לשיעור 2.3: [GitHub](${publicAgentSkills21Blob}) · [Raw — טקסט בטאב, לא הורדה](${publicAgentSkills21Raw}). מקומי: ${lesson21AgentSkillsPath}`,
            'המשך: שיעור 2.2',
          ],
        },
        {
          id: '2.2',
          title: 'אנטומיה של סקיל: טריגרים, טוב מול גרוע',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'הסוכן רואה את מטא־הנתונים של הסקיל (שם + description ב־frontmatter) לפני גוף הקובץ — זה משפיע על ההחלטה מתי «לטעון» את הסקיל.',
            'גוף ה־SKILL.md נטען אחרי שהסקיל נבחר — progressive disclosure; חוסך קונטקסט.',
            'סקיל טוב: תיאור טריגר עשיר, תהליך ממוספר, צורת פלט ברורה, בדיקות איכות, טעויות נפוצות.',
            'סקיל גרוע: תיאור עמום, חיבור במקום workflow, בלי תבנית פלט ובלי ברירות מחדל לסטאק.',
          ],
          prompts: [
            'פתחו את הקובץ SKILL.md של dev-composer-agent (או סקיל קורס אחר) והסבירו: אילו מילות מפתח ב־description עוזרות לסוכן להבין מתי להפעיל את הסקיל, ומה השלבים הממוספרים בגוף הקובץ.',
            'תנו דוגמה לתיאור frontmatter גרוע לסקיל (עמום מדי) ותיקון קצר — רק שורת description.',
          ],
          transcript: `בשיעור הקודם הבנו מה זה סקיל ומה זה Rule. עכשיו נשאל: איך הסוכן בכלל יודע להשתמש בסקיל הנכון?

ברוב הזרימות, הסוכן רואה רשימה של סקילים עם שם ותיאור קצר — זה מה שכתוב ב־YAML בראש קובץ ה־SKILL. רק כשהמשימה שלכם מתאימה לתיאור הזה, הוא טוען את הגוף המלא. לכן התיאור הוא לא «טקסט יפה» — הוא ממש ממשק בין הבקשה שלכם לבין ההחלטה של המודל.

סקיל טוב בתור הזרקת ידע: מרכז דפוסים שחוזרים על עצמם בספרייה או בפריימוורק — עם דוגמאות קצרות וברירות מחדל. סקיל טוב בתור תזמור תהליך: קודם לאסוף מידע, אחר כך שלבים ממוספרים, בסוף צורת פלט ברורה ורשימת «מה נפשל בדרך».

סקיל גרוע: תיאור של שורה אחת בלי מילות מפתח למשימה, גוף שמסביר היסטוריה במקום להורות מה לעשות, ובלי תבנית לפלט או בדיקות בסוף.

בתרגיל: אותו קובץ SKILL.md תחת lesson-2.7-dev-agent-composer — סריקה אחת: טריגר ב־YAML, שלב 1 ב־Workflow, כותרות Output, נקודה מ־Common mistakes על הפרויקט שלכם.`,
          checklist: [
            `[SKILL.md — GitHub](${publicDevComposerSkillBlob}) · מקומי: ${lesson27DevComposerSkillPath}`,
            'במעבר אחד: משפט מ־description (למה זה טריגר ל«לממש פיצ׳ר») · שלב Workflow מס׳ 1 וארבע הנקודות שלו · ארבע כותרות Output · נקודה אחת מ־Common mistakes שרלוונטית לאפליקציית הקורס',
            'המשך: שיעור 2.3 (ASM)',
          ],
        },
        {
          id: '2.3',
          title: 'חיפוש והתקנת סקילים עם ASM',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'ASM: ‎asm search‎, ‎asm add skill <source>‎, ‎asm sync‎, ‎asm create expertise‎.',
            'מסמך AGENT_SKILLS.md בשיעור 2.1 מדרג מועמדים ומסביר ציון (התאמה לשיעור, סמכות, אקוסיסטם, התאמה ל-Cursor, חפיפה).',
            'לאמת: אחרי sync לבדוק ש־‎.asm/main_asm.md‎ קיים ושהסוכן רואה את הסקילים.',
            'אופציונלי: ‎asm skill analyze … --cloud‎ כש־ASM_CLOUD_API_URL מוגדר.',
          ],
          prompts: [
            `אני בשיעור 2.3 בקורס Cursor. עזרו לי להתקין את חבילת הסקילים הבסיסית לפי AGENT_SKILLS.md של שיעור 2.1: הריצו חיפוש asm רלוונטי אחד, הסבירו למה בחרתם במועמד, והדביקו את פקודות ה־asm add skill וה־asm sync המתאימות. בסיום הסבירו מה עושה asm create expertise.`,
          ],
          transcript: `עד כה הבנו מה זה סקיל ואיך הוא בנוי. עכשיו נוסיף את המנוע שמביא סקילים לפרויקט: ASM, Agent Skill Manager.

חיפוש מתחיל ב־asm search עם שאילתה קונקרטית — למשל סביב כתיבת סקילים או Cursor rules. לא סתם «AI טוב»; משהו שמתאר את המשימה שלכם.

לפני שמתקינים הכול, שווה לקרוא טבלת ציון ב־AGENT_SKILLS של הקורס: כמה השיעור צריך את זה, כמה המקור אמין, ועוד. זה מונע התקנת ערימה של סקילים גנריים שלא ישרתו אתכם.

התקנה: asm add skill עם מקור מהרשימה המומלצת, ואז asm sync כדי שהקבצים יגיעו למקום שהסוכן של Cursor קורא. אם אתם רוצים לקבץ כמה סקילים לתחום אחד — asm create expertise נותן שם לחבילה ומקשר אותה לניתוב ב־main_asm.

אחרי שסיימתם, יש לכם בסיס להמשיך לשרשרת הסוכנים: PRD, ארכיטכטורה, UX — כל אחד עם הסקיל שלו.`,
          checklist: [
            `טבלת ציון: [GitHub](${publicAgentSkills21Blob}) · [Raw — טקסט בטאב](${publicAgentSkills21Raw}). מקומי: ${lesson21AgentSkillsPath}`,
            '‎asm search‎ → ‎asm add skill‎ (מהמסמך) → ‎asm sync‎ — ודאו ‎.asm/main_asm.md‎ ו־‎.cursor/skills‎',
            '‎asm create expertise‎ (שם + תיאור) → המשך שיעור 2.4 (PRD)',
          ],
        },
        {
          id: '2.4',
          title: 'סוכן מוצר: מרעיון ל-PRD',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'PRD עם בעיה, משתמשים, היקף, זרימות, מדדים, קריטריוני קבלה, סיכונים ושאלות פתוחות.',
            'אחרי השיעור ממשיכים ל-Tech Lead (2.5) עם ה-PRD בצ׳אט (@).',
          ],
          checklist: [
            'רעיון במשפט + ‎.cursor/rules/project.mdc‎ (בעיה, קהל, גבול V1) — עם הסוכן',
            'PRD עם @: זרימה, מדדי הצלחה, «סיימנו כש…» (ניתן לבדיקה), סיכונים — שמרו ‎prd-v0.md‎ ל־2.5',
          ],
        },
        {
          id: '2.5',
          title: 'סוכן Tech Lead: ארכיטקטורה וחיתוכים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'קלט: PRD. פלט: סטאק, גבולות מערכת, מבנה תיקיות, API-ים וחיתוכי מימוש (slices).',
            'מסירה ל-UX (2.6) בלי לחזור על ויכוח טכנולוגי.',
          ],
          checklist: [
            '@ PRD + ‎stack.mdc‎: סטאק, גבולות מערכת, מבנה תיקיות, חיתוכי מימוש לפי סדר — ופסקה קצרה ל־UX (2.6)',
            'החלטה גדולה אחת בכתב (למשל «אין תשלום ב־V1»)',
          ],
        },
        {
          id: '2.6',
          title: 'סוכן UX: זרימות, ריק, שגיאה ומסירה',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מסע משתמש ולוגיקה מסך-אחר-מסך; מצבי ריק ושגיאה; נקודת מסירה ל-UI (2.7).',
          ],
          checklist: [
            'תהליך אחד מסך־אחר־מסך (מסמך המוצר): טעינה / ריק / שגיאה לכל מסך חשוב',
            'שמירה ל־2.7 עם @',
          ],
        },
        {
          id: '2.7',
          title: 'סוכן UI: מערכת עיצוב, נגישות ורספונסיביות',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'קומפוננטות, טוקנים ומצבי ממשק (טעינה/הצלחה/כשלון).',
            'נגישות והתאמה למסכים — פלט שמוכן למימוש ב-Composer (2.9) בלי CSS חד-פעמי.',
          ],
          checklist: [
            'רכיבים חוזרים + טוקנים (צבע/ריווח) — בלי «סטייל חד־פעמי» בלי שם',
            'מצבי ממשק (טעינה/הצלחה/כשלון) + וריאנט נייד אחד + נקודת נגישות אחת שחשובה לכם',
            'תקציר שורה ל־⌘I — מה לבנות ראשון',
          ],
        },
        {
          id: '2.8',
          title: 'סוכן אבטחה',
          duration: '05:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'סקירת סיכונים: הרשאות, סודות, חשיפת מידע, שימוש לרעה — לפני מימוש כבד.',
            'אחרי אפיון וארכיטקטורה; מזין את הפיתוח (2.9) ואת הביקורת (2.10).',
          ],
          checklist: [
            '@ מוצר + ארכיטקטורה + UI: סיכוני אבטחה עיקריים + שלוש משימות מעשיות לפני קוד כבד',
          ],
        },
        {
          id: '2.9',
          title: 'סוכן פיתוח: Composer, דיפ והרצה מקומית',
          duration: '12:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'Composer / סוכן, צירוף מסמכים (@), פרוסה אנכית, סקירת קבצים ו-Accept חלקי.',
            'טרמינל, ‎npm run dev‎ או פקודת הפרויקט — וידוא שהפרוסה רצה.',
          ],
          checklist: [
            '⌘I + @ מסמכים + ‎project.mdc‎/‎stack.mdc‎ — חתיכה אנכית אחת (מסך או זרימה קצרה)',
            'רשימת קבצים + diff בקובץ המרכזי לפני אישור; Accept חלקי אם צריך',
            'הרצה מקומית (כמו ב-README); שגיאה → טקסט מלא לצ׳אט או לשיעור 2.12 (Debug)',
          ],
        },
        {
          id: '2.10',
          title: 'סוכן Code Review',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מעבר מסודר על דיפ: באגים, רגרסיות, פגיעויות בסיסיות.',
            'קריאות, ניקיון ומוכנות למיזוג — משלים QA (2.11).',
          ],
          checklist: [
            'Review: באגים/רגרסיות → קריאות וטסטים — סיכום «מוכן להמשיך?» (+ Git: מה לפני merge ל־main)',
          ],
        },
        {
          id: '2.11',
          title: 'סוכן QA: תכנון בדיקות וטסטים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'תכנון מול קריטריוני קבלה: נתיבים שמחים וקצוות.',
            'כשלים, מעברי מצב וטסטים אוטומטיים ממוקדים.',
          ],
          checklist: [
            'מול «מתי סיימנו»: טבלה — רגוע / קצה / שגיאה (ניתן לביצוע ידני צעד־אחר־צעד)',
            'תרחיש אחד → טסט אוטומטי אחד (או הרצת טסטים קיימים בפרויקט)',
          ],
        },
        {
          id: '2.12',
          title: 'סוכן Debug',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'איסוף ראיות: לוגים, stack trace, פקודה שנכשלה.',
            'השערה, שחזור מינימלי ותיקון ממוקד — בלי לנחש על כל הריפו.',
          ],
          checklist: [
            'שחזור שגיאה + טקסט מלא (כולל stack) לצ׳אט + @ קובץ רלוונטי → תיקון ממוקד → הרצה חוזרת',
          ],
        },
        {
          id: '2.13',
          title: 'מסד מקומי: SQLite, JSON וגשר לענן',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מתי SQLite ומתי JSON לפיתוח מוקדם; דאטה זמנית.',
            'חשיבה סכימה-ראשונה; גשר למודול 4 (למשל Supabase).',
          ],
          checklist: [
            'מה לשמור + SQLite מול JSON + טיוטת שדות; מה יעבור לענן (למשל Supabase) ואיך מאפסים מקומית',
          ],
        },
      ],
    },
    {
      id: 'module-3',
      title: 'כוחות-על עם MCP',
      icon: 'Plug',
      lessons: [
        {
          id: '3.1',
          title: 'מבוא ל-MCP',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'מה זה MCP ב-Cursor ואיך זה שונה מצ׳אט רגיל.',
            'הוספת שרת, בדיקת חיבור, והמלצות בטיחות בסיסיות.',
          ],
          prompts: [
            'הסבר לי מה זה MCP בהקשר של Cursor, איך זה שונה מצ\'אט רגיל, ומה שאלה אחת חכמה שאשאל את הסוכן כדי לוודא שכלי חיצוני באמת מחובר ועובד.',
          ],
          checklist: [
            'הגדרות → MCP/Tools: מה שונה מצ׳אט רגיל; שאלת בדיקה אחת לסוכן; מותקן = סטטוס מחובר',
            'דוגמה למה לא להדביק בצ׳אט/מסך משותף',
          ],
        },
        {
          id: '3.2',
          title: 'Notion MCP',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מה אפשר לעשות עם Notion דרך MCP מול PRD ומשימות.',
            'זרימת עבודה: משיכת דרישות, סנכרון, ומה לא לשים בצ׳אט משותף.',
          ],
          prompts: [
            'אני רוצה לעבוד עם Notion דרך MCP ב-Cursor. עזרו לי לבדוק מה כבר מוגדר בפרויקט, מה חסר, ואילו משימות מעשיות אפשר לבצע עם Notion MCP בלי לחשוף סודות או טוקנים במסך משותף.',
          ],
          checklist: [
            'עם Notion+MCP: משימה אחת אמיתית (בלי סודות על המסך) או דלגו והבינו למה חיבור עדיף להעתקה ידנית',
          ],
        },
        {
          id: '3.3',
          title: 'Figma MCP',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מבנה מסכים וטוקנים מהסטודיו לקוד.',
            'שמירה על קומפוננטות, גבולות, ושיתוף פעולה עם מעצבים.',
          ],
          prompts: [
            'אני משתמש/ת ב-Figma MCP מול Cursor. עזרו לי לתכנן זרימה: איך לייצא מבנה מסכים/טוקנים לקוד, ומה כדאי להימנע ממנו כדי לא לשבור קומפוננטות או עיצוב.',
          ],
          checklist: [
            'עם Figma: מסכים + גבול «מה לא הופך לרכיב»; בלי Figma: מסך אחד במילים → רכיבים בקוד',
          ],
        },
        {
          id: '3.4',
          title: 'חיפוש ווב ו-Fetch',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'מתי לבקש חיפוש או fetch ואיך לנסח בקשה ברורה.',
            'אימות מקורות, מגבלות, ושימוש בתוצאות בקוד בלי להעתיק סתם.',
          ],
          prompts: [
            'איך לנסח בקשה טובה לסוכן שמשתמש בחיפוש או fetch באינטרנט? תן הנחיות בטיחות: מה לא לבקש, איך לדרוש מקורות, ואיך לבדוק עובדות לפני שמסתמכים עליהן בקוד.',
          ],
          checklist: [
            'חיפוש עם מקורות בקישורים + אימות עובדה אחת בעצמכם מול האתר',
          ],
        },
      ],
    },
    {
      id: 'module-4',
      title: 'אינטגרציות ופריסה לענן',
      icon: 'Rocket',
      lessons: [
        {
          id: '4.1',
          title: 'Supabase: סכימה, העברה ו-RLS',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'מסד מקומי לענן: סכימה, משתני סביבה, צעדים ראשונים.',
            'RLS בסיסי, בדיקה מהאפליקציה, טעויות נפוצות.',
          ],
          prompts: [
            'אני מעביר/ה מסד מקומי (SQLite או קבצים) ל-Supabase. תן צ\'ק-ליסט: סכמה, משתני סביבה, מדיניות RLS בסיסית, ואיך לבדוק חיבור מהאפליקציה בצורה בטוחה.',
          ],
          checklist: [
            'Supabase: .env מקומי (לא בגיט) + טיוטת סכימה + RLS טיוטה + בדיקת חיבור',
          ],
        },
        {
          id: '4.2',
          title: 'GitHub: הכנת הריפו, ענפים ודחיפה',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            '.gitignore, README מינימלי, קומיט ראשון.',
            'main מול branch, דחיפה בטוחה, מה לא לדחוף.',
          ],
          prompts: [
            'עזרו לי להכין את הפרויקט ל-GitHub: .gitignore סביר, README מינימלי, קומיט ראשון, והסבר קצר מתי לעבוד על main ומתי על branch נפרד.',
          ],
          checklist: [
            '.gitignore + README מינימלי + commit; GitHub: ענף קטן + push; ודאו ש־.env לא בדרך לדחיפה',
          ],
        },
        {
          id: '4.3',
          title: 'Vercel: חיבור, build ופריסה',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'חיבור פרויקט, build command, output directory.',
            'משתני סביבה ב-Vercel, בדיקות אחרי deploy, URL ציבורי.',
          ],
          prompts: [
            'אני רוצה לפרוס ל-Vercel מריפו ב-GitHub. עזרו לי לזהות build command, output directory, ומשתני סביבה שחייבים להיות ב-Vercel (ולא בקוד). אם חסר מידע — שאלו אותי שאלות ממוקדות.',
          ],
          checklist: [
            'Vercel+GitHub: build/output לפי **הפרויקט שלכם**, סודות רק ב־Vercel, deploy — URL חי + בדיקת נייד',
          ],
        },
      ],
    },
    {
      id: 'module-5',
      title: 'פרויקטי גמר',
      icon: 'Trophy',
      lessons: [
        {
          id: '5.1',
          title: 'פרויקט A: אוטומציה אישית',
          duration: '15:00',
          status: 'available',
          badge: 'PREMIUM',
          notes: [
            'טריגר, קלט, פלט, וגבולות — מה מותר לאוטומט.',
            'צעדי עיבוד, בדיקה, והרשאות מעשיות.',
            'ליטוש, מגבלות פרטיות, וסיכום מה למדתם.',
          ],
          prompts: [
            'אני בפרויקט גמר "אוטומציה אישית". עזרו לי לפרק לשלבים: טריגר, קלט, צעדי עיבוד, פלט, ובדיקה. הדגישו פרטיות, הרשאות, ומה לא לאוטומט בלי אישור מפורש.',
          ],
          checklist: [
            'טריגר/קלט/פלט/אישור לפני מעשה + ריצת דמה + הרשאות; כשלון ופרטיות; משפט סיכום',
          ],
        },
        {
          id: '5.2',
          title: 'פרויקט B: דף נחיתה אינטראקטיבי',
          duration: '15:00',
          status: 'available',
          badge: 'PREMIUM',
          notes: [
            'מבנה קבצים, כותרת, CTA, הוכחה חברתית.',
            'אינטראקציה אחת שמוסיפה ערך בלי להסתבך.',
            'רספונסיביות, בדיקה מהירה, מוכנות להצגה.',
          ],
          prompts: [
            'אני בונה דף נחיתה אינטראקטיבי לפרויקט הגמר. עזרו לי להגדיר מבנה קבצים, טקסטים ראשונים (כותרת, CTA, הוכחה חברתית), ואינטראקציה אחת שמוסיפה ערך מידי בלי להסתבך.',
          ],
          checklist: [
            'מבנה + כותרת/CTA + אמינות + אינטראקציה אחת עם משוב',
            'נייד/דסקטופ + favicon/כותרת טאב + קישור להצגה',
          ],
        },
        {
          id: '5.3',
          title: 'סיכום ומה הלאה',
          duration: '05:00',
          status: 'available',
          badge: 'PREMIUM',
          prompts: [
            'סכמו בשבילי את מה שלמדתי בקורס לפי המודולים (מבוא, Skills, MCP, פריסה, פרויקטי גמר), והמליצו על 3 משימות המשך מעשיות לשבוע הקרוב עם Cursor — ברמת קושי מתאימה למי שסיים את הקורס.',
          ],
          checklist: [
            'פרומפט הסיכום מהאפליקציה → בחרו משימת המשך אחת לשבוע',
          ],
        },
      ],
    },
  ],
  attachedFiles: [],
};
