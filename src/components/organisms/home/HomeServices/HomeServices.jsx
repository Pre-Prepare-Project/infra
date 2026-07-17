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
import styles from "./HomeServices.module.scss";

const SERVICES = getServicesWithIcons();

export default function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="home-services-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Services"
            title="Solutions That Drive Digital Growth"
            subtitle="From web and mobile to ERP and cloud — we deliver end-to-end software services tailored to your business."
            id="home-services-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {SERVICES.slice(0, 6).map((service) => (
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

        <ScrollReveal variant="fadeUp" className={styles.footer}>
          <Button variant="outline" href="/services" icon={<ArrowRightOutlined />}>
            View All Services
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
