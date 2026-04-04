'use client';

import { useRef, useState, useEffect } from 'react';
import {
  Paperclip,
  StickyNote,
  FileText,
  FileSpreadsheet,
  FileIcon,
  Presentation,
  Download,
  ExternalLink,
  Lightbulb,
  ScrollText,
  Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import CopyBlock from '@/components/setup/CopyBlock';
import type { AttachedFile } from '@/data/types';

export type CourseTab = 'files' | 'notes' | 'prompts' | 'transcript';

const tabs: { id: CourseTab; label: string; icon: typeof Paperclip }[] = [
  { id: 'files', label: 'קבצים מצורפים', icon: Paperclip },
  { id: 'notes', label: 'הערות', icon: StickyNote },
  { id: 'prompts', label: 'פרומפטים', icon: Sparkles },
  { id: 'transcript', label: 'תמלול', icon: ScrollText },
];

const fileTypeIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  docx: FileIcon,
  pptx: Presentation,
  link: ExternalLink,
  txt: FileText,
  md: FileText,
};

const fileTypeStyles: Record<string, { icon: string; bg: string }> = {
  pdf: { icon: 'text-[#F18AB5]', bg: 'bg-[#F18AB5]/10' },
  xlsx: { icon: 'text-[#0DBACC]', bg: 'bg-[#0DBACC]/10' },
  docx: { icon: 'text-[#69ADFF]', bg: 'bg-[#69ADFF]/10' },
  pptx: { icon: 'text-[#E9A800]', bg: 'bg-[#E9A800]/10' },
  link: { icon: 'text-[#69ADFF]', bg: 'bg-[#69ADFF]/10' },
  txt: { icon: 'text-[#7E7F90]', bg: 'bg-[#F7F7F8]' },
  md: { icon: 'text-[#7E7F90]', bg: 'bg-[#F7F7F8]' },
};

interface CourseTabBarProps {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
  files: AttachedFile[];
  notes?: string[];
  /** Resolved prompts for copy (lesson data and/or setup strip). */
  prompts?: string[];
  transcript?: string;
}

export default function CourseTabBar({
  activeTab,
  onTabChange,
  files,
  notes,
  prompts,
  transcript,
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

      <div className="h-[17rem] overflow-y-auto scrollbar-ghost">
        <div className="p-6" dir="rtl" lang="he">
          {activeTab === 'files' && (
            <>
              {files.length > 0 ? (
                <div className="space-y-2">
                  {files.map((file) => {
                    const TypeIcon = fileTypeIcons[file.type] || FileIcon;
                    const style = fileTypeStyles[file.type] || { icon: 'text-[#7E7F90]', bg: 'bg-[#F7F7F8]' };
                    const isLink = file.type === 'link' && file.url;
                    const ActionIcon = isLink ? ExternalLink : Download;
                    return (
                      <a
                        key={file.id}
                        href={file.url}
                        target={isLink ? '_blank' : undefined}
                        rel={isLink ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-[#F7F7F8] transition-colors duration-200 cursor-pointer"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${style.bg}`}>
                          <TypeIcon className={`w-[1.125rem] h-[1.125rem] ${style.icon}`} strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                          <p className="text-[0.8125rem] font-semibold text-[#303150] truncate" dir="ltr" lang="en">{file.name}</p>
                          <p className="text-[0.75rem] text-[#BDBDCB]" dir="ltr" lang="en">{file.size}</p>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-8 h-8 rounded-lg bg-[#69ADFF]/8 flex items-center justify-center">
                            <ActionIcon className="w-3.5 h-3.5 text-[#69ADFF]" strokeWidth={1.75} />
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-52">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F8] flex items-center justify-center mb-3">
                    <Paperclip className="w-5 h-5 text-[#BDBDCB]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#7E7F90]">אין קבצים מצורפים</p>
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
                      label={prompts.length > 1 ? `פרומפט ${i + 1}` : 'הנחיה לצ\'אט'}
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

          {activeTab === 'transcript' && (
            <>
              {transcript ? (
                <div
                  className="text-[0.8125rem] text-[#303150] leading-[1.8] whitespace-pre-line"
                  dir="rtl"
                  lang="he"
                  style={{ fontFamily: 'var(--font-nunito), system-ui, sans-serif' }}
                >
                  {transcript}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-52">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F7F8] flex items-center justify-center mb-3">
                    <ScrollText className="w-5 h-5 text-[#BDBDCB]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[0.8125rem] font-medium text-[#7E7F90]">אין תמלול עדיין</p>
                  <p className="text-[0.75rem] text-[#BDBDCB] mt-1">תמלול השיעור יופיע כאן כשיהיה זמין</p>
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
