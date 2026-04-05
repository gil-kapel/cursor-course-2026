'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem, scaleIn, springSmooth } from '../motion';

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Right column (RTL first) — Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 text-right"
        >
          <motion.span
            variants={staggerItem}
            className="inline-block px-4 py-1.5 mb-8 bg-[#E4E9EA] text-[#4A4BD7] font-medium rounded-full text-sm tracking-wider"
          >
            קורס מעשי בעברית · 28 שיעורים · 5 מודולים
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#2D3435] mb-8 leading-[0.95]"
          >
            ממנהלי מוצר
            <br />
            למפתחי <span className="text-[#4A4BD7]">AI</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-[#5A6061] max-w-xl mb-12 leading-relaxed"
          >
            שליטה מוחלטת ב-Cursor, סקילים וכלי AI — מהקמת סביבת עבודה, דרך שרשרת
            סוכנים מלאה, ועד פריסה לענן. שדרגו את הפרודוקטיביות שלכם עם בינה מלאכותית.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-start items-start"
          >
            <Link
              href="/course"
              className="bg-gradient-to-br from-[#4A4BD7] to-[#7073FF] px-10 py-4 sm:py-5 rounded-full text-white text-lg font-bold shadow-[0_20px_40px_rgba(74,75,215,0.3)] hover:translate-y-[-2px] transition-transform active:scale-95"
            >
              התחילו את הקורס
            </Link>
            <Link
              href="/setup"
              className="bg-[#DDE4E5] px-10 py-4 sm:py-5 rounded-full text-[#2D3435] text-lg font-semibold hover:bg-[#E4E9EA] transition-colors"
            >
              הכנה לפני הקורס
            </Link>
          </motion.div>
        </motion.div>

        {/* Left column — 3D Video Player */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] bg-[#1C1C2E] w-full max-w-lg"
            animate={
              reducedMotion
                ? {}
                : { rotateY: [2, -2, 2], rotateX: [-1, 1, -1] }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2A2A3E]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="flex-1 mx-3 h-5 rounded bg-[#1C1C2E]/60" />
            </div>
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full block"
            >
              <source src="/area.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
