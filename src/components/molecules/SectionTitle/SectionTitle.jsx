import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { cn } from "@/utils/cn";
import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  overline,
  title,
  subtitle,
  align = "center",
  gradient = false,
  titleLevel = "h2",
  className,
  id,
}) {
  const alignClass = styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`];

  return (
    <header className={cn(styles.wrapper, alignClass, className)}>
      {overline && (
        <Text variant="overline" color="primary" className={styles.overline}>
          {overline}
        </Text>
      )}
      {title && (
        <Heading
          level={titleLevel}
          align={align}
          gradient={gradient}
          className={styles.title}
          id={id}
        >
          {title}
        </Heading>
      )}
      {subtitle && (
        <Text
          variant="bodyLg"
          color="secondary"
          align={align}
          className={styles.subtitle}
        >
          {subtitle}
        </Text>
      )}
    </header>
  );
}
