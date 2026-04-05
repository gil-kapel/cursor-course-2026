'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';
import { springSmooth } from '../motion';
import GoogleIcon from '@/components/icons/GoogleIcon';

const NAV_LINKS = [
  { label: 'סילבוס', href: '#syllabus' },
  { label: 'הכלים', href: '#tools' },
  { label: 'מחירים', href: '#pricing' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springSmooth}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-[#F7F7F8] shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-white border-b border-[#F7F7F8]'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-2.5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#69ADFF] to-[#74ACEF] flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[#303150] font-headline">
            קורס Cursor
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold tracking-tight text-[#7E7F90] hover:text-[#303150] transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#7E7F90] font-semibold text-sm transition-colors duration-200 hover:text-[#303150] hover:bg-[#F7F7F8]"
          >
            כניסה
            <GoogleIcon size={14} />
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-[#7E7F90] hover:text-[#303150] transition-colors cursor-pointer"
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
            className="mx-4 mb-2 p-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg md:hidden space-y-1 border border-[#F7F7F8]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 px-4 rounded-xl font-semibold text-[#7E7F90] hover:text-[#303150] hover:bg-[#F7F7F8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-[#7E7F90] hover:text-[#303150] hover:bg-[#F7F7F8] transition-colors"
            >
              כניסה
              <GoogleIcon size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
