"use client";

import { Rate } from "antd";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { getFeaturedTestimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.scss";

export default function Testimonials({ count = 3 }) {
  const testimonials = getFeaturedTestimonials(count);

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from businesses we've helped transform."
            id="testimonials-title"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {testimonials.map((item) => (
            <ScrollRevealItem key={item.id} as="article">
              <Card variant="default" padding="lg" hoverable className={styles.card}>
                <Rate
                  disabled
                  defaultValue={item.rating}
                  className={styles.rating}
                  aria-label={`${item.rating} out of 5 stars`}
                />
                <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>
                <footer className={styles.author}>
                  <div className={styles.avatar} aria-hidden="true">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <Heading level="h6" className={styles.name}>
                      {item.name}
                    </Heading>
                    <Text variant="caption" color="secondary">
                      {item.role}, {item.company}
                    </Text>
                  </div>
                </footer>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
