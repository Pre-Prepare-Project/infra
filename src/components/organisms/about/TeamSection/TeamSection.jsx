"use client";

import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import OptimizedImage from "@/components/atoms/OptimizedImage/OptimizedImage";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { TEAM_MEMBERS } from "@/data/company";
import styles from "./TeamSection.module.scss";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

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
              <Card variant="default" padding="none" hoverable className={styles.card}>
                {/* <span className={styles.initialsBadge} aria-hidden="true">
                  {getInitials(member.name)}
                </span> */}

                <div className={styles.cardInner}>
                  <div className={styles.topRow}>
                    <div className={styles.photoWrap}>
                      <span className={styles.photoArc} aria-hidden="true" />
                      {member.image ? (
                        <OptimizedImage
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className={styles.photo}
                        />
                      ) : (
                        <div className={styles.avatar} aria-hidden="true">
                          {getInitials(member.name)}
                        </div>
                      )}
                    </div>

                    <div className={styles.headerInfo}>
                      <Heading level="h5" className={styles.name}>
                        {member.name}
                      </Heading>
                      <Text variant="bodySm" color="primary" weight="semibold" className={styles.role}>
                        {member.role}
                      </Text>
                      <div className={styles.departmentRow}>
                        <span className={styles.departmentLine} aria-hidden="true" />
                        <Text variant="caption" color="secondary" className={styles.department}>
                          {member.department}
                        </Text>
                      </div>
                    </div>
                  </div>

                  <Text variant="bodySm" color="secondary" className={styles.bio}>
                    {member.bio}
                  </Text>

                  <span className={styles.dotPattern} aria-hidden="true" />
                </div>
              </Card>
            </ScrollRevealItem>
          ))}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
