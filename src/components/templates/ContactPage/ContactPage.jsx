import PageHero from "@/components/molecules/PageHero/PageHero";
import Container from "@/components/atoms/Container/Container";
import ContactQuickActions from "@/components/organisms/contact/ContactQuickActions/ContactQuickActions";
import ContactInfo from "@/components/organisms/contact/ContactInfo/ContactInfo";
import ContactForm from "@/components/organisms/contact/ContactForm/ContactForm";
import ContactMap from "@/components/organisms/contact/ContactMap/ContactMap";
import { CONTACT_PAGE } from "@/data/contact";
import styles from "./ContactPage.module.scss";

const CONTACT_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const { hero } = CONTACT_PAGE;

  return (
    <>
      <div className={styles.heroWrap}>
        <PageHero
          title={hero.title}
          subtitle={hero.subtitle}
          breadcrumbs={CONTACT_BREADCRUMBS}
        />
        <ContactQuickActions className={styles.quickActions} />
      </div>

      <section className={styles.main} aria-label="Contact form">
        <Container>
          <div className={styles.grid}>
            <ContactForm className={styles.form} showHeader={false} />
            <ContactInfo className={styles.info} />
          </div>
        </Container>
      </section>

      <ContactMap className={styles.map} />
    </>
  );
}
