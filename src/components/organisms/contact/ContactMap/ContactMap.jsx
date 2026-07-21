import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";
import { CONTACT_INFO } from "@/data/contact";
import styles from "./ContactMap.module.scss";

export default function ContactMap({ className }) {
  const fullAddress = `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.country}`;

  return (
    <section aria-labelledby="contact-map-title">
      {/* <Container className={styles.header}>
        <Text variant="overline" color="primary">
          Our Location
        </Text>
        <Heading level="h2" id="contact-map-title" className={styles.title}>
          Visit InfraPulse
        </Heading>
        <Text variant="bodySm" color="secondary" className={styles.address}>
          {fullAddress}
        </Text>
        <Button variant="outline" href={CONTACT_INFO.mapLink} className={styles.directions}>
          Open in Google Maps
        </Button>
      </Container> */}

      <div >
        <div >
          <iframe
            title="InfraPulse office location on Google Maps"
            src={CONTACT_INFO.mapEmbedUrl}
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
