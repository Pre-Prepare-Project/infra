export const CONTACT_INQUIRY_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "project", label: "Project Quote" },
  { value: "demo", label: "Product Demo" },
  { value: "careers", label: "Careers / HR" },
  { value: "support", label: "Support" },
];

export const CONTACT_INFO = {
  address: {
    line1: "InfraPulse Technologies Pvt. Ltd.",
    line2: "123 Tech Park, Electronic City Phase 1",
    city: "Bengaluru, Karnataka 560100",
    country: "India",
  },
  phone: "+91 98765 43210",
  email: "info@infrapulse.com",
  supportEmail: "support@infrapulse.com",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013874867999!2d77.6412!3d12.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzQ0LjIiTiA3N7KwMzgnMjguMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=Electronic+City+Bengaluru",
  businessHours: [
    { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM IST" },
    { days: "Saturday", hours: "10:00 AM – 2:00 PM IST" },
    { days: "Sunday", hours: "Closed" },
  ],
};

export const CONTACT_DETAILS = [
  {
    id: "email",
    label: "Email Us",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    description: "We respond within 24 hours on business days.",
  },
  {
    id: "phone",
    label: "Call Us",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    description: "Mon–Sat during business hours.",
  },
  {
    id: "address",
    label: "Visit Us",
    value: `${CONTACT_INFO.address.line2}, ${CONTACT_INFO.address.city}`,
    href: CONTACT_INFO.mapLink,
    description: CONTACT_INFO.address.country,
  },
];
