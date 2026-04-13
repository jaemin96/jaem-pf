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
    desc: "React-centered UI development with type safety as a baseline. Comfortable with component-driven architecture, and focused on separation of concerns and clear dependency direction.",
    tags: [
      { name: "⭐React", variant: "primary" },
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
    desc: "Separating server and global state management with Custom Hooks and Context API to minimize prop drilling.",
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
      { name: "NestJS", variant: "primary" },
      { name: "TypeORM", variant: "secondary" },
      { name: "Prisma", variant: "secondary" },
      { name: "JWT", variant: "secondary" },
    ],
  },
  {
    title: "Performance",
    desc: "Reducing repetition through modularization and automation, with keen interest in CI/CD pipelines and development environment improvements (refactoring).",
    tags: [
      { name: "TypeScript", variant: "primary" },
      { name: "CI/CD", variant: "secondary" },
      { name: "Git Actions", variant: "secondary" },
    ],
  },
  {
    title: "Experience",
    desc: "Expanding technical spectrum by combining hands-on work experience with personal learning.",
    tags: [
      { name: "GraphQL", variant: "experienced" },
      { name: "Vite", variant: "experienced" },
      { name: "React Query", variant: "experienced" },
      { name: "shadcn/ui", variant: "experienced" },
      { name: "RTK", variant: "experienced" },
      { name: "AWS", variant: "experienced" },
      { name: "JSP", variant: "experienced" },
      { name: "Terraform", variant: "experienced" },
      { name: "Storybook", variant: "experienced" },
      { name: "Jest", variant: "experienced" },
    ],
  },
];

export const projectsEn: ProjectItem[] = [
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
  // {
  //   name: "Turborepo Learning Monorepo",
  //   period: "2024",
  //   role: "Frontend / Infra",
  //   summary:
  //     "Running a Turborepo-based learning monorepo — separating shared UI and utility packages, and experimenting with versioning and build pipelines.",
  //   tags: ["Turborepo", "Monorepo", "UI Library"],
  //   meta: "Personal Repo · Learning",
  //   thumbnail: "/projects/sample-project.svg",
  //   github: "https://github.com/jaemin96",
  //   details: [
  //     "Managing shared UI and utility packages with apps/packages split structure",
  //     "Optimizing build and lint task caching with Turbo pipelines",
  //     "Configuring workspace:* dependencies and tsconfig path aliases across packages",
  //     "Experimenting with a shadcn/ui-based shared component library",
  //   ],
  // },
];

export const experiencesEn: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2024.8 - Present",
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
