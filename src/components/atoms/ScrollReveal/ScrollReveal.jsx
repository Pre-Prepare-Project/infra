"use client";

import { useEffect, useRef, useState } from "react";
import { getScrollRevealVariant, DEFAULT_IN_VIEW_OPTIONS } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { loadFramerMotion, scheduleIdleTask } from "@/lib/loadFramerMotion";
import { cn } from "@/utils/cn";

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
  const prefersReducedMotion = useReducedMotion();
  const [motionApi, setMotionApi] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const idleId = scheduleIdleTask(() => {
      loadFramerMotion().then(setMotionApi);
    });

    return () => {
      if (typeof idleId === "number") {
        window.clearTimeout(idleId);
      } else if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !motionApi || !ref.current) {
      return undefined;
    }

    const { useInView } = motionApi;
    // useInView is a hook and cannot be called here — use IntersectionObserver instead.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: inViewOptions.root ?? null,
        rootMargin: inViewOptions.margin ?? "0px 0px -80px 0px",
        threshold: inViewOptions.amount ?? 0.15,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [prefersReducedMotion, motionApi, inViewOptions]);

  const StaticTag = as;

  if (prefersReducedMotion || !motionApi) {
    return (
      <StaticTag className={className} {...rest}>
        {children}
      </StaticTag>
    );
  }

  const { motion } = motionApi;
  const motionTags = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
    span: motion.span,
    li: motion.li,
    header: motion.header,
    ul: motion.ul,
  };
  const MotionTag = motionTags[as] || motion.div;
  const variants = getScrollRevealVariant(variant);

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
