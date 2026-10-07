import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

export const heroEn: HeroData = {
  primaryName: "Jaemin Kim",
  secondaryName: "김재민",
  role: "Frontend Engineer",
  headline: "Working hard today to make tomorrow easier",
  summary:
    "4+ years building React-based web frontends.\nI save team time by solving repetitive tasks and inefficient processes through automation and modularization, and invest in building environments for performance optimization and smooth collaboration.\nI value continuously improving development workflows and creating better developer experiences.",
  bioShort: [
    "Frontend Engineer. Working hard today to make tomorrow easier.",
    "4+ years building React · TypeScript web frontends. Currently at Humintec, bringing GB-scale pathology images (WSI) to the browser.",
  ],
  bioLong: [
    "I save team time by solving repetitive tasks and inefficient processes through automation and modularization, and invest in building environments for performance optimization and smooth collaboration.",
    "I value continuously improving development workflows and creating better developer experiences. Previously at Harbor X, I owned async transaction UX and backoffice modularization for a crypto-asset service.",
  ],
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
    { label: "projects", value: "5+" },
    // { label: "Companies", value: "2" },
  ],
};

export const stacksEn: StackItem[] = [
  {
    title: "Frontend",
    desc: "React-centered UI development with type safety as a baseline. Comfortable with component-driven architecture, and focused on separation of concerns and clear dependency direction.",
    tags: [
      { name: "⭐React", variant: "primary" },
      { name: "TypeScript", variant: "primary" },
      { name: "Next.js", variant: "secondary" },
    ],
  },
  {
    title: "Styling",
    desc: "Selecting CSS-in-JS, Tailwind, or SCSS based on the scale and purpose of each project.",
    tags: [
      { name: "SCSS", variant: "primary" },
      { name: "Tailwind CSS", variant: "primary" },
      { name: "Module CSS", variant: "secondary" },
    ],
  },
  {
    title: "State & Data",
    desc: "Efficient data fetching with TanStack Query and GraphQL. Separating client state by role using Context API and zustand to minimize coupling.",
    tags: [
      { name: "TanStack Query", variant: "primary" },
      { name: "Context API", variant: "primary" },
      { name: "zustand", variant: "primary" },
      { name: "GraphQL", variant: "secondary" },
      { name: "Redux", variant: "secondary" },
      { name: "Recoil", variant: "secondary" },
    ],
  },
  {
    title: "Backend",
    desc: "Developing with consideration for the overall data flow between frontend and backend.",
    tags: [
      { name: "NestJS", variant: "primary" },
      { name: "TypeORM", variant: "primary" },
      { name: "JWT", variant: "primary" },
      { name: "Prisma", variant: "secondary" },
      { name: "MySQL", variant: "secondary" },
      { name: "PostgreSQL", variant: "secondary" },
    ],
  },
  {
    title: "Engineering",
    desc: "Beyond feature implementation, I have a strong interest in refactoring and architecture for code readability and reusability. I prefer environments that automate processes and improve development productivity.",
    tags: [
      { name: "Git", variant: "primary" },
      { name: "monorepo", variant: "primary" },
      { name: "Git Actions", variant: "secondary" },
      { name: "Vercel", variant: "secondary" },
    ],
  },
  {
    title: "Experience",
    desc: "Expanding technical spectrum by combining hands-on work experience with personal learning.",
    tags: [
      { name: "AWS", variant: "experienced" },
      { name: "Shadcn/ui", variant: "experienced" },
      { name: "Terraform", variant: "experienced" },
      { name: "Storybook", variant: "experienced" },
      { name: "Jest", variant: "experienced" },
      { name: "Docker", variant: "experienced" },
      { name: "Jenkins", variant: "experienced" },
      { name: "JSP", variant: "experienced" },
      { name: "antd", variant: "experienced" },
    ],
  },
];

