'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, sectionViewport } from '../motion';

const FEATURES = [
  '28 שיעורי וידאו מעשיים בעברית',
  'שרשרת סוכנים מלאה: PRD עד Deploy',
  'סקילים ו-MCP — לא רק צ\'אט',
  'פרויקטי גמר ברמת פרודקשן',
  'עדכונים שוטפים לגרסאות חדשות',
];

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 md:py-32 px-6 bg-[#F2F4F4]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-[-0.03em] mb-4 text-[#2D3435]">
            מוכנים לשדרג את הפיתוח?
          </h2>
          <p className="text-[#5A6061] text-lg">
            הקורס מלמד את התהליך המלא — לא רק כלי, אלא שיטת עבודה שלמה עם AI.
          </p>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="p-8 md:p-12 rounded-2xl bg-[#0C0F0F] text-white shadow-[0_40px_80px_rgba(74,75,215,0.15)]"
        >
          <h3 className="font-headline text-2xl md:text-3xl font-bold mb-6">
            ממנהלי מוצר למפתחי AI
          </h3>
          <p className="text-[#9C9D9D] mb-8 max-w-md mx-auto">
            קורס מעשי בעברית למנהלי מוצר ומתחילים — מהקמת סביבת עבודה ועד פרויקטים
            מקצה לקצה.
          </p>

          <ul className="space-y-3 mb-10 text-right max-w-sm mx-auto">
            {FEATURES.map((feature, i) => (
              <motion.li
                key={i}
                variants={staggerItem}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  className="w-5 h-5 text-[#7073FF] shrink-0"
                  strokeWidth={1.75}
                />
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <Link
            href="/course"
            className="inline-block bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] py-4 px-12 rounded-full font-bold text-lg hover:translate-y-[-2px] transition-transform active:scale-95"
          >
            התחילו עכשיו
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
