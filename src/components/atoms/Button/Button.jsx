"use client";

import { Button as AntButton } from "antd";
import { cn, getVariantClass } from "@/utils/cn";
import styles from "./Button.module.scss";

const VARIANT_MAP = {
  primary: "primary",
  accent: "default",
  secondary: "default",
  outline: "default",
  light: "default",
  ghost: "text",
  link: "link",
};

const SIZE_MAP = {
  sm: "small",
  md: "middle",
  lg: "large",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  block = false,
  loading = false,
  disabled = false,
  htmlType = "button",
  href,
  onClick,
  ...rest
}) {
  const antType = VARIANT_MAP[variant] || "primary";
  const antSize = SIZE_MAP[size] || "middle";
  const variantClass = getVariantClass(styles, variant);

  return (
    <AntButton
      type={antType}
      size={antSize}
      className={cn(styles.button, variantClass, block && styles.block, className)}
      icon={icon}
      block={block}
      loading={loading}
      disabled={disabled}
      htmlType={htmlType}
      href={href}
      onClick={onClick}
      {...rest}
    >
      {children}
    </AntButton>
  );
}
