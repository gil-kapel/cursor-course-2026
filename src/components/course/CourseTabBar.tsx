'use client';

import { useRef, useState, useEffect } from 'react';
import {
  StickyNote,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import CopyBlock from '@/components/setup/CopyBlock';

export type CourseTab = 'prompts' | 'notes';

const tabs: { id: CourseTab; label: string; icon: typeof StickyNote }[] = [
  { id: 'prompts', label: 'פרומפטים להתקנה', icon: Sparkles },
  { id: 'notes', label: 'הערות', icon: StickyNote },
];

interface CourseTabBarProps {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
  notes?: string[];
  prompts?: string[];
}

export default function CourseTabBar({
  activeTab,
  onTabChange,
  notes,
  prompts,
}: CourseTabBarProps) {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeIdx = tabs.findIndex((t) => t.id === activeTab);
    const el = tabsRef.current[activeIdx];
    if (el) {
      setIndicatorStyle({ width: el.offsetWidth, left: el.offsetLeft });
    }
  }, [activeTab]);

  return (
    <Card padding="none" className="overflow-hidden">
      <div dir="rtl" lang="he">
      <div className="relative flex border-b border-[#F7F7F8]">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => { tabsRef.current[i] = el; }}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.8125rem] font-semibold
                transition-colors duration-200 cursor-pointer relative z-10
                ${isActive ? 'text-[#69ADFF]' : 'text-[#7E7F90] hover:text-[#303150]'}
              `}
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
        <motion.div
          className="absolute bottom-0 h-[2px] rounded-full bg-[#69ADFF]"
          animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
        />
      </div>

      <div className="max-h-[24rem] overflow-y-auto scrollbar-ghost">
        <div className="p-6" dir="rtl" lang="he">
          {activeTab === 'prompts' && (
            <>
              {prompts && prompts.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed mb-1" dir="rtl" lang="he">
                    הדביקו בצ&apos;אט <span dir="ltr" lang="en">Cursor</span> (<kbd dir="ltr" lang="en" className="text-[0.65rem] bg-[#F7F7F8] px-1 rounded border border-[#E8E8ED]">⌘L</kbd>
                    {' / '}
                    <kbd dir="ltr" lang="en" className="text-[0.65rem] bg-[#F7F7F8] px-1 rounded border border-[#E8E8ED]">Ctrl+L</kbd>
                    ) או ב-<span dir="ltr" lang="en">Composer</span> לפי השיעור.
                  </p>
                  {prompts.map((text, i) => (
                    <CopyBlock
                      key={i}
                      label={prompts.length > 1 ? `פרומפט ${i + 1}` : 'הנחיה להתקנה'}
                      value={text}
                      ariaLabel={`העתקת פרומפט ${i + 1}`}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-52">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F8] flex items-center justify-center mb-3">
                    <Sparkles className="w-5 h-5 text-[#BDBDCB]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#7E7F90]">אין פרומפטים לשיעור זה עדיין</p>
                </div>
              )}
            </>
          )}

          {activeTab === 'notes' && (
            <>
              {notes && notes.length > 0 ? (
                <div className="space-y-3">
                  {notes.map((note, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: 'rgba(105, 173, 255, 0.06)', border: '1px solid rgba(105, 173, 255, 0.12)' }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(105, 173, 255, 0.12)' }}>
                        <Lightbulb className="w-4 h-4 text-[#69ADFF]" strokeWidth={1.75} />
                      </div>
                      <p
                        className="text-[0.8125rem] text-[#303150] leading-relaxed whitespace-pre-line"
                        dir="rtl"
                        lang="he"
                        style={{ fontFamily: 'var(--font-nunito), system-ui, sans-serif' }}
                      >
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-52">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F8] flex items-center justify-center mb-3">
                    <StickyNote className="w-5 h-5 text-[#BDBDCB]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#7E7F90]">אין הערות עדיין</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      </div>
    </Card>
  );
}
