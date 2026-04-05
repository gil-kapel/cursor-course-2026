'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, sectionViewport } from '../motion';

export default function TestimonialSection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-[#F9F9F9]">
      <div className="absolute -top-10 right-10 opacity-[0.03] pointer-events-none">
        <div className="bg-[#EBEEEF] p-8 rounded-2xl w-64 h-48 -rotate-3" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-[0.03] pointer-events-none">
        <div className="bg-[#EBEEEF] p-8 rounded-2xl w-64 h-48 rotate-6" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <div className="mb-8 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-[#4A4BD7] fill-[#4A4BD7]"
            />
          ))}
        </div>

        <blockquote className="font-headline text-xl md:text-3xl lg:text-4xl font-bold leading-tight mb-10 text-[#2D3435]">
          &ldquo;הקורס הזה שינה את האופן שבו אני חושב על פיתוח. בניתי מערכת שלמה
          תוך ימים — עם שרשרת סוכנים שעושה את רוב העבודה.&rdquo;
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white font-bold text-lg">ד</span>
          </div>
          <p className="font-headline font-bold text-lg text-[#2D3435]">
            דניאל ח.
          </p>
          <p className="text-[#5A6061] text-sm">מנהל מוצר</p>
        </div>
      </motion.div>
    </section>
  );
}
