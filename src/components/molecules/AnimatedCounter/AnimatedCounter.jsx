"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { DURATION, parseCounterValue } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/utils/cn";

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = DURATION.counter,
  inViewOptions = { once: true, margin: "-50px" },
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const prefersReducedMotion = useReducedMotion();
  const target = parseCounterValue(value);
  const [display, setDisplay] = useState(target ?? value);
  const canAnimate = target !== null && !prefersReducedMotion;

  useEffect(() => {
    if (!canAnimate) {
      setDisplay(target ?? value);
      return undefined;
    }

    if (!isInView) {
      setDisplay(0);
      return undefined;
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [canAnimate, isInView, target, value, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {canAnimate ? display : value}
      {suffix}
    </span>
  );
}
