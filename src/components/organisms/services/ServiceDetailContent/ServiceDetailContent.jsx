"use client";

import { ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { SectionTitle } from "@/components/molecules";
import { PROCESS_STEPS } from "@/data/process";
import { getServiceIcon } from "@/lib/service-icons";
import styles from "./ServiceDetailContent.module.scss";

export default function ServiceDetailContent({ service }) {
  const Icon = getServiceIcon(service.iconKey);

  return (
    <>
      <section className={styles.overview} aria-labelledby="service-overview-title">
        <Container>
          <div className={styles.overviewGrid}>
            <ScrollReveal variant="fadeLeft" as="div" className={styles.content}>
              <Text variant="overline" color="primary" className={styles.overline}>
                Service Overview
              </Text>
              <Heading level="h2" id="service-overview-title" className={styles.title}>
                {service.title}
              </Heading>
              <Text variant="bodyLg" color="secondary" className={styles.description}>
                {service.longDescription}
              </Text>
              <Button variant="accent" href="/contact" icon={<ArrowRightOutlined />}>
                Request a Quote
              </Button>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" as="div">
              <Card variant="accent" padding="lg" className={styles.iconCard}>
                <span className={styles.iconWrap} aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <Heading level="h4">{service.title}</Heading>
                <Text variant="bodySm" color="secondary">
                  {service.description}
                </Text>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.features} aria-labelledby="service-features-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="What's Included"
              title="Key Features & Deliverables"
              subtitle="Everything you need for a successful project delivery."
              id="service-features-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.1} as="ul" className={styles.featureList}>
            {service.features.map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <CheckCircleFilled className={styles.checkIcon} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section className={styles.process} aria-labelledby="service-process-title">
        <Container>
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline="Our Approach"
              title="How We Deliver"
              subtitle="A proven process that ensures quality, transparency, and on-time delivery."
              id="service-process-title"
              className={styles.sectionHeader}
            />
          </ScrollReveal>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step, index) => (
              <ScrollReveal key={step.id} variant="fadeUp" delay={index * 0.08} as="article" className={styles.processStep}>
                <span className={styles.stepNumber}>{step.step}</span>
                <Heading level="h5">{step.title}</Heading>
                <Text variant="bodySm" color="secondary">
                  {step.description}
                </Text>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
