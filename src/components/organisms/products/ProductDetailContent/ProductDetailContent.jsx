"use client";

import { ArrowRightOutlined, AppstoreOutlined, CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { SectionTitle } from "@/components/molecules";
import styles from "./ProductDetailContent.module.scss";

export default function ProductDetailContent({ product }) {
  return (
    <>
      <section className={styles.overview} aria-labelledby="product-overview-title">
        <Container>
          <div className={styles.overviewGrid}>
            <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
              <Text variant="overline" color="primary" className={styles.overline}>
                Product Overview
              </Text>
              <Heading level="h2" id="product-overview-title" className={styles.title}>
                {product.title}
              </Heading>
              <Text variant="bodyLg" color="secondary" className={styles.description}>
                {product.longDescription}
              </Text>
              <Button variant="accent" href="/contact" icon={<ArrowRightOutlined />}>
                Request a Demo
              </Button>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" as="div">
              {product.image ? (
                <div className={styles.previewWrap}>
                  {product.badge && <span className={styles.previewBadge}>{product.badge}</span>}
                  <OptimizedImage
                    src={product.image}
                    alt={`${product.title} dashboard preview`}
                    fill
                    sizes="(max-width: 992px) 100vw, 480px"
                    className={styles.previewImage}
                  />
                </div>
              ) : (
                <Card variant="accent" padding="lg" className={styles.summaryCard}>
                  {product.badge && <span className={styles.badge}>{product.badge}</span>}
                  <span className={styles.iconWrap} aria-hidden="true">
                    <AppstoreOutlined />
                  </span>
                  <Heading level="h4">{product.title}</Heading>
                  <Text variant="bodySm" color="secondary">
                    {product.description}
                  </Text>
                </Card>
              )}
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.features} aria-labelledby="product-features-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Core Capabilities"
              title="Key Features"
              subtitle="Highlights of what this platform delivers out of the box."
              id="product-features-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1} as="ul" className={styles.featureList}>
            {product.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className={styles.modules} aria-labelledby="product-modules-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Full Platform"
              title="Modules & Components"
              subtitle="Every module included in this product to support your operations end to end."
              id="product-modules-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>
          <ScrollRevealGrid className={styles.moduleGrid} stagger={0.06}>
            {product.modules.map((module) => (
              <ScrollRevealItem key={module} as="article" className={styles.moduleItem}>
                <AppstoreOutlined className={styles.moduleIcon} aria-hidden="true" />
                <Heading level="h5">{module}</Heading>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGrid>
        </Container>
      </section>
    </>
  );
}
