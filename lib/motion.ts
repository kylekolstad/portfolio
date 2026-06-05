import type { Variants } from "motion/react";

export const appleEase = [0.22, 1, 0.36, 1] as const;

export const smoothSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 34,
  mass: 0.78,
};

export const crispSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 36,
  mass: 0.72,
};

export const sectionViewport = {
  once: true,
  amount: 0.01,
  margin: "0px",
} as const;

export const introContainer = (delayChildren = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren,
    },
  },
});

export const contentGrid = (delayChildren = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren,
    },
  },
});

export const terminalLabel: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: appleEase,
      opacity: { duration: 0.56, ease: "easeOut" },
    },
  },
};

export const headingReveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.92,
      ease: appleEase,
      opacity: { duration: 0.72, ease: "easeOut" },
    },
  },
};

export const copyReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.82,
      ease: appleEase,
      opacity: { duration: 0.66, ease: "easeOut" },
    },
  },
};

export const actionReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: appleEase,
      opacity: { duration: 0.58, ease: "easeOut" },
    },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.975 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.86,
      ease: appleEase,
      opacity: { duration: 0.68, ease: "easeOut" },
    },
  },
};

export const softCardReveal: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.78,
      ease: appleEase,
      opacity: { duration: 0.62, ease: "easeOut" },
    },
  },
};

export const stablePanelReveal: Variants = {
  hidden: { y: 28 },
  visible: {
    y: 0,
  },
};

export const stableLabelReveal: Variants = {
  hidden: { y: 14 },
  visible: {
    y: 0,
    transition: {
      duration: 0.62,
      ease: appleEase,
    },
  },
};

export const stableHeadingReveal: Variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: {
      duration: 0.78,
      ease: appleEase,
    },
  },
};

export const stableCopyReveal: Variants = {
  hidden: { y: 18 },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: appleEase,
    },
  },
};

export const stableCardReveal: Variants = {
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: {
      duration: 0.72,
      ease: appleEase,
    },
  },
};

export const panelReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const panelTransition = {
  duration: 0.9,
  ease: appleEase,
  opacity: { duration: 0.72, ease: "easeOut" },
};
