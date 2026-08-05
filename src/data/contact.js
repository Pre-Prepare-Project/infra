export const CONTACT_INQUIRY_TYPES = [
  { value: "general", label: "General Inquiry" },
  { value: "project", label: "Project Quote" },
  { value: "demo", label: "Project Demo" },
  { value: "careers", label: "Careers / HR" },
  { value: "support", label: "Support" },
];

export const CONTACT_PAGE = {
  hero: {
    title: "Let's Start a Conversation",
    subtitle:
      "Whether you need a project quote, project demo, or technical support — tell us what you're building and we'll respond within one business day.",
  },
  form: {
    title: "Send Us a Message",
    subtitle: "Share your requirements. Our team reviews every inquiry personally.",
    trustNote: "Typical response time: within 24 hours on business days.",
  },
  processTitle: "What Happens Next",
  processSteps: [
    {
      id: "submit",
      step: "01",
      title: "You share your brief",
      description: "Tell us about your goals, timeline, and budget range.",
    },
    {
      id: "review",
      step: "02",
      title: "We review & respond",
      description: "A specialist reaches out to clarify scope and next steps.",
    },
    {
      id: "consult",
      step: "03",
      title: "Free consultation call",
      description: "We propose the right approach — no obligation to proceed.",
    },
  ],
  trustPoints: [
    "Free initial consultation",
    "NDA available on request",
    "Dedicated project manager",
  ],
};

export const CONTACT_QUICK_ACTIONS = [
  {
    id: "phone",
    label: "Talk to Sales",
    valueKey: "phone",
    description: "Speak directly with our team",
    cta: "Call now",
    icon: "phone",
  },
  {
    id: "email",
    label: "Email Us",
    valueKey: "email",
    description: "Best for detailed project briefs",
    cta: "Send email",
    icon: "email",
  },
  {
    id: "address",
    label: "Visit Our Office",
    valueKey: "addressShort",
    description: "Schedule an in-person meeting",
    cta: "Get directions",
    icon: "address",
  },
];

export const CONTACT_INFO = {
  address: {
    line1: "InfraPulse Technologies Pvt. Ltd.",
    line2: "Office No. 909, Plot No. 4B, District Centre, Mayur Vihar Phase-1 Extension",
    city: "East Delhi, Delhi 110091",
    country: "India",
  },
  phone: "+91 83838 94651",
  email: "info@infrapulsetech.com",
  supportEmail: "support@infrapulsetech.com",
  addressShort: "Mayur Vihar Phase-1, Delhi",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Office+No.+909,+Plot+No.+4B,+District+Centre,+Mayur+Vihar+Phase-1+Extension,+East+Delhi,+Delhi+110091&output=embed",
  mapLink:
    "https://maps.google.com/?q=Office+No.+909,+Plot+No.+4B,+District+Centre,+Mayur+Vihar+Phase-1+Extension,+East+Delhi,+Delhi+110091",
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
