"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Button from "@/components/atoms/Button/Button";
import { ProductCard, SectionTitle } from "@/components/molecules";
import { getProductsForNav } from "@/lib/content";
import styles from "./HomeProducts.module.scss";

const PRODUCTS = getProductsForNav();

export default function HomeProducts() {
  return (
    <section className={styles.section} aria-labelledby="home-products-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Products"
            title="Platforms Built by InfraPulse"
            subtitle="Ready-to-deploy software products designed to solve real business challenges."
            id="home-products-title"
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
                badge={product.badge}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>

        <ScrollReveal variant="fadeUp" className={styles.footer}>
          <Button variant="primary" href="/products" icon={<ArrowRightOutlined />}>
            Explore All Products
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
