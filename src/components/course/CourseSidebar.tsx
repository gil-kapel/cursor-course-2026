'use client';

import { useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronDown,
  Lock,
  ListVideo,
  Laptop,
  Users,
  Plug,
  Rocket,
  Trophy,
  BookOpen,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Chapter, Lesson } from '@/data/types';

const moduleIcons: Record<string, typeof BookOpen> = {
  Laptop,
  Users,
  Plug,
  Rocket,
  Trophy,
  BookOpen,
};

interface CourseSidebarProps {
  chapters: Chapter[];
  activeLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  watchedLessonIds: Set<string>;
}

function getChapterDuration(lessons: Lesson[]): string {
  const totalSeconds = lessons.reduce((sum, l) => {
    const [min, sec] = l.duration.split(':').map(Number);
    return sum + min * 60 + (sec || 0);
  }, 0);
  const mins = Math.floor(totalSeconds / 60);
  return `${mins} דק׳`;
}

function LessonStatusIcon({ lessonId, isActive, watched }: { lessonId: string; isActive: boolean; watched: boolean }) {
  if (watched) {
    return (
      <div className="w-4 h-4 rounded-full bg-[#0DBACC]/12 flex items-center justify-center shrink-0">
        <Check className="w-2.5 h-2.5 text-[#0DBACC]" strokeWidth={2.5} />
      </div>
    );
  }
  return (
    <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-[#69ADFF]' : 'bg-[#E8E8ED]'}`} />
  );
}

function ModuleDot({
  chapter,
  index,
  isActive,
  hasWatched,
  isLocked,
  onClick,
}: {
  chapter: Chapter;
  index: number;
  isActive: boolean;
  hasWatched: boolean;
  isLocked: boolean;
  onClick: () => void;
}) {
  const base = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0';

  if (isLocked) {
    return (
      <div className={`${base} bg-[#F7F7F8] opacity-50`} title={`מודול ${index}`}>
        <Lock className="w-3 h-3 text-[#BDBDCB]" strokeWidth={1.75} />
      </div>
    );
  }
  if (hasWatched) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} bg-[#0DBACC]/12 cursor-pointer transition-transform duration-150 hover:scale-110`}
        title={`מודול ${index}`}
      >
        <span className="text-[0.6875rem] font-bold text-[#0DBACC]">{index}</span>
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${base} cursor-pointer transition-transform duration-150 hover:scale-110
        ${isActive ? 'bg-[#69ADFF] shadow-[0_0_0_3px_rgba(105,173,255,0.2)]' : 'bg-[#69ADFF]/10'}
      `}
      title={`מודול ${index}`}
    >
      <span className={`text-[0.6875rem] font-bold ${isActive ? 'text-white' : 'text-[#69ADFF]'}`}>
        {index}
      </span>
    </button>
  );
}

export default function CourseSidebar({
  chapters,
  activeLessonId,
  onSelectLesson,
  isCollapsed,
  onToggleCollapse,
  watchedLessonIds,
}: CourseSidebarProps) {
  // Track which modules are expanded in the accordion
  const activeChapterId = useMemo(() => {
    for (const ch of chapters) {
      if (ch.lessons.some((l) => l.id === activeLessonId)) return ch.id;
    }
    return chapters[0]?.id;
  }, [chapters, activeLessonId]);

  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    () => new Set(activeChapterId ? [activeChapterId] : []),
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  const totalWatched = useMemo(
    () => chapters.reduce((sum, ch) => sum + ch.lessons.filter((l) => watchedLessonIds.has(l.id)).length, 0),
    [chapters, watchedLessonIds],
  );
  const totalLessons = useMemo(
    () => chapters.reduce((sum, ch) => sum + ch.lessons.length, 0),
    [chapters],
  );
  const overallProgress = totalLessons > 0 ? totalWatched / totalLessons : 0;

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 56 : 340 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="hidden lg:flex flex-col bg-white border-e border-[#F7F7F8] overflow-hidden shrink-0"
      dir="rtl"
      lang="he"
    >
      {/* Header */}
      <div className={`flex items-center border-b border-[#F7F7F8] ${isCollapsed ? 'justify-center py-3.5 px-2' : 'justify-between px-4 py-3.5'}`}>
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0">
            <ListVideo className="w-4 h-4 text-[#69ADFF] shrink-0" strokeWidth={1.75} />
            <h3 className="text-[0.8125rem] font-bold text-[#303150] whitespace-nowrap truncate">
              תוכן הקורס
            </h3>
          </div>
        )}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#F7F7F8] transition-colors duration-150 cursor-pointer shrink-0"
          title={isCollapsed ? 'הרחב תפריט' : 'כווץ תפריט'}
        >
          <motion.div animate={{ rotate: isCollapsed ? 0 : 180 }} transition={{ duration: 0.2 }}>
            <ChevronLeft className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
          </motion.div>
        </button>
      </div>

      {/* Progress — expanded only */}
      {!isCollapsed && (
        <div className="px-4 py-3 border-b border-[#F7F7F8]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[0.6875rem] text-[#BDBDCB]">
              {totalWatched}/{totalLessons} שיעורים
            </span>
            <span className="text-[0.6875rem] font-semibold text-[#69ADFF]">
              {Math.round(overallProgress * 100)}%
            </span>
          </div>
          <div className="w-full h-1 rounded-full bg-[#E8E8ED] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[#69ADFF]"
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto scrollbar-ghost">
        {isCollapsed ? (
          /* COLLAPSED: module number dots */
          <div className="flex flex-col items-center gap-1.5 py-3">
            {chapters.map((chapter, idx) => {
              const isModuleActive = chapter.id === activeChapterId;
              const allLocked = chapter.lessons.every((l) => l.status === 'locked');
              const hasWatched = chapter.lessons.some((l) => watchedLessonIds.has(l.id));
              const firstAvailable = chapter.lessons.find((l) => l.status !== 'locked');

              return (
                <ModuleDot
                  key={chapter.id}
                  chapter={chapter}
                  index={idx + 1}
                  isActive={isModuleActive}
                  hasWatched={hasWatched}
                  isLocked={allLocked}
                  onClick={() => {
                    if (firstAvailable) onSelectLesson(firstAvailable.id);
                  }}
                />
              );
            })}
          </div>
        ) : (
          /* EXPANDED: accordion with modules and lessons */
          <div className="py-1">
            {chapters.map((chapter, chapterIdx) => {
              const Icon = moduleIcons[chapter.icon] || BookOpen;
              const isExpanded = expandedModules.has(chapter.id);
              const allLocked = chapter.lessons.every((l) => l.status === 'locked');
              const duration = getChapterDuration(chapter.lessons);
              const watchedInModule = chapter.lessons.filter((l) => watchedLessonIds.has(l.id)).length;
              const isLast = chapterIdx === chapters.length - 1;

              return (
                <div key={chapter.id}>
                  {/* Module header row */}
                  <button
                    type="button"
                    onClick={() => !allLocked && toggleModule(chapter.id)}
                    className={`
                      w-full flex items-center gap-2.5 px-4 py-3
                      transition-colors duration-150 text-start
                      ${allLocked ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#F7F7F8] cursor-pointer'}
                      ${!isLast ? 'border-b border-b-[#F7F7F8]' : ''}
                    `}
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#69ADFF]/8 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#69ADFF]" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.8125rem] font-bold text-[#303150] truncate">
                        {chapter.title}
                      </p>
                      <p className="text-[0.6875rem] text-[#BDBDCB] mt-px">
                        {chapter.lessons.length} שיעורים · {duration}
                        {watchedInModule > 0 && ` · ${watchedInModule} הושלמו`}
                      </p>
                    </div>
                    {!allLocked && (
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
                      </motion.div>
                    )}
                    {allLocked && (
                      <Lock className="w-4 h-4 text-[#BDBDCB] shrink-0" strokeWidth={1.75} />
                    )}
                  </button>

                  {/* Lesson rows — animated accordion */}
                  <AnimatePresence initial={false}>
                    {isExpanded && !allLocked && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        {chapter.lessons.map((lesson) => {
                          const isActive = lesson.id === activeLessonId;
                          const isLocked = lesson.status === 'locked';
                          const watched = watchedLessonIds.has(lesson.id);

                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              disabled={isLocked}
                              onClick={() => !isLocked && onSelectLesson(lesson.id)}
                              className={`
                                w-full flex items-center gap-2.5 ps-10 pe-4 py-2.5
                                transition-colors duration-150 text-start border-s-[3px]
                                ${isActive ? 'bg-[#69ADFF]/6 border-[#69ADFF]' : 'border-transparent'}
                                ${isLocked ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#F7F7F8] cursor-pointer'}
                              `}
                            >
                              <LessonStatusIcon lessonId={lesson.id} isActive={isActive} watched={watched} />
                              <div className="flex-1 min-w-0">
                                <p className={`text-[0.8125rem] leading-snug ${isActive ? 'font-bold text-[#303150]' : 'font-medium text-[#303150]'}`}>
                                  {lesson.title}
                                </p>
                                <p className="text-[0.625rem] text-[#BDBDCB] mt-px">
                                  {lesson.duration}
                                </p>
                              </div>
                              {isLocked && (
                                <Lock className="w-3.5 h-3.5 text-[#BDBDCB] shrink-0" strokeWidth={1.75} />
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.aside>
  );
}
