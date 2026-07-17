"use client";

import { ArrowRightOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { FEATURED_TECHNOLOGIES } from "@/data/whyChooseUs";
import styles from "./TechnologiesPreview.module.scss";

export default function TechnologiesPreview() {
  return (
    <section className={styles.section} aria-labelledby="technologies-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Technologies"
            title="Built With Modern Tech Stack"
            subtitle="We use industry-leading technologies to build scalable, secure, and high-performance solutions."
            id="technologies-title"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.06}>
          {FEATURED_TECHNOLOGIES.map((tech) => (
            <ScrollRevealItem key={tech} as="div" className={styles.chip}>
              <Text variant="bodySm" weight="semibold">
                {tech}
              </Text>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>

        <ScrollReveal variant="fadeUp" className={styles.footer}>
          <Button variant="ghost" href="/technologies" icon={<ArrowRightOutlined />}>
            View All Technologies
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
