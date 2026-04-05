'use client';

import { useState, useMemo, useLayoutEffect, useCallback } from 'react';
import { ArrowLeft, BookOpen, Clock, GraduationCap, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import CourseHeader from '@/components/layout/CourseHeader';
import VideoPlayer from './VideoPlayer';
import CourseSidebar from './CourseSidebar';
import MobileDrawer from './MobileDrawer';
import CourseTabBar, { type CourseTab } from './CourseTabBar';
import SetupModal from '@/components/setup/SetupModal';
import LessonSetupStrip from '@/components/setup/LessonSetupStrip';
import LessonChecklist from '@/components/setup/LessonChecklist';
import type { Course } from '@/data/types';
import { getLessonSetup } from '@/data/studentSetup';
import { useClientPlatform } from '@/hooks/useClientPlatform';
import { useProgress } from '@/hooks/useProgress';

interface CourseExperienceProps {
  course: Course;
  storageKey: string;
}

export default function CourseExperience({ course, storageKey }: CourseExperienceProps) {
  const allLessons = useMemo(
    () => course.chapters.flatMap((ch) => ch.lessons),
    [course.chapters],
  );

  const { watchedLessonIds, markAsWatched } = useProgress(storageKey, allLessons.length);
  const platform = useClientPlatform();

  const activeLessonStorageKey = `${storageKey}-active-lesson`;

  const persistActiveLesson = useCallback(
    (lessonId: string) => {
      try {
        localStorage.setItem(activeLessonStorageKey, lessonId);
      } catch {
        /* noop */
      }
    },
    [activeLessonStorageKey],
  );

  const [activeLessonId, setActiveLessonId] = useState(
    () => course.chapters[0]?.lessons[0]?.id ?? '',
  );

  useLayoutEffect(() => {
    try {
      const raw = localStorage.getItem(activeLessonStorageKey);
      if (!raw) return;
      const id = raw.trim();
      if (!id) return;
      const lesson = allLessons.find((l) => l.id === id);
      if (!lesson || lesson.status === 'locked') return;
      /* eslint-disable react-hooks/set-state-in-effect -- restore persisted lesson after SSR/hydration */
      setActiveLessonId(id);
      /* eslint-enable react-hooks/set-state-in-effect */
    } catch {
      /* noop */
    }
  }, [activeLessonStorageKey, allLessons]);
  const [activeTab, setActiveTab] = useState<CourseTab>('prompts');
  const [isPlaylistCollapsed, setIsPlaylistCollapsed] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [setupModalOpen, setSetupModalOpen] = useState(false);

  const setupContent = useMemo(() => getLessonSetup(activeLessonId), [activeLessonId]);

  let activeLesson = course.chapters[0].lessons[0];
  let activeChapter = course.chapters[0];
  for (const ch of course.chapters) {
    const lesson = ch.lessons.find((l) => l.id === activeLessonId);
    if (lesson) {
      activeLesson = lesson;
      activeChapter = ch;
      break;
    }
  }

  const currentLessonIndex = allLessons.findIndex((l) => l.id === activeLessonId);
  const totalLessons = allLessons.length;

  const totalDuration = useMemo(() => {
    const totalSeconds = allLessons.reduce((sum, l) => {
      const [min, sec] = l.duration.split(':').map(Number);
      return sum + min * 60 + (sec || 0);
    }, 0);
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    if (hours > 0) return `${hours} שעות ו-${mins} דק׳`;
    return `${mins} דק׳`;
  }, [allLessons]);

  const nextLesson = useMemo(() => {
    const next = allLessons[currentLessonIndex + 1];
    return next && next.status !== 'locked' ? next : null;
  }, [currentLessonIndex, allLessons]);

  const handleSelectLesson = (lessonId: string) => {
    if (lessonId !== activeLessonId) {
      markAsWatched(activeLessonId);
    }
    setActiveLessonId(lessonId);
    persistActiveLesson(lessonId);
  };

  const handleNextLesson = () => {
    if (nextLesson) {
      markAsWatched(activeLessonId);
      setActiveLessonId(nextLesson.id);
      persistActiveLesson(nextLesson.id);
    }
  };

  const handleJumpToLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    persistActiveLesson(lessonId);
    setSetupModalOpen(false);
    setIsMobileDrawerOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen" dir="rtl" lang="he">
      <SetupModal
        open={setupModalOpen}
        onClose={() => setSetupModalOpen(false)}
        platform={platform}
        onJumpToLesson={handleJumpToLesson}
      />

      <CourseHeader
        watchedCount={watchedLessonIds.size}
        totalLessons={totalLessons}
        onOpenMobileMenu={() => setIsMobileDrawerOpen(true)}
        onOpenHelp={() => setSetupModalOpen(true)}
        quickStartHref="/"
      />

      <div className="flex flex-1 min-h-0">
      <CourseSidebar
        chapters={course.chapters}
        activeLessonId={activeLessonId}
        onSelectLesson={handleSelectLesson}
        isCollapsed={isPlaylistCollapsed}
        onToggleCollapse={() => setIsPlaylistCollapsed((v) => !v)}
        watchedLessonIds={watchedLessonIds}
      />

      <div className="flex-1 min-w-0 p-4 lg:p-6 space-y-6 max-w-4xl mx-auto w-full">
        {/* Course header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-[1.5rem] font-bold text-[#303150] mb-1">
                {course.title}
              </h1>
              <p className="text-[0.9375rem] text-[#7E7F90] mb-4 max-w-xl">
                {course.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[0.8125rem] text-[#7E7F90]">
                  <BookOpen className="w-4 h-4 text-[#69ADFF]" strokeWidth={1.75} />
                  <span>{totalLessons} שיעורים</span>
                </div>
                <div className="flex items-center gap-2 text-[0.8125rem] text-[#7E7F90]">
                  <Clock className="w-4 h-4 text-[#0DBACC]" strokeWidth={1.75} />
                  <span>{totalDuration}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video player */}
        <VideoPlayer
          lesson={activeLesson}
          chapterTitle={activeChapter.title}
          lessonNumber={currentLessonIndex + 1}
          totalLessons={totalLessons}
        />

        {activeLesson.checklist && activeLesson.checklist.length > 0 && (
          <LessonChecklist
            lessonId={activeLesson.id}
            checklist={activeLesson.checklist}
            platform={platform}
          />
        )}

        {setupContent && !(activeLesson.checklist && activeLesson.checklist.length > 0) && (
          <LessonSetupStrip content={setupContent} />
        )}

        {/* Author + next lesson */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[0.8125rem] font-bold text-[#303150]">
                {course.author.name}
              </p>
              {course.author.title && (
                <p className="text-[0.75rem] text-[#7E7F90]">
                  {course.author.title}
                </p>
              )}
            </div>
          </div>

          {nextLesson && (
            <motion.button
              type="button"
              onClick={handleNextLesson}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary flex items-center gap-2 text-[0.8125rem] font-bold"
            >
              <span>שיעור הבא</span>
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          )}
        </div>

        {/* Tabs */}
        <CourseTabBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          notes={activeLesson.notes}
          prompts={activeLesson.prompts}
        />

        {/* Disclaimer */}
        <div className="flex items-start gap-2 py-3 px-4 rounded-xl bg-[#F7F7F8]/60 border border-[#F7F7F8]">
          <Info className="w-3.5 h-3.5 text-[#BDBDCB] shrink-0 mt-0.5" strokeWidth={1.75} />
          <p className="text-[0.6875rem] text-[#BDBDCB] leading-relaxed">
            תוכן לימודי על פיתוח עם Cursor וסוכני AI מובנים. אינו מהווה ייעוץ מקצועי מכל סוג שהוא.
          </p>
        </div>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer
        chapters={course.chapters}
        activeLessonId={activeLessonId}
        onSelectLesson={handleSelectLesson}
        watchedLessonIds={watchedLessonIds}
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
      />
      </div>
    </div>
  );
}
