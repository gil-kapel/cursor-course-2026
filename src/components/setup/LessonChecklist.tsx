'use client';

import { useState, useCallback, useEffect } from 'react';
import { ListChecks, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LessonChecklistProps {
  lessonId: string;
  checklist: string[];
}

const STORAGE_PREFIX = 'lesson-checklist-';

const URL_REGEX = /\b(https?:\/\/\S+|[\w-]+\.[\w]{2,}(?:\/\S*)?)\b/g;

function renderStepText(text: string) {
  const parts = text.split(URL_REGEX);
  if (parts.length === 1) return text;

  return parts.map((part, i) => {
    if (URL_REGEX.test(part)) {
      const href = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#69ADFF] underline underline-offset-2 hover:text-[#4A90D9] transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function LessonChecklist({ lessonId, checklist }: LessonChecklistProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(() => {
    if (typeof window === 'undefined') return new Set<number>();
    try {
      const raw = localStorage.getItem(`${STORAGE_PREFIX}${lessonId}`);
      return raw ? new Set(JSON.parse(raw) as number[]) : new Set<number>();
    } catch {
      return new Set<number>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        `${STORAGE_PREFIX}${lessonId}`,
        JSON.stringify([...completed]),
      );
    } catch { /* quota exceeded — ignore */ }
  }, [completed, lessonId]);

  const toggle = useCallback((idx: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }, []);

  const doneCount = completed.size;
  const totalCount = checklist.length;
  const allDone = doneCount === totalCount;

  return (
    <div
      className="rounded-2xl border border-[#E8E8ED] bg-white shadow-sm overflow-hidden"
      dir="rtl"
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right cursor-pointer hover:bg-[#FAFAFC] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#69ADFF]"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
            allDone ? 'bg-[#0DBACC]/10' : 'bg-[#69ADFF]/10'
          }`}>
            {allDone ? (
              <Check className="w-4 h-4 text-[#0DBACC]" strokeWidth={2.5} />
            ) : (
              <ListChecks className="w-4 h-4 text-[#69ADFF]" strokeWidth={1.75} />
            )}
          </div>
          <div className="min-w-0">
            <p className="text-[0.8125rem] font-bold text-[#303150] truncate">
              משימות לביצוע — שיעור {lessonId}
            </p>
            <p className="text-[0.6875rem] text-[#7E7F90] mt-0.5">
              {allDone
                ? 'כל המשימות הושלמו!'
                : isOpen
                  ? `${doneCount}/${totalCount} הושלמו`
                  : 'לחצו לפתיחת רשימת המשימות'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {doneCount > 0 && !allDone && (
            <span className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full bg-[#69ADFF]/10 text-[#69ADFF]">
              {doneCount}/{totalCount}
            </span>
          )}
          {allDone && (
            <span className="text-[0.6875rem] font-semibold px-2 py-0.5 rounded-full bg-[#0DBACC]/10 text-[#0DBACC]">
              הושלם ✓
            </span>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-[#7E7F90]" strokeWidth={1.75} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="checklist-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#F7F7F8] px-5 pb-5 pt-4">
              <ol className="space-y-1">
                {checklist.map((step, idx) => {
                  const isDone = completed.has(idx);
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-right transition-colors duration-150 cursor-pointer group ${
                          isDone
                            ? 'bg-[#0DBACC]/[0.04] hover:bg-[#0DBACC]/[0.08]'
                            : 'hover:bg-[#F7F7F8]'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                          isDone
                            ? 'border-[#0DBACC] bg-[#0DBACC]'
                            : 'border-[#D8D8E0] group-hover:border-[#69ADFF]'
                        }`}>
                          <AnimatePresence>
                            {isDone && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                              >
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <span className={`flex-1 text-[0.8125rem] leading-relaxed transition-colors duration-200 ${
                          isDone ? 'text-[#7E7F90]' : 'text-[#303150]'
                        }`}>
                          <span className="font-semibold text-[#69ADFF] ml-1.5">{idx + 1}.</span>
                          {renderStepText(step)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
