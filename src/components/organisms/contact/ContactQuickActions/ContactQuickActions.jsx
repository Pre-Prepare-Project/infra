"use client";

import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Text from "@/components/atoms/Text/Text";
import { CONTACT_INFO, CONTACT_QUICK_ACTIONS } from "@/data/contact";
import styles from "./ContactQuickActions.module.scss";

const ICON_MAP = {
  phone: PhoneOutlined,
  email: MailOutlined,
  address: EnvironmentOutlined,
};

const HREF_MAP = {
  phone: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  email: `mailto:${CONTACT_INFO.email}`,
  address: CONTACT_INFO.mapLink,
};

const VALUE_MAP = {
  phone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  addressShort: CONTACT_INFO.addressShort,
};

export default function ContactQuickActions({ className }) {
  return (
    <section className={className} aria-label="Quick contact options">
      <Container>
        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {CONTACT_QUICK_ACTIONS.map((action) => {
            const Icon = ICON_MAP[action.icon];
            const href = HREF_MAP[action.id];
            const value = VALUE_MAP[action.valueKey];

            return (
              <ScrollRevealItem key={action.id} as="article">
                <a href={href} className={styles.card}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    {Icon && <Icon />}
                  </span>
                  <div className={styles.body}>
                    <Text variant="overline" color="primary" className={styles.label}>
                      {action.label}
                    </Text>
                    <span className={styles.value}>{value}</span>
                    <Text variant="caption" color="secondary">
                      {action.description}
                    </Text>
                  </div>
                  <span className={styles.cta}>
                    {action.cta}
                    <ArrowRightOutlined aria-hidden="true" />
                  </span>
                </a>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
