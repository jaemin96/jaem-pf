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
      "A full-stack web application combining AI-based photo analysis with a social feed — covering everything from image upload, EXIF/GPS enrichment, analysis editing, visibility control, to feed, comments, likes, notifications, and admin operations.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Anthropic Claude",
      "Framer Motion",
      "VibeCode",
    ],
    meta: "Service Template Analysis · Photo Analysis / Social Platform",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    details: [
      "Used a vibe-coding approach to move fast, but planned user entry conditions and account-state access scenarios upfront — rather than just adding features — and reflected them in Next.js App Router middleware to ensure the app flows like a real service.",
      "Approached photo upload as a user-experience problem, not just a file attachment: structured HEIC conversion, EXIF extraction, GPS enrichment, and image cropping steps, then sent the image and metadata together to Claude's vision model to generate tags, mood, summary, shooting tips, and nearby places.",
      "Treated each post as a content unit rather than a single image record — connected Supabase Storage and DB to define a full lifecycle: upload, visibility control (public / followers / private), view count, soft delete/restore, and permanent deletion.",
      "Designed the main feed and detail view around the photo consumption experience — placing region filters, following feed, infinite scroll, likes, nested comments, link sharing, and download features so the flow from browsing to interaction feels natural.",
      "Kept social reactions connected by wiring follow, comment, like, and comment-like events into a Supabase trigger-based notification system, and completed the loop with a user notification inbox and read-status API.",
      "Extended beyond core user features to include profile editing, avatar upload/crop, liked photos collection, inquiry submission/response, admin approval, and account moderation — building out the structure needed from a service operations perspective.",
    ],
  },
  {
    name: "Budget Management Dashboard",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      "A budget management service that structures personal asset flows by account and transaction — covering transaction records, balance updates, authentication, and input UX end-to-end.",
    tags: ["React", "TypeScript", "SCSS", "Nest", "GraphQL", "Prisma"],
    meta: "Personal Project · Finance",
    thumbnail: "/projects/budget-book-banner.png",
    github: "https://github.com/jaemin96/Budget-book",
    details: [
      "Designed an asset management structure that goes beyond simple transaction logging — aggregating total assets, available cash, and savings/investment/pending amounts per account.",
      "Defined Query/Mutation types and DTOs directly in a NestJS GraphQL API so the frontend and backend share the same domain language.",
      "Modeled User, Account, and Transaction schemas with Prisma ORM and handled balance changes atomically within service-layer transactions for deposits, withdrawals, and transfers.",
      "Implemented the full user flow using Next.js App Router and Apollo Client — including a GraphQL proxy, cookie-based JWT auth, and redirect on auth failure.",
      "Reflected frequent-transaction presets and KakaoPay auto-charge/expense scenarios in the UX to improve input productivity; managed component-level styles with SCSS modules to avoid conflicts.",
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
