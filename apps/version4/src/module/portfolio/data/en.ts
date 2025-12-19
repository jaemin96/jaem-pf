import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

export const heroEn: HeroData = {
  primaryName: "Jaemin Kim",
  role: "Frontend Engineer",
  headline: "Crafting delightful product experiences",
  summary:
    "5+ years building performant, accessible web apps. Shipping fast with a strong eye for UX and component quality.",
  ctas: [
    { label: "View Projects", variant: "default" },
    { label: "Resume", variant: "outline" },
    { label: "GitHub", variant: "ghost" },
  ],
  stats: [
    { label: "Years", value: "5+" },
    { label: "Core", value: "React / TS" },
    { label: "Based", value: "Seoul" },
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
