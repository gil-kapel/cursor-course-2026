'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { springSmooth } from '../motion';

const NAV_LINKS = [
  { label: 'סילבוס', href: '#syllabus' },
  { label: 'הכלים', href: '#tools' },
  { label: 'למי הקורס', href: '#cta' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springSmooth}
      className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-4xl px-4"
    >
      <nav className="flex items-center justify-between px-6 py-2.5 bg-white/60 backdrop-blur-2xl rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#2D3435] font-headline">
            קורס Cursor
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold tracking-tight text-[#5A6061] hover:text-[#4A4BD7] transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/course"
            className="hidden sm:inline-flex bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] px-6 py-2 rounded-full text-white font-semibold text-sm hover:translate-y-[-2px] transition-transform active:scale-95 shadow-lg"
          >
            כניסה לקורס
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-[#5A6061] hover:text-[#4A4BD7] transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-2 mx-2 p-4 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-lg md:hidden space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 rounded-xl font-semibold text-[#5A6061] hover:text-[#4A4BD7] hover:bg-[#F2F4F4] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/course"
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 rounded-xl font-bold text-[#4A4BD7] bg-[#4A4BD7]/5"
            >
              כניסה לקורס
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
