import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

/*
 * ✏️ Placeholders: anything wrapped in [[ ... ]] is a blank to fill with a real number or example.
 * It renders as a dashed box on the site and as [ ... ] in the PDF. Delete the [[ ]] part if you have no number.
 */

export const heroEn: HeroData = {
  primaryName: "Jaemin Kim",
  secondaryName: "김재민",
  role: "Frontend Engineer",
  headline: "A developer who puts in the work yesterday, so today runs easy.",
  summary:
    "4+ years building web frontends with React and TypeScript. Currently building a viewer for GB-scale pathology images (WSI) at Humintec.\nI turn repetitive work into tools, and I like cutting the time users spend waiting.\nPreviously at Harbor X, I owned async transaction UX and backoffice modularization for a crypto-asset service.",
  bioShort: [
    "Frontend Engineer. I put in the work yesterday, so today runs easy.",
    "4+ years building web frontends with React · TypeScript. Currently at Humintec, building a viewer that brings GB-scale pathology images (WSI) to the browser.",
  ],
  bioLong: [
    "I turn repetitive work into tools. I built [[e.g. a shared component library / deploy & QA automation scripts]] that saved the team [[N hours a week]], and this portfolio itself runs on a pnpm monorepo with shared config packages.",
    "I like cutting the time users spend waiting. Large-image tiling and rendering only what is needed are the kind of problems I sink the most time into.",
    "Previously at Harbor X, I owned async transaction UX and backoffice modularization for a crypto-asset service.",
  ],
  email: "lemon__96@naver.com",
  // One-line availability. Set to "" to hide it.
  availability: "Open to new frontend roles.",
  ctas: [
    {
      id: "blog",
      label: "Blog",
      href: "https://jaemin96.github.io",
      variant: "default",
    },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/jaemin96",
      variant: "outline",
    },
  ],
  stats: [
    { label: "years", value: "4+" },
    { label: "skills", value: "React / TS" },
    { label: "projects", value: "5+" },
  ],
};

export const stacksEn: StackItem[] = [
  {
    title: "Frontend",
    desc: "React-centered UI development with type safety as a baseline. Comfortable with component-driven architecture, and focused on separation of concerns and clear dependency direction.",
    tags: [
      { name: "React", variant: "primary" },
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
    title: "Also used",
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
    // Company code can't be shown, so the media slot shows a deep-zoom demo built on the same idea.
    // TODO: fill in the viewer library actually used (e.g. OpenSeadragon) and the numbers in [[ ]].
    name: "Pathology Image Viewer (WSI)",
    period: "2024.08 - Present",
    role: "Frontend",
    summary:
      "A diagnostic-support screen for viewing GB-scale pathology images (WSI) in the browser, annotating them, and consulting in real time.",
    outcome:
      "Shows GB-scale slides in the browser without stutter by loading only the visible tiles — first paint [[N s → M s]]",
    stack: ["React", "TypeScript", "Canvas"],
    tags: ["React", "TypeScript"],
    meta: "Humintec",
    interactive: "deepzoom",
    caption:
      "Not the company code: a miniature I built on the same idea (a per-zoom-level tile pyramid, generating only visible tiles). Click, then scroll to zoom and drag to pan.",
    details: [
      "Split slides into a per-zoom-level tile pyramid and load only on-screen tiles, prioritized from the center out. ([[library used / parts built in-house]])",
      "Cut first paint from [[N s → M s]] and memory use while zooming and panning by [[N%]].",
      "Designed the frontend structure for Annotation tools (measurement, region marking) and the real-time video consultation screen.",
      "Built a dense data grid and filters for workflows handling tens of thousands of slides.",
      "Designed state rules such as [[e.g. unsaved-change guards, slide mix-up prevention]] to reduce mistakes during diagnosis.",
    ],
  },
  {
    name: "Picvora",
    period: "2026.01 - 2026.03",
    role: "Frontend / Backend",
    summary:
      "A photo-sharing service where uploads are enriched with shooting info and analysis results.",
    outcome:
      "A full-stack service I designed and built alone, from upload and analysis to feed, notifications, and admin tools",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    meta: "Photo sharing",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    // TODO: add the deployed URL to demo, and a ~5s silent loop (mp4) to video if you have one.
    // demo: "https://",
    // video: "/projects/picvora-loop.mp4",
    details: [
      "Defined access rules per account state up front and enforced them in Next.js App Router middleware.",
      "Uploads go through HEIC conversion, EXIF extraction, GPS correction, and cropping; the image and metadata then produce tags, mood, and shooting tips.",
      "Each post has one lifecycle: visibility (public / followers / private), view count, delete and restore.",
      "Built the feed and detail views with region filters, following feed, infinite scroll, likes, nested comments, sharing, and download.",
      "Follow, comment, and like events feed notifications through Supabase triggers, with an inbox and read status.",
      "Included what operating the service needs: profile editing, inquiries, admin approval, and account moderation.",
      "Overall scope: [[N screens · N tables · N weeks]]",
    ],
  },
  {
    name: "Budget Management Dashboard",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      "A service for recording and managing personal finances by account and transaction.",
    outcome:
      "A personal finance service where balances update together with each deposit, expense, and transfer",
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
];

export const experiencesEn: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2024.08 - Present",
    title: "Frontend Engineer",
    highlight:
      "Frontend for a GB-scale pathology image (WSI) viewer, Annotation tools, and video consultation.",
    bullets: [
      "Rendered GB-scale pathology images (WSI) with Tiling · Lazy Loading that fetches only visible tiles per zoom level, cutting first paint from [[N s → M s]].",
      "Designed the frontend architecture for pathologists' Annotation tools (measurement, region marking) and a real-time video consultation system. (used by [[N institutions / N pathologists]])",
      "Built a dense data grid and filters for sites managing tens of thousands ([[N0,000]]) of slides, cutting slide lookup time from [[N s → M s]].",
      "Designed state rules that prevent human error during diagnosis ([[e.g. unsaved-change guards, slide mix-up prevention]]) and shipped [[N+]] rounds of field feedback.",
    ],
  },
  {
    org: "Harbor X",
    period: "2021.06 - 2023.09",
    title: "Frontend Engineer",
    highlight:
      "Wallet and transaction UX plus shared backoffice components for a crypto-asset service.",
    bullets: [
      "Designed and built a step-by-step onboarding for blockchain async flows — wallet connection, transaction signing — reducing [[onboarding drop-off / related inquiries by N%]].",
      "Visualized real-time prices and asset history with charts, and reflected Pending/Success/Fail transaction states live via WebSocket/Polling.",
      "Defined the frontend's data needs first and worked with backend engineers on RESTful API specs and DB schema design, reducing API change requests mid-development.",
      "Modularized backoffice screens into shared table and form components, cutting new admin screen work from [[N days → M days]].",
    ],
  },
];
