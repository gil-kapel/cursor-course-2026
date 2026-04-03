'use client';

import { useState, useEffect, useCallback } from 'react';

export function useProgress(storageKey: string, totalLessons: number) {
  const [watchedLessonIds, setWatchedLessonIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setWatchedLessonIds(new Set(JSON.parse(stored) as string[]));
      }
    } catch { /* noop */ }
  }, [storageKey]);

  const markAsWatched = useCallback((lessonId: string) => {
    setWatchedLessonIds((prev) => {
      if (prev.has(lessonId)) return prev;
      const next = new Set(prev);
      next.add(lessonId);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch { /* noop */ }
      return next;
    });
  }, [storageKey]);

  const progressPercent = totalLessons > 0 ? watchedLessonIds.size / totalLessons : 0;

  return { watchedLessonIds, markAsWatched, progressPercent };
}
