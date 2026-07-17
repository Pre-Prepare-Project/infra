export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  spring: { type: "spring", stiffness: 400, damping: 30 },
  softSpring: { type: "spring", stiffness: 260, damping: 24 },
};

export const DURATION = {
  fast: 0.2,
  base: 0.35,
  slow: 0.5,
  counter: 2,
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASING.smooth },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: DURATION.fast, ease: EASING.smooth },
  },
};

export const SCROLL_REVEAL = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.slow, ease: EASING.smooth },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: DURATION.base, ease: EASING.smooth },
    },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.slow, ease: EASING.smooth },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.slow, ease: EASING.smooth },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.slow, ease: EASING.smooth },
    },
  },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASING.smooth },
  },
};

export const HOVER_EFFECTS = {
  lift: {
    y: -6,
    transition: EASING.spring,
  },
  scale: {
    scale: 1.03,
    y: -4,
    transition: EASING.softSpring,
  },
  subtle: {
    y: -2,
    transition: { duration: DURATION.fast },
  },
};

export const DEFAULT_IN_VIEW_OPTIONS = {
  once: true,
  margin: "-80px 0px -80px 0px",
  amount: 0.2,
};

export function getScrollRevealVariant(variant = "fadeUp") {
  return SCROLL_REVEAL[variant] || SCROLL_REVEAL.fadeUp;
}

export function isAnimatableNumber(value) {
  return typeof value === "number" || /^\d+$/.test(String(value).trim());
}

export function parseCounterValue(value) {
  const trimmed = String(value).trim();
  if (!/^\d+$/.test(trimmed)) {
    return null;
  }
  return parseInt(trimmed, 10);
}
