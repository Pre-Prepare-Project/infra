"use client";

import { motion } from "framer-motion";
import { HOVER_EFFECTS } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const EFFECT_MAP = {
  lift: HOVER_EFFECTS.lift,
  scale: HOVER_EFFECTS.scale,
  subtle: HOVER_EFFECTS.subtle,
};

export default function HoverEffect({
  children,
  effect = "lift",
  className,
  as = "div",
  tap = false,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const hoverConfig = EFFECT_MAP[effect] || EFFECT_MAP.lift;

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...rest}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Tag
      className={cn(className)}
      whileHover={hoverConfig}
      whileTap={tap ? { scale: 0.98 } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
