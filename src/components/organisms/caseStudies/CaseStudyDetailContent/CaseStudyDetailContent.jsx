"use client";

import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { SectionTitle } from "@/components/molecules";
import styles from "./CaseStudyDetailContent.module.scss";

export default function CaseStudyDetailContent({ study }) {
  const portfolioHref = study.portfolioSlug ? `/portfolio/${study.portfolioSlug}` : null;

  return (
    <>
      <section className={styles.overview} aria-labelledby="case-study-overview-title">
        <Container>
          <div className={styles.overviewGrid}>
            <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
              <Text variant="overline" color="primary" className={styles.overline}>
                Case Study
              </Text>
              <Heading level="h2" id="case-study-overview-title" className={styles.title}>
                {study.title}
              </Heading>
              <Text variant="bodyLg" color="secondary" className={styles.description}>
                {study.longDescription}
              </Text>
              <div className={styles.actions}>
                <Button variant="accent" href="/contact" icon={<ArrowRightOutlined />}>
                  Discuss Your Project
                </Button>
                {portfolioHref && (
                  <Button variant="outline" href={portfolioHref}>
                    View Portfolio Project
                  </Button>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" as="div">
              <Card variant="accent" padding="lg" className={styles.metaCard}>
                <span className={styles.badge}>{study.categoryLabel}</span>
                <dl className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <dt>Client</dt>
                    <dd>{study.client}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Industry</dt>
                    <dd>{study.industry}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Year</dt>
                    <dd>{study.year}</dd>
                  </div>
                </dl>
                <ul className={styles.techList}>
                  {study.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.metrics} aria-label="Key project metrics">
        <Container>
          <ScrollRevealGrid className={styles.metricsGrid} stagger={0.08}>
            {study.metrics.map((metric) => (
              <ScrollRevealItem key={metric.label} as="article" className={styles.metricCard}>
                <p className={styles.metricValue}>{metric.value}</p>
                <Text variant="bodySm" color="secondary">
                  {metric.label}
                </Text>
              </ScrollRevealItem>
            ))}
          </ScrollRevealGrid>
        </Container>
      </section>

      <section className={styles.details} aria-labelledby="case-study-details-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="The Story"
              title="Challenge, Solution & Approach"
              subtitle="How we partnered with the client to deliver measurable business impact."
              id="case-study-details-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>

          <div className={styles.detailsGrid}>
            <ScrollReveal variant="fadeUp" delay={0.05} as="article" className={styles.detailCard}>
              <Heading level="h4">The Challenge</Heading>
              <Text variant="bodySm" color="secondary">
                {study.challenge}
              </Text>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1} as="article" className={styles.detailCard}>
              <Heading level="h4">Our Solution</Heading>
              <Text variant="bodySm" color="secondary">
                {study.solution}
              </Text>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.15} as="article" className={styles.detailCard}>
              <Heading level="h4">Our Approach</Heading>
              <ol className={styles.approachList}>
                {study.approach.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.results} aria-labelledby="case-study-results-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Outcomes"
              title="Results Delivered"
              id="case-study-results-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1} as="ul" className={styles.resultsList}>
            {study.results.map((result) => (
              <li key={result}>
                <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                <span>{result}</span>
              </li>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      {study.testimonial && (
        <section className={styles.testimonial} aria-labelledby="case-study-testimonial-title">
          <Container>
            <ScrollReveal variant="fadeUp" as="figure" className={styles.testimonialCard}>
              <Heading level="h3" id="case-study-testimonial-title" className={styles.visuallyHidden}>
                Client Testimonial
              </Heading>
              <blockquote className={styles.quote}>
                &ldquo;{study.testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {study.testimonial.name.charAt(0)}
                </span>
                <div>
                  <Text variant="bodySm" weight="semibold">
                    {study.testimonial.name}
                  </Text>
                  <Text variant="caption" color="secondary">
                    {study.testimonial.role}, {study.testimonial.company}
                  </Text>
                </div>
              </figcaption>
            </ScrollReveal>
          </Container>
        </section>
      )}
    </>
  );
}
