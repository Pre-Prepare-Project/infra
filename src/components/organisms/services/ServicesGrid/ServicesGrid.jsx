"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Button from "@/components/atoms/Button/Button";
import { FeatureCard, SectionTitle } from "@/components/molecules";
import { getServicesWithIcons } from "@/lib/content";
import styles from "./ServicesGrid.module.scss";

const SERVICES = getServicesWithIcons();

export default function ServicesGrid({ limit, showViewAll = false, className }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className={className} aria-labelledby="services-grid-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="What We Offer"
            title="Comprehensive Software Services"
            subtitle="End-to-end development services designed to help your business grow, scale, and succeed in the digital landscape."
            id="services-grid-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {items.map((service) => (
            <ScrollRevealItem key={service.id} as="div">
              <FeatureCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>

        {showViewAll && limit && limit < SERVICES.length && (
          <ScrollReveal variant="fadeUp" className={styles.footer}>
            <Button variant="outline" href="/services" icon={<ArrowRightOutlined />}>
              View All Services
            </Button>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}
