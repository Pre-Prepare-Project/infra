"use client";

import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { CONTACT_DETAILS, CONTACT_INFO } from "@/data/contact";
import styles from "./ContactInfo.module.scss";

const ICON_MAP = {
  email: MailOutlined,
  phone: PhoneOutlined,
  address: EnvironmentOutlined,
};

export default function ContactInfo({ className }) {
  return (
    <aside className={className} aria-labelledby="contact-info-title">
      <ScrollReveal variant="fadeUp">
        <SectionTitle
          overline="Get in Touch"
          title="Contact Information"
          subtitle="Reach out to discuss your project, request a demo, or learn more about InfraPulse."
          id="contact-info-title"
          className={styles.header}
        />
      </ScrollReveal>

      <div className={styles.cards}>
        {CONTACT_DETAILS.map((item, index) => {
          const Icon = ICON_MAP[item.id];

          return (
            <ScrollReveal key={item.id} variant="fadeUp" delay={index * 0.08} as="article">
              <Card variant="default" padding="lg" hoverable className={styles.card}>
                <span className={styles.iconWrap} aria-hidden="true">
                  {Icon && <Icon />}
                </span>
                <Heading level="h5">{item.label}</Heading>
                {item.href ? (
                  <a href={item.href} className={styles.valueLink}>
                    {item.value}
                  </a>
                ) : (
                  <Text variant="bodySm" weight="semibold" className={styles.value}>
                    {item.value}
                  </Text>
                )}
                <Text variant="caption" color="secondary">
                  {item.description}
                </Text>
              </Card>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal variant="fadeUp" delay={0.2} as="div" className={styles.hours}>
        <Card variant="accent" padding="lg" className={styles.hoursCard}>
          <span className={styles.iconWrap} aria-hidden="true">
            <ClockCircleOutlined />
          </span>
          <Heading level="h5">Business Hours</Heading>
          <dl className={styles.hoursList}>
            {CONTACT_INFO.businessHours.map((entry) => (
              <div key={entry.days} className={styles.hoursItem}>
                <dt>{entry.days}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </ScrollReveal>
    </aside>
  );
}
