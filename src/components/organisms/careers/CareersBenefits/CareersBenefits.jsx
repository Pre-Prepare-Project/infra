"use client";

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
          {CAREER_BENEFITS.map((benefit) => (
            <ScrollRevealItem key={benefit.id} as="article">
              <Card variant="default" padding="lg" hoverable className={styles.card}>
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
