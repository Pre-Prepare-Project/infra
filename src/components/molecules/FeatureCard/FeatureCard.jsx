"use client";

import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "@/components/atoms/Card/Card";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/utils/cn";
import styles from "./FeatureCard.module.scss";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
  className,
  hoverable = true,
  hoverEffect = "scale",
}) {
  const content = (
    <>
      {Icon && (
        <span className={styles.iconWrap} aria-hidden="true">
          <Icon />
        </span>
      )}
      <Heading level="h5" className={styles.title}>
        {title}
      </Heading>
      <Text variant="bodySm" color="secondary" className={styles.description}>
        {description}
      </Text>
      {href && (
        <span className={styles.link}>
          Learn more
          <ArrowRightOutlined aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <HoverEffect effect={hoverEffect} className={cn(styles.linkWrapper, className)}>
        <Link href={href} className={styles.anchor}>
          <Card variant="default" hoverable={hoverable} padding="lg" className={styles.card}>
            {content}
          </Card>
        </Link>
      </HoverEffect>
    );
  }

  return (
    <HoverEffect effect={hoverEffect} className={className}>
      <Card
        variant="default"
        hoverable={hoverable}
        padding="lg"
        className={styles.card}
      >
        {content}
      </Card>
    </HoverEffect>
  );
}
