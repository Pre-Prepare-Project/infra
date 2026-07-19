"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { ProductCard, SectionTitle } from "@/components/molecules";
import { getProductsForNav } from "@/lib/content";
import styles from "./ProductsGrid.module.scss";

const PRODUCTS = getProductsForNav();

export default function ProductsGrid({ className }) {
  return (
    <section className={className} aria-labelledby="products-grid-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Products"
            title="Platforms Built by InfraPulse"
            subtitle="Ready-to-deploy software products designed to solve real business challenges across industries."
            id="products-grid-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.12}>
          {PRODUCTS.map((product) => (
            <ScrollRevealItem key={product.id} as="div">
              <ProductCard
                title={product.title}
                description={product.description}
                features={product.features}
                href={product.href}
                image={product.image}
                badge={product.badge}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
