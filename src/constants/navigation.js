import { FOOTER_TECHNOLOGIES } from "@/data/technologies";
import { getServicesWithIcons, getProductsForNav } from "@/lib/content";

export const SERVICES = getServicesWithIcons();
export const PRODUCTS = getProductsForNav();

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", megaMenu: "services" },
  { label: "Projects", href: "/products", megaMenu: "products" },
  // { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const MEGA_MENUS = {
  services: {
    title: "Our Services",
    description: "End-to-end software development services for growing businesses.",
    href: "/services",
    ctaLabel: "View All Services",
    items: SERVICES,
  },
  products: {
    title: "Our Projects",
    description: "Ready-to-deploy platforms built by InfraPulse.",
    href: "/products",
    ctaLabel: "View All Projects",
    items: PRODUCTS,
  },
};

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/products" },
  // { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES = SERVICES.map(({ title, href }) => ({
  label: title,
  href,
}));

export const FOOTER_PRODUCTS = PRODUCTS.map(({ title, href }) => ({
  label: title,
  href,
}));

export { FOOTER_TECHNOLOGIES };

export const FOOTER_LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/infrapulsetechnologies",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/infrapulsetech",
    icon: "instagram",
  },
];
