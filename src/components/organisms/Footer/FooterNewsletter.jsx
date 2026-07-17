"use client";

import { useState } from "react";
import { message } from "antd";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";
import Heading from "@/components/atoms/Heading/Heading";
import { sendNewsletterSignup } from "@/lib/emailjs";
import styles from "./FooterNewsletter.module.scss";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      message.warning("Please enter your email address.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await sendNewsletterSignup(email.trim());
      setEmail("");
      message.success(
        result.simulated
          ? "Thanks for subscribing! Configure EmailJS to enable live delivery."
          : "Thanks for subscribing to our newsletter!",
      );
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
        Get the latest updates on products, services, and tech insights.
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
