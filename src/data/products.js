export const PRODUCTS = [
  {
    id: "ozii-erp",
    slug: "ozii-erp",
    title: "OZii ERP",
    href: "/products/ozii-erp",
    description: "Complete HRMS, payroll, accounts, and operations suite for modern enterprises.",
    longDescription:
      "OZii ERP is a comprehensive enterprise resource planning platform covering human resources, attendance, payroll, recruitment, task management, performance, accounts, travel desk, and reporting — all in one unified system.",
    badge: "Flagship Product",
    features: ["HRMS", "Payroll", "Accounts", "Reports"],
    modules: [
      "HRMS",
      "Attendance",
      "Payroll",
      "Recruitment",
      "Task Management",
      "Performance",
      "Accounts",
      "Travel Desk",
      "Reports",
    ],
  },
  {
    id: "billing-review-system",
    slug: "billing-review-system",
    title: "Billing Review System",
    href: "/products/billing-review-system",
    description: "Invoice dashboard with revenue analytics, expenditure management, and P&L insights.",
    longDescription:
      "A powerful billing and financial review platform with invoice dashboards, revenue analytics, expenditure management, profit & loss reports, billing reports, and real-time business insights.",
    badge: "Finance Platform",
    features: ["Invoices", "Analytics", "Expenditure", "Reports"],
    modules: [
      "Invoice Dashboard",
      "Revenue Analytics",
      "Expenditure Management",
      "Profit & Loss",
      "Billing Reports",
      "Real-time Insights",
    ],
  },
  {
    id: "chaitanya-care-foundation",
    slug: "chaitanya-care-foundation",
    title: "Chaitanya Care Foundation",
    href: "/products/chaitanya-care-foundation",
    description: "NGO platform for programs, events, gallery, and volunteer engagement.",
    longDescription:
      "A dedicated digital platform for Chaitanya Care Foundation featuring an NGO website, programs management, events calendar, photo gallery, mission showcase, volunteer registration, and contact management.",
    badge: "NGO Platform",
    features: ["Programs", "Events", "Gallery", "Volunteer"],
    modules: [
      "NGO Website",
      "Programs",
      "Events",
      "Gallery",
      "Mission",
      "Volunteer",
      "Contact",
    ],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getAllProductSlugs() {
  return PRODUCTS.map((product) => product.slug);
}

export function getRelatedProducts(currentSlug, limit = 2) {
  return PRODUCTS.filter((product) => product.slug !== currentSlug).slice(0, limit);
}

export function getProductNavItems() {
  return PRODUCTS.map(({ title, href, description, features }) => ({
    label: title,
    href,
    description,
    features,
  }));
}
