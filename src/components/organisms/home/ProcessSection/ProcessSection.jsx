"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { PROCESS_STEPS } from "@/data/process";
import styles from "./ProcessSection.module.scss";

export default function ProcessSection() {
  return (
    <section className={styles.section} aria-labelledby="process-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Process"
            title="How We Deliver Excellence"
            subtitle="A proven agile methodology that ensures transparency, quality, and on-time delivery."
            id="process-title"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.steps} stagger={0.1}>
          {PROCESS_STEPS.map((step, index) => (
            <ScrollRevealItem key={step.id} as="article" className={styles.step}>
              <span className={styles.stepNumber}>{step.step}</span>
              <Heading level="h5" className={styles.stepTitle}>
                {step.title}
              </Heading>
              <Text variant="bodySm" color="secondary">
                {step.description}
              </Text>
              {index < PROCESS_STEPS.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
