'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fadeUp, staggerContainer, sectionViewport, easeFade } from '../motion';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  stars: number;
  tags: string[];
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'הקורס הזה שינה את האופן שבו אני חושב על פיתוח. בניתי מערכת שלמה תוך ימים, עם שרשרת סוכנים שעושה את רוב העבודה.',
    name: 'דניאל ח.',
    role: 'מנהל מוצר, SaaS',
    initials: 'ד',
    stars: 5,
    tags: ['Skills', 'Composer'],
    gradient: 'from-[#69ADFF] to-[#4D8FE0]',
  },
  {
    quote:
      'בתור מישהי בלי רקע טכני, חששתי שזה לא בשבילי. אחרי מודול 1 כבר הרגשתי בנוח עם הטרמינל, ואחרי מודול 2 בניתי אפליקציה עם סוכנים.',
    name: 'מיכל ר.',
    role: 'מעצבת UX',
    initials: 'מ',
    stars: 5,
    tags: ['מתחילים', 'UX'],
    gradient: 'from-[#0DBACC] to-[#0A9DAD]',
  },
  {
    quote:
      'החלק של ה-Skills פתח לי את הראש. במקום לכתוב את אותם פרומפטים כל פעם מחדש, עכשיו יש לי צוות סוכנים שעובד בשבילי.',
    name: 'אורי ג.',
    role: 'יזם, סטארטאפ',
    initials: 'א',
    stars: 5,
    tags: ['סוכנים', 'אוטומציה'],
    gradient: 'from-[#74ACEF] to-[#5B93D6]',
  },
  {
    quote:
      'הגישה של הקורס, ללמוד דרך בנייה אמיתית ולא דרך שקפים, זה בדיוק מה שהייתי צריך. הפרויקט גמר שלי כבר באוויר.',
    name: 'נועם ש.',
    role: 'ראש צוות פיתוח',
    initials: 'נ',
    stars: 5,
    tags: ['פרויקט גמר', 'Deploy'],
    gradient: 'from-[#303150] to-[#464670]',
  },
];

const COUNT = testimonials.length;

/* ------------------------------------------------------------------ */
/*  Helpers: circular index arithmetic                                 */
/* ------------------------------------------------------------------ */

/** Wraps i into [0, COUNT) */
function mod(i: number): number {
  return ((i % COUNT) + COUNT) % COUNT;
}

/**
 * Returns the 3 visible indices: [left, center, right].
 * "center" is the active/focused card.
 */
function getVisibleIndices(active: number): [number, number, number] {
  return [mod(active - 1), mod(active), mod(active + 1)];
}

/* ------------------------------------------------------------------ */
/*  Card positions for the 3-card carousel                             */
/* ------------------------------------------------------------------ */

type Slot = 'left' | 'center' | 'right' | 'exit';

const slotVariants: Record<Slot, { x: string; scale: number; opacity: number; zIndex: number }> = {
  left: { x: '75%', scale: 0.88, opacity: 0.5, zIndex: 1 },
  center: { x: '0%', scale: 1, opacity: 1, zIndex: 10 },
  right: { x: '-75%', scale: 0.88, opacity: 0.5, zIndex: 1 },
  exit: { x: '0%', scale: 0.8, opacity: 0, zIndex: 0 },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function TestimonialSection() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => setActive(mod(index));
  const goNext = () => setActive((p) => mod(p + 1));
  const goPrev = () => setActive((p) => mod(p - 1));

  const [leftIdx, centerIdx, rightIdx] = getVisibleIndices(active);

  /** Determine which slot a given real index occupies */
  function slotFor(realIndex: number): Slot {
    if (realIndex === centerIdx) return 'center';
    if (realIndex === leftIdx) return 'left';
    if (realIndex === rightIdx) return 'right';
    return 'exit';
  }

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

        {/* ---- Avatar Row ---- */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-3 md:gap-4 mb-14 md:mb-20"
        >
          {testimonials.map((t, i) => {
            const isActive = i === mod(active);
            return (
              <button
                key={t.name}
                onClick={() => goTo(i)}
                className="relative cursor-pointer group"
                aria-label={`המלצה של ${t.name}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.78,
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{ type: 'spring', damping: 22, stiffness: 120, mass: 1 }}
                  className={`rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center
                              w-12 h-12 md:w-14 md:h-14
                              ring-2 transition-shadow duration-300
                              ${isActive
                                ? 'ring-[#69ADFF] shadow-[0_0_20px_rgba(105,173,255,0.3)]'
                                : 'ring-[#E0E0E5] group-hover:ring-[#69ADFF]/40'
                              }`}
                >
                  <span className="text-white font-bold text-sm md:text-base select-none">
                    {t.initials}
                  </span>
                </motion.div>
                {/* Name label under active avatar */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={easeFade}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] font-bold text-[#303150] whitespace-nowrap"
                    >
                      {t.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </motion.div>

        {/* ---- Carousel ---- */}
        <motion.div variants={fadeUp} className="relative h-[340px] md:h-[300px]">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, i) => {
              const slot = slotFor(i);
              if (slot === 'exit') return null;
              const v = slotVariants[slot];
              const isCenter = slot === 'center';

              return (
                <motion.div
                  key={t.name}
                  layout
                  initial={slotVariants.exit}
                  animate={{
                    x: v.x,
                    scale: v.scale,
                    opacity: v.opacity,
                    zIndex: v.zIndex,
                  }}
                  exit={slotVariants.exit}
                  transition={{ type: 'spring', damping: 24, stiffness: 100, mass: 1.2 }}
                  onClick={() => goTo(i)}
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-[320px] md:w-[420px]
                              rounded-2xl p-6 md:p-8 cursor-pointer
                              border transition-colors duration-300
                              ${isCenter
                                ? 'bg-white border-[#69ADFF]/30 shadow-[0_12px_40px_rgba(105,173,255,0.12)]'
                                : 'bg-white/80 border-[#EDEDF0] hover:border-[#D0D0D8]'
                              }`}
                  style={{ zIndex: v.zIndex }}
                >
                  {/* Author row */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center ring-2
                                  ${isCenter ? 'ring-[#69ADFF]/20' : 'ring-[#E0E0E5]'}`}
                    >
                      <span className="text-white font-bold text-sm">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-headline font-bold text-sm text-[#303150]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#7E7F90]">{t.role}</p>
                    </div>
                  </div>

                  {/* Stars + rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 text-[#F5A623] fill-[#F5A623]"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#7E7F90]">
                      {t.stars}.0
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#303150] text-sm md:text-[0.95rem] leading-relaxed mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#EDEDF0] text-[0.7rem] font-semibold text-[#7E7F90]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
