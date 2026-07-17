"use client";

import { CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import CareerApplyForm from "@/components/organisms/careers/CareerApplyForm/CareerApplyForm";
import styles from "./JobDetailContent.module.scss";

export default function JobDetailContent({ job }) {
  return (
    <>
      <section className={styles.overview} aria-labelledby="job-overview-title">
        <Container>
          <div className={styles.overviewGrid}>
            <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
              <Text variant="overline" color="primary" className={styles.overline}>
                Role Overview
              </Text>
              <Heading level="h2" id="job-overview-title" className={styles.title}>
                {job.title}
              </Heading>
              <Text variant="bodyLg" color="secondary" className={styles.description}>
                {job.longDescription}
              </Text>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" as="div">
              <Card variant="accent" padding="lg" className={styles.metaCard}>
                <span className={styles.badge}>{job.departmentLabel}</span>
                <dl className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <dt>Location</dt>
                    <dd>{job.location}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Type</dt>
                    <dd>{job.type}</dd>
                  </div>
                  <div className={styles.metaItem}>
                    <dt>Experience</dt>
                    <dd>{job.experience}</dd>
                  </div>
                </dl>
                <ul className={styles.techList}>
                  {job.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.details} aria-labelledby="job-details-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Role Details"
              title="Responsibilities & Requirements"
              id="job-details-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>

          <div className={styles.detailsGrid}>
            <ScrollReveal variant="fadeUp" delay={0.05} as="article" className={styles.detailCard}>
              <Heading level="h4">Key Responsibilities</Heading>
              <ul className={styles.list}>
                {job.responsibilities.map((item) => (
                  <li key={item}>
                    <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1} as="article" className={styles.detailCard}>
              <Heading level="h4">Requirements</Heading>
              <ul className={styles.list}>
                {job.requirements.map((item) => (
                  <li key={item}>
                    <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <CareerApplyForm jobTitle={job.title} className={styles.apply} />
    </>
  );
}
