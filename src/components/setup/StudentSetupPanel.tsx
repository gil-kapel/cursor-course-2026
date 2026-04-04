'use client';

import { useId, useState } from 'react';
import { ExternalLink, Monitor } from 'lucide-react';
import type { ClientPlatform } from '@/hooks/useClientPlatform';
import type { MacCpuKind } from '@/lib/platformTypes';
import type { LessonSetupContent } from '@/data/types';
import { agentSkillsMarkdownUrl, platformLabel } from '@/data/studentSetup';
import { getCursorDirectDownloadUrl, CURSOR_DOWNLOAD_FALLBACK } from '@/data/cursorDownloads';
import { ASM_AGENT_SETUP_PROMPT, ASM_INSTALL_SHELL } from '@/data/asmGilKapel';
import CopyBlock from './CopyBlock';

interface StudentSetupPanelProps {
  content: LessonSetupContent;
  effectivePlatform: ClientPlatform;
  detectedPlatform: ClientPlatform;
  override: ClientPlatform | null;
  macCpu: MacCpuKind;
  onPlatformOverride: (p: ClientPlatform | null) => void;
  /** When false, hide lesson-specific asm blocks (e.g. global modal summary). */
  compact?: boolean;
}

const PLATFORM_OPTIONS: { value: ClientPlatform; label: string }[] = [
  { value: 'mac', label: 'macOS' },
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
  { value: 'ios', label: 'iOS / iPad' },
  { value: 'android', label: 'Android' },
  { value: 'unknown', label: 'לא יודע/ת' },
];

