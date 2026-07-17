import PageHero from "@/components/molecules/PageHero/PageHero";
import Container from "@/components/atoms/Container/Container";
import ContactInfo from "@/components/organisms/contact/ContactInfo/ContactInfo";
import ContactForm from "@/components/organisms/contact/ContactForm/ContactForm";
import ContactMap from "@/components/organisms/contact/ContactMap/ContactMap";
import ContactSocial from "@/components/organisms/contact/ContactSocial/ContactSocial";
import styles from "./ContactPage.module.scss";

const CONTACT_BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you. Reach out and let's build something great together."
        breadcrumbs={CONTACT_BREADCRUMBS}
      />
      <section className={styles.main} aria-label="Contact form and information">
        <Container>
          <div className={styles.grid}>
            <ContactInfo className={styles.info} />
            <ContactForm className={styles.form} />
          </div>
        </Container>
      </section>
      <ContactMap className={styles.map} />
      <ContactSocial className={styles.social} />
    </>
  );
}
