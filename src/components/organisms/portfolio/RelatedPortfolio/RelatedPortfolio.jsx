"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { PortfolioCard, SectionTitle } from "@/components/molecules";
import { getRelatedPortfolio } from "@/data/portfolio";
import styles from "./RelatedPortfolio.module.scss";

export default function RelatedPortfolio({ currentSlug, title = "Related Projects" }) {
  const projects = getRelatedPortfolio(currentSlug, 3);

  if (!projects.length) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="related-portfolio-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="More Work"
            title={title}
            id="related-portfolio-title"
            className={styles.header}
          />
        </ScrollReveal>
        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {projects.map((project) => (
            <ScrollRevealItem key={project.id} as="div">
              <PortfolioCard
                title={project.title}
                description={project.description}
                categoryLabel={project.categoryLabel}
                technologies={project.technologies}
                href={project.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
