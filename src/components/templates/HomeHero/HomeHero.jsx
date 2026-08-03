"use client";

import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Button from "@/components/atoms/Button/Button";
import TrustBar from "@/components/organisms/home/TrustBar/TrustBar";
import styles from "./HomeHero.module.scss";

const HERO_DESCRIPTION =
  "We deliver innovative web, mobile, ERP and SEO solutions that help startups and enterprises grow faster, smarter and stronger.";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.bgShapeBlue} aria-hidden="true" />
      <div className={styles.bgShapeAccent} aria-hidden="true" />

      <Container className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
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
            <h1 id="hero-heading" className={styles.title}>
              Building Software That <span className={styles.accent}>Empowers</span> Businesses
            </h1>
            <p className={styles.description}>{HERO_DESCRIPTION}</p>
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
              >
                View Our Work
              </Button>
            </div>
          </div>

          <div className={styles.visualWrap}>
            <div className={styles.visual}>
              <div className={styles.ringOuter} aria-hidden="true" />
              <div className={styles.ringInner} aria-hidden="true" />
              <div className={styles.imageFrame}>
                <OptimizedImage
                  src="/images/hero-building.jpg"
                  alt="InfraPulse Technologies modern office building"
                  width={520}
                  height={420}
                  priority
                  sizes="(max-width: 992px) 100vw, 520px"
                  className={styles.heroImage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <TrustBar overlap /> */}
    </section>
  );
}
