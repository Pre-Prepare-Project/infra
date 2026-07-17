import {
  CustomerServiceOutlined,
  ProjectOutlined,
  SmileOutlined,
  FieldTimeOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import { STATISTICS } from "@/data/statistics";
import styles from "./HomeStatsBar.module.scss";

const ICONS = {
  projects: ProjectOutlined,
  clients: SmileOutlined,
  experience: FieldTimeOutlined,
  support: CustomerServiceOutlined,
  satisfaction: TrophyOutlined,
};

export default function HomeStatsBar() {
  return (
    <section className={styles.section} aria-label="Company statistics">
      <Container>
        <ul className={styles.list}>
          {STATISTICS.map((stat) => {
            const Icon = ICONS[stat.id] || ProjectOutlined;

            return (
              <li key={stat.id} className={styles.item}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <Icon />
                </span>
                <div className={styles.content}>
                  <span className={styles.value}>
                    {stat.value}
                    {stat.suffix || ""}
                  </span>
                  <span className={styles.label}>{stat.label}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
