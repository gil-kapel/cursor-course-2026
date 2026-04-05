import type { Transition, Variants } from 'framer-motion';

/**
 * Transition presets inspired by remotion-best-practices timing philosophy,
 * tuned for snappy in-browser reveals (0.4–0.6s).
 */
export const springSmooth: Transition = {
  type: 'spring',
  damping: 30,
  stiffness: 400,
};

export const springSnappy: Transition = {
  type: 'spring',
  damping: 20,
  stiffness: 500,
};

export const easeFade: Transition = {
  duration: 0.45,
  ease: [0.25, 0.1, 0.25, 1],
};

export const sectionViewport = {
  once: true,
  margin: '-8%' as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeFade,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeFade,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};
