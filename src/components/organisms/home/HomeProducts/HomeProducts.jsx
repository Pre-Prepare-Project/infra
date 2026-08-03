"use client";

import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Heading from "@/components/atoms/Heading/Heading";
import { ProductCard } from "@/components/molecules";
import { getProductsForNav } from "@/lib/content";
import styles from "./HomeProducts.module.scss";

const PRODUCTS = getProductsForNav();

export default function HomeProducts() {
  return (
    <section className={styles.section} aria-labelledby="home-products-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <Heading level="h2" id="home-products-title" className={styles.title}>
              Our Projects
            </Heading>
            <Link href="/products" className={styles.viewAll}>
              View All Projects
              <ArrowRightOutlined aria-hidden="true" />
            </Link>
          </div>
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
