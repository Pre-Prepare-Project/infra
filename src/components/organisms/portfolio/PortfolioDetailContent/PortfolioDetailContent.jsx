"use client";

import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { SectionTitle } from "@/components/molecules";
import styles from "./PortfolioDetailContent.module.scss";

export default function PortfolioDetailContent({ project }) {
  return (
    <>
      <section className={styles.overview} aria-labelledby="portfolio-overview-title">
        <Container>
          <div className={styles.overviewGrid}>
            <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
              <Text variant="overline" color="primary" className={styles.overline}>
                Project Overview
              </Text>
              <Heading level="h2" id="portfolio-overview-title" className={styles.title}>
                {project.title}
              </Heading>
              <Text variant="bodyLg" color="secondary" className={styles.description}>
                {project.longDescription}
              </Text>
              <Button variant="accent" href="/contact" icon={<ArrowRightOutlined />}>
                Start a Similar Project
              </Button>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" as="div">
              <Card variant="accent" padding="lg" className={styles.metaCard}>
                <span className={styles.badge}>{project.categoryLabel}</span>
                <dl className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <dt>Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Category</dt>
                    <dd>{project.categoryLabel}</dd>
                  </div>
                </dl>
                <ul className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.details} aria-labelledby="portfolio-details-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Project Story"
              title="Challenge, Solution & Results"
              subtitle="How we approached this project and the outcomes we delivered."
              id="portfolio-details-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>

          <div className={styles.detailsGrid}>
            <ScrollReveal variant="fadeUp" delay={0.05} as="article" className={styles.detailCard}>
              <Heading level="h4">The Challenge</Heading>
              <Text variant="bodySm" color="secondary">
                {project.challenge}
              </Text>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1} as="article" className={styles.detailCard}>
              <Heading level="h4">Our Solution</Heading>
              <Text variant="bodySm" color="secondary">
                {project.solution}
              </Text>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.15} as="article" className={styles.detailCard}>
              <Heading level="h4">Key Results</Heading>
              <ul className={styles.resultsList}>
                {project.results.map((result) => (
                  <li key={result}>
                    <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
