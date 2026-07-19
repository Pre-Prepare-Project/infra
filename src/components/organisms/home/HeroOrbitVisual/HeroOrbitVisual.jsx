"use client";

import Link from "next/link";
import {
  BarChartOutlined,
  CloudOutlined,
  CodeOutlined,
  LineChartOutlined,
  MobileOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { HERO_V2_ORBIT_SERVICES } from "@/data/homeHeroV2";
import { cn } from "@/utils/cn";
import styles from "./HeroOrbitVisual.module.scss";

const ICONS = {
  web: CodeOutlined,
  erp: BarChartOutlined,
  cloud: CloudOutlined,
  mobile: MobileOutlined,
  seo: LineChartOutlined,
};

function ServiceCard({ service, className }) {
  const Icon = ICONS[service.iconKey];

  return (
    <Link
      href={service.href}
      className={cn(styles.card, styles[service.tone], className)}
    >
      <span className={styles.cardIcon}>
        <Icon />
      </span>
      <span className={styles.cardTitle}>{service.title}</span>
      <span className={styles.cardDesc}>{service.description}</span>
    </Link>
  );
}

export default function HeroOrbitVisual() {
  return (
    <div className={styles.wrap}>
      {/* <p className={styles.tagline}>
        We turn ideas into powerful digital products that drive{" "}
        <span className={styles.accent}>real business growth.</span>
      </p> */}

      {/* Desktop orbit diagram */}
      <div className={styles.orbitDesktop} aria-hidden="false">
        <div className={styles.stage}>
          <div className={styles.glowBlue} aria-hidden="true" />
          <div className={styles.glowAccent} aria-hidden="true" />
          <div className={styles.ringOuter} aria-hidden="true" />
          <div className={styles.ringInner} aria-hidden="true" />

          <span className={cn(styles.orbitDot, styles.dotTop)} aria-hidden="true" />
          <span className={cn(styles.orbitDot, styles.dotLeftTop)} aria-hidden="true" />
          <span className={cn(styles.orbitDot, styles.dotLeftBottom)} aria-hidden="true" />
          <span className={cn(styles.orbitDot, styles.dotRightTop)} aria-hidden="true" />
          <span className={cn(styles.orbitDot, styles.dotRightBottom)} aria-hidden="true" />

          <div className={styles.hub} aria-hidden="true">
            <ThunderboltOutlined />
          </div>

          {HERO_V2_ORBIT_SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              className={styles[service.position]}
            />
          ))}
        </div>
      </div>

      {/* Mobile / tablet stacked layout */}
      <div className={styles.orbitMobile}>
        <div className={styles.mobileHub} aria-hidden="true">
          <ThunderboltOutlined />
        </div>
        <div className={styles.mobileGrid}>
          {HERO_V2_ORBIT_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
