"use client";

import { useState } from "react";
import { message } from "antd";
import { SendOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import Button from "@/components/atoms/Button/Button";
import { Form, FormField } from "@/components/molecules";
import { CONTACT_INQUIRY_TYPES, CONTACT_PAGE } from "@/data/contact";
import { isEmailJsConfigured, sendContactEmail } from "@/lib/emailjs";
import styles from "./ContactForm.module.scss";

export default function ContactForm({ className, showHeader = true }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const { form: formCopy } = CONTACT_PAGE;

  const handleFinish = async (values) => {
    setSubmitting(true);
    try {
      const result = await sendContactEmail(values);
      form.resetFields();
      message.success(
        result.simulated
          ? "Message received! Configure EmailJS to enable live delivery."
          : "Thank you! Your message has been sent successfully.",
      );
    } catch {
      message.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={className} aria-labelledby="contact-form-title">
      {showHeader && (
        <ScrollReveal variant="fadeUp">
          <div className={styles.header}>
            <Text variant="overline" color="primary">
              Send a Message
            </Text>
            <Heading level="h2" id="contact-form-title" className={styles.title}>
              {formCopy.title}
            </Heading>
            <Text variant="bodySm" color="secondary" className={styles.subtitle}>
              {formCopy.subtitle}
            </Text>
          </div>
        </ScrollReveal>
      )}

      <ScrollReveal variant="fadeUp" delay={showHeader ? 0.08 : 0}>
        <Card variant="default" padding="lg" className={styles.formCard}>
          {!showHeader && (
            <div className={styles.cardIntro}>
              <Heading level="h2" id="contact-form-title" className={styles.cardTitle}>
                {formCopy.title}
              </Heading>
              <Text variant="bodySm" color="secondary">
                {formCopy.subtitle}
              </Text>
            </div>
          )}

          <Form form={form} onFinish={handleFinish} layout="vertical">
            <FormField label="Inquiry Type" htmlFor="contact-inquiry" required>
              <Form.Item
                name="inquiryType"
                rules={[{ required: true, message: "Please select an inquiry type" }]}
                noStyle
              >
                <Select
                  id="contact-inquiry"
                  placeholder="What can we help you with?"
                  options={CONTACT_INQUIRY_TYPES}
                  className={styles.select}
                />
              </Form.Item>
            </FormField>

            <div className={styles.row}>
              <FormField label="Full Name" htmlFor="contact-name" required className={styles.field}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                  noStyle
                >
                  <Input id="contact-name" placeholder="Your full name" />
                </Form.Item>
              </FormField>

              <FormField label="Email Address" htmlFor="contact-email" required className={styles.field}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  noStyle
                >
                  <Input id="contact-email" type="email" placeholder="you@example.com" />
                </Form.Item>
              </FormField>
            </div>

            <div className={styles.row}>
              <FormField label="Phone Number" htmlFor="contact-phone" className={styles.field}>
                <Form.Item name="phone" noStyle>
                  <Input id="contact-phone" type="tel" placeholder="+91 83838 94651" />
                </Form.Item>
              </FormField>

              <FormField label="Company" htmlFor="contact-company" className={styles.field}>
                <Form.Item name="company" noStyle>
                  <Input id="contact-company" placeholder="Your company name" />
                </Form.Item>
              </FormField>
            </div>

            <FormField label="Project Details" htmlFor="contact-message" required>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Please describe your project or question" }]}
                noStyle
              >
                <Input.TextArea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your goals, timeline, budget range, or any questions..."
                />
              </Form.Item>
            </FormField>

            <Button
              variant="accent"
              htmlType="submit"
              loading={submitting}
              icon={<SendOutlined />}
              block
              className={styles.submit}
            >
              Send Message
            </Button>
          </Form>

          <p className={styles.trustNote}>
            <SafetyCertificateOutlined aria-hidden="true" />
            {formCopy.trustNote}
          </p>

          {/* {!isEmailJsConfigured() && (
            <p className={styles.configNote}>
              EmailJS is not configured. Add credentials to <code>.env.local</code> using{" "}
              <code>.env.example</code> as a guide.
            </p>
          )} */}
        </Card>
      </ScrollReveal>
    </section>
  );
}
