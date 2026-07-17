"use client";

import { ArrowRightOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import Card from "@/components/atoms/Card/Card";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import styles from "./JobCard.module.scss";

export default function JobCard({
  title,
  description,
  departmentLabel,
  location,
  type,
  experience,
  href,
  className,
  hoverable = true,
  hoverEffect = "scale",
}) {
  return (
    <HoverEffect effect={hoverEffect} className={cn(styles.wrapper, className)}>
      <Card variant="default" hoverable={hoverable} padding="lg" className={styles.card}>
        {departmentLabel && <span className={styles.badge}>{departmentLabel}</span>}
        <Heading level="h4" className={styles.title}>
          {title}
        </Heading>
        <Text variant="bodySm" color="secondary" className={styles.description}>
          {description}
        </Text>
        <ul className={styles.metaList}>
          {location && (
            <li>
              <EnvironmentOutlined aria-hidden="true" />
              {location}
            </li>
          )}
          {type && (
            <li>
              <ClockCircleOutlined aria-hidden="true" />
              {type} · {experience}
            </li>
          )}
        </ul>
        {href && (
          <Button variant="outline" href={href} className={styles.cta} icon={<ArrowRightOutlined />}>
            View Role
          </Button>
        )}
      </Card>
    </HoverEffect>
  );
}
