"use client";

import { useState } from "react";
import { message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Input from "@/components/atoms/Input/Input";
import Select from "@/components/atoms/Select/Select";
import Button from "@/components/atoms/Button/Button";
import { Form, FormField, SectionTitle } from "@/components/molecules";
import { CONTACT_INQUIRY_TYPES } from "@/data/contact";
import { isEmailJsConfigured, sendContactEmail } from "@/lib/emailjs";
import styles from "./ContactForm.module.scss";

export default function ContactForm({ className }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

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
      <ScrollReveal variant="fadeUp">
        <SectionTitle
          overline="Send a Message"
          title="Contact Form"
          subtitle="Fill out the form below and our team will get back to you within 1–2 business days."
          id="contact-form-title"
          className={styles.header}
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.1}>
        <Card variant="default" padding="lg" className={styles.formCard}>
          <Form form={form} onFinish={handleFinish} layout="vertical">
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
                  <Input id="contact-phone" type="tel" placeholder="+91 98765 43210" />
                </Form.Item>
              </FormField>

              <FormField label="Company" htmlFor="contact-company" className={styles.field}>
                <Form.Item name="company" noStyle>
                  <Input id="contact-company" placeholder="Your company name" />
                </Form.Item>
              </FormField>
            </div>

            <FormField label="Inquiry Type" htmlFor="contact-inquiry" required>
              <Form.Item
                name="inquiryType"
                rules={[{ required: true, message: "Please select an inquiry type" }]}
                noStyle
              >
                <Select
                  id="contact-inquiry"
                  placeholder="Select inquiry type"
                  options={CONTACT_INQUIRY_TYPES}
                  className={styles.select}
                />
              </Form.Item>
            </FormField>

            <FormField label="Message" htmlFor="contact-message" required>
              <Form.Item
                name="message"
                rules={[{ required: true, message: "Please enter your message" }]}
                noStyle
              >
                <Input.TextArea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project or question..."
                />
              </Form.Item>
            </FormField>

            <Button
              variant="accent"
              htmlType="submit"
              loading={submitting}
              icon={<SendOutlined />}
              block
            >
              Send Message
            </Button>
          </Form>

          {!isEmailJsConfigured() && (
            <p className={styles.configNote}>
              EmailJS is not configured. Add credentials to <code>.env.local</code> using{" "}
              <code>.env.example</code> as a guide.
            </p>
          )}
        </Card>
      </ScrollReveal>
    </section>
  );
}
