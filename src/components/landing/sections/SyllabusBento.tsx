'use client';

import { motion } from 'framer-motion';
import { Users, Laptop, Plug, Rocket, Trophy, MessageSquare } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, sectionViewport } from '../motion';

export default function SyllabusBento() {
  return (
    <section id="syllabus" className="py-24 md:py-32 px-6 bg-[#F9F9F9]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4 text-[#2D3435]">
            סילבוס הקורס
          </h2>
          <p className="text-[#5A6061] text-lg">
            צלילת עומק לתוך פיתוח מבוסס AI — מהבסיס ועד פרויקטי גמר.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[240px]">
          {/* Large card: Module 2 — Skills */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-8 md:row-span-2 rounded-2xl bg-white p-8 overflow-hidden relative group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#4A4BD7]" strokeWidth={1.75} />
                  <span className="text-xs font-bold text-[#5A6061] tracking-wider">
                    מודול 2 · 13 שיעורים
                  </span>
                </div>
                <h3 className="font-headline text-2xl md:text-3xl font-extrabold mb-4 text-[#2D3435]">
                  הסוכנות שלך: פיתוח מבוסס Skills
                </h3>
                <p className="text-[#5A6061] max-w-sm mb-6">
                  מ-PRD ועד Code Review — שרשרת סוכנים מלאה עם סקילים ייעודיים לכל
                  שלב בתהליך הפיתוח.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PRD', 'ארכיטקטורה', 'UX', 'אבטחה', 'Debug', 'QA'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#EBEEEF] text-xs font-bold rounded-full text-[#5A6061]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gradient-to-br from-[#4A4BD7]/10 to-[#7073FF]/10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-110" />
          </motion.div>

          {/* Module 1 — Intro */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-4 rounded-2xl bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] p-8 text-white relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <Laptop className="w-4 h-4 opacity-80" strokeWidth={1.75} />
              <span className="text-xs font-bold opacity-80 tracking-wider">
                מודול 1 · 5 שיעורים
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-2">
              מבוא ובניית סביבת העבודה
            </h3>
            <p className="text-sm opacity-80">
              Cursor, מנויים, Git, טרמינל וקונטקסט — הכל מוכן לפיתוח.
            </p>
            <MessageSquare
              className="absolute bottom-4 left-4 w-16 h-16 opacity-10"
              strokeWidth={1}
            />
          </motion.div>

          {/* Module 3 — MCP */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-4 rounded-2xl bg-[#EBEEEF] p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <Plug className="w-4 h-4 text-[#4A4BD7]" strokeWidth={1.75} />
              <span className="text-xs font-bold text-[#5A6061] tracking-wider">
                מודול 3 · 4 שיעורים
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-[#2D3435] mb-2">
              כוחות-על עם MCP
            </h3>
            <p className="text-sm text-[#5A6061]">
              Notion, Figma, חיפוש ו-Fetch — חיבור הסוכן לעולם החיצוני.
            </p>
            <div className="absolute -bottom-4 left-4 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
          </motion.div>

          {/* Bottom bar: Modules 4 + 5 */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-12 rounded-2xl bg-[#F2F4F4] p-8 flex flex-col md:flex-row items-center justify-between overflow-hidden"
          >
            <div className="max-w-md">
              <h3 className="font-headline text-xl md:text-2xl font-extrabold mb-2 text-[#2D3435]">
                אינטגרציות, פריסה ופרויקטי גמר
              </h3>
              <p className="text-[#5A6061]">
                Supabase, GitHub, Vercel — ושלושה פרויקטים מלאים מאפס עד פרודקשן.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_12px_rgba(45,52,53,0.06)] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#4A4BD7]" strokeWidth={1.75} />
              </div>
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_12px_rgba(45,52,53,0.06)] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-[#4A4BD7]" strokeWidth={1.75} />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
