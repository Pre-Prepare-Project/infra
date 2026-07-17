"use client";

import {
  ApiOutlined,
  CloudOutlined,
  CodeOutlined,
  DatabaseOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import ScrollRevealGrid, {
  ScrollRevealItem,
} from "@/components/atoms/ScrollReveal/ScrollRevealGrid";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import { SectionTitle } from "@/components/molecules";
import { getTechnologyCategories } from "@/lib/content";
import styles from "./TechnologyCategories.module.scss";

const ICON_MAP = {
  frontend: CodeOutlined,
  backend: ApiOutlined,
  mobile: MobileOutlined,
  cloud: CloudOutlined,
  database: DatabaseOutlined,
};

const CATEGORIES = getTechnologyCategories();

export default function TechnologyCategories({ className }) {
  return (
    <section className={className} aria-labelledby="tech-categories-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Full Stack"
            title="Technology Categories"
            subtitle="From frontend interfaces to cloud infrastructure — we cover the complete software development lifecycle."
            id="tech-categories-title"
            gradient
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollRevealGrid className={styles.grid} stagger={0.1}>
          {CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.id];

            return (
              <ScrollRevealItem key={category.id} as="article">
                <Card variant="default" padding="lg" hoverable className={styles.card}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    {Icon && <Icon />}
                  </span>
                  <Heading level="h4" className={styles.title}>
                    {category.title}
                  </Heading>
                  <Text variant="bodySm" color="secondary" className={styles.description}>
                    {category.description}
                  </Text>
                  <ul className={styles.techList}>
                    {category.technologies.map((tech) => (
                      <li key={tech.name} className={styles.techItem}>
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealGrid>
      </Container>
    </section>
  );
}
