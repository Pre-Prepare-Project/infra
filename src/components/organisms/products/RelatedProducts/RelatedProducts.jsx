"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { ProductCard, SectionTitle } from "@/components/molecules";
import { getProductsForNav } from "@/lib/content";
import styles from "./RelatedProducts.module.scss";

export default function RelatedProducts({ currentSlug, title = "Other Projects" }) {
  const products = getProductsForNav()
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 2);

  if (!products.length) {
    return null;
  }

  return (
    <section className={styles.section} aria-labelledby="related-products-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Explore More"
            title={title}
            id="related-products-title"
            className={styles.header}
          />
        </ScrollReveal>
        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {products.map((product) => (
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
