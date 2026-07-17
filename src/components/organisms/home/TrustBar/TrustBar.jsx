import Container from "@/components/atoms/Container/Container";
import Text from "@/components/atoms/Text/Text";
import { TRUST_COMPANIES } from "@/data/testimonials";
import styles from "./TrustBar.module.scss";

export default function TrustBar() {
  return (
    <section className={styles.section} aria-label="Trusted by leading companies">
      <Container>
        <Text variant="bodySm" color="secondary" align="center" className={styles.label}>
          Trusted by 200+ companies worldwide
        </Text>
        <ul className={styles.list}>
          {TRUST_COMPANIES.map((company) => (
            <li key={company.name} className={styles.item}>
              <span className={styles.logo}>{company.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
