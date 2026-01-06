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
    desc: "React, Next.js, TypeScript, Zustand, Tailwind, shadcn/ui",
    tags: ["React", "Next", "TS", "Tailwind", "Zustand"],
  },
  {
    title: "Quality",
    desc: "Testing Library, Jest, Storybook, visual regression sanity",
    tags: ["Jest", "RTL", "Storybook"],
  },
  {
    title: "Performance",
    desc: "Web vitals focus, bundle trimming, suspense & streaming",
    tags: ["Profiling", "Code Split"],
  },
  {
    title: "Backend",
    desc: "Node, Express/Nest basics, REST, tRPC, Prisma",
    tags: ["Node", "tRPC", "Prisma"],
  },
  {
    title: "Infra/DevOps",
    desc: "Vercel, Docker, CI/CD, feature flags, monitoring",
    tags: ["Vercel", "Docker", "CI/CD"],
  },
  {
    title: "Collaboration",
    desc: "Design systems, RFC culture, docs-first, async comms",
    tags: ["DesignSys", "Docs", "RFC"],
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
