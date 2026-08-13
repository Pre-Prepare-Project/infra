"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";
import styles from "./AnimatedIcon.module.scss";

const SIZE_CLASS = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
  xl: styles.xl,
};

const VARIANT_CLASS = {
  accent: styles.accent,
  primary: styles.primary,
  solid: styles.solid,
  solidAccent: styles.solidAccent,
  muted: styles.muted,
  coral: styles.coral,
  blue: styles.blue,
  teal: styles.teal,
  amber: styles.amber,
  violet: styles.violet,
  rainbow: styles.rainbow,
};

const SHAPE_CLASS = {
  round: styles.round,
  soft: styles.soft,
  square: styles.square,
};

const ANIMATION_CLASS = {
  none: "",
  float: styles.float,
  pulse: styles.pulse,
  bounce: styles.bounce,
  glow: styles.glow,
  spinSlow: styles.spinSlow,
};

const DELAY_CLASS = [
  "",
  styles.delay1,
  styles.delay2,
  styles.delay3,
  styles.delay4,
  styles.delay5,
];

const COLOR_CYCLE = ["coral", "blue", "teal", "amber", "violet", "rainbow"];

export default function AnimatedIcon({
  icon: Icon,
  size = "md",
  variant = "accent",
  shape = "soft",
  animation = "float",
  delay = 0,
  colorIndex,
  interactive = true,
  className,
  iconClassName,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  if (!Icon) return null;

  const colorVariant =
    typeof colorIndex === "number"
      ? COLOR_CYCLE[colorIndex % COLOR_CYCLE.length]
      : variant;

  const classes = cn(
    styles.wrap,
    SIZE_CLASS[size],
    VARIANT_CLASS[colorVariant] || VARIANT_CLASS.accent,
    SHAPE_CLASS[shape],
    !prefersReducedMotion && ANIMATION_CLASS[animation],
    !prefersReducedMotion && DELAY_CLASS[delay],
    className
  );

  const glyph = (
    <span className={cn(styles.icon, iconClassName)}>
      <Icon />
    </span>
  );

  if (prefersReducedMotion || !interactive) {
    return (
      <span className={classes} aria-hidden="true" {...rest}>
        {glyph}
      </span>
    );
  }

  return (
    <span className={classes} aria-hidden="true" {...rest}>
      <motion.span
        className={styles.hit}
        whileHover={{ scale: 1.1, rotate: -8 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        {glyph}
      </motion.span>
    </span>
  );
}
