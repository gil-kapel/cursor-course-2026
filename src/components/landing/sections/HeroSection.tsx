'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { staggerContainer, staggerItem, fadeUp } from '../motion';
import GoogleIcon from '@/components/icons/GoogleIcon';

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-20 md:pb-28 px-6 overflow-hidden bg-[#F5F5F7]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(105,173,255,0.06) 0%, transparent 60%), ' +
            'radial-gradient(ellipse 60% 40% at 80% 100%, rgba(13,186,204,0.04) 0%, transparent 50%)',
        }}
      />
      <div className="landing-hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex px-5 py-2 mb-8 border border-[#BDBDCB]/30 bg-white/50 backdrop-blur-sm text-[#303150] font-semibold rounded-full text-sm tracking-wide"
          >
            קורס מעשי בעברית • 28 שיעורים • 5 מודולים
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#303150] mb-6 leading-tight"
          >
            הפכו ממנהלי מוצר
            <br className="hidden sm:block" />
            למפתחי <span className="text-[#69ADFF]">AI</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-[#7E7F90] font-normal leading-[1.55] max-w-2xl mx-auto mb-10"
          >
            שליטה מוחלטת ב-Cursor ופיתוח באמצעות AI. מקונפיגורציית סביבת
            העבודה, דרך בניית סוכנים חכמים, ועד פריסה מלאה לענן. שדרגו את
            הפרודוקטיביות שלכם לשיאים חדשים.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/login"
              className="inline-flex items-center gap-3 bg-[#303150] px-7 py-3.5 rounded-xl text-white text-base font-bold transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:bg-[#1a1a30] hover:shadow-[0_8px_28px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:scale-[0.97]"
            >
              הצטרפו לקורס
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                <GoogleIcon size={14} />
              </span>
            </Link>
            <a
              href="#syllabus"
              className="inline-flex items-center gap-2.5 bg-transparent border border-[#303150]/20 px-7 py-3.5 rounded-xl text-[#303150] text-base font-semibold transition-all duration-200 hover:bg-[#303150]/8 hover:border-[#303150]/40 hover:-translate-y-0.5 active:scale-[0.97]"
            >
              צפו בסילבוס
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 md:mt-20 w-full max-w-5xl mx-auto"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] bg-[#1C1C2E] w-full"
            animate={
              reducedMotion
                ? {}
                : { rotateY: [1.5, -1.5, 1.5], rotateX: [-0.5, 0.5, -0.5] }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#2A2A3E]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="flex-1 mx-3 h-5 rounded bg-[#1C1C2E]/60" />
            </div>
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
