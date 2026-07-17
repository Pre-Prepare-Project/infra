"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Card from "@/components/atoms/Card/Card";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { cn } from "@/utils/cn";
import styles from "./PortfolioCard.module.scss";

export default function PortfolioCard({
  title,
  description,
  categoryLabel,
  technologies = [],
  href,
  image,
  className,
  hoverable = true,
  hoverEffect = "scale",
}) {
  return (
    <HoverEffect effect={hoverEffect} className={cn(styles.wrapper, className)}>
      <Card
        variant="default"
        hoverable={hoverable}
        padding="none"
        className={styles.card}
        cover={
          image ? (
            <div className={styles.imageWrap}>
              <OptimizedImage src={image} alt={`${title} preview`} fill className={styles.image} />
            </div>
          ) : (
            <div className={styles.imagePlaceholder} aria-hidden="true">
              <span className={styles.placeholderText}>{title}</span>
            </div>
          )
        }
      >
        <div className={styles.body}>
          {categoryLabel && <span className={styles.badge}>{categoryLabel}</span>}
          <Heading level="h4" className={styles.title}>
            {title}
          </Heading>
          <Text variant="bodySm" color="secondary" className={styles.description}>
            {description}
          </Text>
          {technologies.length > 0 && (
            <ul className={styles.techList}>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          )}
          {href && (
            <Button variant="outline" href={href} className={styles.cta} icon={<ArrowRightOutlined />}>
              View Project
            </Button>
          )}
        </div>
      </Card>
    </HoverEffect>
  );
}
