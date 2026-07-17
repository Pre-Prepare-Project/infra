"use client";

import { cn } from "@/utils/cn";
import useLazyLoad from "@/hooks/useLazyLoad";
import styles from "./LazyLoad.module.scss";

export default function LazyLoad({
  children,
  className,
  minHeight = 120,
  rootMargin = "200px",
  fallback = null,
}) {
  const { ref, isVisible } = useLazyLoad({ rootMargin });

  return (
    <div
      ref={ref}
      className={cn(styles.wrapper, className)}
      style={{ minHeight: isVisible ? undefined : minHeight }}
    >
      {isVisible ? children : fallback}
    </div>
  );
}
