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
import AnimatedIcon from "@/components/atoms/AnimatedIcon/AnimatedIcon";
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

const ANIMATIONS = {
  web: "float",
  erp: "pulse",
  cloud: "glow",
  mobile: "bounce",
  seo: "float",
};

function ServiceCard({ service, className, index = 0 }) {
  const Icon = ICONS[service.iconKey];

  return (
    <Link
      href={service.href}
      className={cn(styles.card, styles[service.tone], className)}
    >
      <AnimatedIcon
        icon={Icon}
        size="sm"
        shape="round"
        animation={ANIMATIONS[service.iconKey] || "float"}
        colorIndex={index}
        delay={(index % 5) + 1}
        className={styles.cardIcon}
      />
      <span className={styles.cardTitle}>{service.title}</span>
      <span className={styles.cardDesc}>{service.description}</span>
    </Link>
  );
}

export default function HeroOrbitVisual() {
  return (
    <div className={styles.wrap}>
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

          <div className={styles.hub}>
            <AnimatedIcon
              icon={ThunderboltOutlined}
              size="lg"
              shape="round"
              animation="pulse"
              variant="rainbow"
            />
          </div>

          {HERO_V2_ORBIT_SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              className={styles[service.position]}
            />
          ))}
        </div>
      </div>

      <div className={styles.orbitMobile}>
        <div className={styles.mobileHub}>
          <AnimatedIcon
            icon={ThunderboltOutlined}
            size="lg"
            shape="round"
            animation="pulse"
            variant="rainbow"
          />
        </div>
        <div className={styles.mobileGrid}>
          {HERO_V2_ORBIT_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
