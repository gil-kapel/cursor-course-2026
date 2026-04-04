'use client';

import Link from 'next/link';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { useClientPlatform } from '@/hooks/useClientPlatform';
import type { LessonSetupContent } from '@/data/types';
import StudentSetupPanel from './StudentSetupPanel';

const FAST_START_LESSON: LessonSetupContent = {
  lessonId: '0',
  lessonTitle: 'התחלה מהירה',
  agentSkillsDocPath: '',
  showCursorInstall: true,
  showAsmInstall: true,
  agentPromptBlock:
    'אחרי שהתקנתם ASM (טרמינל או צ\'אט — לפי מה שבחרתם למעלה), עברו לקורס ובכל שיעור מודול 2 תמצאו למעלה את פקודת התקנה לסקיל הקורס בלבד.',
};

export default function FastStartPage() {
  const platform = useClientPlatform();

  return (
    <div className="min-h-screen bg-[#FAFAFC]" dir="rtl">
      <header className="sticky top-0 z-10 border-b border-[#E8E8ED] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-bold text-[#303150]">התחלה מהירה</span>
          </div>
          <Link
            href="/course"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#69ADFF] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            המשך לקורס המלא
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8 space-y-6">
        <div className="text-right space-y-2">
          <h1 className="text-2xl font-bold text-[#303150]">לפני השיעורים</h1>
          <p className="text-[0.9375rem] text-[#7E7F90] leading-relaxed">
            זיהוי מערכת, הורדת Cursor, והתקנת ASM — לפי בחירה בטרמינל או בהנחיה לסוכן ב-Cursor. בשיעורי הקורס עצמם תקבלו רק את סקיל הקורס לכל שיעור.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E8E8ED] bg-white p-5 shadow-sm">
          <StudentSetupPanel
            content={FAST_START_LESSON}
            effectivePlatform={platform.effective}
            detectedPlatform={platform.detected}
            override={platform.override}
            cpuArch={platform.cpuArch}
            downloadCpuArch={platform.downloadCpuArch}
            onPlatformOverride={platform.setOverride}
            compact={false}
          />
        </div>

        <div className="flex justify-center pb-12">
          <Link
            href="/course"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#69ADFF] text-white text-[0.9375rem] font-bold hover:opacity-95 transition-opacity shadow-md"
          >
            כניסה לקורס
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </main>
    </div>
  );
}
