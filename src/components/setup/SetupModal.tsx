'use client';

import { useEffect } from 'react';
import { X, Keyboard } from 'lucide-react';
import type { ClientPlatformState } from '@/hooks/useClientPlatform';
import { getLessonSetup } from '@/data/studentSetup';
import StudentSetupPanel from './StudentSetupPanel';

interface SetupModalProps {
  open: boolean;
  onClose: () => void;
  platform: ClientPlatformState;
  onJumpToLesson: (lessonId: string) => void;
}

export default function SetupModal({ open, onClose, platform, onJumpToLesson }: SetupModalProps) {
  const lesson11 = getLessonSetup('1.1');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !lesson11) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        aria-label="סגירה"
        onClick={onClose}
      />
      <div
        className="relative w-full sm:max-w-lg max-h-[90vh] overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white shadow-xl border border-[#E8E8ED] flex flex-col"
        dir="rtl"
        lang="he"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#F7F7F8]">
          <h2 id="setup-modal-title" className="text-[1rem] font-bold text-[#303150]">
            התחלה מהירה
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#7E7F90] hover:bg-[#F7F7F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADFF]"
            aria-label="סגור"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        <div className="overflow-y-auto p-4 space-y-4">
          <StudentSetupPanel
            content={{
              ...lesson11,
              showAsmInstall: true,
              showCursorInstall: true,
            }}
            effectivePlatform={platform.effective}
            detectedPlatform={platform.detected}
            override={platform.override}
            cpuArch={platform.cpuArch}
            downloadCpuArch={platform.downloadCpuArch}
            onPlatformOverride={platform.setOverride}
            compact={false}
          />

          <div className="flex flex-wrap gap-2 justify-end">
            <button
              type="button"
              onClick={() => onJumpToLesson('1.1')}
              className="text-[0.75rem] font-semibold text-[#69ADFF] hover:underline"
            >
              עבור לשיעור 1.1 — התקנה
            </button>
            <span className="text-[#E8E8ED]">|</span>
            <button
              type="button"
              onClick={() => onJumpToLesson('2.1')}
              className="text-[0.75rem] font-semibold text-[#69ADFF] hover:underline"
            >
              עבור לשיעור 2.1 — Skills
            </button>
          </div>

          <details className="rounded-xl border border-[#F7F7F8] p-3 text-right">
            <summary className="text-[0.8125rem] font-bold text-[#303150] cursor-pointer flex items-center gap-2 justify-end list-none [&::-webkit-details-marker]:hidden">
              <Keyboard className="w-4 h-4 text-[#0DBACC]" strokeWidth={1.75} />
              קיצורי מקלדת ב-Cursor
            </summary>
            <ul className="mt-3 space-y-2 text-[0.75rem] text-[#7E7F90] leading-relaxed" dir="rtl">
              <li>
                <strong className="text-[#303150]">⌘K / Ctrl+K</strong> — עריכה בשורה
              </li>
              <li>
                <strong className="text-[#303150]">⌘L / Ctrl+L</strong> — צ&apos;אט לצד הקוד
              </li>
              <li>
                <strong className="text-[#303150]">⌘I / Ctrl+I</strong> — Composer (מספר קבצים)
              </li>
            </ul>
          </details>

          <p className="text-[0.6875rem] text-[#BDBDCB] leading-relaxed">
            מעל הסרטון בכל שיעור רלוונטי מופיעה רצועת &quot;התקנה מהירה&quot; עם סקיל הקורס בלבד. לפרטי ASM מלאים — עמוד הבית.
          </p>
        </div>
      </div>
    </div>
  );
}