export const projectsEn: ProjectItem[] = [
  {
    name: "Picvora",
    period: "2026.01 - 2026.03",
    role: "Frontend / Backend",
    summary:
      "A photo-sharing service where uploads are enriched with shooting info and analysis results.",
    outcome: "A full-stack service I designed and built alone, from upload and analysis to feed, notifications, and admin tools",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    meta: "Photo sharing",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    details: [
      "Defined access rules per account state up front and enforced them in Next.js App Router middleware.",
      "Uploads go through HEIC conversion, EXIF extraction, GPS correction, and cropping; the image and metadata then produce tags, mood, and shooting tips.",
      "Each post has one lifecycle: visibility (public / followers / private), view count, delete and restore.",
      "Built the feed and detail views with region filters, following feed, infinite scroll, likes, nested comments, sharing, and download.",
      "Follow, comment, and like events feed notifications through Supabase triggers, with an inbox and read status.",
      "Included what operating the service needs: profile editing, inquiries, admin approval, and account moderation.",
    ],
  },
  {
    name: "Budget Management Dashboard",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      "A service for recording and managing personal finances by account and transaction.",
    outcome: "A personal finance service where balances update together with each deposit, expense, and transfer",
    stack: ["React", "TypeScript", "NestJS", "GraphQL", "Prisma"],
    tags: ["React", "TypeScript", "SCSS", "Nest", "GraphQL", "Prisma"],
    meta: "Personal project",
    thumbnail: "/projects/budget-book-banner.png",
    github: "https://github.com/jaemin96/Budget-book",
    details: [
      "Aggregates total assets, available cash, and savings, investment, and pending amounts per account.",
      "Defined the NestJS GraphQL types and DTOs myself so the frontend shares the same domain terms.",
      "Modeled User, Account, and Transaction with Prisma and applied balance changes per transaction.",
      "Implemented cookie-based JWT auth with redirect on auth failure.",
      "Cut input effort with frequent-transaction presets and auto-charge and expense scenarios.",
    ],
  },
  {
    // Shown in the bottom (deferred) area. To be replaced by a per-company detail UI.
    // TODO: fill in a measurable outcome, the libraries actually used, and a loop video.
    name: "Pathology Image Viewer",
    period: "2024.08 - Present",
    role: "Frontend",
    summary:
      "A diagnostic-support screen for viewing GB-scale pathology images (WSI) in the browser, annotating them, and consulting in real time.",
    outcome: "Shows GB-scale slides in the browser without stutter using tiling and lazy loading",
    stack: ["React", "TypeScript"],
    tags: ["React", "TypeScript"],
    meta: "Humintec",
    deferred: true,
    details: [
      "Designed the frontend structure for annotation tools (measurement, region marking) and the video consultation screen.",
      "Built a data grid and filtering for workflows handling tens of thousands of slides.",
      "Designed state management to reduce mistakes during diagnosis.",
    ],
  },
];

export const experiencesEn: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2024.08 - Present",
    title: "Frontend Engineer",
    bullets: [
      "Applied Tiling and Lazy Loading to render GB-scale pathology images (WSI) in the browser without latency, improving viewing performance.",
      "Designed the frontend architecture for an Annotation tool (measurements, region marking, etc.) and a real-time video consultation system for pathologists.",
      "Built a high-density data grid and intuitive filtering system to support medical workflows managing tens of thousands of slides.",
      "Designed state management logic to prevent human errors during diagnosis and incorporated user feedback into iterative UI improvements.",
    ],
  },
  {
    org: "Harbor X",
    period: "2021.06 - 2023.09",
    title: "Frontend Engineer",
    bullets: [
      "Built an onboarding process that clearly communicates blockchain-specific async flows — wallet connection, transaction signing — in a user-friendly way.",
      "Visualized real-time asset prices and transaction history with charts and graphs; implemented WebSocket/Polling logic to reflect Pending/Success/Fail transaction states in real time.",
      "Defined the data structures needed on the frontend and collaborated with backend engineers on RESTful API specs and DB schema design to reduce unnecessary development overhead.",
      "Developed backoffice features as modular components to cut the cost of repetitive admin UI work.",
    ],
  },
];
