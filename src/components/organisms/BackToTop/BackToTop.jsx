"use client";

import { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { cn } from "@/utils/cn";
import styles from "./BackToTop.module.scss";

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={cn(styles.button, isVisible && styles.visible)}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUpOutlined aria-hidden="true" />
    </button>
  );
}
