"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/components/molecules/NavLink/NavLink";
import MegaMenu from "@/components/molecules/MegaMenu/MegaMenu";
import { MAIN_NAV, MEGA_MENUS } from "@/constants/navigation";
import styles from "./DesktopNav.module.scss";

const CLOSE_DELAY_MS = 280;

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const navRef = useRef(null);
  const megaRef = useRef(null);
  const closeTimerRef = useRef(null);

  const closeMegaMenu = useCallback(() => {
    setActiveMegaMenu(null);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(closeMegaMenu, CLOSE_DELAY_MS);
  }, [cancelClose, closeMegaMenu]);

  const isInsideMenuZone = useCallback((node) => {
    if (!(node instanceof Node)) {
      return false;
    }

    return navRef.current?.contains(node) || megaRef.current?.contains(node);
  }, []);

  const handleNavMouseLeave = useCallback(
    (event) => {
      if (isInsideMenuZone(event.relatedTarget)) {
        return;
      }
      scheduleClose();
    },
    [isInsideMenuZone, scheduleClose],
  );

  const handleMegaMouseLeave = useCallback(
    (event) => {
      if (isInsideMenuZone(event.relatedTarget)) {
        return;
      }
      scheduleClose();
    },
    [isInsideMenuZone, scheduleClose],
  );

  const openMegaMenu = useCallback(
    (menuKey) => {
      cancelClose();
      setActiveMegaMenu(menuKey);
    },
    [cancelClose],
  );

  const toggleMegaMenu = useCallback(
    (menuKey) => {
      cancelClose();
      setActiveMegaMenu((current) => (current === menuKey ? null : menuKey));
    },
    [cancelClose],
  );

  useEffect(() => {
    closeMegaMenu();
    cancelClose();
  }, [pathname, closeMegaMenu, cancelClose]);

  useEffect(() => {
    if (!activeMegaMenu) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        cancelClose();
        closeMegaMenu();
      }
    };

    const handlePointerDown = (event) => {
      if (isInsideMenuZone(event.target)) {
        return;
      }
      cancelClose();
      closeMegaMenu();
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [activeMegaMenu, closeMegaMenu, cancelClose, isInsideMenuZone]);

  useEffect(
    () => () => {
      cancelClose();
    },
    [cancelClose],
  );

  return (
    <nav
      ref={navRef}
      className={styles.nav}
      aria-label="Main navigation"
      onMouseEnter={cancelClose}
      onMouseLeave={handleNavMouseLeave}
    >
      <ul className={styles.list}>
        {MAIN_NAV.map((item) => (
          <li key={item.href} className={styles.item}>
            <NavLink
              href={item.href}
              label={item.label}
              pathname={pathname}
              hasMegaMenu={Boolean(item.megaMenu)}
              isMegaOpen={activeMegaMenu === item.megaMenu}
              onMegaOpen={() => item.megaMenu && openMegaMenu(item.megaMenu)}
              onMegaToggle={() => item.megaMenu && toggleMegaMenu(item.megaMenu)}
            />
          </li>
        ))}
      </ul>

      {activeMegaMenu && (
        <div
          ref={megaRef}
          className={styles.megaOverlay}
          onMouseEnter={cancelClose}
          onMouseLeave={handleMegaMouseLeave}
        >
          <MegaMenu
            menuKey={activeMegaMenu}
            config={MEGA_MENUS[activeMegaMenu]}
            isOpen={Boolean(activeMegaMenu)}
            onClose={() => {
              cancelClose();
              closeMegaMenu();
            }}
          />
        </div>
      )}
    </nav>
  );
}
