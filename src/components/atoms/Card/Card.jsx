"use client";

import { Card as AntCard } from "antd";
import { cn, getVariantClass } from "@/utils/cn";
import styles from "./Card.module.scss";

export default function Card({
  variant = "default",
  hoverable = false,
  padding = "md",
  className,
  children,
  title,
  extra,
  cover,
  actions,
  ...rest
}) {
  const isBorderless = variant === "flat" || variant === "glass";

  return (
    <AntCard
      className={cn(
        styles.card,
        getVariantClass(styles, variant),
        styles[`padding${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
        hoverable && styles.hoverable,
        className,
      )}
      bordered={!isBorderless}
      hoverable={hoverable}
      title={title}
      extra={extra}
      cover={cover}
      actions={actions}
      {...rest}
    >
      {children}
    </AntCard>
  );
}

export function CardGrid(props) {
  return <AntCard.Grid {...props} />;
}

export function CardMeta(props) {
  return <AntCard.Meta {...props} />;
}
