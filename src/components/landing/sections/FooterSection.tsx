import Link from 'next/link';
import { GraduationCap, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#F2F4F4] w-full pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="absolute -top-8 left-0 w-full text-center pointer-events-none select-none">
          <span className="text-[80px] md:text-[200px] font-extrabold tracking-tighter text-[#E4E9EA] font-headline leading-none">
            CURSOR
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          <div className="flex flex-col gap-6 items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#2D3435] font-headline">
                קורס Cursor
              </span>
            </Link>
            <p className="max-w-xs text-[#5A6061] text-sm text-right leading-relaxed">
              קורס מעשי בעברית למנהלי מוצר ומתחילים שרוצים לעבוד עם AI בצורה
              מקצועית.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-extrabold text-xs uppercase tracking-widest text-[#5A6061]/50">
                ניווט
              </span>
              <Link
                href="/setup"
                className="text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
              >
                הכנה לקורס
              </Link>
              <Link
                href="/course"
                className="text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
              >
                כניסה לקורס
              </Link>
              <Link
                href="/login"
                className="text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
              >
                התחברות
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extrabold text-xs uppercase tracking-widest text-[#5A6061]/50">
                קישורים
              </span>
              <a
                href="#syllabus"
                className="text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
              >
                סילבוס
              </a>
              <a
                href="#tools"
                className="text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
              >
                טכנולוגיות
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-[#E4E9EA] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#5A6061]/50 tracking-wider font-bold">
          <span>© {new Date().getFullYear()} קורס Cursor · יאיר ברק</span>
          <span className="flex items-center gap-1">
            נבנה עם AI
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </span>
        </div>
      </div>
    </footer>
  );
}
