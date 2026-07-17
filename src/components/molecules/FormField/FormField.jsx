"use client";

import Text from "@/components/atoms/Text/Text";
import { cn } from "@/utils/cn";
import styles from "./FormField.module.scss";

export default function FormField({
  label,
  htmlFor,
  required = false,
  error,
  help,
  children,
  className,
}) {
  return (
    <div className={cn(styles.field, error && styles.hasError, className)}>
      {label && (
        <label htmlFor={htmlFor} className={styles.label}>
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <div className={styles.control}>{children}</div>
      {error && (
        <Text variant="caption" color="error" className={styles.error} role="alert">
          {error}
        </Text>
      )}
      {!error && help && (
        <Text variant="caption" color="secondary" className={styles.help}>
          {help}
        </Text>
      )}
    </div>
  );
}
