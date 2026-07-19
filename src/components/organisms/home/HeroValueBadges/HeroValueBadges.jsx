import {
  AuditOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { HERO_V2_VALUE_BADGES } from "@/data/homeHeroV2";
import { cn } from "@/utils/cn";
import styles from "./HeroValueBadges.module.scss";

const ICONS = {
  agile: SyncOutlined,
  nda: SafetyCertificateOutlined,
  iso: AuditOutlined,
  delivery: ClockCircleOutlined,
};

function BadgeItem({ badge, variant }) {
  const Icon = ICONS[badge.iconKey];

  return (
    <li className={cn(styles.item, styles[variant])}>
      <span className={styles.iconWrap} aria-hidden="true">
        <Icon />
      </span>
      <span className={styles.label}>{badge.label}</span>
    </li>
  );
}

export default function HeroValueBadges() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.listMobile} aria-label="Company value highlights">
        {HERO_V2_VALUE_BADGES.map((badge) => (
          <BadgeItem key={badge.id} badge={badge} variant="mobile" />
        ))}
      </ul>

      <ul className={styles.listDesktop} aria-label="Company value highlights">
        {HERO_V2_VALUE_BADGES.map((badge) => (
          <BadgeItem key={badge.id} badge={badge}  />
        ))}
      </ul>
    </div>
  );
}
