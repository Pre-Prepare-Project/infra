import Container from "@/components/atoms/Container/Container";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/utils/cn";
import styles from "./Timeline.module.scss";

export default function Timeline({
  items = [],
  overline = "Our Journey",
  title = "Company Timeline",
  subtitle,
  align = "center",
  className,
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className={cn(styles.section, className)} aria-labelledby="timeline-title">
      <Container>
        <SectionTitle
          overline={overline}
          title={title}
          subtitle={subtitle}
          align={align}
          id="timeline-title"
          className={styles.header}
        />
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={item.year ?? index} className={styles.item}>
              <div className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </div>
              <article className={styles.content}>
                <span className={styles.year}>{item.year}</span>
                <Heading level="h5" className={styles.itemTitle}>
                  {item.title}
                </Heading>
                <Text variant="bodySm" color="secondary">
                  {item.description}
                </Text>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
