'use client';

import { useCallback, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyBlockProps {
  label: string;
  value: string;
  /** Shorter aria label for screen readers */
  ariaLabel: string;
  /** Text direction for the copied body (Hebrew prompts → rtl or auto; shell/English → ltr). */
  contentDir?: 'ltr' | 'rtl' | 'auto';
}

export default function CopyBlock({ label, value, ariaLabel, contentDir = 'auto' }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = useCallback(async () => {
    setError(false);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(true);
    }
  }, [value]);

  return (
    <div className="rounded-xl border border-[#E8E8ED] bg-[#FAFAFC] overflow-hidden" dir="rtl" lang="he">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-[#E8E8ED] bg-white/80">
        <span className="text-[0.75rem] font-semibold text-[#303150]">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={ariaLabel}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[0.6875rem] font-bold bg-[#69ADFF]/12 text-[#69ADFF] hover:bg-[#69ADFF]/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#69ADFF] focus-visible:ring-offset-1"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={2} />
              הועתק
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" strokeWidth={2} />
              העתקה
            </>
          )}
        </button>
      </div>
      <pre
        className="p-3 text-[0.6875rem] leading-relaxed text-[#303150] whitespace-pre-wrap break-all overflow-x-auto max-h-48 overflow-y-auto"
        dir={contentDir}
        lang={contentDir === 'ltr' ? 'en' : contentDir === 'rtl' ? 'he' : undefined}
        style={{ fontFamily: 'ui-monospace, monospace' }}
      >
        {value}
      </pre>
      {error && (
        <p className="px-3 pb-2 text-[0.6875rem] text-amber-700" role="status" dir="rtl" lang="he">
          לא ניתן להעתיק אוטומטית. סמנו את הטקסט למעלה והעתיקו ידנית (<span dir="ltr" lang="en">Ctrl/Cmd+C</span>).
        </p>
      )}
    </div>
  );
}
