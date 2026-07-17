import Link from "next/link";
import { cn } from "@/utils/cn";
import styles from "./Breadcrumb.module.scss";

export default function Breadcrumb({ items = [], className }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav className={cn(styles.breadcrumb, className)} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href ?? item.label} className={styles.item}>
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
              {!isLast && <span className={styles.separator} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
