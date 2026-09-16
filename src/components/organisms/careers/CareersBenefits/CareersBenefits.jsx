"use client";

import {
  BookOutlined,
  DollarOutlined,
  HomeOutlined,
  ProjectOutlined,
  RiseOutlined,
  TeamOutlined,
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
import { CAREER_BENEFITS } from "@/data/careers";
import styles from "./CareersBenefits.module.scss";

const ICON_MAP = {
  compensation: DollarOutlined,
  flexibility: HomeOutlined,
  learning: BookOutlined,
  culture: TeamOutlined,
  growth: RiseOutlined,
  projects: ProjectOutlined,
};

const ANIMATIONS = ["float", "pulse", "bounce", "glow", "float", "pulse"];

export default function CareersBenefits({ className }) {
  return (
    <section className={className} aria-labelledby="careers-benefits-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Why Join Us"
            title="Benefits & Culture"
            subtitle="We invest in our people with a culture built on learning, collaboration, and meaningful work."
            id="careers-benefits-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {CAREER_BENEFITS.map((benefit, index) => (
            <ScrollRevealItem key={benefit.id} as="article">
              <Card variant="default" padding="lg" hoverable className={styles.card}>
                <AnimatedIcon
                  icon={ICON_MAP[benefit.id] || TeamOutlined}
                  size="md"
                  shape="soft"
                  animation={ANIMATIONS[index % ANIMATIONS.length]}
                  colorIndex={index}
                  delay={(index % 5) + 1}
                  className={styles.iconWrap}
                />
                <Heading level="h5">{benefit.title}</Heading>
                <Text variant="bodySm" color="secondary">
                  {benefit.description}
                </Text>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
