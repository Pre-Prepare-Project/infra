import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { CONTACT_INFO } from "@/data/contact";
import styles from "./ContactMap.module.scss";

export default function ContactMap({ className }) {
  return (
    <section className={className} aria-labelledby="contact-map-title">
      <Container>
        <div className={styles.header}>
          <Text variant="overline" color="primary">
            Our Location
          </Text>
          <Heading level="h2" id="contact-map-title">
            Find Us on the Map
          </Heading>
          <Text variant="bodySm" color="secondary">
            {CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2},{" "}
            {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
          </Text>
        </div>

        <div className={styles.mapWrap}>
          <iframe
            title="InfraPulse office location on Google Maps"
            src={CONTACT_INFO.mapEmbedUrl}
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
}
