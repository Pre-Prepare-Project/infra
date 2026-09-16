"use client";

import { useState } from "react";
import { App } from "antd";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import Heading from "@/components/atoms/Heading/Heading";
import { sendNewsletterSignup } from "@/lib/emailjs";
import styles from "./FooterNewsletter.module.scss";

async function saveNewsletterToSheet(email) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      inquiryType: "Newsletter",
      name: "Newsletter Subscriber",
      email,
      message: "Newsletter subscription from website footer.",
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 503) {
      return { saved: false, skipped: true };
    }
    throw new Error(data.error || "Failed to save to sheet");
  }

  return data;
}

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { message } = App.useApp();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) {
      message.warning("Please enter your email address.");
      return;
    }

    setSubmitting(true);
    try {
      const sheetResult = await saveNewsletterToSheet(trimmed);

      try {
        await sendNewsletterSignup(trimmed);
      } catch {
        // EmailJS is optional
      }

      setEmail("");
      message.success("Thanks for subscribing to our newsletter!");

      if (sheetResult?.skipped) {
        console.warn("Newsletter sheet skipped: Google Sheet URL not configured.");
      }
    } catch {
      message.error("Subscription failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.newsletterBlock}>
      <Heading level="h6" className={styles.columnTitle}>
        Newsletter
      </Heading>
      <Text variant="bodySm" className={styles.newsletterText}>
        Get the latest updates on projects, services, and tech insights.
      </Text>
      <form className={styles.newsletterForm} aria-label="Newsletter subscription" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-label="Email address"
          className={styles.newsletterInput}
          required
        />
        <Button variant="accent" htmlType="submit" loading={submitting} className={styles.subscribeBtn}>
          Subscribe
        </Button>
      </form>
    </div>
  );
}
