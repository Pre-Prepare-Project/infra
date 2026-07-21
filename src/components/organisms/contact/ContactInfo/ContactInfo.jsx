"use client";

import { CheckCircleFilled, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import SocialLinks from "@/components/organisms/Footer/SocialLinks";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { CONTACT_INFO, CONTACT_PAGE } from "@/data/contact";
import styles from "./ContactInfo.module.scss";

export default function ContactInfo({ className }) {
  const { processTitle, processSteps, trustPoints } = CONTACT_PAGE;

  return (
    <aside className={className} aria-labelledby="contact-sidebar-title">
      <ScrollReveal variant="fadeUp" delay={0.1} as="div" className={styles.panel}>
        <Heading level="h3" id="contact-sidebar-title" className={styles.title}>
          {processTitle}
        </Heading>

        <ol className={styles.process}>
          {processSteps.map((step) => (
            <li key={step.id} className={styles.processStep}>
              <span className={styles.stepNumber}>{step.step}</span>
              <div>
                <span className={styles.stepTitle}>{step.title}</span>
                <Text variant="caption" color="secondary" className={styles.stepText}>
                  {step.description}
                </Text>
              </div>
            </li>
          ))}
        </ol>

        <ul className={styles.trustList}>
          {trustPoints.map((point) => (
            <li key={point}>
              <CheckCircleFilled className={styles.trustIcon} aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* <div className={styles.hours}>
          <div className={styles.hoursHeader}>
            <span className={styles.hoursIcon} aria-hidden="true">
              <ClockCircleOutlined />
            </span>
            <Heading level="h5" className={styles.hoursTitle}>
              Business Hours
            </Heading>
          </div>
          <dl className={styles.hoursList}>
            {CONTACT_INFO.businessHours.map((entry) => (
              <div key={entry.days} className={styles.hoursRow}>
                <dt>{entry.days}</dt>
                <dd>{entry.hours}</dd>
              </div>
            ))}
          </dl>
        </div> */}

        <div className={styles.support}>
          <Text variant="caption" color="secondary" className={styles.supportLabel}>
            client support
          </Text>
          <div className={styles.supportLinks}>
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className={styles.supportLink}
            >
              <PhoneOutlined aria-hidden="true" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.supportEmail}`} className={styles.supportLink}>
              <MailOutlined aria-hidden="true" />
              <span>{CONTACT_INFO.supportEmail}</span>
            </a>
          </div>
        </div>

        <div className={styles.social}>
          <Text variant="caption" color="secondary" className={styles.socialLabel}>
            Connect with us
          </Text>
          <SocialLinks links={SOCIAL_LINKS} variant="light" />
        </div>
      </ScrollReveal>
    </aside>
  );
}
