'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer, sectionViewport } from '../motion';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  stars: number;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    quote:
      'הקורס הזה שינה את האופן שבו אני חושב על פיתוח. בניתי מערכת שלמה תוך ימים, עם שרשרת סוכנים שעושה את רוב העבודה.',
    name: 'דניאל ח.',
    role: 'מנהל מוצר, SaaS',
    avatarSrc: '/images/testimonials/daniel.png',
    stars: 5,
    tags: ['Skills', 'Composer'],
  },
  {
    quote:
      'בתור מישהי בלי רקע טכני, חששתי שזה לא בשבילי. אחרי מודול 1 כבר הרגשתי בנוח עם הטרמינל, ואחרי מודול 2 בניתי אפליקציה עם סוכנים.',
    name: 'מיכל ר.',
    role: 'מעצבת UX',
    avatarSrc: '/images/testimonials/michal.png',
    stars: 5,
    tags: ['מתחילים', 'UX'],
  },
  {
    quote:
      'החלק של ה-Skills פתח לי את הראש. במקום לכתוב את אותם פרומפטים כל פעם מחדש, עכשיו יש לי צוות סוכנים שעובד בשבילי.',
    name: 'אורי ג.',
    role: 'יזם, סטארטאפ',
    avatarSrc: '/images/testimonials/ori.png',
    stars: 5,
    tags: ['סוכנים', 'אוטומציה'],
  },
  {
    quote:
      'הגישה של הקורס, ללמוד דרך בנייה אמיתית ולא דרך שקפים, זה בדיוק מה שהייתי צריך. הפרויקט גמר שלי כבר באוויר.',
    name: 'נועם ש.',
    role: 'ראש צוות פיתוח',
    avatarSrc: '/images/testimonials/noam.png',
    stars: 5,
    tags: ['פרויקט גמר', 'Deploy'],
  },
];

const COUNT = testimonials.length;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function mod(i: number): number {
  return ((i % COUNT) + COUNT) % COUNT;
}

/**
 * Signed circular offset from `active`.
 * Positive = "next" direction, negative = "previous".
 */
function circularOffset(i: number, active: number): number {
  let diff = i - active;
  if (diff > COUNT / 2) diff -= COUNT;
  if (diff <= -COUNT / 2) diff += COUNT;
  return diff;
}

const spring = { type: 'spring' as const, damping: 24, stiffness: 120, mass: 1 };
const springSoft = { type: 'spring' as const, damping: 26, stiffness: 100, mass: 1 };

