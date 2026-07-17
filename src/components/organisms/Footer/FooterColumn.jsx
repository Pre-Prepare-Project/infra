import Link from "next/link";
import Heading from "@/components/atoms/Heading/Heading";
import { cn } from "@/utils/cn";
import styles from "./FooterColumn.module.scss";

export default function FooterColumn({ title, links, className }) {
  return (
    <div className={cn(styles.column, className)}>
      <Heading level="h6" className={styles.title}>
        {title}
      </Heading>
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
