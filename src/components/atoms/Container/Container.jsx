import { cn } from "@/utils/cn";
import styles from "./Container.module.scss";

const SIZE_MAP = {
  sm: styles.sizeSm,
  default: styles.sizeDefault,
  lg: styles.sizeLg,
  fluid: styles.sizeFluid,
};

export default function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
  ...rest
}) {
  return (
    <Tag className={cn(styles.container, SIZE_MAP[size], className)} {...rest}>
      {children}
    </Tag>
  );
}
