'use client';

import { X, Lock, Check, ChevronDown, BookOpen, Laptop, Users, Plug, Rocket, Trophy, ListVideo } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Chapter } from '@/data/types';

const moduleIcons: Record<string, typeof BookOpen> = {
  Laptop, Users, Plug, Rocket, Trophy, BookOpen,
};

interface MobileDrawerProps {
  chapters: Chapter[];
  activeLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  watchedLessonIds: Set<string>;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ chapters, activeLessonId, onSelectLesson, watchedLessonIds, isOpen, onClose }: MobileDrawerProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => {
    for (const ch of chapters) {
      if (ch.lessons.some((l) => l.id === activeLessonId)) return new Set([ch.id]);
    }
    return new Set([chapters[0]?.id]);
  });

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) next.delete(moduleId);
      else next.add(moduleId);
      return next;
    });
  };

  const handleSelectLesson = (lessonId: string) => {
    onSelectLesson(lessonId);
    onClose();
  };

  return (
    <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/40"
              onClick={onClose}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed inset-y-0 inset-e-0 z-50 w-[85vw] max-w-sm bg-white shadow-xl flex flex-col"
              dir="rtl"
              lang="he"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#F7F7F8]">
                <div className="flex items-center gap-2">
                  <ListVideo className="w-4 h-4 text-[#69ADFF]" strokeWidth={1.75} />
                  <h3 className="text-[0.8125rem] font-bold text-[#303150]">תוכן הקורס</h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#F7F7F8] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto scrollbar-ghost py-1">
                {chapters.map((chapter) => {
                  const Icon = moduleIcons[chapter.icon] || BookOpen;
                  const isExpanded = expandedModules.has(chapter.id);
                  const allLocked = chapter.lessons.every((l) => l.status === 'locked');

                  return (
                    <div key={chapter.id}>
                      <button
                        type="button"
                        onClick={() => !allLocked && toggleModule(chapter.id)}
                        className={`
                          w-full flex items-center gap-2.5 px-4 py-3 text-start
                          ${allLocked ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#F7F7F8] cursor-pointer'}
                          border-b border-b-[#F7F7F8]
                        `}
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#69ADFF]/8 flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5 text-[#69ADFF]" strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[0.8125rem] font-bold text-[#303150] truncate">{chapter.title}</p>
                          <p className="text-[0.6875rem] text-[#BDBDCB]">{chapter.lessons.length} שיעורים</p>
                        </div>
                        {allLocked ? (
                          <Lock className="w-4 h-4 text-[#BDBDCB] shrink-0" strokeWidth={1.75} />
                        ) : (
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
                          </motion.div>
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && !allLocked && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
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
                                  onClick={() => !isLocked && handleSelectLesson(lesson.id)}
                                  className={`
                                    w-full flex items-center gap-2.5 ps-10 pe-4 py-2.5 text-start border-s-[3px]
                                    ${isActive ? 'bg-[#69ADFF]/6 border-[#69ADFF]' : 'border-transparent'}
                                    ${isLocked ? 'opacity-40 cursor-not-allowed' : 'hover:bg-[#F7F7F8] cursor-pointer'}
                                  `}
                                >
                                  {watched ? (
                                    <div className="w-4 h-4 rounded-full bg-[#0DBACC]/12 flex items-center justify-center shrink-0">
                                      <Check className="w-2.5 h-2.5 text-[#0DBACC]" strokeWidth={2.5} />
                                    </div>
                                  ) : (
                                    <div className={`w-2 h-2 rounded-full shrink-0 ${isActive ? 'bg-[#69ADFF]' : 'bg-[#E8E8ED]'}`} />
                                  )}
                                  <p className={`text-[0.8125rem] truncate flex-1 ${isActive ? 'font-bold text-[#303150]' : 'font-medium text-[#303150]'}`}>
                                    {lesson.title}
                                  </p>
                                  {isLocked && <Lock className="w-3.5 h-3.5 text-[#BDBDCB] shrink-0" strokeWidth={1.75} />}
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
  );
}
