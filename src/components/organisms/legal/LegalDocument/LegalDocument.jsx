import Container from "@/components/atoms/Container/Container";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import styles from "./LegalDocument.module.scss";

export default function LegalDocument({ lastUpdated, introduction, sections = [] }) {
  return (
    <article className={styles.document} aria-label="Legal document content">
      <Container className={styles.container}>
        <header className={styles.header}>
          {lastUpdated && (
            <Text variant="caption" color="secondary" className={styles.updated}>
              Last updated: {lastUpdated}
            </Text>
          )}
          {introduction && (
            <Text variant="bodyLg" color="secondary" className={styles.introduction}>
              {introduction}
            </Text>
          )}
        </header>

        <div className={styles.sections}>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={styles.section}
              aria-labelledby={`${section.id}-title`}
            >
              <Heading level="h2" id={`${section.id}-title`} className={styles.sectionTitle}>
                {section.title}
              </Heading>

              {section.paragraphs?.map((paragraph) => (
                <Text key={paragraph} variant="body" color="secondary" className={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}

              {section.list?.length > 0 && (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item}>
                      <Text variant="bodySm" color="secondary">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              )}

              {section.paragraphsAfter?.map((paragraph) => (
                <Text key={paragraph} variant="body" color="secondary" className={styles.paragraph}>
                  {paragraph}
                </Text>
              ))}

              {section.contact && (
                <address className={styles.contact}>
                  <Text variant="bodySm" weight="semibold">
                    {section.contact.company}
                  </Text>
                  <Text variant="bodySm" color="secondary">
                    Email:{" "}
                    <a href={`mailto:${section.contact.email}`}>{section.contact.email}</a>
                  </Text>
                  <Text variant="bodySm" color="secondary">
                    Address: {section.contact.address}
                  </Text>
                </address>
              )}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
