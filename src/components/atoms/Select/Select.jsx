"use client";

import { Select as AntSelect } from "antd";
import { cn } from "@/utils/cn";
import styles from "./Select.module.scss";

export default function Select({ className, size = "md", status, ...rest }) {
  return (
    <AntSelect
      className={cn(
        styles.select,
        styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`],
        status === "error" && styles.error,
        className,
      )}
      size={size === "sm" ? "small" : size === "lg" ? "large" : "middle"}
      status={status}
      {...rest}
    />
  );
}
