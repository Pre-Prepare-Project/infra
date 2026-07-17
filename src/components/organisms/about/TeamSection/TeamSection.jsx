"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { TEAM_MEMBERS } from "@/data/company";
import styles from "./TeamSection.module.scss";

export default function TeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Our Team"
            title="Meet the People Behind InfraPulse"
            subtitle="A passionate team of developers, designers, and strategists dedicated to your success."
            id="team-title"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.08}>
          {TEAM_MEMBERS.map((member) => (
            <ScrollRevealItem key={member.id} as="article">
              <Card variant="default" padding="lg" hoverable className={styles.card}>
                <div className={styles.avatar} aria-hidden="true">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <Heading level="h5" className={styles.name}>
                  {member.name}
                </Heading>
                <Text variant="bodySm" color="primary" weight="semibold" className={styles.role}>
                  {member.role}
                </Text>
                <Text variant="caption" color="secondary" className={styles.department}>
                  {member.department}
                </Text>
                <Text variant="bodySm" color="secondary" className={styles.bio}>
                  {member.bio}
                </Text>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
