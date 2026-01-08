import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

export const heroKr: HeroData = {
  primaryName: "김재민",
  secondaryName: "Jaemin Kim",
  role: "Frontend Engineer",
  headline: "오늘의 편함을 위해 어제 고생하는 개발자",
  summary:
    "4년+ 동안 React 기반 웹 프론트엔드를 중심으로 개발해왔습니다. \n 반복 작업과 비효율적인 프로세스를 자동화와 모듈화로 해결하며 팀의 시간을 아끼고, 퍼포먼스 최적화와 원활한 협업을 위한 환경 구축에 시간을 투자합니다.\n개발 워크플로우를 지속적으로 개선하며 더 나은 개발 경험을 만들어가는 것을 중요하게 생각합니다.",
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

export const stacksKr: StackItem[] = [
  {
    title: "Frontend",
    desc: "React 중심의 모던 프론트엔드 스택. 타입 안정성과 사용자 경험을 우선합니다.",
    tags: [
      { name: "⭐React", variant: "primary" },
      { name: "TypeScript", variant: "primary" },
      { name: "Next.js", variant: "secondary" },
    ],
  },
  {
    title: "UI 스타일링",
    desc: "SCSS와 Tailwind CSS를 상황에 맞게 혼합하여 사용하고, 재사용 가능한 컴포넌트와 토큰 기반 스타일을 선호합니다.",
    tags: [
      { name: "SCSS", variant: "primary" },
      { name: "Tailwind CSS", variant: "secondary" },
    ],
  },
  {
    title: "상태 & 데이터",
    desc: "Custom Hook과 Context API로 서버/전역 상태를 분리 관리하며 prop drilling을 최소화합니다.",
    tags: [
      { name: "Context API", variant: "primary" },
      { name: "Recoil", variant: "secondary" },
      { name: "Redux", variant: "secondary" },
    ],
  },
  {
    title: "Backend & 서버",
    desc: "NestJS 기반 서버 개발 경험이 있으며, TypeORM을 활용해 도메인 모델과 API를 함께 설계합니다.",
    tags: [
      { name: "NestJS", variant: "primary" },
      { name: "TypeORM", variant: "secondary" },
      { name: "Prisma", variant: "secondary" },
      { name: "JWT", variant: "secondary" },
    ],
  },
  {
    title: "Performance",
    desc: "모듈화와 자동화로 반복을 줄이고, CI/CD 파이프라인과 개발 환경 개선(리펙토링)에 관심이 많습니다.",
    tags: [
      { name: "TypeScript", variant: "primary" },
      { name: "CI/CD", variant: "secondary" },
      { name: "Git Actions", variant: "secondary" },
    ],
  },
  {
    title: "경험",
    desc: "실무 경험과 개인 학습을 병행하며 기술 스펙트럼을 확장해나가고 있습니다.",
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

export const projectsKr: ProjectItem[] = [
  {
    name: "예산 관리 대시보드",
    period: "2023 - 2024",
    role: "Frontend Engineer",
    summary:
      "개인 및 팀 단위의 예산 관리 웹 애플리케이션을 설계·구현했습니다. 카테고리별 지출 분석, 월별 추세 차트, 예산 한도 알림 등 UX 중심으로 플로우를 구성했습니다.",
    tags: ["React", "TypeScript", "SCSS", "React Query"],
    meta: "개인 프로젝트 · 재무 관리",
  },
  {
    name: "터보레포 학습용 모노레포",
    period: "2024",
    role: "Frontend / Infra",
    summary:
      "터보레포 기반 학습용 모노레포를 운영하며, 공통 UI 패키지, 유틸 패키지를 분리하고 버전 관리, 빌드 파이프라인을 실험하고 있습니다.",
    tags: ["Turborepo", "Monorepo", "UI Library"],
    meta: "개인 레포 · 학습용",
  },
];

export const experiencesKr: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2023.10 - 재직 중",
    title: "Frontend Engineer",
    bullets: [
      "병원 병리 이미지 스캔·뷰어 및 자문 시스템의 프론트엔드를 개발하고 있습니다.",
      "대용량 이미지 뷰잉 환경에서의 성능과 사용성을 고려한 UI 플로우를 설계합니다.",
      "NestJS 기반 서버와 함께 작업하며, API 설계와 도메인 이해를 바탕으로 FE/BE를 연결하고 있습니다.",
    ],
  },
  {
    org: "Harbor X",
    period: "2021.06 - 2023.09",
    title: "Frontend Engineer",
    bullets: [
      "블록체인 관련 도메인에서 온보딩/대시보드 등 주요 화면의 프론트엔드를 담당했습니다.",
      "서버 개발자와 긴밀하게 협업하며, 블록체인 트랜잭션 흐름과 비즈니스 로직을 UI에 반영했습니다.",
      "필요 시 서버 쪽 작업도 병행하며 프론트엔드 관점에서 API와 데이터 모델 설계에 참여했습니다.",
    ],
  },
];
