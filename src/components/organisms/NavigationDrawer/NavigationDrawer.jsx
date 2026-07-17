"use client";

import { useState } from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { CloseOutlined, DownOutlined, RightOutlined } from "@ant-design/icons";
import Logo from "@/components/atoms/Logo/Logo";
import Button from "@/components/atoms/Button/Button";
import { DrawerNavLink } from "@/components/molecules/NavLink/NavLink";
import { MAIN_NAV, MEGA_MENUS } from "@/constants/navigation";
import { cn } from "@/utils/cn";
import styles from "./NavigationDrawer.module.scss";

export default function NavigationDrawer({ open, onClose, variant = "mobile", pathname }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleNavigate = () => {
    setExpandedSection(null);
    onClose();
  };

  const toggleSection = (key) => {
    setExpandedSection((current) => (current === key ? null : key));
  };

  const isTablet = variant === "tablet";

  return (
    <Drawer
      id="navigation-drawer"
      open={open}
      onClose={onClose}
      placement="right"
      width={isTablet ? 420 : "100%"}
      className={cn(styles.drawer, isTablet ? styles.tablet : styles.mobile)}
      closable={false}
      destroyOnClose
      aria-label="Navigation menu"
    >
      <div className={styles.header}>
        <Logo href="/" onClick={handleNavigate} />
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
          <CloseOutlined />
        </button>
      </div>

      <nav className={styles.nav} aria-label={isTablet ? "Tablet navigation" : "Mobile navigation"}>
        <ul className={styles.list}>
          {MAIN_NAV.map((item) => {
            if (item.megaMenu) {
              const config = MEGA_MENUS[item.megaMenu];
              const isExpanded = expandedSection === item.megaMenu;

              return (
                <li key={item.href} className={styles.accordionItem}>
                  <button
                    type="button"
                    className={cn(styles.accordionTrigger, isExpanded && styles.expanded)}
                    aria-expanded={isExpanded}
                    onClick={() => toggleSection(item.megaMenu)}
                  >
                    <span>{item.label}</span>
                    <DownOutlined className={cn(styles.accordionIcon, isExpanded && styles.accordionIconOpen)} />
                  </button>

                  {isExpanded && (
                    <div className={styles.accordionPanel}>
                      <Link href={config.href} className={styles.viewAll} onClick={handleNavigate}>
                        {config.ctaLabel}
                        <RightOutlined aria-hidden="true" />
                      </Link>
                      <ul className={styles.subList}>
                        {config.items.map((subItem) => (
                          <li key={subItem.href}>
                            <Link href={subItem.href} className={styles.subLink} onClick={handleNavigate}>
                              <span className={styles.subLabel}>{subItem.label}</span>
                              <span className={styles.subDesc}>{subItem.description}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <DrawerNavLink
                  href={item.href}
                  label={item.label}
                  pathname={pathname}
                  onNavigate={handleNavigate}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <Button variant="accent" block href="/contact" onClick={handleNavigate}>
          Contact Us
        </Button>
      </div>
    </Drawer>
  );
}
