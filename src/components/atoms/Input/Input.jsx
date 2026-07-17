"use client";

import { Input as AntInput } from "antd";
import { cn } from "@/utils/cn";
import styles from "./Input.module.scss";

function InputBase({ className, size = "md", status, ...rest }) {
  const sizeClass = styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}`];

  return (
    <AntInput
      className={cn(styles.input, sizeClass, status === "error" && styles.error, className)}
      size={size === "sm" ? "small" : size === "lg" ? "large" : "middle"}
      status={status}
      {...rest}
    />
  );
}

function TextArea({ className, rows = 4, status, ...rest }) {
  return (
    <AntInput.TextArea
      className={cn(styles.textarea, status === "error" && styles.error, className)}
      rows={rows}
      status={status}
      {...rest}
    />
  );
}

InputBase.TextArea = TextArea;
InputBase.Password = AntInput.Password;
InputBase.Search = AntInput.Search;

export default InputBase;
