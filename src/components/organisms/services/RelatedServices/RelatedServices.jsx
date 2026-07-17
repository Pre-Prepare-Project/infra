"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { FeatureCard, SectionTitle } from "@/components/molecules";
import { getServicesWithIcons } from "@/lib/content";
import styles from "./RelatedServices.module.scss";

export default function RelatedServices({ currentSlug, title = "Related Services" }) {
  const services = getServicesWithIcons()
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  if (!services.length) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="related-services-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Explore More"
            title={title}
            id="related-services-title"
            className={styles.header}
          />
        </ScrollReveal>
        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {services.map((service) => (
            <ScrollRevealItem key={service.id} as="div">
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
