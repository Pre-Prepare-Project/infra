"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "@/components/atoms/Card/Card";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import styles from "./CaseStudyCard.module.scss";

export default function CaseStudyCard({
  title,
  description,
  categoryLabel,
  industry,
  highlightMetric,
  href,
  className,
  hoverable = true,
  hoverEffect = "scale",
}) {
  return (
    <HoverEffect effect={hoverEffect} className={cn(styles.wrapper, className)}>
      <Card variant="accent" hoverable={hoverable} padding="lg" className={styles.card}>
        <div className={styles.meta}>
          {categoryLabel && <span className={styles.badge}>{categoryLabel}</span>}
          {industry && (
            <Text variant="caption" color="secondary" className={styles.industry}>
              {industry}
            </Text>
          )}
        </div>
        <Heading level="h4" className={styles.title}>
          {title}
        </Heading>
        <Text variant="bodySm" color="secondary" className={styles.description}>
          {description}
        </Text>
        {highlightMetric && (
          <p className={styles.metric}>
            <span className={styles.metricValue}>{highlightMetric}</span>
          </p>
        )}
        {href && (
          <Button variant="outline" href={href} className={styles.cta} icon={<ArrowRightOutlined />}>
            Read Case Study
          </Button>
        )}
      </Card>
    </HoverEffect>
  );
}
