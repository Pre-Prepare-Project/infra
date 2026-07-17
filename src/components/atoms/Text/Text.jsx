"use client";

import { cn, getVariantClass } from "@/utils/cn";
import styles from "./Text.module.scss";

const TAG_MAP = {
  bodyLg: "p",
  body: "p",
  bodySm: "p",
  caption: "span",
  overline: "span",
};

export default function Text({
  variant = "body",
  as,
  color = "default",
  weight = "regular",
  align = "left",
  className,
  children,
  ...rest
}) {
  const Tag = as || TAG_MAP[variant] || "p";

  return (
    <Tag
      className={cn(
        styles.text,
        getVariantClass(styles, variant),
        styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
        styles[`weight${weight.charAt(0).toUpperCase()}${weight.slice(1)}`],
        styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
