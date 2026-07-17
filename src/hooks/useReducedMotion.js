"use client";

import { useReducedMotion } from "framer-motion";

export { useReducedMotion };

export function useAnimationEnabled() {
  const prefersReducedMotion = useReducedMotion();
  return !prefersReducedMotion;
}
