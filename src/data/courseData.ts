import type { Course } from './types';

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
          title: 'מה זה Cursor (והתקנה)',
          duration: '08:00',
          status: 'available',
          badge: 'FREE',
          notes: [
            'Cursor הוא עורך הקוד וסביבת העבודה; הצ׳אט, הקומפוזר והסוכן מובנים באפליקציה.',
            'חוק ברזל: תמיד עובדים בתוך תיקיית פרויקט (Workspace), לעולם לא על קובץ בודד.',
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
            'הורידו את Cursor מאתר cursor.com/download (האתר מזהה את מערכת ההפעלה אוטומטית)',
            'התקינו והפעילו את Cursor בפעם הראשונה',
            'התחברו לחשבון Cursor (או צרו חשבון חדש)',
            'צרו תיקייה חדשה לפרויקט (למשל בשולחן העבודה)',
            'בתפריט: File → Open Folder ובחרו את התיקייה שיצרתם',
            'ודאו שהפרויקט נפתח ושאתם רואים את תיקיית הפרויקט בסרגל הצד',
            'העתיקו את הפרומפט מלשונית "פרומפטים להתקנה" למטה, הדביקו בצ׳אט של Cursor (⌘L / Ctrl+L) ואשרו — הסוכן יתקין את ASM וירכוש סקילים לפרויקט',
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
            'מנוי Cursor (או המסלול החינמי) קובע מכסות; שמות המודלים והמחירים משתנים — תמיד בדקו בהגדרות ובאתר cursor.com.',
            'כלל אצבע: התחילו במודל מהיר לרוב המשימות; עברו למודל חזק כשיש לוגיקה כבדה או תוצאה לא מספקת.',
          ],
          transcript: `בשיעור הקודם הקמנו את סביבת העבודה: Cursor על המחשב, חשבון ומודלים בתוך האפליקציה, ותיקיית פרויקט מסודרת.

אבל יש בעיה קטנה. הסוכן יושב במשרד, אבל בלי מנוי או מכסה מתאימה — הוא מוגבל, פחות סבלנות, פחות עומק, ולפעמים פשוט נעצר באמצע.

היום אנחנו מבינים איך "הדלק" עובד ב-Cursor עצמו: מסלולים, מודלים, ושימוש חכם.

Cursor מציע בחירת מודלים מתוך האפליקציה — לפעמים מודל מהיר ליום־יום, לפעמים מודל חזק יותר למשימות מורכבות, ולפעמים מצב Auto. השמות והמסלולים משתנים, אז תמיד מסתכלים על מה שמופיע אצלכם ב-Cursor Settings ובדף התמחור של Cursor.

כלל אצבע: אל תדליקו את המודל הכי יקר על שאלות קטנות. תנו למודל המהיר לעשות את רוב העבודה, ושמרו את החזק לרגעים שבהם באמת צריך עומק.

הטיפ הכי חשוב: עקבו אחרי המכסה שלכם ואחרי מה שכל מודל "שורף" — זה חוסך כסף ותסכול.`,
        },
        {
          id: '1.3',
          title: 'טרמינל, Git ורשתות ביטחון',
          duration: '08:15',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'לפני שאני מריץ פקודה בטרמינל: הסבר לי בצורה פשוטה מה הפקודה הבאה עושה, מה הסיכונים, ומה חלופה בטוחה יותר אם יש: [הדבק כאן את הפקודה]',
            'עזרו לי להבין Git בפרויקט שלי: מה זה קומיט, איך לראות מה השתנה, ומה צעד מינימלי אחרי שינוי קטן בקוד לפני שאמשיך לבנות.',
          ],
          notes: [
            'הטרמינל הוא חלון טקסט שבו כותבים הוראות. לא מפחיד, לא מסתורי.',
            'Git = שמירת משחק. קומיט = תמונת מצב. לפני כל שינוי גדול, קומיט. תמיד.',
            'ההרגל המקצועי: לפני שלוחצים Run, שואלים את הסוכן ב-Cursor "הסבר לי מה הפקודה הזאת עושה".',
          ],
          transcript: `רוב האנשים שמתחילים לעבוד עם AI קופאים ברגע שהם רואים חלון שחור עם טקסט ירוק. זה נראה כמו משהו שרק מתכנתים מבינים.

מה זה בעצם הטרמינל? תחשבו על מה שאתם עושים עם העכבר: לוחצים על תיקייה כדי לפתוח אותה, גוררים קובץ. כל הפעולות האלה קיימות גם כפקודות טקסט. הטרמינל הוא פשוט מקום שבו כותבים את הפעולות האלה במלל.

ההרגל המקצועי: לפני שלוחצים Run, שואלים את הסוכן ב-Cursor "הסבר לי מה הפקודה הזאת עושה".

גיט עושה בדיוק את מה ש"שמירת משחק" עושה בוידאו-גיים. כל "שמירה" בגיט נקראת קומיט. קומיט הוא תמונת מצב של הפרויקט שלכם ברגע מסוים.

לפני כל שינוי גדול, קומיט. תמיד. הלולאה שלכם: קומיט, בונים, קומיט, בונים.`,
        },
        {
          id: '1.4',
          title: 'סיור מודרך בממשק Cursor',
          duration: '08:00',
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
        },
        {
          id: '1.5',
          title: 'חלון הקונטקסט וניהול זיכרון',
          duration: '08:00',
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
        },
      ],
    },
    {
      id: 'module-2',
      title: 'הסוכנות שלך: פיתוח מבוסס Skills',
      icon: 'Users',
      lessons: [
        { id: '2.1', title: 'מבוא ל-Skills', duration: '08:00', status: 'available', badge: 'BEGINNER' },
        { id: '2.2', title: 'סוכן מוצר: מרעיון ל-PRD', duration: '10:00', status: 'available', badge: 'BEGINNER' },
        { id: '2.3', title: 'סוכן Tech Lead: ארכיטקטורה', duration: '10:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.4', title: 'סוכן UX: זרימות משתמש', duration: '08:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.5', title: 'סוכן UI: מערכות עיצוב', duration: '08:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.6', title: 'סוכן אבטחה', duration: '06:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.7', title: 'סוכן פיתוח: Composer', duration: '12:00', status: 'available', badge: 'BEGINNER' },
        { id: '2.8', title: 'סוכן Code Review', duration: '08:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.9', title: 'סוכן QA: בדיקות', duration: '08:00', status: 'available', badge: 'INTERMEDIATE' },
        { id: '2.10', title: 'סוכן Debug', duration: '08:00', status: 'available', badge: 'BEGINNER' },
        { id: '2.11', title: 'מסד נתונים מקומי', duration: '08:00', status: 'available', badge: 'INTERMEDIATE' },
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
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'הסבר לי מה זה MCP בהקשר של Cursor, איך זה שונה מצ\'אט רגיל, ומה שאלה אחת חכמה שאשאל את הסוכן כדי לוודא שכלי חיצוני באמת מחובר ועובד.',
          ],
        },
        {
          id: '3.2',
          title: 'Notion MCP',
          duration: '08:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          prompts: [
            'אני רוצה לעבוד עם Notion דרך MCP ב-Cursor. עזרו לי לבדוק מה כבר מוגדר בפרויקט, מה חסר, ואילו משימות מעשיות אפשר לבצע עם Notion MCP בלי לחשוף סודות או טוקנים במסך משותף.',
          ],
        },
        {
          id: '3.3',
          title: 'Figma MCP',
          duration: '08:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          prompts: [
            'אני משתמש/ת ב-Figma MCP מול Cursor. עזרו לי לתכנן זרימה: איך לייצא מבנה מסכים/טוקנים לקוד, ומה כדאי להימנע ממנו כדי לא לשבור קומפוננטות או עיצוב.',
          ],
        },
        {
          id: '3.4',
          title: 'חיפוש ווב ו-Fetch',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'איך לנסח בקשה טובה לסוכן שמשתמש בחיפוש או fetch בוווב? תן הנחיות בטיחות: מה לא לבקש, איך לדרוש מקורות, ואיך לבדוק עובדות לפני שמסתמכים עליהן בקוד.',
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
          title: 'Supabase: מ-DB מקומי לענן',
          duration: '10:00',
          status: 'available',
          badge: 'INTERMEDIATE',
          prompts: [
            'אני מעביר/ה מסד מקומי (SQLite או קבצים) ל-Supabase. תן צ\'ק-ליסט: סכמה, משתני סביבה, מדיניות RLS בסיסית, ואיך לבדוק חיבור מהאפליקציה בצורה בטוחה.',
          ],
        },
        {
          id: '4.2',
          title: 'GitHub: הכנה ודחיפה',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'עזרו לי להכין את הפרויקט ל-GitHub: .gitignore סביר, README מינימלי, קומיט ראשון, והסבר קצר מתי לעבוד על main ומתי על branch נפרד.',
          ],
        },
        {
          id: '4.3',
          title: 'Vercel: פריסה לענן',
          duration: '08:00',
          status: 'available',
          badge: 'BEGINNER',
          prompts: [
            'אני רוצה לפרוס ל-Vercel מריפו ב-GitHub. עזרו לי לזהות build command, output directory, ומשתני סביבה שחייבים להיות ב-Vercel (ולא בקוד). אם חסר מידע — שאלו אותי שאלות ממוקדות.',
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
          prompts: [
            'אני בפרויקט גמר "אוטומציה אישית". עזרו לי לפרק לשלבים: טריגר, קלט, צעדי עיבוד, פלט, ובדיקה. הדגישו פרטיות, הרשאות, ומה לא לאוטומט בלי אישור מפורש.',
          ],
        },
        {
          id: '5.2',
          title: 'פרויקט B: דף נחיתה אינטראקטיבי',
          duration: '15:00',
          status: 'available',
          badge: 'PREMIUM',
          prompts: [
            'אני בונה דף נחיתה אינטראקטיבי לפרויקט הגמר. עזרו לי להגדיר מבנה קבצים, טקסטים ראשונים (כותרת, CTA, הוכחה חברתית), ואינטראקציה אחת שמוסיפה ערך מידי בלי להסתבך.',
          ],
        },
        {
          id: '5.3',
          title: 'סיכום ומה הלאה',
          duration: '06:00',
          status: 'available',
          badge: 'PREMIUM',
          prompts: [
            'סכמו בשבילי את מה שלמדתי בקורס לפי המודולים (מבוא, Skills, MCP, פריסה, פרויקטי גמר), והמליצו על 3 משימות המשך מעשיות לשבוע הקרוב עם Cursor — ברמת קושי מתאימה למי שסיים את הקורס.',
          ],
        },
      ],
    },
  ],
  attachedFiles: [],
};
