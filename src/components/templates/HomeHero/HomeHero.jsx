"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import { ButtonGroup } from "@/components/molecules";
import { COMPANY } from "@/constants/theme";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Container className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <ScrollReveal variant="fadeUp" as="div">
              <p className={styles.badge}>InfraPulse Technologies</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.1} as="div">
              <h1 id="hero-heading" className={styles.title}>
                Building Software That{" "}
                <span className={styles.accent}>Empowers</span> Businesses
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2} as="div">
              <p className={styles.description}>{COMPANY.description}</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.3} as="div">
              <ButtonGroup
                primary={{ label: "Explore Services", href: "/services", variant: "accent" }}
                secondary={{ label: "View Our Work", href: "/portfolio", variant: "outline" }}
                align="left"
                className={styles.actions}
              />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeRight" delay={0.2} as="div" className={styles.visualWrap}>
            <div className={styles.visual}>
              <div className={styles.visualGlow} aria-hidden="true" />
              <div className={styles.visualCard}>
                <div className={styles.visualHeader}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <div className={styles.visualBody}>
                  <div className={styles.metricRow}>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>150+</span>
                      <span className={styles.metricLabel}>Projects</span>
                    </div>
                    <div className={styles.metric}>
                      <span className={styles.metricValue}>98%</span>
                      <span className={styles.metricLabel}>Satisfaction</span>
                    </div>
                  </div>
                  <div className={styles.chartBars} aria-hidden="true">
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                  </div>
                  <p className={styles.visualCaption}>Enterprise Dashboard Preview</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
