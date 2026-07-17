"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Logo from "@/components/atoms/Logo/Logo";
import Container from "@/components/atoms/Container/Container";
import Button from "@/components/atoms/Button/Button";
import DesktopNav from "@/components/organisms/DesktopNav/DesktopNav";
import { useMediaQuery, useScrollLock } from "@/hooks/useMediaQuery";
import { cn } from "@/utils/cn";
import styles from "./Header.module.scss";

const NavigationDrawer = dynamic(
  () => import("@/components/organisms/NavigationDrawer/NavigationDrawer"),
  { ssr: false },
);

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");

  useScrollLock(isDrawerOpen && !isDesktop);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDesktop) {
      setIsDrawerOpen(false);
    }
  }, [isDesktop]);

  const toggleDrawer = () => {
    setIsDrawerOpen((open) => !open);
  };

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <Container className={styles.inner}>
        <Logo className={styles.logo} />

        <DesktopNav />

        <div className={styles.actions}>
          <Button variant="accent" size="sm" href="/contact" className={styles.cta}>
            Contact Us
          </Button>

          <button
            type="button"
            className={cn(styles.menuToggle, isDrawerOpen && styles.menuOpen)}
            aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isDrawerOpen}
            aria-controls="navigation-drawer"
            onClick={toggleDrawer}
          >
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
            <span className={styles.menuBar} />
          </button>
        </div>
      </Container>

      <NavigationDrawer
        open={isDrawerOpen && !isDesktop}
        onClose={() => setIsDrawerOpen(false)}
        variant={isTablet ? "tablet" : "mobile"}
        pathname={pathname}
      />
    </header>
  );
}
