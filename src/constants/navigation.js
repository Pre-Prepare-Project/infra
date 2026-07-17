import { FOOTER_TECHNOLOGIES } from "@/data/technologies";
import { getServicesWithIcons, getProductsForNav } from "@/lib/content";

export const SERVICES = getServicesWithIcons();
export const PRODUCTS = getProductsForNav();

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", megaMenu: "services" },
  { label: "Products", href: "/products", megaMenu: "products" },
  { label: "Technologies", href: "/technologies" },
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
    title: "Our Products",
    description: "Ready-to-deploy platforms built by InfraPulse.",
    href: "/products",
    ctaLabel: "View All Products",
    items: PRODUCTS,
  },
};

export const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Technologies", href: "/technologies" },
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
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];
