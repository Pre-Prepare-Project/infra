import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/theme";
import { cn } from "@/utils/cn";
import styles from "./Logo.module.scss";

const LOGO_FULL = {
  src: "/images/logo-header.png",
  width: 206,
  height: 52,
};

const LOGO_MARK = {
  src: "/images/logo-mark-clean.png",
  width: 60,
  height: 48,
};

export default function Logo({ variant = "default", className, href = "/", onClick }) {
  const isCompact = variant === "compact";
  const asset = isCompact ? LOGO_MARK : LOGO_FULL;

  return (
    <Link
      href={href}
      className={cn(styles.logo, variant !== "default" && styles[variant], className)}
      aria-label={`${COMPANY.shortName} — Home`}
      onClick={onClick}
    >
      <Image
        src={asset.src}
        alt={`${COMPANY.name} logo`}
        width={asset.width}
        height={asset.height}
        className={styles.image}
        priority
      />
    </Link>
  );
}
