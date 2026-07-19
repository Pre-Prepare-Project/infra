import { ArrowRightOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import ButtonGroup from "@/components/molecules/ButtonGroup/ButtonGroup";
import { cn } from "@/utils/cn";
import styles from "./CTA.module.scss";

const CONTACT_ICONS = {
  Phone: PhoneOutlined,
  Email: MailOutlined,
};

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
  const isHomeBanner = variant === "homeBanner";

  if (isHomeBanner) {
    return (
      <section
        className={cn(styles.section, styles.homeBanner, className)}
        aria-labelledby="cta-title"
      >
        <div className={styles.cornerCurve} aria-hidden="true" />
        <div className={styles.skyline} aria-hidden="true" />
        <div className={styles.orangeFlourish} aria-hidden="true" />

        <Container>
          <div className={styles.bannerInner}>
            <div className={styles.bannerContent}>
              {title && (
                <Heading level="h2" id="cta-title" className={styles.bannerTitle}>
                  {title}
                </Heading>
              )}
              {subtitle && (
                <Text variant="bodyLg" className={styles.bannerSubtitle}>
                  {subtitle}
                </Text>
              )}

              <div className={styles.bannerActions}>
                {primaryAction && (
                  <Button
                    variant="accent"
                    size="lg"
                    href={primaryAction.href}
                    className={styles.bannerButton}
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    {primaryAction.label}
                  </Button>
                )}

                {primaryAction && contactInfo?.length > 0 && (
                  <span className={styles.actionDivider} aria-hidden="true" />
                )}

                {contactInfo?.map((item, index) => {
                  const Icon = CONTACT_ICONS[item.label] || PhoneOutlined;

                  return (
                    <div key={item.label} className={styles.actionRowGroup}>
                      {index > 0 && <span className={styles.actionDivider} aria-hidden="true" />}
                      {item.href ? (
                        <a href={item.href} className={styles.contactLink}>
                          <Icon aria-hidden="true" />
                          <span>{item.value}</span>
                        </a>
                      ) : (
                        <span className={styles.contactLink}>
                          <Icon aria-hidden="true" />
                          <span>{item.value}</span>
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

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
