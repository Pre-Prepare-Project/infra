export const CASE_STUDY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "enterprise", label: "Enterprise" },
  { id: "healthcare", label: "Healthcare" },
  { id: "retail", label: "Retail" },
  { id: "fintech", label: "FinTech" },
  { id: "saas", label: "SaaS" },
];

export const CASE_STUDIES = [
  {
    id: "enterprise-erp-transformation",
    slug: "enterprise-erp-transformation",
    title: "Enterprise ERP Transformation",
    href: "/case-studies/enterprise-erp-transformation",
    description:
      "How a manufacturing company unified HR, finance, and operations with a custom ERP platform.",
    longDescription:
      "A mid-size manufacturing company was struggling with disconnected systems and manual reporting. InfraPulse delivered a modular ERP platform that became the operational backbone for leadership, HR, finance, and production teams.",
    category: "enterprise",
    categoryLabel: "Enterprise",
    industry: "Manufacturing",
    client: "Manufacturing Corp",
    year: "2023",
    portfolioSlug: "enterprise-erp-system",
    technologies: ["React", "Node.js", "PostgreSQL"],
    highlightMetric: "50% faster reporting",
    metrics: [
      { value: "50%", label: "Faster monthly reporting" },
      { value: "4", label: "Departments unified" },
      { value: "30%", label: "Less manual data entry" },
    ],
    challenge:
      "Departments relied on spreadsheets and legacy tools, causing delays, duplicate records, and limited visibility for leadership.",
    solution:
      "We implemented a custom ERP with role-based dashboards, automated approval flows, inventory tracking, and real-time reporting.",
    approach: [
      "Discovery workshops with department heads",
      "Modular architecture for phased rollout",
      "Data migration from legacy spreadsheets",
      "Training and change management support",
    ],
    results: [
      "Single source of truth across HR, finance, and operations",
      "Leadership dashboards available in real time",
      "Reduced reporting cycles from weeks to days",
      "Improved cross-team collaboration and accountability",
    ],
    testimonial: {
      quote:
        "InfraPulse delivered our ERP system ahead of schedule with exceptional quality. Their team understood our business needs and built a solution that transformed our operations.",
      name: "Rajesh Kumar",
      role: "CEO",
      company: "TechVision Solutions",
    },
  },
  {
    id: "healthcare-telemedicine-platform",
    slug: "healthcare-telemedicine-platform",
    title: "Healthcare Telemedicine Platform",
    href: "/case-studies/healthcare-telemedicine-platform",
    description:
      "Patient booking and telemedicine app that reduced no-shows and expanded care access.",
    longDescription:
      "A healthcare provider needed a secure mobile experience for appointment booking, virtual consultations, and patient communication. InfraPulse built a Flutter app integrated with clinic systems across multiple locations.",
    category: "healthcare",
    categoryLabel: "Healthcare",
    industry: "Healthcare",
    client: "Healthcare Provider",
    year: "2024",
    portfolioSlug: "healthcare-mobile-app",
    technologies: ["Flutter", "Firebase", "Node.js"],
    highlightMetric: "60% fewer no-shows",
    metrics: [
      { value: "60%", label: "Reduction in no-shows" },
      { value: "12", label: "Clinic locations connected" },
      { value: "40%", label: "Higher patient engagement" },
    ],
    challenge:
      "Patients faced long wait times, missed appointments, and fragmented communication across phone and in-person channels.",
    solution:
      "We delivered a mobile app with scheduling, telemedicine, push reminders, secure profiles, and clinic staff dashboards.",
    approach: [
      "Patient journey mapping and UX design",
      "HIPAA-conscious architecture planning",
      "Telemedicine and notification integrations",
      "Pilot launch across select clinics",
    ],
    results: [
      "Significant reduction in missed appointments",
      "Telemedicine adoption across clinic network",
      "Improved patient satisfaction and retention",
      "Staff saved time on manual follow-ups",
    ],
    testimonial: {
      quote:
        "The mobile app they built for our healthcare platform exceeded expectations. User engagement increased by 40% within the first three months of launch.",
      name: "Priya Sharma",
      role: "CTO",
      company: "HealthFirst India",
    },
  },
  {
    id: "retail-ecommerce-growth",
    slug: "retail-ecommerce-growth",
    title: "Retail E-Commerce Growth",
    href: "/case-studies/retail-ecommerce-growth",
    description:
      "Modern e-commerce platform that boosted mobile conversions and unified inventory operations.",
    longDescription:
      "A retail client needed to replace a slow legacy store with a scalable platform that could handle growing online demand while giving operations teams real-time inventory control.",
    category: "retail",
    categoryLabel: "Retail",
    industry: "Retail & E-Commerce",
    client: "Retail Client",
    year: "2024",
    portfolioSlug: "ecommerce-platform",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    highlightMetric: "40% mobile conversion lift",
    metrics: [
      { value: "40%", label: "Mobile conversion increase" },
      { value: "3x", label: "Faster page loads" },
      { value: "1", label: "Unified admin dashboard" },
    ],
    challenge:
      "The legacy store had poor mobile performance, checkout friction, and inventory data scattered across systems.",
    solution:
      "We built a Next.js storefront with payment gateway integration, optimized checkout, and a centralized admin panel for products and orders.",
    approach: [
      "UX audit of existing purchase funnel",
      "Headless commerce architecture design",
      "Performance and SEO optimization",
      "Inventory and payment integrations",
    ],
    results: [
      "Strong uplift in mobile conversion rates",
      "Unified inventory visibility for operations",
      "Reduced checkout abandonment",
      "Marketing team enabled with CMS workflows",
    ],
    testimonial: {
      quote:
        "Our e-commerce platform handles thousands of daily transactions flawlessly. InfraPulse's ongoing support and maintenance have been outstanding.",
      name: "Amit Patel",
      role: "Founder",
      company: "ShopEase Retail",
    },
  },
  {
    id: "saas-crm-pipeline-automation",
    slug: "saas-crm-pipeline-automation",
    title: "SaaS CRM Pipeline Automation",
    href: "/case-studies/saas-crm-pipeline-automation",
    description:
      "CRM platform that improved lead conversion and gave leadership real-time pipeline visibility.",
    longDescription:
      "A fast-growing SaaS startup needed a CRM tailored to its sales motion with automation, analytics, and forecasting tools that off-the-shelf products could not provide.",
    category: "saas",
    categoryLabel: "SaaS",
    industry: "Software & SaaS",
    client: "SaaS Startup",
    year: "2023",
    portfolioSlug: "crm-sales-platform",
    technologies: ["React", "Node.js", "MongoDB"],
    highlightMetric: "30% more qualified leads",
    metrics: [
      { value: "30%", label: "Qualified lead conversion lift" },
      { value: "50%", label: "Less manual follow-up work" },
      { value: "Real-time", label: "Pipeline forecasting" },
    ],
    challenge:
      "Sales reps lacked pipeline visibility and spent too much time on repetitive follow-ups and manual data entry.",
    solution:
      "We developed a CRM with pipeline boards, automated reminders, account timelines, and leadership analytics dashboards.",
    approach: [
      "Sales workflow discovery sessions",
      "Pipeline and automation rule design",
      "Analytics dashboard for leadership",
      "Iterative rollout with sales team feedback",
    ],
    results: [
      "Higher conversion on qualified opportunities",
      "Automated follow-up workflows for reps",
      "Leadership gained real-time forecasting",
      "Improved CRM adoption across the sales team",
    ],
    testimonial: {
      quote:
        "Working with InfraPulse on our custom CRM was seamless. They are professional, responsive, and truly invested in our success.",
      name: "Sneha Reddy",
      role: "Operations Director",
      company: "Global Logistics Co.",
    },
  },
  {
    id: "fintech-analytics-dashboard",
    slug: "fintech-analytics-dashboard",
    title: "FinTech Analytics Dashboard",
    href: "/case-studies/fintech-analytics-dashboard",
    description:
      "Real-time financial dashboard that replaced manual reporting with instant business insights.",
    longDescription:
      "A FinTech company needed leadership and finance teams to access transaction trends, revenue metrics, and compliance reports without waiting for manual exports.",
    category: "fintech",
    categoryLabel: "FinTech",
    industry: "Financial Services",
    client: "FinTech Company",
    year: "2023",
    portfolioSlug: "fintech-dashboard",
    technologies: ["React", "D3.js", "AWS"],
    highlightMetric: "Days to minutes reporting",
    metrics: [
      { value: "90%", label: "Faster report generation" },
      { value: "Real-time", label: "Financial visibility" },
      { value: "100%", label: "Role-based access control" },
    ],
    challenge:
      "Financial insights were trapped in spreadsheets and batch reports, slowing decision-making for leadership.",
    solution:
      "We created an interactive dashboard with D3.js visualizations, AWS-backed data pipelines, and secure role-based exports.",
    approach: [
      "KPI definition with finance stakeholders",
      "Data pipeline architecture on AWS",
      "Interactive visualization design",
      "Secure access and audit logging",
    ],
    results: [
      "Leadership gained real-time visibility into key metrics",
      "Report generation reduced from days to minutes",
      "Finance teams adopted self-serve analytics",
      "Improved compliance reporting workflows",
    ],
    testimonial: {
      quote:
        "InfraPulse transformed how our finance team works. We now make decisions with live data instead of waiting for weekly reports.",
      name: "Vikram Mehta",
      role: "Head of Finance",
      company: "FinEdge Technologies",
    },
  },
  {
    id: "food-delivery-mvp-launch",
    slug: "food-delivery-mvp-launch",
    title: "Food Delivery MVP Launch",
    href: "/case-studies/food-delivery-mvp-launch",
    description:
      "On-demand delivery platform launched in 14 weeks with live tracking and partner management.",
    longDescription:
      "A food tech startup needed to enter a competitive market quickly with reliable order tracking, partner apps, and an operations dashboard that could scale to new cities.",
    category: "saas",
    categoryLabel: "SaaS",
    industry: "Food Tech",
    client: "Food Tech Startup",
    year: "2024",
    portfolioSlug: "food-delivery-app",
    technologies: ["React Native", "Node.js", "Google Maps API"],
    highlightMetric: "MVP in 14 weeks",
    metrics: [
      { value: "14", label: "Weeks to MVP launch" },
      { value: "Live", label: "GPS order tracking" },
      { value: "Multi-city", label: "Scalable architecture" },
    ],
    challenge:
      "The startup had a narrow launch window and needed customer, partner, and admin experiences built in parallel.",
    solution:
      "We delivered React Native apps for customers and delivery partners with real-time GPS tracking, payments, and an operations dashboard.",
    approach: [
      "MVP scope prioritization workshop",
      "Parallel mobile and backend development",
      "Maps and payment integrations",
      "Launch support and monitoring setup",
    ],
    results: [
      "Successful MVP launch within 14 weeks",
      "Live order tracking across the delivery network",
      "Operations team enabled with real-time dashboards",
      "Architecture ready for multi-city expansion",
    ],
    testimonial: {
      quote:
        "InfraPulse helped us launch fast without cutting corners. The platform performed reliably from day one.",
      name: "Karan Desai",
      role: "Co-Founder",
      company: "QuickBite Delivery",
    },
  },
];

export function getCaseStudyBySlug(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudiesByCategory(categoryId) {
  if (categoryId === "all") {
    return CASE_STUDIES;
  }
  return CASE_STUDIES.filter((study) => study.category === categoryId);
}

export function getAllCaseStudySlugs() {
  return CASE_STUDIES.map((study) => study.slug);
}

export function getRelatedCaseStudies(currentSlug, limit = 3) {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) {
    return [];
  }

  const sameCategory = CASE_STUDIES.filter(
    (study) => study.slug !== currentSlug && study.category === current.category,
  );
  const others = CASE_STUDIES.filter(
    (study) => study.slug !== currentSlug && study.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
