"use client";

import { useState } from "react";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { PortfolioCard, SectionTitle } from "@/components/molecules";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/data/portfolio";
import { cn } from "@/utils/cn";
import styles from "./PortfolioGrid.module.scss";

export default function PortfolioGrid({ className }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className={className} aria-labelledby="portfolio-grid-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Work"
            title="Featured Projects"
            subtitle="Explore our portfolio of successful software projects across industries and technologies."
            id="portfolio-grid-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.05} as="div" className={styles.filters} role="tablist" aria-label="Filter portfolio by category">
          {PORTFOLIO_CATEGORIES.map((category) => (
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

        <ScrollRevealGrid key={activeCategory} className={styles.grid} stagger={0.08}>
          {filteredItems.map((item) => (
            <ScrollRevealItem key={item.id} as="div">
              <PortfolioCard
                title={item.title}
                description={item.description}
                categoryLabel={item.categoryLabel}
                technologies={item.technologies}
                href={item.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
