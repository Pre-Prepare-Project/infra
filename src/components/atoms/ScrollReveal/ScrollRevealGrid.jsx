"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  DEFAULT_IN_VIEW_OPTIONS,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
};

export default function ScrollRevealGrid({
  children,
  className,
  stagger = 0.1,
  inViewOptions = DEFAULT_IN_VIEW_OPTIONS,
  as = "div",
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = MOTION_TAGS[as] || motion.div;

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...rest}>
        {children}
      </StaticTag>
    );
  }

  const containerVariants = {
    ...STAGGER_CONTAINER,
    visible: {
      ...STAGGER_CONTAINER.visible,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <MotionTag
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

const ITEM_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
};

export function ScrollRevealItem({ children, className, as = "div", ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = ITEM_TAGS[as] || motion.div;

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...rest}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag className={className} variants={STAGGER_ITEM} {...rest}>
      {children}
    </MotionTag>
  );
}
