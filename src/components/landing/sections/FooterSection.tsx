import Link from 'next/link';
import { GraduationCap, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#F7F7F8] w-full pt-16 md:pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="absolute -top-8 left-0 w-full text-center pointer-events-none select-none">
          <span className="text-[80px] md:text-[200px] font-extrabold tracking-tighter text-[#E8E8ED] font-headline leading-none">
            CURSOR
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          <div className="flex flex-col gap-6 items-start">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#69ADFF] to-[#74ACEF] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#303150] font-headline">
                קורס Cursor
              </span>
            </Link>
            <p className="max-w-xs text-[#7E7F90] text-sm text-right leading-relaxed">
              קורס מעשי בעברית למנהלי מוצר ומתחילים שרוצים לעבוד עם AI בצורה
              מקצועית.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-extrabold text-xs uppercase tracking-widest text-[#7E7F90]/50">
                ניווט
              </span>
              <Link
                href="/setup"
                className="text-[#7E7F90] hover:text-[#69ADFF] transition-colors text-sm"
              >
                הכנה לקורס
              </Link>
              <Link
                href="/login"
                className="text-[#7E7F90] hover:text-[#69ADFF] transition-colors text-sm"
              >
                כניסה לקורס
              </Link>
              <Link
                href="/login"
                className="text-[#7E7F90] hover:text-[#69ADFF] transition-colors text-sm"
              >
                התחברות
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-extrabold text-xs uppercase tracking-widest text-[#7E7F90]/50">
                קישורים
              </span>
              <a
                href="#syllabus"
                className="text-[#7E7F90] hover:text-[#69ADFF] transition-colors text-sm"
              >
                סילבוס
              </a>
              <a
                href="#tools"
                className="text-[#7E7F90] hover:text-[#69ADFF] transition-colors text-sm"
              >
                טכנולוגיות
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-[#E8E8ED] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7E7F90]/50 tracking-wider font-bold">
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
