"use client";

import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Button from "@/components/atoms/Button/Button";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { COMPANY_MISSION, COMPANY_VALUES } from "@/data/company";
import styles from "./AboutPreview.module.scss";

export default function AboutPreview() {
  return (
    <section className={styles.section} aria-labelledby="about-preview-title">
      <Container>
        <div className={styles.grid}>
          <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
            <Text variant="overline" color="primary" className={styles.overline}>
              About InfraPulse
            </Text>
            <Heading level="h2" id="about-preview-title" className={styles.title}>
              We Are Innovators and Problem Solvers
            </Heading>
            <Text variant="bodyLg" color="secondary" className={styles.description}>
              {COMPANY_MISSION}
            </Text>
            <ul className={styles.values}>
              {COMPANY_VALUES.slice(0, 4).map((value) => (
                <li key={value.title}>
                  <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                  <span>{value.title}</span>
                </li>
              ))}
            </ul>
            <Button variant="primary" href="/about" icon={<ArrowRightOutlined />}>
              Learn More About Us
            </Button>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" as="div" className={styles.visual}>
            <div className={styles.imagePlaceholder} aria-hidden="true">
              <div className={styles.placeholderInner}>
                <span className={styles.placeholderIcon}>IP</span>
                <Text variant="bodySm" color="secondary" align="center">
                  InfraPulse Team
                </Text>
              </div>
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
