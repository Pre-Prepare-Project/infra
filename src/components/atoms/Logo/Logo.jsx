import Link from "next/link";
import { COMPANY } from "@/constants/theme";
import { cn } from "@/utils/cn";
import styles from "./Logo.module.scss";

export default function Logo({ variant = "default", className, href = "/", onClick }) {
  return (
    <Link
      href={href}
      className={cn(styles.logo, styles[variant], className)}
      aria-label={`${COMPANY.shortName} — Home`}
      onClick={onClick}
    >
      <span className={styles.mark} aria-hidden="true">
        IP
      </span>
      <span className={styles.text}>
        <span className={styles.name}>{COMPANY.shortName}</span>
        <span className={styles.tagline}>Technologies</span>
      </span>
    </Link>
  );
}
