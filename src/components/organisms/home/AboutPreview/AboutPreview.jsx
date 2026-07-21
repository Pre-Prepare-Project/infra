"use client";

import Link from "next/link";
import {
  AppstoreOutlined,
  ArrowRightOutlined,
  BulbOutlined,
  ClockCircleOutlined,
  DeploymentUnitOutlined,
  PlayCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Button from "@/components/atoms/Button/Button";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { ABOUT_PREVIEW, ABOUT_TEAM_IMAGE } from "@/data/company";
import styles from "./AboutPreview.module.scss";

const HIGHLIGHT_ICONS = {
  user: UserOutlined,
  process: DeploymentUnitOutlined,
  clock: ClockCircleOutlined,
  scale: AppstoreOutlined,
  bulb: BulbOutlined,
  partnership: TeamOutlined,
};

export default function AboutPreview() {
  const { overline, title, description, highlights, primaryCta, secondaryCta } = ABOUT_PREVIEW;

  return (
    <section className={styles.section} aria-labelledby="about-preview-title">
      <Container>
        <div className={styles.grid}>
          <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
            {overline && (
              <Text variant="overline" color="primary" className={styles.overline}>
                {overline}
              </Text>
            )}
            <Heading level="h2" id="about-preview-title" className={styles.title}>
              {title}
            </Heading>
            <Text variant="bodyLg" color="secondary" className={styles.description}>
              {description}
            </Text>

            <ul className={styles.highlights}>
              {highlights.map((item) => {
                const Icon = HIGHLIGHT_ICONS[item.icon] || UserOutlined;

                return (
                  <li key={item.id} className={styles.highlightItem}>
                    <span className={styles.highlightIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </ul>

            <div className={styles.actions}>
              <div className={styles.dotPattern} aria-hidden="true" />
              <Button
                variant="accent"
                href={primaryCta.href}
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className={styles.primaryAction}
              >
                {primaryCta.label}
              </Button>
              <Link href={secondaryCta.href} className={styles.storyLink}>
                <span className={styles.playButton} aria-hidden="true">
                  <PlayCircleOutlined />
                </span>
                <span>{secondaryCta.label}</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" as="div" className={styles.visual}>
            <div className={styles.imageWrap}>
              <OptimizedImage
                src={ABOUT_TEAM_IMAGE}
                alt="InfraPulse team collaborating in a modern office"
                fill
                sizes="(max-width: 992px) 100vw, 560px"
                className={styles.image}
              />
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.floatingValue}>10+</span>
              <span className={styles.floatingLabel}>Years of Excellence</span>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
