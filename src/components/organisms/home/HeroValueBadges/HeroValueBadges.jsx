"use client";

import {
  AuditOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import AnimatedIcon from "@/components/atoms/AnimatedIcon/AnimatedIcon";
import { HERO_V2_VALUE_BADGES } from "@/data/homeHeroV2";
import { cn } from "@/utils/cn";
import styles from "./HeroValueBadges.module.scss";

const ICONS = {
  agile: SyncOutlined,
  nda: SafetyCertificateOutlined,
  iso: AuditOutlined,
  delivery: ClockCircleOutlined,
};

const ANIMATIONS = {
  agile: "spinSlow",
  nda: "pulse",
  iso: "glow",
  delivery: "bounce",
};

function BadgeItem({ badge, variant, index }) {
  const Icon = ICONS[badge.iconKey];

  return (
    <li className={cn(styles.item, styles[variant])}>
      <AnimatedIcon
        icon={Icon}
        size="sm"
        shape="round"
        animation={ANIMATIONS[badge.iconKey] || "float"}
        colorIndex={index}
        delay={(index % 4) + 1}
        className={styles.iconWrap}
      />
      <span className={styles.label}>{badge.label}</span>
    </li>
  );
}

export default function HeroValueBadges() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.listMobile} aria-label="Company value highlights">
        {HERO_V2_VALUE_BADGES.map((badge, index) => (
          <BadgeItem key={badge.id} badge={badge} variant="mobile" index={index} />
        ))}
      </ul>

      <ul className={styles.listDesktop} aria-label="Company value highlights">
        {HERO_V2_VALUE_BADGES.map((badge, index) => (
          <BadgeItem key={badge.id} badge={badge} variant="desktop" index={index} />
        ))}
      </ul>
    </div>
  );
}
