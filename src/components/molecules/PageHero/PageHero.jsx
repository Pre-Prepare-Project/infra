import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb";
import { cn } from "@/utils/cn";
import styles from "./PageHero.module.scss";

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  variant = "dark",
  className,
}) {
  const variantClass = styles[variant];

  return (
    <section className={cn(styles.hero, variantClass, className)} aria-labelledby="page-hero-title">
      <Container className={styles.container}>
        {breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className={styles.breadcrumb} />
        )}
        <Heading level="h1" id="page-hero-title" className={styles.title}>
          {title}
        </Heading>
        {subtitle && (
          <Text variant="bodyLg" className={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </Container>
    </section>
  );
}
