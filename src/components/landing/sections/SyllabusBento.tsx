'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Users, Plug, Rocket, Trophy } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, sectionViewport, easeFade } from '../motion';

/* ------------------------------------------------------------------ */
/*  Syllabus data – every lesson with a short one-liner               */
/* ------------------------------------------------------------------ */

const moduleIcons = [Laptop, Users, Plug, Rocket, Trophy];

interface LessonCard {
  id: string;
  title: string;
  blurb: string;
}

interface ModuleTab {
  id: string;
  label: string;
  icon: typeof Laptop;
  lessonCount: number;
  lessons: LessonCard[];
}

const modules: ModuleTab[] = [
  {
    id: 'module-1',
    label: 'מבוא וסביבת עבודה',
    icon: Laptop,
    lessonCount: 5,
    lessons: [
      {
        id: '1.1',
        title: 'מה זה Cursor: הורדה והתקנה',
        blurb: 'התקנת Cursor, חיבור לחשבון, ופתיחת הפרויקט הראשון שלכם.',
      },
      {
        id: '1.2',
        title: 'מנויים ומודלים',
        blurb: 'איך לבחור מודל מהיר מול חזק, ולנהל שימוש חכם ביום-יום.',
      },
      {
        id: '1.3',
        title: 'טרמינל, Git ורשתות ביטחון',
        blurb: 'הטרמינל בלי פחד, Git כשמירת משחק, וקומיט לפני כל שינוי.',
      },
      {
        id: '1.4',
        title: 'סיור בממשק: Cmd+K, Cmd+L ו-Composer',
        blurb: 'שלושה כלים, שלוש סיטואציות: שורה, חשיבה, ובנייה.',
      },
      {
        id: '1.5',
        title: 'חלון הקונטקסט והרגלים',
        blurb: 'למה הסוכן "שוכח" ואיך לשמור על תשובות עקביות.',
      },
    ],
  },
  {
    id: 'module-2',
    label: 'פיתוח מבוסס Skills',
    icon: Users,
    lessonCount: 13,
    lessons: [
      {
        id: '2.1',
        title: 'מבוא ל-Skills',
        blurb: 'ההבדל בין Rule ל-Skill ושני סוגי הערך: ידע ותזמור.',
      },
      {
        id: '2.2',
        title: 'אנטומיה של סקיל',
        blurb: 'טריגרים, מבנה קובץ SKILL.md, ומה הופך סקיל לטוב.',
      },
      {
        id: '2.3',
        title: 'חיפוש והתקנה עם ASM',
        blurb: 'Agent Skill Manager: חיפוש, התקנה וסנכרון סקילים.',
      },
      {
        id: '2.4',
        title: 'סוכן מוצר: מרעיון ל-PRD',
        blurb: 'בעיה, משתמשים, היקף, זרימות ומדדי הצלחה.',
      },
      {
        id: '2.5',
        title: 'סוכן Tech Lead',
        blurb: 'סטאק, גבולות מערכת, מבנה תיקיות וחיתוכי מימוש.',
      },
      {
        id: '2.6',
        title: 'סוכן UX',
        blurb: 'מסע משתמש, מצבי ריק ושגיאה, ומסירה ל-UI.',
      },
      {
        id: '2.7',
        title: 'סוכן UI',
        blurb: 'מערכת עיצוב, טוקנים, נגישות ורספונסיביות.',
      },
      {
        id: '2.8',
        title: 'סוכן אבטחה',
        blurb: 'סיכוני הרשאות, סודות וחשיפת מידע, לפני קוד כבד.',
      },
      {
        id: '2.9',
        title: 'סוכן פיתוח: Composer',
        blurb: 'Composer, צירוף מסמכים, פרוסה אנכית והרצה מקומית.',
      },
      {
        id: '2.10',
        title: 'סוכן Code Review',
        blurb: 'מעבר על דיפ: באגים, רגרסיות ומוכנות למיזוג.',
      },
      {
        id: '2.11',
        title: 'סוכן QA',
        blurb: 'תכנון בדיקות: נתיבים שמחים, קצוות וטסטים.',
      },
      {
        id: '2.12',
        title: 'סוכן Debug',
        blurb: 'איסוף ראיות, השערה, שחזור מינימלי ותיקון ממוקד.',
      },
      {
        id: '2.13',
        title: 'מסד מקומי: SQLite ו-JSON',
        blurb: 'חשיבה סכימה-ראשונה וגשר לענן.',
      },
    ],
  },
  {
    id: 'module-3',
    label: 'כוחות-על עם MCP',
    icon: Plug,
    lessonCount: 4,
    lessons: [
      {
        id: '3.1',
        title: 'מבוא ל-MCP',
        blurb: 'מה זה MCP, איך זה שונה מצ׳אט רגיל, והמלצות בטיחות.',
      },
      {
        id: '3.2',
        title: 'Notion MCP',
        blurb: 'משיכת דרישות, סנכרון משימות ועבודה בטוחה.',
      },
      {
        id: '3.3',
        title: 'Figma MCP',
        blurb: 'מבנה מסכים וטוקנים מהסטודיו ישירות לקוד.',
      },
      {
        id: '3.4',
        title: 'חיפוש ווב ו-Fetch',
        blurb: 'ניסוח בקשות, אימות מקורות ושימוש בתוצאות בקוד.',
      },
    ],
  },
  {
    id: 'module-4',
    label: 'אינטגרציות ופריסה',
    icon: Rocket,
    lessonCount: 3,
    lessons: [
      {
        id: '4.1',
        title: 'Supabase: סכימה ו-RLS',
        blurb: 'מסד מקומי לענן: סכימה, משתני סביבה ומדיניות.',
      },
      {
        id: '4.2',
        title: 'GitHub: ריפו, ענפים ודחיפה',
        blurb: '.gitignore, קומיט ראשון, ומתי branch נפרד.',
      },
      {
        id: '4.3',
        title: 'Vercel: פריסה לאוויר',
        blurb: 'חיבור, build, משתני סביבה ו-URL ציבורי.',
      },
    ],
  },
  {
    id: 'module-5',
    label: 'פרויקטי גמר',
    icon: Trophy,
    lessonCount: 3,
    lessons: [
      {
        id: '5.1',
        title: 'אוטומציה אישית',
        blurb: 'טריגר, עיבוד, פלט. אוטומציה עם גבולות והרשאות.',
      },
      {
        id: '5.2',
        title: 'דף נחיתה אינטראקטיבי',
        blurb: 'מבנה, CTA, הוכחה חברתית ואינטראקציה שמוסיפה ערך.',
      },
      {
        id: '5.3',
        title: 'סיכום ומה הלאה',
        blurb: 'חזרה על מה שלמדתם ושלוש משימות המשך מעשיות.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const MAX_VISIBLE = 4;

export default function SyllabusBento() {
  const [activeModule, setActiveModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({});
  const current = modules[activeModule];
  const isExpanded = expandedModules[activeModule] ?? false;
  const visibleLessons = isExpanded ? current.lessons : current.lessons.slice(0, MAX_VISIBLE);
  const hasMore = current.lessons.length > MAX_VISIBLE;

  return (
    <section id="syllabus" className="py-24 md:py-32 px-6 bg-[#F5F5F7]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-7xl mx-auto"
      >
        {/* ---- Badge ---- */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E0E0E5] bg-white text-xs font-bold text-[#7E7F90] tracking-wider">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            סילבוס הקורס
          </span>
        </motion.div>

        {/* ---- Heading ---- */}
        <motion.div variants={fadeUp} className="text-center mb-10 md:mb-14">
          <h2 className="font-headline text-3xl md:text-[2.75rem] leading-tight font-extrabold tracking-[-0.03em] text-[#303150] mb-4">
            כל מה שתלמדו, שיעור אחרי שיעור
          </h2>
          <p className="text-[#7E7F90] text-lg max-w-xl mx-auto">
            צלילת עומק לתוך פיתוח מבוסס AI, מהבסיס ועד פרויקטי גמר.
          </p>
        </motion.div>

        {/* ---- Module Tabs ---- */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              const isActive = i === activeModule;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(i)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                    transition-all duration-200 cursor-pointer whitespace-nowrap
                    ${isActive
                      ? 'bg-[#303150] text-white shadow-[0_2px_8px_rgba(48,49,80,0.2)]'
                      : 'text-[#7E7F90] hover:text-[#303150] hover:bg-[#F5F5F7]'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span className="hidden sm:inline">{mod.label}</span>
                  <span className="sm:hidden">מודול {i + 1}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ---- Module info line ---- */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <p className="text-sm text-[#7E7F90] font-medium">
            מודול {activeModule + 1} · {current.lessonCount} שיעורים
          </p>
        </motion.div>

        {/* ---- Lesson Index List ---- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={easeFade}
            className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#EDEDF0] overflow-hidden"
          >
            <AnimatePresence initial={false}>
              {visibleLessons.map((lesson, idx) => (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="group relative flex items-start gap-5 px-6 md:px-8 py-5 md:py-6
                                  cursor-pointer transition-colors duration-200
                                  hover:bg-[#F5F5F7] rounded-lg mx-1">
                    {/* Timeline column: number + vertical line */}
                    <div className="relative flex flex-col items-center shrink-0 pt-0.5">
                      <span className="text-[15px] font-semibold text-[#8E8EA0] tabular-nums select-none
                                       group-hover:text-[#69ADFF] transition-colors duration-200">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      {/* Vertical connector line (hidden on last visible item) */}
                      {idx < visibleLessons.length - 1 && (
                        <div className="absolute top-8 w-px h-[calc(100%+8px)] bg-[#EAEAEA]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-headline text-[1rem] md:text-[1.05rem] font-bold text-[#1C1C1E] leading-snug mb-1">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-[#6E6E73] leading-relaxed">
                        {lesson.blurb}
                      </p>
                    </div>

                    {/* Play icon — appears on hover */}
                    <div className="shrink-0 self-center opacity-0 -translate-x-1
                                    group-hover:opacity-100 group-hover:translate-x-0
                                    transition-all duration-200">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#69ADFF]">
                        <circle cx="10" cy="10" r="10" fill="currentColor" fillOpacity="0.1" />
                        <path d="M8.5 6.5L13 10L8.5 13.5V6.5Z" fill="currentColor" />
                      </svg>
                    </div>

                    {/* Divider — hidden on last visible item */}
                    {idx < visibleLessons.length - 1 && (
                      <div className="absolute bottom-0 left-6 md:left-8 right-0
                                      h-px bg-[#EAEAEA]
                                      mr-6 md:mr-8 ml-10" />
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* ---- Show all / Collapse toggle ---- */}
            {hasMore && (
              <motion.button
                layout
                onClick={() =>
                  setExpandedModules((prev) => ({
                    ...prev,
                    [activeModule]: !isExpanded,
                  }))
                }
                className="group/btn w-full flex items-center justify-center gap-2
                           py-4 border-t border-[#EAEAEA]
                           text-sm font-semibold text-[#69ADFF]
                           cursor-pointer transition-colors duration-200
                           hover:bg-[#F5F5F7]/60"
              >
                <span>{isExpanded ? 'הצג פחות' : `הצג הכל (${current.lessons.length})`}</span>
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#69ADFF]"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
