"use client";

import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Heading from "@/components/atoms/Heading/Heading";
import { FeatureCard } from "@/components/molecules";
import { getServicesWithIcons } from "@/lib/content";
import styles from "./HomeServices.module.scss";

const SERVICES = getServicesWithIcons();

export default function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="home-services-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <Heading level="h2" id="home-services-title" className={styles.title}>
              Our Services
            </Heading>
            <Link href="/services" className={styles.viewAll}>
              View All Services
              <ArrowRightOutlined aria-hidden="true" />
            </Link>
          </div>
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
      </Container>
    </section>
  );
}
