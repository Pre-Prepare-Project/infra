"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { FEATURED_TECHNOLOGIES } from "@/data/whyChooseUs";
import styles from "./FeaturedTechStack.module.scss";

export default function FeaturedTechStack({ className }) {
  return (
    <section className={className} aria-labelledby="featured-tech-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Core Stack"
            title="Technologies We Work With Daily"
            subtitle="A curated selection of the tools and frameworks powering our client projects."
            id="featured-tech-title"
            align="center"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.05}>
          {FEATURED_TECHNOLOGIES.map((tech) => (
            <ScrollRevealItem key={tech} as="div" className={styles.chip}>
              <Text variant="bodySm" weight="semibold">
                {tech}
              </Text>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
