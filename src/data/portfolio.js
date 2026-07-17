export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "web-development", label: "Web Development" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "erp-crm", label: "ERP & CRM" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "ui-ux", label: "UI/UX Design" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "e-commerce",
    categoryLabel: "E-Commerce",
    description:
      "Full-featured online store with payment gateway, inventory management, and admin dashboard.",
    longDescription:
      "We built a scalable e-commerce platform enabling the client to manage products, orders, payments, and fulfillment from a unified admin dashboard while delivering a fast, conversion-focused shopping experience.",
    challenge:
      "The client needed to migrate from a legacy store with poor mobile performance and limited inventory visibility.",
    solution:
      "We delivered a Next.js storefront with real-time inventory sync, integrated payment gateways, and a role-based admin panel for operations teams.",
    results: [
      "40% increase in mobile conversions",
      "Unified inventory across online and warehouse teams",
      "Reduced checkout abandonment with optimized UX",
    ],
    href: "/portfolio/ecommerce-platform",
    client: "Retail Client",
    year: "2024",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "healthcare-mobile-app",
    slug: "healthcare-mobile-app",
    title: "Healthcare Mobile App",
    category: "mobile-apps",
    categoryLabel: "Mobile Apps",
    description:
      "Patient appointment booking and telemedicine app for a leading healthcare provider.",
    longDescription:
      "A HIPAA-conscious mobile application that lets patients book appointments, join video consultations, access prescriptions, and receive care reminders from one secure app.",
    challenge:
      "Patients faced long wait times and fragmented communication across phone, email, and in-person channels.",
    solution:
      "We developed a Flutter app with appointment scheduling, telemedicine, push notifications, and secure patient profiles integrated with existing clinic systems.",
    results: [
      "60% reduction in no-show appointments",
      "Telemedicine adoption across 12 clinic locations",
      "Improved patient satisfaction scores",
    ],
    href: "/portfolio/healthcare-mobile-app",
    client: "Healthcare Provider",
    year: "2024",
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
  {
    id: "enterprise-erp-system",
    slug: "enterprise-erp-system",
    title: "Enterprise ERP System",
    category: "erp-crm",
    categoryLabel: "ERP & CRM",
    description:
      "Custom ERP solution integrating HR, finance, inventory, and operations for a manufacturing company.",
    longDescription:
      "A custom ERP platform consolidating HR, finance, inventory, procurement, and production workflows into one system tailored to the client's manufacturing operations.",
    challenge:
      "Disparate spreadsheets and legacy tools caused reporting delays and data inconsistencies across departments.",
    solution:
      "We implemented modular ERP workflows with role-based dashboards, automated approvals, and real-time reporting for leadership teams.",
    results: [
      "50% faster monthly reporting cycles",
      "Single source of truth across departments",
      "Reduced manual data entry by operations staff",
    ],
    href: "/portfolio/enterprise-erp-system",
    client: "Manufacturing Corp",
    year: "2023",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "corporate-website-redesign",
    slug: "corporate-website-redesign",
    title: "Corporate Website Redesign",
    category: "web-development",
    categoryLabel: "Web Development",
    description:
      "Modern corporate website with CMS, multilingual support, and SEO optimization.",
    longDescription:
      "A complete corporate website redesign with a headless CMS, multilingual content support, and SEO-first architecture to strengthen the client's global brand presence.",
    challenge:
      "The existing website was outdated, slow, and difficult for marketing teams to update without developer support.",
    solution:
      "We rebuilt the site on Next.js with a headless CMS, performance optimizations, and structured content models for global teams.",
    results: [
      "2x improvement in Core Web Vitals",
      "Marketing team can publish content independently",
      "Stronger organic search visibility in target regions",
    ],
    href: "/portfolio/corporate-website-redesign",
    client: "Global Enterprise",
    year: "2024",
    technologies: ["Next.js", "Ant Design", "Headless CMS"],
  },
  {
    id: "crm-sales-platform",
    slug: "crm-sales-platform",
    title: "CRM Sales Platform",
    category: "erp-crm",
    categoryLabel: "ERP & CRM",
    description:
      "Sales pipeline and customer management platform with analytics and automation.",
    longDescription:
      "A CRM platform designed for a fast-growing SaaS startup to manage leads, pipelines, customer accounts, and sales analytics with automation at every stage.",
    challenge:
      "Sales teams lacked visibility into pipeline health and spent too much time on manual follow-ups.",
    solution:
      "We built a CRM with pipeline boards, automated reminders, account timelines, and leadership dashboards for forecasting.",
    results: [
      "30% increase in qualified lead conversion",
      "Automated follow-up workflows for sales reps",
      "Real-time pipeline forecasting for leadership",
    ],
    href: "/portfolio/crm-sales-platform",
    client: "SaaS Startup",
    year: "2023",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "food-delivery-app",
    slug: "food-delivery-app",
    title: "Food Delivery App",
    category: "mobile-apps",
    categoryLabel: "Mobile Apps",
    description:
      "On-demand food delivery application with real-time tracking and payment integration.",
    longDescription:
      "An on-demand food delivery platform connecting customers, restaurants, and delivery partners with live order tracking and seamless payments.",
    challenge:
      "The startup needed to launch quickly in a competitive market with reliable order tracking and partner management.",
    solution:
      "We delivered React Native apps for customers and partners with real-time GPS tracking, in-app payments, and an operations dashboard.",
    results: [
      "Launched MVP in 14 weeks",
      "Live order tracking across the delivery network",
      "Scalable architecture for multi-city expansion",
    ],
    href: "/portfolio/food-delivery-app",
    client: "Food Tech Startup",
    year: "2024",
    technologies: ["React Native", "Node.js", "Google Maps API"],
  },
  {
    id: "fintech-dashboard",
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    category: "web-development",
    categoryLabel: "Web Development",
    description:
      "Real-time financial analytics dashboard with data visualization and reporting.",
    longDescription:
      "A financial analytics dashboard giving FinTech teams real-time visibility into transactions, revenue trends, risk indicators, and exportable compliance reports.",
    challenge:
      "Leadership needed faster access to financial insights without waiting for manual report generation.",
    solution:
      "We created an interactive React dashboard with D3.js visualizations, AWS-backed data pipelines, and role-based report exports.",
    results: [
      "Real-time visibility into key financial metrics",
      "Reduced report generation time from days to minutes",
      "Secure role-based access for finance teams",
    ],
    href: "/portfolio/fintech-dashboard",
    client: "FinTech Company",
    year: "2023",
    technologies: ["React", "D3.js", "AWS"],
  },
  {
    id: "design-system-ui-kit",
    slug: "design-system-ui-kit",
    title: "Design System & UI Kit",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    description:
      "Comprehensive design system with component library for a SaaS product suite.",
    longDescription:
      "A full design system and React component library that unified UX patterns across a SaaS product suite and accelerated feature delivery for product teams.",
    challenge:
      "Inconsistent UI patterns across products slowed development and weakened brand cohesion.",
    solution:
      "We designed a Figma-based system with documented tokens, patterns, and a Storybook-powered React component library.",
    results: [
      "Consistent UX across multiple SaaS products",
      "Faster feature delivery for product squads",
      "Shared design tokens and reusable components",
    ],
    href: "/portfolio/design-system-ui-kit",
    client: "SaaS Company",
    year: "2024",
    technologies: ["Figma", "Storybook", "React"],
  },
];

export function getPortfolioByCategory(categoryId) {
  if (categoryId === "all") {
    return PORTFOLIO_ITEMS;
  }
  return PORTFOLIO_ITEMS.filter((item) => item.category === categoryId);
}

export function getPortfolioBySlug(slug) {
  return PORTFOLIO_ITEMS.find((item) => item.slug === slug);
}

export function getAllPortfolioSlugs() {
  return PORTFOLIO_ITEMS.map((item) => item.slug);
}

export function getRelatedPortfolio(currentSlug, limit = 3) {
  const current = getPortfolioBySlug(currentSlug);
  if (!current) {
    return [];
  }

  const sameCategory = PORTFOLIO_ITEMS.filter(
    (item) => item.slug !== currentSlug && item.category === current.category,
  );
  const others = PORTFOLIO_ITEMS.filter(
    (item) => item.slug !== currentSlug && item.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
