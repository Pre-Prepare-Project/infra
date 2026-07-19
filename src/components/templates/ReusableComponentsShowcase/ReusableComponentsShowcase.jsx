"use client";

import Container from "@/components/atoms/Container/Container";
import { Card, Heading, Text } from "@/components/atoms";
import {
  ButtonGroup,
  FeatureCard,
  ProductCard,
  SectionTitle,
  StatCard,
} from "@/components/molecules";
import { CTA, FAQ, Statistics, Timeline } from "@/components/organisms";
import { FAQ_ITEMS, STATISTICS } from "@/data";
import { COMPANY_TIMELINE } from "@/data/company";
import { COMPANY } from "@/constants/theme";
import { getDefaultContactInfo } from "@/utils/contactInfo";
import { getProductsForNav, getServicesWithIcons } from "@/lib/content";
import { mapFaqForComponent, mapStatisticsForComponent } from "@/utils/data";
import styles from "./ReusableComponentsShowcase.module.scss";

const SERVICES = getServicesWithIcons();
const PRODUCTS = getProductsForNav();
const STATS = mapStatisticsForComponent(STATISTICS);
const FAQ_DATA = mapFaqForComponent(FAQ_ITEMS);

export default function ReusableComponentsShowcase() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <Text variant="overline" color="primary" className={styles.badge}>
            Module 5 — Reusable Components
          </Text>
          <Heading level="displayLg" gradient align="center">
            {COMPANY.shortName} Component Library
          </Heading>
          <Text variant="bodyLg" color="secondary" align="center" className={styles.subtitle}>
            Production-ready section components powered by centralized static data.
          </Text>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Section Title
          </Heading>
          <SectionTitle
            overline="What We Do"
            title="Services That Drive Growth"
            subtitle="Comprehensive software solutions tailored to your business needs."
            gradient
          />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Button Group
          </Heading>
          <ButtonGroup
            primary={{ label: "Explore Services", href: "/services", variant: "accent" }}
            secondary={{ label: "View Our Work", href: "/portfolio", variant: "outline" }}
            align="center"
          />
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Feature Cards
          </Heading>
          <div className={styles.featureGrid}>
            {SERVICES.slice(0, 6).map((service) => (
              <FeatureCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Product Cards
          </Heading>
          <div className={styles.productGrid}>
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                features={product.features}
                href={product.href}
                image={product.image}
                badge={product.badge}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Stat Cards
          </Heading>
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <Statistics
        overline="By The Numbers"
        title="Trusted by Businesses Worldwide"
        subtitle="Our track record speaks for itself."
        items={STATS}
        columns={5}
      />

      <CTA
        title="Let's Build Something Amazing Together"
        subtitle="Ready to transform your business with custom software? Get a free consultation today."
        variant="dark"
        primaryAction={{ label: "Get a Free Consultation", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        contactInfo={getDefaultContactInfo()}
      />

      <FAQ items={FAQ_DATA} subtitle="Find answers to common questions about our services and process." />

      <Timeline items={COMPANY_TIMELINE} subtitle="Key milestones in the InfraPulse story." />

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.sectionLabel}>
            Base Cards (Design System)
          </Heading>
          <div className={styles.cardGrid}>
            <Card variant="default" hoverable padding="lg">
              <Heading level="h5">Default Card</Heading>
              <Text variant="bodySm" color="secondary">
                Re-exported from Module 2 — used as the foundation for Feature and Product cards.
              </Text>
            </Card>
            <Card variant="glass" padding="lg">
              <Heading level="h5">Glass Card</Heading>
              <Text variant="bodySm" color="secondary">
                Glassmorphism variant for overlays and premium surfaces.
              </Text>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
