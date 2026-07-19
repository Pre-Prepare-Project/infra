"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { ABOUT_TEAM_IMAGE, COMPANY_ABOUT } from "@/data/company";
import { COMPANY } from "@/constants/theme";
import styles from "./CompanySection.module.scss";

export default function CompanySection() {
  return (
    <section className={styles.section} aria-labelledby="company-title">
      <Container>
        <div className={styles.grid}>
          <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
            <Text variant="overline" color="primary" className={styles.overline}>
              Our Company
            </Text>
            <Heading level="h2" id="company-title" className={styles.title}>
              Innovators and Problem Solvers
            </Heading>
            <Text variant="bodyLg" color="secondary" className={styles.paragraph}>
              {COMPANY_ABOUT.overview}
            </Text>
            <Text variant="body" color="secondary" className={styles.paragraph}>
              {COMPANY_ABOUT.story}
            </Text>
            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt>Founded</dt>
                <dd>{COMPANY_ABOUT.founded}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Headquarters</dt>
                <dd>{COMPANY_ABOUT.headquarters}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Company</dt>
                <dd>{COMPANY.name}</dd>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" as="div" className={styles.visual}>
            <div className={styles.imageBlock}>
              <OptimizedImage
                src={ABOUT_TEAM_IMAGE}
                alt="InfraPulse team collaborating in a modern office"
                fill
                sizes="(max-width: 992px) 100vw, 520px"
                className={styles.image}
              />
            </div>
            <div className={styles.industries}>
              <Text variant="overline" color="primary" className={styles.industriesLabel}>
                Industries We Serve
              </Text>
              <ul className={styles.industryList}>
                {COMPANY_ABOUT.industries.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