export default function StudentSetupPanel({
  content,
  effectivePlatform,
  detectedPlatform,
  override,
  macCpu,
  onPlatformOverride,
  compact = false,
}: StudentSetupPanelProps) {
  const asmMethodGroupId = useId();
  const [asmInstallMethod, setAsmInstallMethod] = useState<'terminal' | 'agent'>('agent');
  const docUrl = agentSkillsMarkdownUrl(content.agentSkillsDocPath);
  const cursorHref = getCursorDirectDownloadUrl(effectivePlatform, macCpu);
  const cursorIsDirect =
    effectivePlatform === 'mac' || effectivePlatform === 'windows' || effectivePlatform === 'linux';

  return (
    <div className="space-y-5 text-right" dir="rtl">
      <section className="space-y-2">
        <h3 className="text-[0.8125rem] font-bold text-[#303150] flex items-center gap-2 justify-end">
          <Monitor className="w-4 h-4 text-[#69ADFF]" strokeWidth={1.75} />
          המחשב שלכם
        </h3>
        <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
          מזוהה: <strong className="text-[#303150]">{platformLabel(detectedPlatform)}</strong>
          {override !== null && (
            <span className="text-[#69ADFF]"> — מוצג לפי בחירתכם: {platformLabel(effectivePlatform)}</span>
          )}
        </p>
        <label className="flex flex-col sm:flex-row sm:items-center gap-2 sm:justify-end text-[0.75rem] text-[#7E7F90]">
          <span>לא נכון? בחרו מערכת:</span>
          <select
            value={override ?? ''}
            onChange={(e) => {
              const v = e.target.value;
              onPlatformOverride(v === '' ? null : (v as ClientPlatform));
            }}
            className="rounded-lg border border-[#E8E8ED] bg-white px-2 py-1.5 text-[#303150] text-[0.8125rem] max-w-48 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADFF]"
            aria-label="בחירת מערכת הפעלה להורדות"
          >
            <option value="">לפי זיהוי אוטומטי</option>
            {PLATFORM_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        {effectivePlatform === 'mac' && (
          <p className="text-[0.6875rem] text-[#BDBDCB]">
            מק: אם ההורדה לא מתאימה, נסו את{' '}
            <a href={CURSOR_DOWNLOAD_FALLBACK} className="text-[#69ADFF] underline" target="_blank" rel="noreferrer">
              דף ההורדות הרשמי
            </a>{' '}
            ובחרו Intel / Apple Silicon.
          </p>
        )}
      </section>

      {content.showCursorInstall && (
        <section className="space-y-2">
          <h3 className="text-[0.8125rem] font-bold text-[#303150]">הורדת Cursor</h3>
          <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
            {cursorIsDirect
              ? 'קישור ישיר להתקנה למערכת שנבחרה. אחרי ההתקנה: File → Open Folder.'
              : 'במובייל אין התקנת שולחן עבודה — השתמשו במחשב.'}
          </p>
          <a
            href={cursorHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#69ADFF] text-white text-[0.8125rem] font-bold hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#69ADFF]"
          >
            {cursorIsDirect ? 'הורדת Cursor (קישור ישיר)' : 'דף הורדות Cursor'}
            <ExternalLink className="w-4 h-4" strokeWidth={2} />
          </a>
        </section>
      )}

      {content.showAsmInstall && !compact && (
        <section className="space-y-3" aria-labelledby={asmMethodGroupId}>
          <h3 id={asmMethodGroupId} className="text-[0.8125rem] font-bold text-[#303150]">
            התקנת ASM
          </h3>
          <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
            <strong className="font-semibold text-[#303150]">ASM</strong> (Agent Skill Manager) הוא כלי שמתקין על המחשב את פקודת{' '}
            <code dir="ltr" className="text-[0.6875rem] bg-[#F7F7F8] px-1 rounded">asm</code>
            , יוצר בפרויקט קובץ{' '}
            <code dir="ltr" className="text-[0.6875rem] bg-[#F7F7F8] px-1 rounded">asm.toml</code>
            , ומסנכרן סקילים ל-Cursor. צריך לעשות את זה פעם אחת לפני שמתקינים סקילים מהקורס.
          </p>
          <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
            בחרו איך להתקין — שתי הדרכים מגיעות לאותה תוצאה:
          </p>
          <div
            className="flex rounded-xl border border-[#E8E8ED] p-1 bg-[#F7F7F8] gap-1"
            role="group"
            aria-label="אופן התקנת ASM"
          >
            <button
              type="button"
              onClick={() => setAsmInstallMethod('agent')}
              aria-pressed={asmInstallMethod === 'agent'}
              className={`
                flex-1 py-2.5 px-3 rounded-lg text-[0.8125rem] font-bold transition-all duration-200
                ${asmInstallMethod === 'agent'
                  ? 'bg-white text-[#69ADFF] shadow-sm ring-1 ring-[#E8E8ED]'
                  : 'text-[#7E7F90] hover:text-[#303150]'}
              `}
            >
              צ&apos;אט ב-Cursor
            </button>
            <button
              type="button"
              onClick={() => setAsmInstallMethod('terminal')}
              aria-pressed={asmInstallMethod === 'terminal'}
              className={`
                flex-1 py-2.5 px-3 rounded-lg text-[0.8125rem] font-bold transition-all duration-200
                ${asmInstallMethod === 'terminal'
                  ? 'bg-white text-[#69ADFF] shadow-sm ring-1 ring-[#E8E8ED]'
                  : 'text-[#7E7F90] hover:text-[#303150]'}
              `}
            >
              טרמינל
            </button>
          </div>
          {asmInstallMethod === 'terminal' ? (
            <div className="space-y-2">
              <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
                הדביקו בטרמינל (<span dir="ltr" lang="en">macOS / Linux / WSL</span>), לחצו Enter, ואז בתיקיית הפרויקט שלכם הריצו{' '}
                <code dir="ltr" className="text-[0.6875rem] bg-[#F7F7F8] px-1 rounded">asm init</code>
                {' '}אם עדיין אין <code dir="ltr" className="text-[0.6875rem] bg-[#F7F7F8] px-1 rounded">asm.toml</code>.
              </p>
              <CopyBlock
                label="שורת התקנה (טרמינל)"
                value={ASM_INSTALL_SHELL}
                ariaLabel="העתקת פקודת התקנת ASM בטרמינל"
                contentDir="ltr"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
                פתחו צ&apos;אט לצד הקוד (<kbd dir="ltr" className="text-[0.65rem] bg-[#F7F7F8] px-1 py-0.5 rounded border border-[#E8E8ED]">⌘L</kbd>
                {' '}/{' '}
                <kbd dir="ltr" className="text-[0.65rem] bg-[#F7F7F8] px-1 py-0.5 rounded border border-[#E8E8ED]">Ctrl+L</kbd>
                ), הדביקו את ההנחיה הבאה (באנגלית), ואשרו — הסוכן יבדוק אם ASM כבר מותקן, יריץ את הפקודות הנדרשות ויאתחל את הפרויקט.
              </p>
              <CopyBlock
                label="הנחיה לסוכן (אנגלית)"
                value={ASM_AGENT_SETUP_PROMPT}
                ariaLabel="העתקת הנחיית ASM לסוכן ב-Cursor"
                contentDir="ltr"
              />
            </div>
          )}
        </section>
      )}

      {content.showAsmInstall && compact && (
        <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
          התקנת ASM: בעמוד <strong className="text-[#303150]">התחלה מהירה</strong> — בחרו <strong className="text-[#303150]">טרמינל</strong> או{' '}
          <strong className="text-[#303150]">צ&apos;אט ב-Cursor</strong> והעתיקו משם את הפקודה או ההנחיה.
        </p>
      )}

      {content.courseRepoSyncScript && !compact && (
        <section className="space-y-2">
          <h3 className="text-[0.8125rem] font-bold text-[#303150]">סקילים מהריפו של הקורס (אופציונלי)</h3>
          <p className="text-[0.75rem] text-[#7E7F90] leading-relaxed">
            קישור סימלינק לכל סקילי המודול תחת <code dir="ltr" className="text-[0.6875rem] bg-[#F7F7F8] px-1 rounded">.cursor/skills</code>.
          </p>
          <CopyBlock
            label="פקודה (שורש הריפו)"
            value={content.courseRepoSyncScript}
            ariaLabel="העתקת פקודת סנכרון סקילים מהקורס"
            contentDir="ltr"
          />
        </section>
      )}

      {/* {content.agentPromptBlock && !compact && (
        <section className="space-y-2">
          <h3 className="text-[0.8125rem] font-bold text-[#303150]">הנחיה קצרה לצ&apos;אט</h3>
          <CopyBlock
            label={'העתקה לצ\'אט'}
            value={content.agentPromptBlock}
            ariaLabel="העתקת הנחיה לסוכן ב-Cursor"
          />
        </section>
      )} */}

      {docUrl && !compact && (
        <p className="text-[0.75rem]">
          <a
            href={docUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-[#69ADFF] hover:underline"
          >
            המקור המלא:{' '}
            <span dir="ltr" lang="en">AGENT_SKILLS.md</span>
            <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
          </a>
        </p>
      )}

    </div>
  );
}
