'use client';

import Link from 'next/link';
import {
  GraduationCap,
  HelpCircle,
  Menu,
  BookOpen,
  Home,
} from 'lucide-react';

interface CourseHeaderProps {
  watchedCount: number;
  totalLessons: number;
  onOpenMobileMenu: () => void;
  onOpenHelp?: () => void;
  /** Link to fast-start homepage (e.g. "/"). */
  quickStartHref?: string;
}

export default function CourseHeader({
  watchedCount,
  totalLessons,
  onOpenMobileMenu,
  onOpenHelp,
  quickStartHref,
}: CourseHeaderProps) {
  const progressPercent = totalLessons > 0 ? Math.round((watchedCount / totalLessons) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100" dir="rtl" lang="he">
      <div className="px-4 lg:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Right side (RTL): Logo + Title */}
          <div className="flex items-center gap-3">
            {/* Mobile: Logo only */}
            <div className="lg:hidden flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <span
                className="text-sm font-bold text-slate-800"
                style={{ fontFamily: 'var(--font-heebo)' }}
              >
                קורס Cursor
              </span>
            </div>

            {/* Desktop: Logo + Title */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>

              <h1 className="text-xl font-semibold text-slate-800">קורס Claude Code</h1>
            </div>
          </div>

          {/* Left side (RTL): Progress + Icons + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Progress pill */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
              <BookOpen className="w-3.5 h-3.5 text-[#69ADFF]" strokeWidth={1.75} />
              <span className="text-[0.75rem] font-semibold text-slate-600" dir="ltr" lang="en">
                {watchedCount}/{totalLessons}
              </span>
              {progressPercent > 0 && (
                <>
                  <div className="w-px h-3 bg-slate-200" />
                  <span className="text-[0.6875rem] font-semibold text-[#69ADFF]" dir="ltr" lang="en">
                    {progressPercent}%
                  </span>
                </>
              )}
            </div>

            {quickStartHref && (
              <Link
                href={quickStartHref}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[0.75rem] font-semibold text-[#69ADFF] hover:bg-[#69ADFF]/10 transition-colors"
              >
                <Home className="w-3.5 h-3.5" strokeWidth={2} />
                התחלה מהירה
              </Link>
            )}

            {/* Help */}
            <button
              type="button"
              onClick={onOpenHelp}
              className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              aria-label="עזרה והתקנה מהירה"
              title="עזרה והתקנה מהירה"
              disabled={!onOpenHelp}
            >
              <HelpCircle className="w-[18px] h-[18px]" strokeWidth={1.75} />
            </button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
              aria-label="פתח תפריט ניווט"
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
