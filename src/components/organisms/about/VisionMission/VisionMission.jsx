"use client";

import { AimOutlined, EyeOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { COMPANY_MISSION, COMPANY_VISION } from "@/data/company";
import styles from "./VisionMission.module.scss";

export default function VisionMission() {
  return (
    <section className={styles.section} aria-labelledby="vision-mission-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Purpose"
            title="Our Vision & Mission"
            subtitle="The principles that guide every project we undertake."
            id="vision-mission-title"
            className={styles.header}
          />
        </ScrollReveal>

        <div className={styles.grid}>
          <ScrollReveal variant="fadeUp" delay={0.1} as="div">
            <Card variant="accent" padding="lg" hoverable className={styles.card}>
              <span className={styles.iconWrap} aria-hidden="true">
                <EyeOutlined />
              </span>
              <Heading level="h3" className={styles.cardTitle}>
                Our Vision
              </Heading>
              <Text variant="bodyLg" color="secondary">
                {COMPANY_VISION}
              </Text>
            </Card>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2} as="div">
            <Card variant="default" padding="lg" hoverable className={styles.card}>
              <span className={styles.iconWrap} aria-hidden="true">
                <AimOutlined />
              </span>
              <Heading level="h3" className={styles.cardTitle}>
                Our Mission
              </Heading>
              <Text variant="bodyLg" color="secondary">
                {COMPANY_MISSION}
              </Text>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
