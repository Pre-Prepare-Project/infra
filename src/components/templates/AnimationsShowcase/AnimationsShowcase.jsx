"use client";

import Container from "@/components/atoms/Container/Container";
import HoverEffect from "@/components/atoms/HoverEffect/HoverEffect";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import { Card, Heading, Text } from "@/components/atoms";
import { FeatureCard, StatCard } from "@/components/molecules";
import { Statistics } from "@/components/organisms";
import { STATISTICS } from "@/data";
import { getServicesWithIcons } from "@/lib/content";
import { mapStatisticsForComponent } from "@/utils/data";
import styles from "./AnimationsShowcase.module.scss";

const SERVICES = getServicesWithIcons();
const STATS = mapStatisticsForComponent(STATISTICS);

export default function AnimationsShowcase() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <ScrollReveal variant="fadeUp">
            <Text variant="overline" color="primary" className={styles.badge}>
              Module 6 — Animations
            </Text>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <Heading level="displayLg" gradient align="center">
              Motion & Interaction
            </Heading>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <Text variant="bodyLg" color="secondary" align="center" className={styles.subtitle}>
              Page transitions, scroll reveals, hover effects, and animated counters — all respecting
              reduced-motion preferences.
            </Text>
          </ScrollReveal>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.label}>
            Scroll Reveal Variants
          </Heading>
          <div className={styles.revealGrid}>
            <ScrollReveal variant="fadeUp">
              <Card variant="flat" padding="lg">
                <Heading level="h5">Fade Up</Heading>
                <Text variant="bodySm" color="secondary">
                  Default reveal — opacity + translateY.
                </Text>
              </Card>
            </ScrollReveal>
            <ScrollReveal variant="fadeLeft">
              <Card variant="flat" padding="lg">
                <Heading level="h5">Fade Left</Heading>
                <Text variant="bodySm" color="secondary">
                  Slides in from the left.
                </Text>
              </Card>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <Card variant="flat" padding="lg">
                <Heading level="h5">Fade Right</Heading>
                <Text variant="bodySm" color="secondary">
                  Slides in from the right.
                </Text>
              </Card>
            </ScrollReveal>
            <ScrollReveal variant="scaleUp">
              <Card variant="flat" padding="lg">
                <Heading level="h5">Scale Up</Heading>
                <Text variant="bodySm" color="secondary">
                  Subtle scale + fade entrance.
                </Text>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.label}>
            Stagger Grid
          </Heading>
          <ScrollRevealGrid className={styles.staggerGrid} stagger={0.12}>
            {SERVICES.slice(0, 4).map((service) => (
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

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.label}>
            Hover Effects
          </Heading>
          <div className={styles.hoverGrid}>
            <HoverEffect effect="lift">
              <Card variant="default" padding="lg" className={styles.hoverCard}>
                <Heading level="h5">Lift</Heading>
                <Text variant="bodySm" color="secondary">
                  Hover to lift — y: -6px spring.
                </Text>
              </Card>
            </HoverEffect>
            <HoverEffect effect="scale">
              <Card variant="default" padding="lg" className={styles.hoverCard}>
                <Heading level="h5">Scale</Heading>
                <Text variant="bodySm" color="secondary">
                  Hover to scale — 1.03x + lift.
                </Text>
              </Card>
            </HoverEffect>
            <HoverEffect effect="subtle">
              <Card variant="default" padding="lg" className={styles.hoverCard}>
                <Heading level="h5">Subtle</Heading>
                <Text variant="bodySm" color="secondary">
                  Minimal -2px lift on hover.
                </Text>
              </Card>
            </HoverEffect>
          </div>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.label}>
            Animated Counters
          </Heading>
          <div className={styles.counterGrid}>
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <Statistics
        overline="Live Integration"
        title="Statistics with Scroll Reveal + Counters"
        subtitle="Powered by centralized static data from Module 7."
        items={STATS.slice(0, 3)}
        columns={3}
      />

      <section className={styles.section}>
        <Container>
          <Heading level="h3" className={styles.label}>
            Page Transitions
          </Heading>
          <Card variant="glass" padding="lg">
            <Text variant="body">
              Navigate between pages to see fade + slide transitions. Enabled globally via PageTransition
              in the root layout. Disabled when prefers-reduced-motion is set.
            </Text>
          </Card>
        </Container>
      </section>
    </div>
  );
}
