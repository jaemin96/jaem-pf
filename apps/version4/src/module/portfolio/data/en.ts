import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

export const heroEn: HeroData = {
  primaryName: "Jaemin Kim",
  secondaryName: "김재민",
  role: "Frontend Engineer",
  headline: "Working hard today to make tomorrow easier",
  summary:
    "4+ years building React-based web frontends.\nI save team time by solving repetitive tasks and inefficient processes through automation and modularization, and invest in building environments for performance optimization and smooth collaboration.\nI value continuously improving development workflows and creating better developer experiences.",
  ctas: [
    {
      label: "Blog",
      href: "https://jaemin96.github.io",
      variant: "default",
    },
    {
      label: "GitHub",
      href: "https://github.com/jaemin96",
      variant: "outline",
    },
  ],
  stats: [
    { label: "years", value: "4+" },
    { label: "skills", value: "React / TS" },
    // { label: "Focus", value: "DX & Perf" },
    { label: "Projects", value: "5+" },
    // { label: "Companies", value: "2" },
  ],
};

export const stacksEn: StackItem[] = [
  {
    title: "Frontend",
    desc: "Modern frontend stack centered on React. Prioritizing type safety and user experience.",
    tags: [
      { name: "React", variant: "primary" },
      { name: "TypeScript", variant: "primary" },
      { name: "Next.js", variant: "secondary" },
    ],
  },
  {
    title: "UI Styling",
    desc: "Mixing SCSS and Tailwind CSS as needed, preferring reusable components and token-based styles.",
    tags: [
      { name: "SCSS", variant: "primary" },
      { name: "Tailwind CSS", variant: "secondary" },
    ],
  },
  {
    title: "State & Data",
    desc: "Managing server state and global state separately using React Query and Context API, also worked with GraphQL APIs.",
    tags: [
      { name: "Context API", variant: "primary" },
      { name: "Recoil", variant: "secondary" },
      { name: "Redux", variant: "secondary" },
    ],
  },
  {
    title: "Backend & Server",
    desc: "Experience with NestJS-based server development, designing domain models and APIs using TypeORM.",
    tags: [
      { name: "NestJS", variant: "secondary" },
      { name: "TypeORM", variant: "secondary" },
    ],
  },
  {
    title: "Testing & Quality",
    desc: "Valuing basic tests and type safety, interested in reducing regressions with lean unit tests and Storybook.",
    tags: [
      { name: "TypeScript", variant: "primary" },
      { name: "Testing", variant: "secondary" },
      { name: "Storybook", variant: "secondary" },
    ],
  },
  {
    title: "Experienced",
    desc: "Introducing latest technologies in flexible projects and expanding domain through personal learning.",
    tags: [
      { name: "Vue", variant: "experienced" },
      { name: "Vite", variant: "experienced" },
      { name: "Zustand", variant: "experienced" },
    ],
  },
];

export const projectsEn: ProjectItem[] = [
  {
    name: "Product Analytics Dashboard",
    period: "2024",
    role: "Lead FE",
    summary:
      "Rebuilt the analytics UI with streaming dashboards, reducing TTI by 28% and improving retention insights.",
    tags: ["Next.js", "React", "Tailwind", "Charts"],
    meta: "B2B SaaS · 3 engineers",
  },
  {
    name: "Design System Revamp",
    period: "2023",
    role: "Frontend",
    summary:
      "Delivered shadcn-based design system with tokens, dark mode, and documentation, cutting build time for new pages by ~35%.",
    tags: ["shadcn/ui", "Storybook", "Tokens"],
    meta: "Design System · Cross-team",
  },
  {
    name: "Growth Landing Engine",
    period: "2022",
    role: "Frontend",
    summary:
      "Built modular landing engine with A/B infra, leading to +12% signup conversion across campaigns.",
    tags: ["Next.js", "A/B", "Analytics"],
    meta: "Growth · Marketing",
  },
];

export const experiencesEn: ExperienceItem[] = [
  {
    org: "Acme Corp",
    period: "2023.04 - Present",
    title: "Frontend Engineer",
    bullets: [
      "Led the analytics dashboard revamp (streaming, skeleton-first UX).",
      "Introduced design token pipeline and Storybook docs for shared UI.",
      "Partnered with backend to optimize data fetching and cache strategy.",
    ],
  },
  {
    org: "Beta Labs",
    period: "2021.02 - 2023.03",
    title: "Frontend Developer",
    bullets: [
      "Owned growth landing engine; improved signup conversion by 12%.",
      "Set up testing culture with RTL/Jest and visual regression smoke.",
    ],
  },
  {
    org: "Freelance",
    period: "2019.01 - 2021.01",
    title: "Web Developer",
    bullets: [
      "Delivered marketing sites and dashboards for startups (Next/React).",
      "Focused on performance budgets and accessible UI components.",
    ],
  },
];
