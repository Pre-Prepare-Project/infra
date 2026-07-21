export const FAQ_ITEMS = [
  {
    id: "faq-1",
    key: "1",
    question: "What services does InfraPulse Technologies offer?",
    answer:
      "We offer comprehensive software development services including website development, mobile app development, custom ERP and CRM development, UI/UX design, API development, SEO services, cloud & DevOps, and ongoing maintenance & support.",
  },
  {
    id: "faq-2",
    key: "2",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A corporate website typically takes 4–8 weeks, mobile apps 8–16 weeks, and enterprise ERP systems 3–6 months. We provide detailed timelines during the initial consultation phase.",
  },
  {
    id: "faq-3",
    key: "3",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We offer comprehensive maintenance and support packages including bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 support options based on your SLA requirements.",
  },
  {
    id: "faq-4",
    key: "4",
    question: "What technologies do you work with?",
    answer:
      "We specialize in React.js, Next.js, Node.js, Flutter, React Native, Python, AWS, Azure, PostgreSQL, MongoDB, and modern DevOps tools. We choose the best technology stack based on your project requirements.",
  },
  {
    id: "faq-5",
    key: "5",
    question: "Can you work with our existing systems and integrate with third-party tools?",
    answer:
      "Absolutely. We have extensive experience integrating with existing ERP, CRM, payment gateways, APIs, and third-party services. We ensure seamless data flow between your current systems and new solutions.",
  },
  {
    id: "faq-6",
    key: "6",
    question: "What is your development process?",
    answer:
      "We follow an agile methodology: Discovery & Requirements → Design & Prototyping → Development & Testing → Deployment → Support & Maintenance. You receive regular updates and demos throughout the project lifecycle.",
  },
  {
    id: "faq-7",
    key: "7",
    question: "Do you offer fixed-price or hourly billing?",
    answer:
      "We offer both models. Fixed-price works well for well-defined projects with clear scope. Time & materials suits evolving requirements. We recommend the best approach during our free consultation.",
  },
  {
    id: "faq-8",
    key: "8",
    question: "What products has InfraPulse built?",
    answer:
      "Our flagship products include OZii ERP (complete HR and operations suite), BillFlow 360 (financial analytics platform), and Chaitanya Care Foundation (NGO management platform).",
  },
];

export const FAQ_HOME = FAQ_ITEMS.slice(0, 5);

export function getFaqById(id) {
  return FAQ_ITEMS.find((item) => item.id === id);
}
