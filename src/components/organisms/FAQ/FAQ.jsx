"use client";

import { Collapse } from "antd";
import Container from "@/components/atoms/Container/Container";
import SectionTitle from "@/components/molecules/SectionTitle/SectionTitle";
import { cn } from "@/utils/cn";
import styles from "./FAQ.module.scss";

export default function FAQ({
  items = [],
  overline = "FAQ",
  title = "Frequently Asked Questions",
  subtitle,
  align = "center",
  className,
  defaultActiveKey,
}) {
  if (!items.length) {
    return null;
  }

  const collapseItems = items.map((item, index) => ({
    key: String(item.key ?? index),
    label: <span className={styles.question}>{item.question}</span>,
    children: <p className={styles.answer}>{item.answer}</p>,
  }));

  return (
    <section className={cn(styles.section, className)} aria-labelledby="faq-title">
      <Container size="sm">
        <SectionTitle
          overline={overline}
          title={title}
          subtitle={subtitle}
          align={align}
          id="faq-title"
          className={styles.header}
        />
        <Collapse
          items={collapseItems}
          bordered={false}
          expandIconPosition="end"
          defaultActiveKey={defaultActiveKey ? [String(defaultActiveKey)] : undefined}
          className={styles.collapse}
          accordion
        />
      </Container>
    </section>
  );
}
