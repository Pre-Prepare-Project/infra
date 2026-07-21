"use client";

import { useEffect, useRef, useState } from "react";
import {
  DEFAULT_IN_VIEW_OPTIONS,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { loadFramerMotion, scheduleIdleTask } from "@/lib/loadFramerMotion";
import { cn } from "@/utils/cn";

const STATIC_TAGS = {
  div: "div",
  section: "section",
  ul: "ul",
  ol: "ol",
};

const ITEM_STATIC_TAGS = {
  div: "div",
  li: "li",
  article: "article",
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

  const StaticTag = STATIC_TAGS[as] || "div";

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
    ul: motion.ul,
    ol: motion.ol,
  };
  const MotionTag = motionTags[as] || motion.div;
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

export function ScrollRevealItem({ children, className, as = "div", ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const [motionApi, setMotionApi] = useState(null);
  const StaticTag = ITEM_STATIC_TAGS[as] || "div";

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
    li: motion.li,
    article: motion.article,
  };
  const MotionTag = motionTags[as] || motion.div;

  return (
    <MotionTag className={className} variants={STAGGER_ITEM} {...rest}>
      {children}
    </MotionTag>
  );
}
