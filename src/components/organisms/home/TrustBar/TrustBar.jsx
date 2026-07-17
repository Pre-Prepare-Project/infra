import Container from "@/components/atoms/Container/Container";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Text from "@/components/atoms/Text/Text";
import { TRUST_COMPANIES } from "@/data/testimonials";
import { cn } from "@/utils/cn";
import styles from "./TrustBar.module.scss";

export default function TrustBar({ overlap = false }) {
  return (
    <section
      className={cn(styles.section, overlap && styles.overlap)}
      aria-label="Trusted by leading companies"
    >
      <Container>
        <div className={styles.card}>
          <Text variant="bodySm" color="secondary" align="center" className={styles.label}>
            Trusted by 200+ companies worldwide
          </Text>
          <ul className={styles.list}>
            {TRUST_COMPANIES.map((company) => (
              <li key={company.name} className={styles.item}>
                {company.logo ? (
                  <OptimizedImage
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width || 100}
                    height={company.height || 28}
                    className={styles.logoImage}
                  />
                ) : (
                  <span className={styles.logoFallback}>{company.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
