'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Users } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem, sectionViewport } from '../motion';

/* ------------------------------------------------------------------ */
/*  Plans                                                              */
/* ------------------------------------------------------------------ */

interface Plan {
  icon: typeof Zap;
  name: string;
  tagline: string;
  price: string;
  priceSuffix: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    icon: Zap,
    name: 'מנוי חודשי',
    tagline: 'גישה לכל הקורסים, היום ובעתיד.',
    price: '₪97',
    priceSuffix: '/ חודש',
    features: [
      'גישה מלאה לקורס Cursor',
      'כל הקורסים שיעלו בעתיד',
      'עדכונים שוטפים לגרסאות חדשות',
      'קהילת לומדים',
      'ביטול בכל רגע',
    ],
    cta: 'התחילו עם מנוי',
    href: '/login',
    highlighted: false,
  },
  {
    icon: Crown,
    name: 'קנייה חד-פעמית',
    tagline: 'גישה לצמיתות לקורס Cursor.',
    price: '₪379',
    priceSuffix: 'תשלום אחד',
    features: [
      'גישה לצמיתות לקורס Cursor',
      '28 שיעורי וידאו מעשיים',
      'שרשרת סוכנים מלאה: PRD עד Deploy',
      'סקילים, MCP ופרויקטי גמר',
      'עדכונים שוטפים לקורס',
    ],
    cta: 'קנו את הקורס',
    href: '/login',
    highlighted: true,
    badge: 'הכי פופולרי',
  },
  {
    icon: Users,
    name: 'שיעורים פרטיים',
    tagline: 'Cursor או Claude Code, 1 על 1 עם המייסדים.',
    price: 'בואו נדבר',
    priceSuffix: '',
    features: [
      'שיעור פרטי עם מייסדי האתר',
      'Cursor או Claude Code, לבחירתכם',
      'תוכן מותאם לצרכים שלכם',
      'שאלות ותשובות בזמן אמת',
      'ליווי אישי בפרויקט',
    ],
    cta: 'צרו קשר',
    href: 'mailto:yair@example.com',
    highlighted: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function CtaSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 bg-[#F5F5F7]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        className="max-w-6xl mx-auto"
      >
        {/* ---- Badge ---- */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E0E0E5] bg-white text-xs font-bold text-[#7E7F90] tracking-wider">
            תכניות ומחירים
          </span>
        </motion.div>

        {/* ---- Heading ---- */}
        <motion.div variants={fadeUp} className="text-center mb-14 md:mb-20">
          <h2 className="font-headline text-3xl md:text-[2.75rem] leading-tight font-extrabold tracking-[-0.03em] text-[#303150] mb-4">
            בחרו את המסלול שלכם
          </h2>
          <p className="text-[#7E7F90] text-lg max-w-md mx-auto">
            ללמוד, לבנות ולשדרג בקצב שלכם.
          </p>
        </motion.div>

        {/* ---- Cards ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                className={`relative flex flex-col rounded-2xl p-7 md:p-8 border transition-all duration-300
                  ${plan.highlighted
                    ? 'bg-[#303150] text-white border-[#303150] shadow-[0_20px_60px_rgba(48,49,80,0.25)] md:-my-4 md:py-10'
                    : 'bg-white border-[#EDEDF0] hover:border-[#D0D0D8] hover:shadow-[0_8px_24px_rgba(48,49,80,0.07)]'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-[#69ADFF] text-white text-xs font-bold shadow-[0_4px_12px_rgba(105,173,255,0.3)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Icon + Name */}
                <div className="mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4
                      ${plan.highlighted
                        ? 'bg-white/10'
                        : 'bg-[#F5F5F7] border border-[#EDEDF0]'
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${plan.highlighted ? 'text-[#69ADFF]' : 'text-[#69ADFF]'}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className={`font-headline text-xl font-bold mb-1
                      ${plan.highlighted ? 'text-white' : 'text-[#303150]'}`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${plan.highlighted ? 'text-white/50' : 'text-[#7E7F90]'}`}
                  >
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`font-headline text-4xl md:text-[2.5rem] font-extrabold tracking-tight
                      ${plan.highlighted ? 'text-white' : 'text-[#303150]'}`}
                  >
                    {plan.price}
                  </span>
                  {plan.priceSuffix && (
                    <span
                      className={`text-sm font-medium mr-2
                        ${plan.highlighted ? 'text-white/40' : 'text-[#7E7F90]'}`}
                    >
                      {plan.priceSuffix}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlighted ? 'text-[#69ADFF]' : 'text-[#0DBACC]'}`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm leading-snug
                          ${plan.highlighted ? 'text-white/75' : 'text-[#7E7F90]'}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`block text-center py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.97]
                    ${plan.highlighted
                      ? 'bg-white text-[#303150] hover:bg-[#F5F5F7] shadow-[0_4px_12px_rgba(255,255,255,0.15)]'
                      : 'bg-[#303150] text-white hover:bg-[#3D3D5C]'
                    }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
