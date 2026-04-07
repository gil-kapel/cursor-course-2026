import type { Course } from './types';
import { getPublicCourseSkillsRepoBase, agentSkillsMarkdownUrl } from './studentSetup';

/** Raw download for lesson 2.1 AGENT_SKILLS.md (same tree as חומרי השיעור). */
const lesson21AgentSkillsPath =
  'course/he_course/module-02-skills-and-agents/lesson-2.1-skills-intro/AGENT_SKILLS.md';

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
            'הורידו והתקינו Cursor — אתר רשמי או הורדה ישירה (באותה שורה למטה), הפעילו והתחברו לחשבון',
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
          videoUrl:
            'https://player.mediadelivery.net/embed/632156/2e5a381e-476a-4db3-b982-15145d7bc180?autoplay=false&loop=false&muted=false&preload=true&responsive=false',
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
          videoUrl:
            'https://player.mediadelivery.net/embed/632156/6fa6a1fd-fb5b-457e-947a-aab04b07b836?autoplay=true&loop=false&muted=false&preload=true&responsive=true',
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

בשיעורים הבאים במודול 1 נעבור על מצבי צ'אט (Ask, Agent, Plan, Debug) ועל הגדרות Cursor לפני שמסיימים את המודול. אחר כך, במודול 2, מתחילים לבנות עם Skills.`,
          checklist: [
            'שיחה ארוכה: שימו לב איך איכות התשובה בסוף — זה חלון הקונטקסט',
            'הרגל מנצח: נושא חדש → שיחה חדשה; קוד ארוך → @ לקובץ; פתיחה בשלוש שורות (מטרה, @קבצים, פלט רצוי)',
          ],
        },
        {
          id: '1.6',
          title: 'מצבי צ׳אט: Ask, Agent, Plan ו-Debug',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'דמו אחד end-to-end: בונים אפליקציית Contact List ב-React + Tailwind דרך כל מצבי הצ׳אט.',
            'Ask להבנה → Plan כולל עדכון תוכנית → Agent עד שרץ בדפדפן → Debug כששוברים בכוונה → Max mode בקצרה.',
          ],
          prompts: [
            'Build a simple, single-page Contact List app using React and Tailwind CSS. It should allow users to add a name and phone number, display them in a list, and delete entries. Keep the state local (no database for now) and focus on a clean, modern UI, and open in cursor built-in browser',
          ],
          checklist: [
            'זיהוי Ask / Agent / Plan / Debug בממשק שלכם',
            'נסו את אותה בקשה ב-Plan לעומת Agent — שימו לב להבדל בתפוקה',
            'תרגלו מעבר מצב לפני שליחה — לוודא שהמצב מתאים לסוג הבקשה',
          ],
        },
        {
          id: '1.7',
          title: 'הגדרות Cursor, אינדוקס ומסמכים',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'מה לשנות עכשיו כמתחילים ומה להשאיר בברירת מחדל; Usage ומודלים — איפה חוזרים אליהם.',
            'Indexing & Docs: הוספת מקורות תיעוד מותאמים; סיכום מודול 1 וחיבור למודול 2 (Skills).',
          ],
          prompts: [
            'סיירו איתי ב-Cursor Settings: רשמו 5 הגדרות שכדאי לבדוק כמתחילים (כולל Models ו-Indexing/Docs) ומה להשאיר כמו שזה.',
            'בקשו מהסוכן לבדוק את סביבת העבודה שלי: אילו קבצי config רלוונטיים, מה חסר לפני שמתחילים לבנות, ומה לא לגעת בו עכשיו.',
          ],
          checklist: [
            '⌘, (או Ctrl+,): General, Models, Agents / Tab — סימון מה שיניתם ולמה',
            'Indexing & Docs: הוסיפו לפחות מקור תיעוד אחד רלוונטי לסטאק שלכם',
            'משפט אחד: מה לקחתם מהמודול הראשון לפני מודול 2',
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
            'המשך פרקטי: שיעור 2.2 (ניהול Agents וקונטקסטים), שיעור 2.3 (חיפוש והתקנה עם ASM), ואז שרשרת הסוכנים מ־2.4.',
          ],
          prompts: [
            'אני בשיעור "מבוא ל-Skills" בקורס Cursor. הסבירו לי בקצרה ובטבלה: מה זה Rule, מה זה Skill, מתי משתמשים בכל אחד, ומה ההבדל בין הזרקת ידע לבין תזמור תהליך. סיימו בשתי דוגמאות קצרות: אחת לכל סוג Skill.',
          ],
          transcript: `ברוכים הבאים למודול השני. עד עכשיו עבדתם עם הסוכן כמו עם עוזר אחד. מכאן אנחנו בונים צוות מומחים — וכל מומחה מתחיל מהבנה של הכלים: Rule ו-Skill.

סקיל הוא קובץ הדרכה שמורחב את מה שהמודל יודע לעשות במשימה מסוימת. יש שני סוגי ערך עיקריים: הראשון, הזרקת ידע — טריקים, דפוסים וספריות שהמודל לא «נושא» איתו בצורה מספיק מדויקת. השני, תזמור תהליך — סדר פעולות קבוע: איך לכתוב PRD, איך לתכנן ארכיטקטורה, איך לדבג עם ראיות.

כלל Cursor, Rule, זה משהו אחר: זה ההחלטות של הפרויקט שלכם. איזה סטאק, איך קוראים לדברים, מה מותר ומה אסור — כדי שהקוד יהיה אחיד בלי לשכפל את אותו משפט בכל שיחה. Rules נמצאים בדרך כלל תחת .cursor/rules בקבצי mdc; סקילים תחת .cursor/skills.

כלל אצבע: Rule = «איך אנחנו עובדים בפרויקט הזה». Skill = «איך לבצע משימה מסוג X בצורה חוזרת ומסודרת». פרומפט חד-פעמי בצ׳אט = משהו שלא שווה לשמור בקבצים.

בשיעורים 2.2 ו-2.3 נעבור לדבר הפרקטי באמת: איך מנהלים סוכנים נפרדים ב-Cursor, ואיך מתקינים את הסקילים המתאימים עם ASM. אחר כך נצא לדרך עם סוכן המוצר.`,
          checklist: [
            '⌘, → Rules / Project rules וגם Agents; בעץ הקבצים: ‎.cursor/rules‎ מול ‎.cursor/skills‎ — Rule = קונבנציית פרויקט, Skill = תהליך/ידע למשימה',
            `AGENT_SKILLS.md לשיעור 2.3: [GitHub](${publicAgentSkills21Blob}) · [Raw — טקסט בטאב, לא הורדה](${publicAgentSkills21Raw}). מקומי: ${lesson21AgentSkillsPath}`,
            'המשך: שיעור 2.2',
          ],
        },
        {
          id: '2.2',
          title: 'ניהול Agents ב-Cursor: סוכן לכל משימה',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'Agent אחד = משימה אחת או תחום אחד. אל תעמיסו על אותו Agent גם PRD, גם UI, גם Debug וגם מחקר.',
            'לכל Agent כדאי להגדיר תפקיד, סוג פלט צפוי, וקונטקסט ברירת מחדל שונה.',
            'קונטקסט צריך להיות נפרד פר Agent ופר Task: כשמחליפים משימה, פותחים Agent אחר או שיחה חדשה עם הקבצים הרלוונטיים בלבד.',
            'אם הממשק אצלכם שונה מעט, חפשו בהגדרות את אזור Agents / Custom Agents / Agent templates.',
          ],
          prompts: [
            'אתם Agent Architect. מטרה: לעזור לי להגדיר צוות קטן ב-Cursor. קלט: פרויקט אחד שאני בונה. פלט: 4 Agents מומלצים (Product, Tech Lead, Builder, Reviewer), ולכל אחד: מתי משתמשים בו, איזה קבצים מצרפים לו בדרך כלל, ואיזה פלט מצופה ממנו.',
            'אתם Agent Architect. הבעיה: יש לי Agent אחד שמתבלבל בין משימות. פלט: פיצול מוצע לשני Agents או לשתי שיחות נפרדות, מה הקונטקסט של כל אחד, ואיזה משימות לא לערבב ביניהם.',
          ],
          transcript: `בשיעור הקודם הבנו מה זה Skill ומה זה Rule. עכשיו נעבור למשהו הרבה יותר פרקטי: איך מנהלים Agents בתוך Cursor כך שכל אחד יעבוד על משימה ברורה, עם קונטקסט משלו, בלי לזהם את שאר העבודה.

הרעיון המרכזי הוא פשוט: Agent אחד לא אמור להיות כל הצוות. אם אותו Agent מקבל גם תכנון מוצר, גם ארכיטקטורה, גם UI וגם דיבאג — הוא יצבור קונטקסט רועש ויתחיל להחליק בין תפקידים. במקום זה, בונים סוכן לכל תחום או לכל משימה חשובה.

ב-Cursor, לכל Agent אפשר לתת זהות: מה הוא עושה, איזה פלט הוא מחזיר, ואיזה קבצים או כללים בדרך כלל רלוונטיים לו. ל־Product Agent תצרפו PRD וטבלת שאלות פתוחות. ל־Builder תצרפו ארכיטקטורה, UX ו־stack rule. ל־Reviewer תצרפו diff והגדרת איכות.

החוק הכי חשוב: הקונטקסט נשמר פר Agent ופר משימה. אם עברתם ממשימה של תכנון מוצר לתיקון באג, זה לא רק “עוד הודעה באותה שיחה”. זו הזדמנות לפתוח Agent אחר, או לפחות שיחה חדשה עם קבצים אחרים והנחיה אחרת.

התרגיל כאן הוא מעשי: הגדירו לפחות שני Agents שונים לפרויקט שלכם, וכתבו לכל אחד פתיח חד. לא “תעזור לי”, אלא “אתה Product Agent, קלט: רעיון ו־@PRD, פלט: מסמך עם acceptance criteria”. ככה בונים מערכת אמיתית עם שפה חופשית.`,
          checklist: [
            'פתחו Cursor Settings וחפשו Agents / Custom Agents / Agent templates',
            'צרו לפחות שני Agents: אחד לתכנון (Product/Tech Lead) ואחד לביצוע (Builder/Reviewer)',
            'לכל Agent כתבו ב-2–3 שורות: תפקיד, איזה קלט בדרך כלל מצרפים לו, ואיזה פלט אתם מצפים לקבל',
            'הפעילו כל Agent על אותה משימה קטנה ותראו איך התשובה משתנה לפי הקונטקסט',
            'כתבו במשפט: למה עדיף לשמור קונטקסט נפרד לכל Agent ולכל Task',
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
            'אתם ASM Guide. מטרה: לעזור לי להתקין skill ראשון נכון. קלט: AGENT_SKILLS.md של שיעור 2.1. פלט: חיפוש asm אחד רלוונטי, skill אחד מומלץ להתחלה, פקודות asm add skill ו-asm sync, ואיך בודקים שההתקנה הצליחה.',
            'אתם ASM Guide. מטרה: לעזור לי למצוא skills לבניית מערכת, לא skills גנריים. פלט: 3 שאילתות asm search טובות לפי Planning, Build, Review, ומה אני אמור לחפש בתוצאות.',
            'אתם ASM Guide. קלט: AGENT_SKILLS.md של שיעור 2.1. פלט: סדר עבודה קצר: מה לחפש, מה להתקין ראשון, מתי ליצור expertise, ואיך לוודא שהסוכן באמת רואה את ה-skills החדשים.',
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
            'דוגמה רצה: אפליקציית ניהול משימות לצוות קטן — אותו רעיון שממשיך לאורך כל המודול.',
            'הסוכן שואל שאלות הבהרה לפני כתיבה — אם לא שואל, צריך להדק את הבקשה.',
            'הפלט הוא docs/prd.md — קובץ בפרויקט, לא הודעה בצ׳אט. בשיעור 2.5 מצרפים אותו עם @ לסוכן הארכיטקטורה.',
          ],
          prompts: [
            'You are the installed product-prd-agent. Goal: turn my rough app idea into a usable PRD. Context: I want a small task management app for teams, and I want the result saved in the project. Output: markdown saved to docs/prd.md with problem, users, scope, key flows, acceptance criteria, and risks/open questions. Constraints: ask me 3-5 clarifying questions before drafting; keep V1 scope tight and explicit.',
          ],
          checklist: [
            'docs/prd.md קיים עם: בעיה, משתמשים, היקף V1, זרימה, קריטריוני קבלה, סיכונים, שאלות פתוחות',
            'הסוכן שאל שאלות הבהרה לפני שהתחיל לכתוב',
            'אפשר לצרף @docs/prd.md בשיחה חדשה ולקבל תשובה מבוססת עליו',
          ],
        },
        {
          id: '2.5',
          title: 'סוכן Tech Lead: ארכיטקטורה וחיתוכים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'המשך הדוגמה: אותה אפליקציית משימות. קלט @docs/prd.md, פלט docs/architecture.md.',
            'הסוכן בוחר סטאק אחד (לא רשימת אופציות), מגדיר תיקיות, גבולות, ופרוסות מימוש.',
            'שאלה אחת לפני סיום: "מה חסר לפרוסה הראשונה?" — תשובה קונקרטית עם שמות קבצים.',
          ],
          prompts: [
            'You are a tech lead architecture agent. Goal: turn my PRD into a practical technical plan. Context: check @docs/prd.md. Output: save docs/architecture.md with tech stack, folder structure, data model notes, API boundaries, and implementation slices. Constraints: be explicit, prefer a simple stack, and end with "what is missing for slice 1?".',
          ],
          checklist: [
            'docs/architecture.md קיים עם: סטאק, מבנה תיקיות, data model, גבולות API, פרוסות מימוש',
            'הסוכן בחר סטאק אחד ולא נתן רשימת אופציות',
            '"מה חסר לפרוסה הראשונה?" — תשובה עם שמות קבצים וסדר התקנה',
          ],
        },
        {
          id: '2.6',
          title: 'סוכן UX: זרימות, ריק, שגיאה ומסירה',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'דוגמה: אפליקציית ניהול משימות לצוותים — ממשיכים מ-2.4 ו-2.5.',
            'Ask לזיהוי חיכוך, Plan לסידור זרימה, Agent לשמירת docs/ux-flows.md.',
          ],
          prompts: [
            'בדוק את @docs/prd.md ו-@docs/architecture.md. איפה המשתמש עלול להיתקע? איפה לא ברור מה הפעולה הבאה? שאל אותי בסבבים קצרים, לא תשובה אחת ארוכה.',
            'סדר את הזרימה הראשית של אפליקציית המשימות: כניסה, רשימה ריקה, הוספה, עדכון סטטוס, מחיקה. לכל שלב: מטרה, next action, סיכון חיכוך, והפחתה.',
            'שמור את הזרימה ל-docs/ux-flows.md. כל שלב כולל: מה המשתמש רואה, מה הפעולה, ומה קורה ב-loading, empty, error.',
          ],
          checklist: [
            'Ask → שאלות חיכוך על אפליקציית המשימות (empty state, next action, הרשאות צוות)',
            'Plan → טבלת זרימה: מטרה, פעולה, חיכוך, הפחתה',
            'Agent → docs/ux-flows.md עם loading/empty/error לכל שלב',
          ],
        },
        {
          id: '2.7',
          title: 'סוכן UI: מערכת עיצוב, נגישות ורספונסיביות',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'דוגמה: אפליקציית משימות — קלט: docs/ux-flows.md, פלט: docs/ui-plan.md.',
            'סקיל ui-design-systems-agent שואל שאלות לפני שכותב. אופציונלי: Dribbble + Stitch.',
          ],
          prompts: [
            'השתמש בסקיל ui-design-systems-agent. קלט: @docs/ux-flows.md ו-@docs/architecture.md. שאל שאלות על סגנון, קומפוננטות ומובייל לפני שכותבים מסמך.',
            'צור docs/ui-plan.md עם: רשימת קומפוננטות (TaskCard, TaskForm, EmptyState, StatusBadge), design tokens, מצבי ממשק, נגישות, responsive.',
            'בחר את המסך הראשון לבנייה ופרק ל-components חוזרים, props עיקריים, ומה חייב להיות reusable.',
          ],
          checklist: [
            'סקיל ui-design-systems-agent מותקן ב-.cursor/skills/ ומוודא',
            'docs/ui-plan.md עם קומפוננטות, tokens, states, נגישות, responsive',
            'הסוכן שאל שאלות לפני שייצר את המסמך',
          ],
        },
        {
          id: '2.8',
          title: 'תכנון מימוש ב-Plan mode: תוכנית או חיתוכים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'דוגמה: אפליקציית משימות — מצרפים את כל 4 המסמכים ומבקשים slices.',
            'Slice 1: רשימה + empty state. Slice 2: הוספה + ולידציה. Slice 3: עדכון + מחיקה.',
          ],
          prompts: [
            'Plan mode. קלט: @docs/prd.md @docs/architecture.md @docs/ux-flows.md @docs/ui-plan.md. פרק ל-slices לפי סדר בנייה. לכל slice: מטרה, קבצים צפויים, בדיקת הצלחה, out of scope. שמור ל-docs/implementation-plan.md.',
            'האם Slice 1 קטן מספיק למימוש בפעם אחת? אם לא — חתוך אותו.',
            'זהה חסמים (טכניים, מוצר, תלויות) שצריך לפתור לפני Composer.',
          ],
          checklist: [
            'Plan mode פעיל; כל 4 המסמכים מצורפים ב-@',
            'docs/implementation-plan.md עם slices ברורים',
            'Slice 1 מוגדר מספיק כדי לפתוח 2.9 (Composer) בלי לנחש',
          ],
        },
        {
          id: '2.9',
          title: 'סוכן פיתוח: Composer, דיפ והרצה מקומית',
          duration: '12:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'דוגמה: מממשים Slice 1 מהתוכנית — רשימת משימות + empty state + CTA.',
            'diff ממוקד, Accept חלקי, הרצה מקומית, חזרה לתוכנית אחרי הצלחה.',
          ],
          prompts: [
            'אתה Builder Agent. מטרה: לממש רק Slice 1 מ-@docs/implementation-plan.md. קלט: implementation-plan + prd + architecture + ui-plan. פלט: diff קטן + verification. אל תיגע ב-Slice 2.',
            'אל תבנה את כל המערכת. מה המשתמש יוכל לעשות בסוף ה-slice? רשימה ריקה + CTA "Create first task" — רק את זה.',
            'הצע diff, חכה לאישור לפני Apply. אם יש סטייה מגבולות Slice 1 — עצור והסבר.',
          ],
          checklist: [
            'Agent/Composer + @docs/implementation-plan.md + מסמכי רקע — רק Slice 1',
            'diff נשאר בגבולות התוכנית; Accept חלקי אם צריך',
            'הרצה מקומית: רשימה ריקה + CTA עובדים; חזרה לתוכנית לפני Slice 2',
          ],
        },
        {
          id: '2.10',
          title: 'סוכן Code Review',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'דוגמה: סוקרים את ה-diff של Slice 1 לפני שממשיכים.',
            'Findings לפי חומרה, תיקון אחד ממשי, שאלה: "מה דחוף לפני merge?"',
          ],
          prompts: [
            'אתה Review Agent. עבור על ה-diff האחרון. חלק findings ל-High / Medium / Low. התמקד בבאגים, רגרסיות ותחזוקתיות. אל תציע לשכתב חלקים שלא השתנו.',
            'האם השינוי תואם את Slice 1 מ-@docs/implementation-plan.md? מה נשבר, מה חסר?',
            'מה הכי דחוף לתקן לפני merge?',
          ],
          checklist: [
            'Review ממוקד ב-diff: findings לפי חומרה',
            'תיקון אחד ממשי (באג, console.log, חוסר ולידציה)',
            '"מוכן להמשיך?" — אישור או הערה אחרונה',
          ],
        },
        {
          id: '2.11',
          title: 'סוכן QA: תכנון בדיקות וטסטים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'דוגמה: תוכנית בדיקות לאפליקציית המשימות מול acceptance criteria ב-PRD.',
            'edge cases: רשימה ריקה, משימה בלי כותרת, מחיקת משימה אחרונה.',
          ],
          prompts: [
            'אתה QA Agent. קלט: acceptance criteria מ-@docs/prd.md + הקוד הנוכחי. פלט: happy path, edge cases, failure modes. שמור ל-docs/test-plan.md, ואז כתוב טסט אחד שמכסה מקרה קריטי.',
            'תאתגר את הקוד עם מצבי שגיאה: מה קורה כשמנסים ליצור משימה בלי כותרת? כשמוחקים את האחרונה?',
            'תן plan מינימלי: מה בודקים ידנית עכשיו, ומה שווה להפוך לטסט אוטומטי ראשון.',
          ],
          checklist: [
            'docs/test-plan.md עם happy path + edge cases + failure modes',
            'טסט אוטומטי אחד שעובר (למשל tests/task.test.ts)',
            'לפחות בדיקה שלילית אחת (מקרה שגיאה)',
          ],
        },
        {
          id: '2.12',
          title: 'סוכן Debug',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'דוגמה: שגיאה אמיתית מהטרמינל באפליקציית המשימות.',
            'ראיות → צעדי אימות → תיקון מינימלי → הרצה חוזרת.',
          ],
          prompts: [
            'אתה Debug Agent. הנה שגיאה מהטרמינל: [הדבקה]. תן צעדי אימות לפני תיקון, תיקון מינימלי, ו-checklist הרצה חוזרת. אל תנחש ואל תשכתב חלקים לא קשורים.',
            'אל תנחש על כל הריפו. קח רק את הראיות, הסבר מה הן אומרות, ותן צעד אחד לבדיקה לפני קוד.',
            'קלט: error log + @file. פלט: probable cause, fix קטן, ואיזה שינוי בפלט אמור להופיע אם צדקנו.',
          ],
          checklist: [
            'העתקת שגיאה מלאה (כולל stack) ל-Agent + @ קובץ רלוונטי',
            'צעדי אימות לפני תיקון (לא קופצים ישר לקוד)',
            'תיקון ממוקד → הרצה חוזרת → ירוק',
          ],
        },
        {
          id: '2.13',
          title: 'קונטקסט ופרומפטים חדים לסוכנים',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'פתיח חד: תפקיד, מטרה, @ קבצים, פלט, מגבלות, "סיימנו כש..."',
            'Task חדש = Context חדש. אל תגררו שיחה ישנה למשימה חדשה.',
          ],
          prompts: [
            'אתה Product Agent. מטרה: להפוך רעיון ל-PRD. קלט: @brief.md. פלט: Problem, Users, V1 scope, Flow, Acceptance criteria, Risks. שאל עד 5 שאלות לפני הכתיבה.',
            'אתה Builder Agent. מטרה: לממש Slice 1 בלבד. קלט: @docs/prd.md @docs/architecture.md @docs/implementation-plan.md. פלט: diff קטן + verification. אל תרחיב scope.',
            'אתה Review Agent. מטרה: לבדוק diff. קלט: הקבצים ששונו. פלט: Findings לפי חומרה + המלצה על בדיקה חסרה.',
            'אתה Debug Agent. מטרה: להסביר תקלה. קלט: שגיאה + @ קובץ חשוד. פלט: evidence, hypothesis, smallest next step.',
            'אתה [Agent]. מטרה: [X]. קלט: @[קבצים]. פלט: [מסמך/diff/findings]. מגבלות: [Y]. סיימנו כש: [קריטריון].',
          ],
          checklist: [
            'כתבו פתיח חד ב-4-5 שורות למשימה אחת מהמודול',
            'הריצו פעמיים: פתיח עמום vs פתיח חד — השוו תוצאות',
            'שמרו 2-3 פרומפטים חזקים כ-playbook אישי',
            'Task חדש = שיחה חדשה או Agent אחר',
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
          title: 'מבוא ל-MCP: חיבור, בדיקה ושימוש אמיתי',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'MCP הוא חיבור בין Cursor לבין כלי חיצוני כמו Stitch, Figma, GitHub, דפדפן או מקור מידע חי.',
            'לא מתחילים מכלי "מגניב"; מתחילים ממשימה אחת ברורה ובוחרים MCP אחד שמתאים לה.',
            'הזרימה הבסיסית: חיבור, בדיקת גישה, פעולה קטנה אחת, ואז שמירת פלט שימושי חזרה לפרויקט.',
            'כלל למתחילים: MCP אחד, משימה אחת, תוצאה אחת.',
          ],
          prompts: [
            'אתה עוזר הגדרת MCP למתחילים. מטרה: לעזור לי לבחור MCP אחד לבעיה אחת אמיתית בפרויקט. קלט: תיאור קצר של הבעיה שלי. פלט: איזה MCP הכי מתאים, איך לבדוק שהוא מחובר, ובקשת בדיקה אחת קטנה. שמור על שפה פשוטה.',
            'אני חדש/ה ב-MCP. עזרו לי להבין איזה סוג בעיה כל MCP פותר: Stitch, Figma, GitHub, Browser, Web Search. פלט: טבלה קצרה של "בעיה -> MCP מתאים -> פלט שימושי שאשמור לפרויקט".',
            'יש לי MCP מחובר ב-Cursor. תנו לי בדיקת sanity check אחת: בקשה קטנה שאוכל להריץ כדי לוודא שהחיבור עובד באמת, ומה הפלט השימושי שאני צריך לקבל.',
          ],
          checklist: [
            'בחרו בעיה אחת אמיתית בפרויקט: מסך חלש, issue פתוח, שאלה מהדוקומנטציה, או בדיקת דפדפן',
            'בחרו MCP אחד שמתאים לבעיה הזאת בלבד',
            'ודאו שה-MCP מחובר והפעילו בקשת בדיקה קטנה אחת',
            'שמרו פלט אחד שימושי: notes, task list, UI breakdown, או החלטה טכנית קצרה',
            'כתבו במשפט אחד איפה הפלט הזה נכנס בזרימת העבודה של הפרויקט',
          ],
        },
        {
          id: '3.2',
          title: 'Stitch MCP: התחלה מהירה לפרונט',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'Stitch MCP עוזר במיוחד כשיש לכם section חלש או חסר ואתם לא רוצים להתחיל מדף ריק.',
            'המטרה היא לא קוד מושלם בלחיצה, אלא כיוון ראשון טוב יותר, מהיר יותר, וברור יותר.',
            'Stitch טוב לשלב ההתחלה: first draft, component direction, ו-momentum לבנייה.',
            'לא מעתיקים הכול אוטומטית; בוחרים כיוון אחד, section אחד, וצעד המשך אחד.',
          ],
          prompts: [
            'אתה frontend builder. מטרה: להשתמש ב-Stitch MCP כדי ליצור התחלה חזקה יותר ל-section אחד באפליקציה שלי. קלט: [hero / pricing / feature grid / settings form]. פלט: כיוון אחד מומלץ, רשימת רכיבים שצריך לבנות, והצעד הכי פשוט להמשך. אל תנסה לבנות את כל הדף.',
            'אני רוצה להשתמש ב-Stitch MCP בלי ללכת לאיבוד. קח section אחד באפליקציה שלי ותן לי רק first draft אחד ששומר על פשטות, התאמה לאפליקציה הקיימת, ורשימת צעדים קצרה ליישום.',
            'יש לי section חלש במסך. עזרו לי להשתמש ב-Stitch MCP כדי לשפר את נקודת הפתיחה שלו. פלט: מה לקחת, מה לא לקחת, ואיך להפוך את זה ל-task list קצר לפרויקט.',
          ],
          checklist: [
            'בחרו section אחד בלבד באפליקציה: hero, pricing, feature grid או settings form',
            'השתמשו ב-Stitch MCP כדי לקבל first draft אחד, לא חמש וריאציות',
            'בחרו מה מתאים לפרויקט שלכם ומה לא',
            'הפכו את הפלט ל-section אחד ממומש או ל-task list קצרה וברורה',
            'בדקו שהתוצאה באמת נתנה התחלה טובה יותר, לא רק עוד רעיון בצ׳אט',
          ],
        },
        {
          id: '3.3',
          title: 'Figma MCP: דיוק, handoff וליטוש',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'אחרי שיש התחלה למסך, Figma MCP עוזר לדייק: spacing, structure, copy, states, ויחסים בין רכיבים.',
            'Figma פחות מתאים להתחלה מאפס ויותר מתאים לשיפור מסך קיים או טיוטה קיימת.',
            'המטרה היא לא "למשוך קוד", אלא להבין טוב יותר את העיצוב ולתקן את ה-UI בהתאם.',
            'הפלט הטוב כאן הוא רשימת תיקונים מדויקת, component breakdown, או שיפורי UI אמיתיים בקוד.',
          ],
          prompts: [
            'אתה עוזר UI implementation. מטרה: להשתמש ב-Figma MCP כדי לשפר section אחד קיים באפליקציה כך שיתאים יותר לעיצוב. קלט: [שם המסך/section]. פלט: component breakdown קצר, spacing/copy/state details, ו-3 תיקוני UI הכי חשובים.',
            'יש לי כבר section קיים ואני רוצה לדייק אותו מול Figma. עזרו לי להוציא מהעיצוב רק את הפרטים שהכי חשוב ליישם עכשיו: מבנה, ריווחים, טקסטים ומצבים שונים.',
            'אל תתנו לי code dump. השתמשו ב-Figma MCP כדי לבנות לי רשימת תיקוני UI מדויקת ל-section אחד בלבד, כך שאוכל לשפר אותו צעד-אחר-צעד.',
          ],
          checklist: [
            'בחרו section אחד שכבר קיים באפליקציה או נבנה בטיוטה הקודמת',
            'פתחו את העיצוב המתאים ב-Figma MCP',
            'חלצו רק את הפרטים שהכי חשובים עכשיו: מבנה, spacing, copy ו-states',
            'שפרו את אותו section באפליקציה במקום לבנות מסך חדש',
            'כתבו 3 הבדלים קונקרטיים שתיקנתם בין ה-UI הקיים לבין העיצוב',
          ],
        },
        {
          id: '3.4',
          title: 'Web Search / Fetch: מידע חי ו-MCPs נוספים',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'משתמשים ב-Web Search או Fetch כשצריך מידע עדכני: דוקומנטציה, הגדרת ספרייה, שינוי ב-API, או troubleshooting.',
            'עובדים תמיד עם שאלה אחת בכל פעם, ואז הופכים את התשובה לצעד המשך ברור בפרויקט.',
            'מכאן גם בונים shortlist ל-MCPs נוספים: GitHub, Browser, database, docs ועוד.',
            'הכלל: לא מוסיפים MCP כי הוא מעניין, אלא כי הוא חוסך עבודה חוזרת ומייצר פלט שימושי.',
          ],
          prompts: [
            'אתה עוזר מחקר לפרויקט קוד. מטרה: לענות על שאלה אחת אמיתית באמצעות Web Search או Fetch ולהפוך אותה לצעד הבא בפרויקט. קלט: [השאלה]. פלט: תשובה פשוטה, המקור הכי אמין, ומה הפעולה הבאה שכדאי לבצע.',
            'יש לי שאלה אחת על ספרייה או דוקומנטציה. עזרו לי לנסח בקשה טובה ל-Web Search / Fetch כך שאקבל תשובה קצרה, מקור אמין, ו-next step ברור במקום חיפוש כללי מדי.',
            'עזרו לי לבנות shortlist של MCPs נוספים לפרויקט שלי. פלט: 2-3 MCPs שיכולים לעזור, מה כל אחד פותר, ומה יהיה ה-output השימושי שלהם בפרויקט.',
          ],
          checklist: [
            'בחרו שאלה אחת אמיתית מהפרויקט שדורשת מידע עדכני',
            'השתמשו ב-Web Search או Fetch כדי לענות רק עליה',
            'ודאו מקור אחד אמין לפחות',
            'הפכו את התשובה ל-next step ברור: code change, note, TODO, או החלטה טכנית',
            'כתבו shortlist של 2 MCPs נוספים שיכולים לעזור לפרויקט שלכם ומה כל אחד ישפר',
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
          title: 'מסד נתונים מקומי: SQLite מאפס',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'מסד מקומי הוא קובץ נתונים שרץ על המחשב שלכם; האפליקציה קוראת וכותבת אליו בלי ענן ובלי אינטרנט.',
            'ברירת מחדל פרקטית: אם יש יותר ממסך אחד, יותר מטבלה אחת, או צורך בסינון/חיפוש/קשרים בסיסיים, עדיף SQLite על JSON.',
            'תתחילו מהסכמה: אילו ישויות יש, אילו שדות חייבים להיות, ואילו שדות יציג כל מסך.',
            'המטרה בשיעור: ליצור DB קטן, להכניס seed data, להריץ read/write אחד, ואז להבין מה בדיוק יעבור לענן בשיעור הבא.',
            'אל תתחילו מספריות. התחילו מישות אחת אמיתית כמו tasks, notes, leads או products.',
          ],
          prompts: [
            'אני צריך/ה local DB קטן ל-V1. עזרו לי לבחור בין JSON ל-SQLite, אבל ברירת מחדל: SQLite אם יש יותר מישות אחת או יותר ממסך אחד. קלט: תיאור קצר של האפליקציה שלי. פלט: המלצה אחת, schema ראשוני, איפה לשמור את הקובץ, ואיך לגשת אליו מהאפליקציה.',
            'קחו פיצ\'ר קטן כמו tasks / notes / leads והפכו אותו למסד מקומי פרקטי. פלט: טבלה אחת או שתיים מקסימום, שדות הכרחיים בלבד, seed data קצר, ו-3 פעולות שאני חייב/ת להדגים: create, list, update.',
            'הסבירו לי צעד-אחר-צעד איך לבנות SQLite מקומי לפרויקט שלי: קודם data shape, אחר כך קובץ DB, אחר כך טבלה, seed data, קריאה ראשונה מהאפליקציה, ולבסוף איך בודקים שזה באמת עובד.',
          ],
          transcript: `בשיעור הזה אנחנו עוצרים לפני הענן ועושים את הדבר הכי פרקטי: מסד נתונים מקומי. Local DB הוא פשוט מקום מסודר לשמור בו מידע על המחשב שלכם, כך שהאפליקציה יכולה לקרוא ולכתוב נתונים אמיתיים בלי אינטרנט ובלי שרת.

ברירת המחדל הכי טובה לרוב פרויקטי ה-V1 היא SQLite. אם יש לכם רק קובץ הגדרות קטן, JSON יכול להספיק. אבל אם יש רשימות, חיפוש, סינון, כמה ישויות או קשרים בסיסיים, SQLite נותן לכם מבנה יציב יותר.

הסדר הנכון הוא תמיד: קודם מגדירים data shape, אחר כך יוצרים DB, אחר כך seed data, ואז מחברים למסך או לפעולה אחת באפליקציה. בשיעור הבא ניקח בדיוק את אותו היגיון ונעביר אותו ל-Supabase בענן.`,
          checklist: [
            'בחרו ישות אחת אמיתית באפליקציה שלכם: tasks / notes / leads / products',
            'כתבו 4–6 שדות בלבד: id, שם/כותרת, סטטוס, created_at וכל מה שחייב למסך הראשון',
            'צרו local DB או בקשו מהסוכן ליצור SQLite עם seed של 3–5 רשומות',
            'בצעו שלוש פעולות: list, create, update או delete אחת',
            'חברו את אחת הפעולות למסך או לסקריפט קטן ובדקו שהמידע באמת נשמר בין ריצות',
            'המשך: שיעור 4.2 (Supabase)',
          ],
        },
        {
          id: '4.2',
          title: 'Supabase: סכימה, העברה ו-RLS',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          notes: [
            'לא משנים את המודל רק כי עברנו לענן; מעבירים את אותה סכמה שעבדה מקומית.',
            'הגדרות החיבור עוברות ל־`.env` מקומי ולמשתני סביבה בענן, לא לקוד ולא ל-Git.',
            'RLS בסיסי הוא לא advanced topic אלא רשת ביטחון מינימלית.',
            'המטרה בשיעור: טבלה אחת בענן, read אחד ו-write אחד אמיתיים, ומדיניות גישה ראשונה.',
          ],
          prompts: [
            'אני מעביר/ה מסד מקומי (SQLite או קבצים) ל-Supabase. פלט: אותו schema בענן, אילו env vars צריך, איך לחבר את האפליקציה, ו-RLS בסיסי שלא ישאיר הכול פתוח.',
            'קחו ישות אחת שכבר יש לי מקומית והפכו אותה לטבלה ב-Supabase. פלט: שדות, אילו מהם חובה, איך לבדוק insert ו-select, ומה המדיניות הכי פשוטה שעדיין בטוחה יחסית ל-V1.',
            'אני חדש/ה ב-Supabase ורוצה צעד-אחר-צעד. פלט: יצירת פרויקט, יצירת טבלה, הוספת env, קריאה ראשונה מהאפליקציה, כתיבה ראשונה, ורשימת טעויות נפוצות לבדיקה.',
          ],
          transcript: `בשיעור הזה אנחנו לוקחים את מה שכבר עובד מקומית ומעבירים אותו ל-Supabase. הרעיון הכי חשוב הוא לא לזרוק את העבודה הקודמת. אם הסכמה כבר ברורה, אם השדות כבר הגיוניים, ואם המסך כבר בנוי סביבם, המעבר לענן הוא שינוי של מקור הנתונים, לא של כל המוצר.

העבודה כאן מאוד פרקטית: טבלה אחת או שתיים, משתני סביבה נכונים, חיבור מהאפליקציה, ואז שתי פעולות שחייבות לעבוד: קריאה אחת וכתיבה אחת. זה מספיק כדי להפוך פרויקט מקומי לאפליקציה שמתחילה לחיות מחוץ למחשב שלכם.

החלק החדש הוא RLS. לא צריך להיבהל מהשם. צריך רק להבין שלא משאירים מסד מרוחק פתוח לכולם. גם מדיניות בסיסית אחת עדיפה בהרבה על "נסדר את זה אחר כך".`,
          checklist: [
            'בחרו ישות אחת שכבר בניתם מקומית ואל תרחיבו scope מעבר אליה',
            'צרו פרויקט וטבלה ב-Supabase לפי אותה סכמה',
            'הגדירו `.env` מקומי בלבד וודאו שהסודות לא בגיט',
            'בדקו `select` אחד ו-`insert` או `update` אחד מהאפליקציה',
            'הוסיפו policy בסיסית אחת או ודאו ש-RLS לא נשאר פתוח בלי מחשבה',
            'המשך: שיעור 4.3 (GitHub)',
          ],
        },
        {
          id: '4.3',
          title: 'GitHub: הכנת הריפו, ענפים ודחיפה',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'GitHub הוא לא רק גיבוי; הוא גם נקודת השיתוף והפריסה של הפרויקט.',
            'לפני push בודקים מה באמת נכנס ל-git: `.env`, DB מקומי, ותוצרי build לא אמורים להיכנס כברירת מחדל.',
            'README מינימלי עדיף על README ריק: מה הפרויקט, איך מריצים, ומה צריך להגדיר.',
            'Branch נפרד הוא כלי להפחתת פחד, לא טקס חובה על כל שינוי קטן.',
          ],
          prompts: [
            'עזרו לי להכין את הפרויקט ל-GitHub לפני פריסה. פלט: מה צריך להיות ב-`.gitignore`, מה חייב להישאר מחוץ לגיט, README מינימלי, וצעדי commit + push מסודרים.',
            'בדקו איתי את הריפו לפני push. פלט: אילו קבצים מסוכנים או מיותרים יכולים להיכנס, מה צריך לנקות, ומה סדר הפעולות הבטוח עד GitHub.',
            'אני רוצה הסבר מאוד פרקטי: מתי מספיק לעבוד על `main`, ומתי עדיף branch קטן. תנו כלל אצבע אחד ודוגמה אחת לכל מצב.',
          ],
          transcript: `בשיעור הזה אנחנו אורזים את הפרויקט כמו שצריך ל-GitHub. לא מדובר רק בללחוץ על push, אלא בלעצור רגע ולבדוק מה בכלל עומד להישלח. אם דוחפים קובץ env, מסד מקומי, או קבצים מיותרים, זו לא מהירות, זו תקלה שמחכה לקרות.

יש כאן שלושה דברים פשוטים אבל חשובים: gitignore נכון, README קצר, וקומיט נקי. אלה שלושת הסימנים הראשונים לכך שהפרויקט שלכם כבר לא "משהו שעבד לי על המחשב", אלא פרויקט שאפשר לשתף ולהמשיך ממנו.

החוק הפרקטי הוא פשוט: שינוי קטן ובטוח בפרויקט אישי יכול לחיות על main. ניסוי, שינוי רגיש, או עבודה עם אחרים, עדיף לעשות ב-branch קטן. המטרה היא לעבוד רגוע, לא להקשיח תהליך סתם.`,
          checklist: [
            'הריצו בדיקה של מה השתנה לפני כל push',
            'ודאו ש-`.env`, קובץ DB מקומי ותוצרי build לא נכנסים לגיט',
            'כתבו README של 5–10 שורות: מה הפרויקט, איך מריצים, ואילו env vars צריך',
            'בצעו commit אחד נקי עם הודעה קצרה וברורה',
            'דחפו ל-GitHub ובדקו שהריפו נראה נקי בדפדפן',
            'המשך: שיעור 4.4 (Vercel)',
          ],
        },
        {
          id: '4.4',
          title: 'Vercel: חיבור, build ופריסה',
          duration: '10:00',
          status: 'available',
          badge: 'BEGINNER',
          notes: [
            'Deploy מוצלח הוא לא רק "יש URL" אלא flow אמיתי שעובד אחרי העלייה לאוויר.',
            'הגדרות build ו-output לא מנחשים; לוקחים מהפרויקט עצמו.',
            'משתני סביבה של production שייכים ל-Vercel, לא לקוד ולא ל-GitHub.',
            'אחרי deploy תמיד בודקים מסך אחד, פעולה אחת, וסביבת מובייל או רוחב קטן.',
          ],
          prompts: [
            'אני רוצה לפרוס ל-Vercel מריפו ב-GitHub. פלט: build command, output directory אם צריך, env vars שחייבים להיות ב-Vercel, וסדר בדיקה אחרי deploy.',
            'עזרו לי להכין deploy ראשון בלי ניחושים. פלט: מה לבדוק בפרויקט לפני החיבור ל-Vercel, איפה מכניסים env vars, ומה flow אחד שאני חייב/ת לבדוק אחרי שיש URL ציבורי.',
            'אם deploy הצליח אבל האפליקציה לא עובדת, תנו לי לולאת בדיקה קצרה: build settings, env vars, logs, ורק אחר כך קוד.',
          ],
          transcript: `זה השיעור שבו הפרויקט שלכם באמת עולה לאוויר. Vercel מקצר מאוד את הדרך בין GitHub לבין אפליקציה חיה, אבל הוא לא מבטל את הצורך להבין מה האפליקציה צריכה כדי להיבנות ולעבוד.

לכן בשיעור הזה לא רק מחברים ריפו ולוחצים Deploy. בודקים מהו build command, אילו משתני סביבה חייבים להיות מוגדרים, ואיך לוודא שהאפליקציה באמת מתפקדת בכתובת הציבורית. אם יש חיבור ל-Supabase, בודקים גם אותו בסביבה האמיתית.

העיקרון הכי חשוב הוא לא לעצור במסך הירוק של Success. הצלחה אמיתית היא flow אמיתי שעובד: מסך נטען, נתון מגיע, פעולה נשמרת. ברגע שזה קורה, יש לכם אפליקציה חיה, לא רק deployment record.`,
          checklist: [
            'חברו את הריפו ל-Vercel רק אחרי שווידאתם שהריפו נקי',
            'הגדירו build/output לפי הפרויקט שלכם ולא לפי זיכרון או ניחוש',
            'העבירו את כל ה-env vars הנדרשים ל-Vercel',
            'בצעו deploy אחד ופתחו את ה-URL הציבורי באמת',
            'בדקו flow אמיתי אחד, כולל fetch או write אם יש DB',
            'אם משהו נשבר, בדקו קודם settings, env ו-logs לפני קוד',
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
