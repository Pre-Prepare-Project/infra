"use client";

import { useState } from "react";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { CaseStudyCard, SectionTitle } from "@/components/molecules";
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from "@/data/caseStudies";
import { cn } from "@/utils/cn";
import styles from "./CaseStudiesGrid.module.scss";

export default function CaseStudiesGrid({ className }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStudies =
    activeCategory === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <section className={className} aria-labelledby="case-studies-grid-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Success Stories"
            title="Client Case Studies"
            subtitle="In-depth stories of how InfraPulse helped businesses solve complex challenges and achieve measurable results."
            id="case-studies-grid-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05} as="div" className={styles.filters} role="tablist" aria-label="Filter case studies by category">
          {CASE_STUDY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              className={cn(styles.filterBtn, activeCategory === category.id && styles.filterBtnActive)}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </ScrollReveal>

        <ScrollRevealGrid key={activeCategory} className={styles.grid} stagger={0.1}>
          {filteredStudies.map((study) => (
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
