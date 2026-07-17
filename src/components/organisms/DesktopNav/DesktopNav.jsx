"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/components/molecules/NavLink/NavLink";
import MegaMenu from "@/components/molecules/MegaMenu/MegaMenu";
import { MAIN_NAV, MEGA_MENUS } from "@/constants/navigation";
import styles from "./DesktopNav.module.scss";

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  const closeMegaMenu = useCallback(() => {
    setActiveMegaMenu(null);
  }, []);

  const toggleMegaMenu = useCallback((menuKey) => {
    setActiveMegaMenu((current) => (current === menuKey ? null : menuKey));
  }, []);

  useEffect(() => {
    closeMegaMenu();
  }, [pathname, closeMegaMenu]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMegaMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMegaMenu]);

  return (
    <nav
      className={styles.nav}
      aria-label="Main navigation"
      onMouseLeave={closeMegaMenu}
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
              onMegaOpen={() => item.megaMenu && setActiveMegaMenu(item.megaMenu)}
              onMegaToggle={() => item.megaMenu && toggleMegaMenu(item.megaMenu)}
            />
          </li>
        ))}
      </ul>

      {activeMegaMenu && (
        <div className={styles.megaOverlay}>
          <MegaMenu
            menuKey={activeMegaMenu}
            config={MEGA_MENUS[activeMegaMenu]}
            isOpen={Boolean(activeMegaMenu)}
            onClose={closeMegaMenu}
          />
        </div>
      )}
    </nav>
  );
}
