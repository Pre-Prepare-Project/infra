"use client";

import Button from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import styles from "./ButtonGroup.module.scss";

function renderButton(config, defaultVariant, size) {
  if (!config) {
    return null;
  }

  const { label, variant, href, icon, onClick, ...rest } = config;

  return (
    <Button
      variant={variant || defaultVariant}
      size={size}
      href={href}
      icon={icon}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default function ButtonGroup({
  primary,
  secondary,
  align = "left",
  className,
  size = "md",
}) {
  if (!primary && !secondary) {
    return null;
  }

  const alignClass = styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`];

  return (
    <div className={cn(styles.group, alignClass, className)} role="group">
      {renderButton(primary, "accent", size)}
      {renderButton(secondary, "outline", size)}
    </div>
  );
}
