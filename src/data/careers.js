export const CAREER_DEPARTMENTS = [
  { id: "all", label: "All Departments" },
  { id: "engineering", label: "Engineering" },
  { id: "design", label: "Design" },
  { id: "devops", label: "DevOps" },
  { id: "qa", label: "Quality Assurance" },
  { id: "business", label: "Business" },
];

export const CAREER_BENEFITS = [
  {
    id: "compensation",
    title: "Competitive Compensation",
    description: "Market-aligned salaries with performance-based growth opportunities.",
  },
  {
    id: "flexibility",
    title: "Flexible Work",
    description: "Hybrid and remote-friendly options that support work-life balance.",
  },
  {
    id: "learning",
    title: "Learning & Development",
    description: "Training budgets, certifications, and mentorship from senior engineers.",
  },
  {
    id: "culture",
    title: "Collaborative Culture",
    description: "A supportive team environment focused on innovation and ownership.",
  },
  {
    id: "growth",
    title: "Career Growth",
    description: "Clear progression paths across engineering, design, and leadership tracks.",
  },
  {
    id: "projects",
    title: "Impactful Projects",
    description: "Work on real client products across web, mobile, ERP, and cloud domains.",
  },
];

export const JOB_OPENINGS = [
  {
    id: "senior-full-stack-developer",
    slug: "senior-full-stack-developer",
    title: "Senior Full Stack Developer",
    href: "/careers/senior-full-stack-developer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote / India",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead end-to-end development of scalable web applications using React, Next.js, and Node.js.",
    longDescription:
      "We are looking for a Senior Full Stack Developer to architect and deliver enterprise-grade applications. You will collaborate with product, design, and client teams while mentoring junior developers.",
    responsibilities: [
      "Design and build scalable web applications with React and Next.js",
      "Develop RESTful APIs and integrate third-party services",
      "Lead code reviews and uphold engineering best practices",
      "Collaborate with UI/UX designers and project managers",
      "Mentor junior developers and contribute to technical decisions",
    ],
    requirements: [
      "5+ years of experience in full stack development",
      "Strong proficiency in React, Next.js, and Node.js",
      "Experience with PostgreSQL or MongoDB",
      "Solid understanding of CI/CD and cloud deployment",
      "Excellent communication and problem-solving skills",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: "react-nextjs-developer",
    slug: "react-nextjs-developer",
    title: "React / Next.js Developer",
    href: "/careers/react-nextjs-developer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote / India",
    type: "Full-time",
    experience: "2–4 years",
    description:
      "Build modern, performance-focused frontend experiences for client and product teams.",
    longDescription:
      "Join our frontend team to develop responsive, accessible, and SEO-optimized web applications using React, Next.js, and modern CSS practices.",
    responsibilities: [
      "Implement responsive UI components from design specifications",
      "Optimize applications for performance and accessibility",
      "Integrate frontend with REST and GraphQL APIs",
      "Write clean, maintainable, and well-tested code",
      "Participate in agile ceremonies and sprint planning",
    ],
    requirements: [
      "2–4 years of frontend development experience",
      "Strong knowledge of React and Next.js App Router",
      "Experience with SCSS modules or CSS-in-JS",
      "Familiarity with Ant Design or similar UI libraries",
      "Understanding of web performance and SEO basics",
    ],
    technologies: ["React", "Next.js", "SCSS", "Ant Design"],
  },
  {
    id: "mobile-app-developer",
    slug: "mobile-app-developer",
    title: "Mobile App Developer",
    href: "/careers/mobile-app-developer",
    department: "engineering",
    departmentLabel: "Engineering",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Develop cross-platform and native mobile applications for iOS and Android.",
    longDescription:
      "We need a Mobile App Developer experienced in Flutter or React Native to build high-quality apps with smooth UX, offline support, and reliable backend integrations.",
    responsibilities: [
      "Build and maintain mobile apps using Flutter or React Native",
      "Integrate APIs, push notifications, and payment gateways",
      "Collaborate with designers to implement polished mobile UI",
      "Debug and optimize app performance across devices",
      "Support App Store and Play Store deployment processes",
    ],
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in Flutter or React Native",
      "Experience publishing apps to App Store and Google Play",
      "Knowledge of mobile security and data storage patterns",
      "Strong attention to detail and user experience",
    ],
    technologies: ["Flutter", "React Native", "Firebase"],
  },
  {
    id: "ui-ux-designer",
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    href: "/careers/ui-ux-designer",
    department: "design",
    departmentLabel: "Design",
    location: "Remote / India",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Design intuitive digital experiences for web and mobile products.",
    longDescription:
      "We are hiring a UI/UX Designer to create user-centered interfaces, design systems, and prototypes for client projects and internal products.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity UI designs",
      "Conduct user research and usability testing sessions",
      "Develop and maintain design systems and component libraries",
      "Collaborate closely with developers during implementation",
      "Present design concepts to clients and stakeholders",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Expertise in Figma and modern design workflows",
      "Strong portfolio demonstrating web and mobile work",
      "Understanding of accessibility and responsive design",
      "Ability to translate business goals into user flows",
    ],
    technologies: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    id: "devops-engineer",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    href: "/careers/devops-engineer",
    department: "devops",
    departmentLabel: "DevOps",
    location: "Remote / India",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and deployment automation.",
    longDescription:
      "InfraPulse is seeking a DevOps Engineer to build reliable deployment pipelines and cloud infrastructure on AWS and Azure for client and product environments.",
    responsibilities: [
      "Design and maintain CI/CD pipelines for web and mobile projects",
      "Manage cloud infrastructure on AWS and Azure",
      "Implement monitoring, logging, and alerting solutions",
      "Automate deployment and scaling workflows",
      "Collaborate with development teams on security best practices",
    ],
    requirements: [
      "4+ years of DevOps or cloud engineering experience",
      "Hands-on experience with AWS or Azure services",
      "Proficiency with Docker and Kubernetes",
      "Experience building CI/CD with GitHub Actions or similar tools",
      "Strong understanding of Linux, networking, and security",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "qa-engineer",
    slug: "qa-engineer",
    title: "QA Engineer",
    href: "/careers/qa-engineer",
    department: "qa",
    departmentLabel: "Quality Assurance",
    location: "Remote / India",
    type: "Full-time",
    experience: "2–4 years",
    description:
      "Ensure product quality through manual and automated testing across web and mobile.",
    longDescription:
      "We are looking for a QA Engineer to define test strategies, execute test plans, and work with developers to deliver stable, high-quality software releases.",
    responsibilities: [
      "Create and execute test plans for web and mobile applications",
      "Identify, document, and track bugs through resolution",
      "Build and maintain automated test suites where applicable",
      "Participate in sprint planning and release readiness reviews",
      "Advocate for quality throughout the development lifecycle",
    ],
    requirements: [
      "2–4 years of QA or software testing experience",
      "Experience with manual and exploratory testing",
      "Familiarity with test automation tools is a plus",
      "Strong analytical skills and attention to detail",
      "Good communication with cross-functional teams",
    ],
    technologies: ["Manual Testing", "Test Automation", "Jira"],
  },
  {
    id: "business-development-executive",
    slug: "business-development-executive",
    title: "Business Development Executive",
    href: "/careers/business-development-executive",
    department: "business",
    departmentLabel: "Business",
    location: "India",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Drive new business opportunities and build long-term client relationships.",
    longDescription:
      "Join our business team to identify prospects, manage the sales pipeline, and partner with technical teams to deliver compelling proposals for software projects.",
    responsibilities: [
      "Identify and qualify new business opportunities",
      "Manage leads through the sales pipeline",
      "Prepare proposals and presentations for client meetings",
      "Build and maintain strong client relationships",
      "Coordinate with delivery teams on project scoping",
    ],
    requirements: [
      "2+ years in B2B sales or business development",
      "Experience in IT services or software sales preferred",
      "Excellent communication and negotiation skills",
      "Ability to understand client needs and propose solutions",
      "Self-motivated with strong organizational skills",
    ],
    technologies: ["CRM", "Sales Pipeline", "Client Relations"],
  },
];

export function getJobBySlug(slug) {
  return JOB_OPENINGS.find((job) => job.slug === slug);
}

export function getJobsByDepartment(departmentId) {
  if (departmentId === "all") {
    return JOB_OPENINGS;
  }
  return JOB_OPENINGS.filter((job) => job.department === departmentId);
}

export function getAllJobSlugs() {
  return JOB_OPENINGS.map((job) => job.slug);
}

export function getRelatedJobs(currentSlug, limit = 3) {
  const current = getJobBySlug(currentSlug);
  if (!current) {
    return [];
  }

  const sameDepartment = JOB_OPENINGS.filter(
    (job) => job.slug !== currentSlug && job.department === current.department,
  );
  const others = JOB_OPENINGS.filter(
    (job) => job.slug !== currentSlug && job.department !== current.department,
  );

  return [...sameDepartment, ...others].slice(0, limit);
}
