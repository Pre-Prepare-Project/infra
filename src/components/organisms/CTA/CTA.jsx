import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import ButtonGroup from "@/components/molecules/ButtonGroup/ButtonGroup";
import { cn } from "@/utils/cn";
import styles from "./CTA.module.scss";

export default function CTA({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  variant = "dark",
  align = "center",
  className,
  contactInfo,
}) {
  const alignClass = styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`];
  const variantClass = styles[variant];

  return (
    <section className={cn(styles.section, variantClass, alignClass, className)} aria-labelledby="cta-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            {title && (
              <Heading level="h2" id="cta-title" className={styles.title}>
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text variant="bodyLg" className={styles.subtitle}>
                {subtitle}
              </Text>
            )}
            {(primaryAction || secondaryAction) && (
              <ButtonGroup
                primary={primaryAction}
                secondary={secondaryAction}
                align={align}
                size="lg"
                className={styles.actions}
              />
            )}
          </div>
          {contactInfo && (
            <div className={styles.contact}>
              {contactInfo.map((item) => (
                <div key={item.label} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.contactValue}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.contactValue}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
