'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { ClientPlatform, DesktopCpuArch } from '@/lib/platformTypes';
import { getCursorDirectDownloadUrl, CURSOR_DOWNLOAD_FALLBACK } from '@/data/cursorDownloads';

interface Lesson11DownloadInlineProps {
  effectivePlatform: ClientPlatform;
  downloadCpuArch: DesktopCpuArch | null;
}

/** א׳ אתר רשמי · ב׳ הורדה ישירה — לשילוב בשורה הראשונה של משימות 1.1 */
export default function Lesson11DownloadInline({
  effectivePlatform,
  downloadCpuArch,
}: Lesson11DownloadInlineProps) {
  const directHref = getCursorDirectDownloadUrl(effectivePlatform, downloadCpuArch);
  const hasDirect =
    effectivePlatform === 'mac' || effectivePlatform === 'windows' || effectivePlatform === 'linux';

  return (
    <div className="space-y-2 pt-1">
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:justify-end">
        <a
          href={CURSOR_DOWNLOAD_FALLBACK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border-2 border-[#E8E8ED] bg-white text-[#303150] text-[0.75rem] font-bold hover:bg-[#F7F7F8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADFF] focus-visible:ring-offset-2"
        >
          <span className="text-[#69ADFF] font-extrabold"></span>
          אתר רשמי
          <ExternalLink className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
        </a>

        {hasDirect ? (
          <a
            href={directHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#69ADFF] text-white text-[0.75rem] font-bold hover:opacity-95 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#69ADFF]"
          >
            <span className="font-extrabold opacity-95"></span>
            הורדה ישירה
            <ExternalLink className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
          </a>
        ) : (
          <p className="text-[0.6875rem] text-[#7E7F90] leading-relaxed sm:self-center sm:text-right">
            <span className="font-extrabold text-[#69ADFF]">ב׳</span> מהמחשב:{' '}
            <Link href="/" className="font-semibold text-[#69ADFF] hover:underline">
              התחלה מהירה
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
