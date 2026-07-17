"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { CaseStudyCard, SectionTitle } from "@/components/molecules";
import { getRelatedCaseStudies } from "@/data/caseStudies";
import styles from "./RelatedCaseStudies.module.scss";

export default function RelatedCaseStudies({ currentSlug, title = "Related Case Studies" }) {
  const studies = getRelatedCaseStudies(currentSlug, 3);

  if (!studies.length) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="related-case-studies-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="More Stories"
            title={title}
            id="related-case-studies-title"
            className={styles.header}
          />
        </ScrollReveal>
        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {studies.map((study) => (
            <ScrollRevealItem key={study.id} as="div">
              <CaseStudyCard
                title={study.title}
                description={study.description}
                categoryLabel={study.categoryLabel}
                industry={study.industry}
                highlightMetric={study.highlightMetric}
                href={study.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