const AUTO_ROTATE_MS = 5000;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const [metrics, setMetrics] = useState({ cardStep: 384, cardHalf: 180 });

  useEffect(() => {
    const update = () => {
      const md = window.innerWidth >= 768;
      setMetrics({
        cardStep: md ? 384 : 296,
        cardHalf: md ? 180 : 140,
      });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const goTo = useCallback((i: number) => setActive(mod(i)), []);
  const goNext = useCallback(() => setActive((p) => mod(p + 1)), []);
  const goPrev = useCallback(() => setActive((p) => mod(p - 1)), []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_ROTATE_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F5F5F7] overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-7xl mx-auto"
      >
        {/* ---- Badge ---- */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E0E0E5] bg-white text-xs font-bold text-[#7E7F90] tracking-wider">
            הבוגרים שלנו
          </span>
        </motion.div>

        {/* ---- Heading ---- */}
        <motion.div variants={fadeUp} className="text-center mb-6">
          <h2 className="font-headline text-3xl md:text-[2.75rem] leading-tight font-extrabold tracking-[-0.03em] text-[#303150] mb-4">
            סיפורי הצלחה
          </h2>
          <p className="text-[#7E7F90] text-base md:text-lg max-w-lg mx-auto">
            אנשים אמיתיים שהתחילו בלי רקע טכני ובנו פרויקטים אמיתיים.
          </p>
        </motion.div>

        {/* ---- Avatar Row (fixed positions, active scales up) ---- */}
        <motion.div variants={fadeUp} className="flex justify-center mb-16 md:mb-24">
          <div className="flex items-end gap-5 md:gap-6">
            {testimonials.map((t, i) => {
              const isActive = i === active;

              return (
                <button
                  key={t.name}
                  onClick={() => goTo(i)}
                  className="flex flex-col items-center cursor-pointer group shrink-0 w-14 md:w-16"
                  aria-label={`המלצה של ${t.name}`}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 0.85,
                    }}
                    transition={spring}
                    className={`relative overflow-hidden rounded-full
                                w-14 h-14 md:w-16 md:h-16
                                ring-2 transition-shadow duration-300
                                ${isActive
                                  ? 'ring-[#69ADFF] shadow-[0_0_20px_rgba(105,173,255,0.3)]'
                                  : 'ring-[#E0E0E5] group-hover:ring-[#69ADFF]/40'
                                }`}
                  >
                    <Image
                      src={t.avatarSrc}
                      alt=""
                      fill
                      sizes="(max-width:768px) 56px, 64px"
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={spring}
                    className={`mt-2.5 whitespace-nowrap origin-top select-none
                                ${isActive
                                  ? 'text-xs md:text-sm font-bold text-[#303150]'
                                  : 'text-[0.65rem] md:text-xs font-medium text-[#9B9CAD]'
                                }`}
                  >
                    {t.name}
                  </motion.span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ---- Cards (side-by-side, center highlighted) ---- */}
        <motion.div variants={fadeUp} className="relative h-[400px] md:h-[360px]">
          {testimonials.map((t, i) => {
            const offset = circularOffset(i, active);
            const dist = Math.abs(offset);
            const isCenter = dist === 0;

            return (
              <motion.div
                key={t.name}
                animate={{
                  x: -offset * metrics.cardStep - metrics.cardHalf,
                  scale: isCenter ? 1 : 0.95,
                  opacity: dist > 1 ? 0 : isCenter ? 1 : 0.55,
                }}
                transition={springSoft}
                onClick={() => goTo(i)}
                className={`absolute top-0 left-1/2
                            w-[280px] md:w-[360px] rounded-2xl cursor-pointer
                            border transition-colors duration-300
                            ${isCenter
                              ? 'bg-white border-[#69ADFF]/30 shadow-[0_12px_40px_rgba(105,173,255,0.12)]'
                              : 'bg-white/80 border-[#EDEDF0] hover:border-[#D0D0D8]'
                            }`}
                style={{
                  zIndex: isCenter ? 10 : dist > 1 ? 0 : 1,
                  pointerEvents: dist > 1 ? 'none' : 'auto',
                }}
              >
                <div className="p-6 md:p-8">
                  {/* ---- Card Header: Avatar + Identity ---- */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`relative w-10 h-10 shrink-0 overflow-hidden rounded-full ring-2
                                  ${isCenter ? 'ring-[#69ADFF]/20' : 'ring-[#E0E0E5]'}`}
                    >
                      <Image
                        src={t.avatarSrc}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-headline font-bold text-[0.9rem] text-[#303150] leading-snug">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#9B9CAD] font-normal leading-snug">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* ---- Stars ---- */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]"
                        />
                      ))}
                    </div>
                    <span className="text-[0.65rem] font-bold text-[#9B9CAD]">
                      {t.stars}.0
                    </span>
                  </div>

                  {/* ---- Quote ---- */}
                  <blockquote className="text-[#303150] text-sm md:text-[0.95rem] leading-[1.6] pt-1 pb-6 border-t border-[#F0F0F3]">
                    <span className="block pt-5">
                      &ldquo;{t.quote}&rdquo;
                    </span>
                  </blockquote>

                  {/* ---- Tags ---- */}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#E8F0FE] border border-[#D4E4F7] text-[0.7rem] font-semibold text-[#4A6FA5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ---- Navigation Arrows ---- */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-3 mt-10 md:mt-14"
        >
          <button
            onClick={goPrev}
            aria-label="הקודם"
            className="w-11 h-11 rounded-full border border-[#E0E0E5] bg-white flex items-center justify-center
                       text-[#7E7F90] hover:text-[#303150] hover:border-[#D0D0D8] hover:shadow-md
                       transition-all duration-200 cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="הבא"
            className="w-11 h-11 rounded-full border border-[#E0E0E5] bg-white flex items-center justify-center
                       text-[#7E7F90] hover:text-[#303150] hover:border-[#D0D0D8] hover:shadow-md
                       transition-all duration-200 cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
