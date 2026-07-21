"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PAGE_TRANSITION } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { loadFramerMotion, scheduleIdleTask } from "@/lib/loadFramerMotion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [motionApi, setMotionApi] = useState(null);

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
    return children;
  }

  const { AnimatePresence, motion } = motionApi;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={PAGE_TRANSITION.initial}
        animate={PAGE_TRANSITION.animate}
        exit={PAGE_TRANSITION.exit}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
