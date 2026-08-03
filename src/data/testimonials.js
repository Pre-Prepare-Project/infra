export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Rajesh Kumar",
    role: "CEO",
    company: "Edu2Earn",
    avatar: null,
    rating: 5,
    quote:
      "InfraPulse delivered our ERP system ahead of schedule with exceptional quality. Their team understood our business needs and built a solution that transformed our operations.",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    role: "CTO",
    company: "Rydo Private Ltd",
    avatar: null,
    rating: 5,
    quote:
      "The mobile app they built for our healthcare platform exceeded expectations. User engagement increased by 40% within the first three months of launch.",
  },
  {
    id: "testimonial-3",
    name: "Vivek Singh",
    role: "Founder",
    company: "Vamikatech",
    avatar: null,
    rating: 5,
    quote:
      "Our e-commerce platform handles thousands of daily transactions flawlessly. InfraPulse's ongoing support and maintenance have been outstanding.",
  },
  {
    id: "testimonial-4",
    name: "Sneha Reddy",
    role: "Operations Director",
    company: "Global Logistics Co.",
    avatar: null,
    rating: 5,
    quote:
      "Working with InfraPulse on our custom CRM was seamless. They are professional, responsive, and truly invested in our success.",
  },
  {
    id: "testimonial-5",
    name: "Vikram Singh",
    role: "Managing Director",
    company: "FinServe Capital",
    avatar: null,
    rating: 5,
    quote:
      "The billing review system they developed gives us real-time financial insights we never had before. A game-changer for our finance team.",
  },
];

export const TRUST_COMPANIES = [
  {
    name: "Microsoft",
    logo: "/images/trust/microsoft.png",
    width: 120,
    height: 28,
  },
  {
    name: "Google",
    logo: "/images/trust/google.png",
    width: 92,
    height: 30,
  },
  {
    name: "Amazon",
    logo: "/images/trust/amazon.png",
    width: 100,
    height: 30,
  },
  {
    name: "Airtel",
    logo: "/images/trust/airtel.png",
    width: 72,
    height: 28,
  },
  {
    name: "Tata",
    logo: "/images/trust/tata.png",
    width: 80,
    height: 28,
  },
  {
    name: "Infosys",
    logo: "/images/trust/infosys.png",
    width: 100,
    height: 28,
  },
  {
    name: "IBM",
    logo: "/images/trust/ibm.png",
    width: 80,
    height: 30,
  },
];

export function getFeaturedTestimonials(count = 3) {
  return TESTIMONIALS.slice(0, count);
}
