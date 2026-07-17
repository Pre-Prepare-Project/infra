"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  DEFAULT_IN_VIEW_OPTIONS,
  getScrollRevealVariant,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  li: motion.li,
  header: motion.header,
  ul: motion.ul,
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  as = "div",
  inViewOptions = DEFAULT_IN_VIEW_OPTIONS,
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[as] || motion.div;
  const variants = getScrollRevealVariant(variant);

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...rest}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
