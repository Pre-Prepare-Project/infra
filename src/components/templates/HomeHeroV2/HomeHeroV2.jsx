"use client";

import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Button from "@/components/atoms/Button/Button";
import HeroOrbitVisual from "@/components/organisms/home/HeroOrbitVisual/HeroOrbitVisual";
import HeroSocialProof from "@/components/organisms/home/HeroSocialProof/HeroSocialProof";
import HeroValueBadges from "@/components/organisms/home/HeroValueBadges/HeroValueBadges";
import TrustBar from "@/components/organisms/home/TrustBar/TrustBar";
import { HERO_V2_DESCRIPTION } from "@/data/homeHeroV2";
import styles from "./HomeHeroV2.module.scss";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";

export default function HomeHeroV2() {
  return (
    <section className={styles.hero} aria-labelledby="hero-v2-heading">
      <div className={styles.bgGlowBlue} aria-hidden="true" />
      <div className={styles.bgGlowAccent} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <ScrollReveal variant="fadeUp" as="div">
            <p className={styles.badge}>
                <OptimizedImage
                  src="/images/logo-mark-clean.png"
                  alt=""
                  width={18}
                  height={18}
                  className={styles.badgeIcon}
                />
                We Build Scalable Digital Solutions
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.08} as="div">
              <h1 id="hero-v2-heading" className={styles.title}>
                Building Software That <span className={styles.accent}>Empowers</span> Businesses
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.16} as="div">
              <p className={styles.description}>{HERO_V2_DESCRIPTION}</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.24} as="div">
              <div className={styles.actions}>
                <Button
                  variant="accent"
                  size="lg"
                  href="/services"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore Services
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/portfolio"
                  icon={<PlayCircleOutlined />}
                  className={styles.secondaryBtn}
                >
                  View Our Work
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.32} as="div">
              <HeroSocialProof />
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.38} as="div">
              <HeroValueBadges />
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fadeRight" delay={0.15} as="div" className={styles.visualWrap}>
            <HeroOrbitVisual />
          </ScrollReveal>
        </div>
      </Container>

      <TrustBar overlap />
    </section>
  );
}
