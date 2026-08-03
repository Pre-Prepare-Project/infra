"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "@/components/atoms/Card/Card";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import styles from "./ProductCard.module.scss";

export default function ProductCard({
  title,
  description,
  features = [],
  href,
  image,
  badge,
  className,
  hoverable = true,
  hoverEffect = "scale",
}) {
  return (
    <HoverEffect effect={hoverEffect} className={cn(styles.wrapper, className)}>
      <Card
      variant="accent"
      hoverable={hoverable}
      padding="lg"
      className={cn(styles.card, className)}
      // cover={
      //   <img
      //     draggable={false}
      //     alt="example"
      //     src={image}
      //   />
      // }
      cover={
        image ? (
          <div className={styles.imageWrap}>
            <img
              draggable={false}
              alt="example"
              src={image}
            />
            {/* <OptimizedImage src={image} alt={`${title} preview`} fill className={styles.image} /> */}
          </div>
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true">
            <span className={styles.placeholderText}>{title}</span>
          </div>
        )
      }
    >
      {badge && <span className={styles.badge}>{badge}</span>}
      <Heading level="h4" className={styles.title}>
        {title}
      </Heading>
      <Text variant="bodySm" color="secondary" className={styles.description}>
        {description}
      </Text>
      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}
      {href && (
        <Button variant="outline" href={href} className={styles.cta} icon={<ArrowRightOutlined />}>
          Explore Project
        </Button>
      )}
    </Card>
    </HoverEffect>
  );
}
