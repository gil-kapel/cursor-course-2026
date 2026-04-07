'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Users, Plug, Rocket, Trophy } from 'lucide-react';
import { courseData } from '@/data/courseData';
import type { Chapter, Lesson, LessonBadgeType } from '@/data/types';
import { fadeUp, staggerContainer, sectionViewport, easeFade } from '../motion';

/* ------------------------------------------------------------------ */
/*  Syllabus data – every lesson with a short one-liner               */
/* ------------------------------------------------------------------ */

const iconMap = {
  Laptop,
  Users,
  Plug,
  Rocket,
  Trophy,
};

const badgeCopy: Record<LessonBadgeType, string> = {
  FREE: 'חינם',
  BEGINNER: 'מתחילים',
  INTERMEDIATE: 'ביניים',
  PREMIUM: 'פרימיום',
};

const moduleMeta: Record<
  string,
  {
    label: string;
    summary: string;
  }
> = {
  'module-1': {
    label: 'מבוא וסביבת עבודה',
    summary: 'הקמה נכונה של Cursor, מודלים, Git והרגלי עבודה רגועים.',
  },
  'module-2': {
    label: 'פיתוח מבוסס Skills',
    summary:
      'צוות סוכנים: Product, Tech Lead, UX, UI, תכנון מימוש ב-Plan mode, Build, Review, QA, Debug ופרומפטים חדים.',
  },
  'module-3': {
    label: 'כוחות-על עם MCP',
    summary: 'Stitch להתחלה מהירה, Figma לדיוק, וחיבורים חכמים לכלים חיצוניים.',
  },
  'module-4': {
    label: 'אינטגרציות ופריסה',
    summary: 'מעבירים את הפרויקט ממחשב מקומי לענן, GitHub ו-URL ציבורי.',
  },
  'module-5': {
    label: 'פרויקטי גמר',
    summary: 'שני פרויקטים מעשיים שמחברים את כל מה שנלמד בקורס.',
  },
};

interface LandingModule {
  id: string;
  label: string;
  summary: string;
  icon: typeof Laptop;
  lessonCount: number;
  promptCount: number;
  taskCount: number;
  lessons: Array<{
    id: string;
    title: string;
    blurb: string;
    badge?: LessonBadgeType;
  }>;
}

function getLessonBlurb(lesson: Lesson): string {
  return lesson.notes?.[0] ?? '';
}

const modules: LandingModule[] = courseData.chapters.map((chapter: Chapter) => ({
  id: chapter.id,
  label: moduleMeta[chapter.id]?.label ?? chapter.title,
  summary: moduleMeta[chapter.id]?.summary ?? chapter.title,
  icon: iconMap[chapter.icon as keyof typeof iconMap] ?? Laptop,
  lessonCount: chapter.lessons.length,
  promptCount: chapter.lessons.reduce((sum, lesson) => sum + (lesson.prompts?.length ?? 0), 0),
  taskCount: chapter.lessons.reduce((sum, lesson) => sum + (lesson.checklist?.length ?? 0), 0),
  lessons: chapter.lessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    blurb: getLessonBlurb(lesson),
    badge: lesson.badge,
  })),
}));

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
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto mb-8">
          <div className="rounded-2xl border border-[#EDEDF0] bg-white px-5 md:px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm text-[#7E7F90] font-medium mb-1">
                  מודול {activeModule + 1} · {current.lessonCount} שיעורים
                </p>
                <h3 className="font-headline text-xl md:text-2xl font-bold text-[#303150] mb-2">
                  {current.label}
                </h3>
                <p className="text-sm md:text-[0.95rem] text-[#6E6E73] leading-relaxed max-w-2xl">
                  {current.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                <span className="inline-flex items-center rounded-full bg-[#F5F5F7] px-3 py-1.5 text-xs font-semibold text-[#303150]">
                  {current.promptCount} פרומפטים
                </span>
                <span className="inline-flex items-center rounded-full bg-[#F5F5F7] px-3 py-1.5 text-xs font-semibold text-[#303150]">
                  {current.taskCount} משימות
                </span>
              </div>
            </div>
          </div>
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
                        {lesson.id}
                      </span>
                      {/* Vertical connector line (hidden on last visible item) */}
                      {idx < visibleLessons.length - 1 && (
                        <div className="absolute top-8 w-px h-[calc(100%+8px)] bg-[#EAEAEA]" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className="font-headline text-[1rem] md:text-[1.05rem] font-bold text-[#1C1C1E] leading-snug">
                          {lesson.title}
                        </h3>
                        {lesson.badge && (
                          <span className="inline-flex items-center rounded-full bg-[#F5F5F7] px-2 py-0.5 text-[11px] font-semibold text-[#7E7F90]">
                            {badgeCopy[lesson.badge]}
                          </span>
                        )}
                      </div>
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
