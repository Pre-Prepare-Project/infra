"use client";

import {
  BulbOutlined,
  CloudOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { WHY_CHOOSE_US } from "@/data/whyChooseUs";
import styles from "./WhyChooseUs.module.scss";

const ICON_MAP = {
  expertise: SafetyCertificateOutlined,
  quality: ToolOutlined,
  agile: RocketOutlined,
  support: TeamOutlined,
  custom: BulbOutlined,
  innovation: CloudOutlined,
};

export default function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Why Choose Us"
            title="Your Trusted Software Partner"
            subtitle="We combine technical excellence with a client-first approach to deliver results that matter."
            id="why-choose-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICON_MAP[item.id] || BulbOutlined;

            return (
              <ScrollRevealItem key={item.id} as="div">
                <Card variant="flat" padding="lg" hoverable className={styles.card}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon />
                  </span>
                  <Heading level="h5" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <Text variant="bodySm" color="secondary">
                    {item.description}
                  </Text>
                </Card>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
