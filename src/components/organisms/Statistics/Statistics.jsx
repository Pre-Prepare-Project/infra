import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import StatCard from "@/components/molecules/StatCard/StatCard";
import { cn } from "@/utils/cn";
import styles from "./Statistics.module.scss";

export default function Statistics({
  items = [],
  overline,
  title,
  subtitle,
  align = "center",
  className,
  columns = 5,
  animate = true,
}) {
  if (!items.length) {
    return null;
  }

  const columnClass = styles[`cols${Math.min(columns, 5)}`];

  return (
    <section className={cn(styles.section, className)} aria-labelledby={title ? "statistics-title" : undefined}>
      <Container>
        {(overline || title || subtitle) && (
          <ScrollReveal variant="fadeUp">
            <SectionTitle
              overline={overline}
              title={title}
              subtitle={subtitle}
              align={align}
              id="statistics-title"
              className={styles.header}
            />
          </ScrollReveal>
        )}
        {animate ? (
          <ScrollRevealGrid className={cn(styles.grid, columnClass)} stagger={0.08}>
            {items.map((item) => (
              <ScrollRevealItem key={item.label} as="div">
                <StatCard
                  value={item.value}
                  label={item.label}
                  suffix={item.suffix}
                  prefix={item.prefix}
                  animate={item.animate !== false}
                />
              </ScrollRevealItem>
            ))}
          </ScrollRevealGrid>
        ) : (
          <div className={cn(styles.grid, columnClass)}>
            {items.map((item) => (
              <StatCard
                key={item.label}
                value={item.value}
                label={item.label}
                suffix={item.suffix}
                prefix={item.prefix}
                animate={item.animate !== false}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
