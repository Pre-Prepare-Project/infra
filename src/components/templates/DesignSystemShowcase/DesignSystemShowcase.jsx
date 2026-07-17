"use client";

import { Button, Card, Heading, Input, Select, Text } from "@/components/atoms";
import { Form, FormField } from "@/components/molecules";
import styles from "./DesignSystemShowcase.module.scss";

const SELECT_OPTIONS = [
  { value: "web", label: "Website Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "erp", label: "Custom ERP Development" },
];

export default function DesignSystemShowcase({ companyName }) {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <Text variant="overline" color="primary" className={styles.badge}>
            Module 2 — Design System
          </Text>
          <Heading level="displayLg" gradient gradientType="primary" align="center">
            {companyName} Design System
          </Heading>
          <Text variant="bodyLg" color="secondary" align="center" className={styles.subtitle}>
            Tokens, typography, buttons, forms, and cards — the foundation for all InfraPulse UI.
          </Text>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="typography-heading">
        <div className={styles.container}>
          <Heading level="h3" id="typography-heading">
            Typography
          </Heading>
          <div className={styles.typographyGrid}>
            <Heading level="displayLg">Display Large</Heading>
            <Heading level="h1">Heading 1</Heading>
            <Heading level="h2">Heading 2</Heading>
            <Heading level="h3">Heading 3</Heading>
            <Text variant="bodyLg">Body Large — premium readable paragraph text.</Text>
            <Text variant="body">Body — standard content text for sections and cards.</Text>
            <Text variant="bodySm" color="secondary">
              Body Small — supporting descriptions and meta information.
            </Text>
            <Text variant="overline" color="primary">
              Overline Label
            </Text>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="buttons-heading">
        <div className={styles.container}>
          <Heading level="h3" id="buttons-heading">
            Buttons
          </Heading>
          <div className={styles.buttonRow}>
            <Button variant="primary">Primary</Button>
            <Button variant="accent">Accent CTA</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className={styles.buttonRow}>
            <Button variant="accent" size="lg">
              Large CTA
            </Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cards-heading">
        <div className={styles.container}>
          <Heading level="h3" id="cards-heading">
            Cards
          </Heading>
          <div className={styles.cardGrid}>
            <Card variant="default" hoverable>
              <Heading level="h5">Default Card</Heading>
              <Text variant="bodySm" color="secondary">
                Standard card with soft shadow and hover lift.
              </Text>
            </Card>
            <Card variant="elevated">
              <Heading level="h5">Elevated Card</Heading>
              <Text variant="bodySm" color="secondary">
                Higher elevation for featured content blocks.
              </Text>
            </Card>
            <Card variant="glass">
              <Heading level="h5">Glass Card</Heading>
              <Text variant="bodySm" color="secondary">
                Glassmorphism surface for premium overlays.
              </Text>
            </Card>
            <Card variant="accent" hoverable>
              <Heading level="h5">Accent Card</Heading>
              <Text variant="bodySm" color="secondary">
                Accent top border for highlighted modules.
              </Text>
            </Card>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="forms-heading">
        <div className={styles.container}>
          <Heading level="h3" id="forms-heading">
            Forms
          </Heading>
          <Card variant="flat" padding="lg" className={styles.formCard}>
            <Form layout="vertical">
              <FormField label="Full Name" htmlFor="ds-name" required>
                <Input id="ds-name" placeholder="Enter your name" />
              </FormField>
              <FormField label="Email Address" htmlFor="ds-email" required help="We will respond within 24 hours.">
                <Input id="ds-email" type="email" placeholder="you@company.com" />
              </FormField>
              <FormField label="Service" htmlFor="ds-service">
                <Select id="ds-service" placeholder="Select a service" options={SELECT_OPTIONS} />
              </FormField>
              <FormField label="Message" htmlFor="ds-message">
                <Input.TextArea id="ds-message" placeholder="Tell us about your project..." />
              </FormField>
              <Button variant="accent" size="lg">
                Send Message
              </Button>
            </Form>
          </Card>
        </div>
      </section>
    </main>
  );
}
