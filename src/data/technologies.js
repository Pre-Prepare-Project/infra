export const TECHNOLOGY_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Modern UI frameworks and libraries for responsive web applications.",
    technologies: [
      { name: "React.js", href: "/technologies" },
      { name: "Next.js", href: "/technologies" },
      { name: "TypeScript", href: "/technologies" },
      { name: "Ant Design", href: "/technologies" },
      { name: "SCSS", href: "/technologies" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable server-side technologies and API frameworks.",
    technologies: [
      { name: "Node.js", href: "/technologies" },
      { name: "Express.js", href: "/technologies" },
      { name: "Python", href: "/technologies" },
      { name: "PHP", href: "/technologies" },
      { name: "GraphQL", href: "/technologies" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform and native mobile development tools.",
    technologies: [
      { name: "Flutter", href: "/technologies" },
      { name: "React Native", href: "/technologies" },
      { name: "Swift", href: "/technologies" },
      { name: "Kotlin", href: "/technologies" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure, deployment, and automation platforms.",
    technologies: [
      { name: "AWS", href: "/technologies" },
      { name: "Azure", href: "/technologies" },
      { name: "Docker", href: "/technologies" },
      { name: "Kubernetes", href: "/technologies" },
      { name: "CI/CD", href: "/technologies" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational and NoSQL database solutions.",
    technologies: [
      { name: "PostgreSQL", href: "/technologies" },
      { name: "MySQL", href: "/technologies" },
      { name: "MongoDB", href: "/technologies" },
      { name: "Redis", href: "/technologies" },
    ],
  },
];

export const TECHNOLOGIES = TECHNOLOGY_CATEGORIES.flatMap((category) =>
  category.technologies.map((tech) => ({
    ...tech,
    category: category.title,
    categoryId: category.id,
  })),
);

export const FOOTER_TECHNOLOGIES = [
  { label: "React.js", href: "/technologies" },
  { label: "Next.js", href: "/technologies" },
  { label: "Node.js", href: "/technologies" },
  { label: "Flutter", href: "/technologies" },
  { label: "AWS", href: "/technologies" },
  { label: "Azure", href: "/technologies" },
];

export function getTechnologiesByCategory(categoryId) {
  return TECHNOLOGY_CATEGORIES.find((category) => category.id === categoryId);
}

export function getTechnologyCategories() {
  return TECHNOLOGY_CATEGORIES;
}

export function getAllTechnologyNames() {
  return TECHNOLOGIES.map((tech) => tech.name);
}
