"use client";

import { cn, getVariantClass } from "@/utils/cn";
import styles from "./Heading.module.scss";

const LEVEL_MAP = {
  displayXl: "h1",
  displayLg: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export default function Heading({
  level = "h2",
  as,
  variant,
  gradient = false,
  gradientType = "primary",
  align = "left",
  className,
  children,
  id,
  ...rest
}) {
  const resolvedVariant = variant || level;
  const Tag = as || LEVEL_MAP[resolvedVariant] || "h2";

  return (
    <Tag
      id={id}
      className={cn(
        styles.heading,
        getVariantClass(styles, resolvedVariant),
        gradient && styles[`gradient${gradientType.charAt(0).toUpperCase()}${gradientType.slice(1)}`],
        styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
