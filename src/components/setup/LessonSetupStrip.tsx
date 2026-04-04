'use client';

import Link from 'next/link';
import { Sparkles, ExternalLink } from 'lucide-react';
import type { LessonSetupContent } from '@/data/types';
import {
  agentSkillFolderUrl,
  agentSkillsMarkdownUrl,
  getResolvedCourseSkillTerminal,
} from '@/data/studentSetup';
import CopyBlock from './CopyBlock';

interface LessonSetupStripProps {
  content: LessonSetupContent;
}

export default function LessonSetupStrip({ content }: LessonSetupStripProps) {
  const terminal = getResolvedCourseSkillTerminal(content);
  const skillTree = content.courseSkillRepoPath ? agentSkillFolderUrl(content.courseSkillRepoPath) : null;
  const docUrl = agentSkillsMarkdownUrl(content.agentSkillsDocPath);

  return (
    <div
      className="rounded-2xl border-2 border-[#69ADFF]/25 bg-gradient-to-br from-[#69ADFF]/[0.07] to-[#0DBACC]/[0.06] p-4 sm:p-5 shadow-sm"
      dir="rtl"
    >
      <div className="flex items-start gap-3 justify-end mb-3">
        <div className="text-right flex-1 min-w-0">
          <h2 className="text-[0.9375rem] font-bold text-[#303150] flex items-center gap-2 justify-end flex-wrap">
            <Sparkles className="w-5 h-5 text-[#69ADFF] shrink-0" strokeWidth={1.75} />
            התקנה מהירה — שיעור {content.lessonId}: {content.lessonTitle}
          </h2>
          <p className="text-[0.75rem] text-[#7E7F90] mt-1 leading-relaxed">
            סקיל הקורס בלבד (מתיקיית הריפו). להתקנת ASM בפעם הראשונה —{' '}
            <Link href="/" className="font-semibold text-[#69ADFF] hover:underline">
              עמוד הבית
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {content.showCursorInstall && (
          <p className="text-[0.75rem] text-[#303150]">
            הורידו Cursor מעמוד הבית או מכפתור העזרה (?) — שם קישור ישיר לפי מערכת ההפעלה.
          </p>
        )}

        {terminal && (
          <CopyBlock
            label="סקיל הקורס — העתקה לטרמינל (asm)"
            value={terminal}
            ariaLabel="העתקת פקודות התקנת סקיל הקורס"
            contentDir="ltr"
          />
        )}

        <div className="flex flex-wrap gap-3 justify-end text-[0.75rem]">
          {skillTree && (
            <a
              href={skillTree}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#69ADFF] hover:underline"
            >
              תיקיית הסקיל ב-GitHub
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          )}
          {docUrl && (
            <a
              href={docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#7E7F90] hover:text-[#69ADFF] hover:underline"
            >
              <span dir="ltr" lang="en">AGENT_SKILLS.md</span>
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
