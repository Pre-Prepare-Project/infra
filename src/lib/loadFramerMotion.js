let framerMotionPromise;

export function loadFramerMotion() {
  if (!framerMotionPromise) {
    framerMotionPromise = import("framer-motion");
  }

  return framerMotionPromise;
}

export function scheduleIdleTask(callback) {
  if (typeof window === "undefined") {
    return undefined;
  }

  if ("requestIdleCallback" in window) {
    return window.requestIdleCallback(callback, { timeout: 2000 });
  }

  return window.setTimeout(callback, 1);
}
