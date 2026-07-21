"use client";

import Link from "next/link";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { cn } from "@/utils/cn";
import { isNavActive } from "@/utils/navigation";
import styles from "./NavLink.module.scss";

export default function NavLink({
  href,
  label,
  pathname,
  hasMegaMenu = false,
  isMegaOpen = false,
  onMegaToggle,
  onMegaOpen,
  className,
}) {
  const isActive = isNavActive(pathname, href);

  if (hasMegaMenu) {
    return (
      <div className={cn(styles.megaItem, className)} onMouseEnter={onMegaOpen} onFocus={onMegaOpen}>
        <button
          type="button"
          className={cn(styles.link, styles.trigger, isActive && styles.active, isMegaOpen && styles.open)}
          aria-expanded={isMegaOpen}
          aria-haspopup="true"
          onClick={onMegaToggle}
          onMouseEnter={onMegaOpen}
        >
          {label}
          <DownOutlined className={cn(styles.chevron, isMegaOpen && styles.chevronOpen)} aria-hidden="true" />
        </button>
        <Link href={href} className={styles.visuallyHidden} tabIndex={-1}>
          {label}
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={cn(styles.link, isActive && styles.active, className)}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export function DrawerNavLink({ href, label, pathname, onNavigate, className }) {
  const isActive = isNavActive(pathname, href);

  return (
    <Link
      href={href}
      className={cn(styles.drawerLink, isActive && styles.active, className)}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
      <RightOutlined className={styles.drawerArrow} aria-hidden="true" />
    </Link>
  );
}
