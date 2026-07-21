import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import SocialLinks from "@/components/organisms/Footer/SocialLinks";
import { SOCIAL_LINKS } from "@/constants/navigation";
import styles from "./ContactSocial.module.scss";

export default function ContactSocial({ className }) {
  return (
    <section className={className} aria-labelledby="contact-social-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.content}>
            <Text variant="overline" color="primary">
              Stay Connected
            </Text>
            <Heading level="h2" id="contact-social-title">
              Follow InfraPulse
            </Heading>
            <Text variant="bodySm" color="secondary">
              Connect with us on social media for company updates, product news, and tech insights.
            </Text>
          </div>
          <SocialLinks links={SOCIAL_LINKS} variant="light" />
        </div>
      </Container>
    </section>
  );
}
