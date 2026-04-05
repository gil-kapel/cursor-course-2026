'use client';

import { motion } from 'framer-motion';
import { Laptop, Users, Plug } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, sectionViewport } from '../motion';

const CARDS = [
  {
    Icon: Laptop,
    title: 'בניית סביבת עבודה חכמה',
    description:
      'הורדת Cursor, הגדרת מודלים, Git וטרמינל. סביבה מושלמת לפיתוח עם AI מהיום הראשון.',
  },
  {
    Icon: Users,
    title: 'שרשרת סוכנים מקצה לקצה',
    description:
      'PRD, ארכיטקטורה, UX, אבטחה, פיתוח, Code Review ו-QA. כל שלב עם הסקיל המתאים.',
    offset: true,
  },
  {
    Icon: Plug,
    title: 'כוחות-על עם MCP',
    description:
      'Notion, Figma, חיפוש אינטרנטי. חיבור הסוכן לכלים חיצוניים ופריסה ל-Vercel.',
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#F7F7F8]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-16 md:mb-24">
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] mb-6 text-[#303150]">
            מה תלמדו בקורס
          </h2>
          <p className="text-lg md:text-xl text-[#7E7F90] max-w-xl mx-auto">
            מסלול מעשי מאפס ועד פרויקטי גמר, בלי ידע קודם בתכנות.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {CARDS.map(({ Icon, title, description, offset }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`p-8 md:p-10 rounded-2xl bg-white shadow-[0_20px_40px_rgba(48,49,80,0.04)] flex flex-col gap-6 hover:translate-y-[-4px] transition-transform duration-500 ${
                offset ? 'md:translate-y-12' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8E8ED] flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#69ADFF]" strokeWidth={1.75} />
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-[#303150]">
                {title}
              </h3>
              <p className="text-[#7E7F90] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
