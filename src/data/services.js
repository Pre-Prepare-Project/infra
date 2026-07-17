export const SERVICE_ICON_KEYS = {
  code: "code",
  mobile: "mobile",
  database: "database",
  team: "team",
  design: "design",
  api: "api",
  search: "search",
  cloud: "cloud",
  support: "support",
};

export const SERVICES = [
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    href: "/services/website-development",
    description: "Modern, responsive, and high-performance websites built for conversion and scale.",
    longDescription:
      "We design and develop custom websites using Next.js, React, and modern web standards. From corporate sites to complex web applications, we deliver fast, SEO-optimized, and mobile-first experiences.",
    iconKey: SERVICE_ICON_KEYS.code,
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Tuning",
      "CMS Integration",
      "E-Commerce Solutions",
    ],
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    longDescription:
      "Build powerful mobile experiences with Flutter, React Native, and native technologies. We handle everything from UI/UX to App Store deployment and ongoing maintenance.",
    iconKey: SERVICE_ICON_KEYS.mobile,
    features: [
      "iOS & Android Apps",
      "Cross-Platform Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline Support",
    ],
  },
  {
    id: "custom-erp-development",
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    href: "/services/custom-erp-development",
    description: "Tailored ERP systems that streamline operations and boost productivity.",
    longDescription:
      "We build enterprise resource planning solutions customized to your workflows — covering HR, finance, inventory, operations, and reporting in a unified platform.",
    iconKey: SERVICE_ICON_KEYS.database,
    features: [
      "Custom Modules",
      "Workflow Automation",
      "Real-time Reporting",
      "Multi-department Integration",
      "Role-based Access",
    ],
  },
  {
    id: "crm-development",
    slug: "crm-development",
    title: "CRM Development",
    href: "/services/crm-development",
    description: "Customer relationship management solutions that drive sales and retention.",
    longDescription:
      "Custom CRM platforms to manage leads, pipelines, customer communications, and analytics — integrated with your existing tools and tailored to your sales process.",
    iconKey: SERVICE_ICON_KEYS.team,
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Analytics",
      "Email Integration",
      "Automation Workflows",
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "User-centered design that creates intuitive and delightful digital experiences.",
    longDescription:
      "Our design team crafts wireframes, prototypes, and pixel-perfect interfaces focused on usability, accessibility, and brand consistency across web and mobile.",
    iconKey: SERVICE_ICON_KEYS.design,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
      "Brand Identity",
    ],
  },
  {
    id: "api-development",
    slug: "api-development",
    title: "API Development",
    href: "/services/api-development",
    description: "Scalable REST and GraphQL APIs for seamless system integrations.",
    longDescription:
      "We design and build robust APIs with proper authentication, documentation, versioning, and monitoring — enabling your applications to connect and scale efficiently.",
    iconKey: SERVICE_ICON_KEYS.api,
    features: [
      "REST & GraphQL APIs",
      "Third-party Integrations",
      "API Documentation",
      "Authentication & Security",
      "Microservices Architecture",
    ],
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    href: "/services/seo-services",
    description: "Search engine optimization to improve visibility and organic traffic.",
    longDescription:
      "Comprehensive SEO strategies including technical audits, on-page optimization, content strategy, and performance tracking to help your business rank higher.",
    iconKey: SERVICE_ICON_KEYS.search,
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Keyword Research",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description: "Cloud infrastructure, CI/CD pipelines, and DevOps automation on AWS and Azure.",
    longDescription:
      "We help businesses migrate to the cloud, set up scalable infrastructure, implement CI/CD pipelines, and maintain high availability with monitoring and alerting.",
    iconKey: SERVICE_ICON_KEYS.cloud,
    features: [
      "AWS & Azure Cloud",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Alerting",
    ],
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    title: "Maintenance & Support",
    href: "/services/maintenance-support",
    description: "Ongoing support, updates, and performance monitoring for your applications.",
    longDescription:
      "Keep your software running smoothly with proactive maintenance, bug fixes, security patches, performance optimization, and dedicated support SLAs.",
    iconKey: SERVICE_ICON_KEYS.support,
    features: [
      "24/7 Support Options",
      "Bug Fixes & Updates",
      "Security Patches",
      "Performance Monitoring",
      "Feature Enhancements",
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return SERVICES.map((service) => service.slug);
}

export function getRelatedServices(currentSlug, limit = 3) {
  return SERVICES.filter((service) => service.slug !== currentSlug).slice(0, limit);
}

export function getServiceNavItems() {
  return SERVICES.map(({ title, href, description, iconKey }) => ({
    label: title,
    href,
    description,
    iconKey,
  }));
}
