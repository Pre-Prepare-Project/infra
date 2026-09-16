"use client";

import {
  BulbOutlined,
  HeartOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import AnimatedIcon from "@/components/atoms/AnimatedIcon/AnimatedIcon";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { COMPANY_VALUES } from "@/data/company";
import styles from "./ValuesSection.module.scss";

const ICON_MAP = {
  innovation: BulbOutlined,
  quality: TrophyOutlined,
  integrity: SafetyCertificateOutlined,
  "client-success": HeartOutlined,
  collaboration: TeamOutlined,
  excellence: RocketOutlined,
};

const ANIMATIONS = ["float", "pulse", "bounce", "glow", "float", "pulse"];

export default function ValuesSection() {
  return (
    <section className={styles.section} aria-labelledby="values-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Core Values"
            title="What We Stand For"
            subtitle="The values that shape our culture and define how we work with every client."
            id="values-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {COMPANY_VALUES.map((value, index) => {
            const Icon = ICON_MAP[value.id] || BulbOutlined;

            return (
              <ScrollRevealItem key={value.id} as="div">
                <Card variant="flat" padding="lg" hoverable className={styles.card}>
                  <AnimatedIcon
                    icon={Icon}
                    size="lg"
                    shape="round"
                    animation={ANIMATIONS[index % ANIMATIONS.length]}
                    colorIndex={index}
                    delay={(index % 5) + 1}
                    className={styles.iconWrap}
                  />
                  <Heading level="h5" className={styles.cardTitle}>
                    {value.title}
                  </Heading>
                  <Text variant="bodySm" color="secondary">
                    {value.description}
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
