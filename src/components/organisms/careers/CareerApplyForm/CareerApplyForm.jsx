"use client";

import { useState } from "react";
import { message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Container from "@/components/atoms/Container/Container";
import ScrollReveal from "@/components/atoms/ScrollReveal/ScrollReveal";
import Card from "@/components/atoms/Card/Card";
import Text from "@/components/atoms/Text/Text";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button/Button";
import { Form, FormField, SectionTitle } from "@/components/molecules";
import { sendCareerApplication } from "@/lib/emailjs";
import { COMPANY } from "@/constants/theme";
import styles from "./CareerApplyForm.module.scss";

export default function CareerApplyForm({ jobTitle, className }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleFinish = async (values) => {
    setSubmitting(true);
    try {
      const result = await sendCareerApplication(values, jobTitle);
      form.resetFields();
      message.success(
        result.simulated
          ? "Application received! Configure EmailJS to enable live delivery."
          : "Application submitted! Our HR team will contact you soon.",
      );
    } catch {
      message.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={className} aria-labelledby="career-apply-title">
      <Container>
        <ScrollReveal variant="fadeUp">
          <SectionTitle
            overline="Apply Now"
            title={`Apply for ${jobTitle}`}
            subtitle="Submit your details and we'll get back to you within 3–5 business days."
            id="career-apply-title"
            className={styles.header}
          />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <Card variant="default" padding="lg" className={styles.formCard}>
            <Form form={form} onFinish={handleFinish} initialValues={{ position: jobTitle }}>
              <FormField label="Full Name" htmlFor="apply-name" required>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: "Please enter your full name" }]}
                  noStyle
                >
                  <Input id="apply-name" placeholder="Your full name" />
                </Form.Item>
              </FormField>

              <FormField label="Email Address" htmlFor="apply-email" required>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  noStyle
                >
                  <Input id="apply-email" type="email" placeholder="you@example.com" />
                </Form.Item>
              </FormField>

              <FormField label="Phone Number" htmlFor="apply-phone">
                <Form.Item name="phone" noStyle>
                  <Input id="apply-phone" type="tel" placeholder="+91 98731 09303" />
                </Form.Item>
              </FormField>

              <FormField label="Position" htmlFor="apply-position" required>
                <Form.Item name="position" rules={[{ required: true }]} noStyle>
                  <Input id="apply-position" readOnly />
                </Form.Item>
              </FormField>

              <FormField
                label="LinkedIn / Portfolio URL"
                htmlFor="apply-portfolio"
                help="Share a link to your LinkedIn profile or portfolio."
              >
                <Form.Item name="portfolio" noStyle>
                  <Input id="apply-portfolio" placeholder="https://linkedin.com/in/yourprofile" />
                </Form.Item>
              </FormField>

              <FormField label="Cover Message" htmlFor="apply-message">
                <Form.Item name="message" noStyle>
                  <Input.TextArea
                    id="apply-message"
                    rows={4}
                    placeholder="Tell us why you're a great fit for this role..."
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
                Submit Application
              </Button>
            </Form>

            <Text variant="caption" color="secondary" className={styles.note}>
              Prefer email? Send your resume to{" "}
              <a href={`mailto:${COMPANY.email}?subject=Application: ${encodeURIComponent(jobTitle)}`}>
                {COMPANY.email}
              </a>
            </Text>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}
