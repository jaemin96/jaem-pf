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
    desc: "React를 중심으로 타입 안정성이 보장된 UI를 설계합니다. 재사용 가능한 컴포넌트 단위 개발에 익숙하며, 관심사 분리와 의존성 방향을 고려한 구조를 지향합니다.",
    tags: [
      { name: "⭐React", variant: "primary" },
      { name: "TypeScript", variant: "primary" },
      { name: "Next.js", variant: "secondary" },
    ],
  },
  {
    title: "Styling",
    desc: "프로젝트의 규모와 목적에 맞춰 CSS-in-JS, Tailwind, SCSS를 선택하여 사용합니다.",
    tags: [
      { name: "SCSS", variant: "primary" },
      { name: "Tailwind CSS", variant: "primary" },
    ],
  },
  {
    title: "State & Data",
    desc: "GraphQL을 통한 효율적인 데이터 요청 경험이 있으며, Custom Hook을 활용해 비즈니스 로직을 분리하고 Prop Drilling을 최소화합니다.",
    tags: [
      { name: "TanStack Query", variant: "primary" },
      { name: "Context API", variant: "primary" },
      { name: "GraphQL", variant: "secondary" },
      { name: "Redux", variant: "secondary" },
      { name: "Recoil", variant: "secondary" },
    ],
  },
  {
    title: "Backend & 서버",
    desc: "프론트엔드와 백엔드 사이의 전체적인 데이터 흐름을 고려하여 개발합니다.",
    tags: [
      { name: "NestJS", variant: "primary" },
      { name: "TypeORM", variant: "secondary" },
      { name: "Prisma", variant: "secondary" },
      { name: "MySQL", variant: "secondary" },
      { name: "JWT", variant: "secondary" },
    ],
  },
  {
    title: "Engineering",
    desc: "단순한 기능 구현을 넘어 코드의 가독성과 재사용성을 위한 리팩토링에 관심이 많습니다. 프로세스를 자동화하고 개발 생산성을 높이는 환경을 선호합니다.",
    tags: [
      { name: "Git", variant: "primary" },
      { name: "Git Actions", variant: "secondary" },
      { name: "Vercel", variant: "secondary" },
    ],
  },
  {
    title: "경험",
    desc: "실무 경험과 개인 학습을 병행하며 기술 스펙트럼을 확장해나가고 있습니다.",
    tags: [
      { name: "AWS", variant: "experienced" },
      { name: "Shadcn/ui", variant: "experienced" },
      { name: "Terraform", variant: "experienced" },
      { name: "Storybook", variant: "experienced" },
      { name: "Jest", variant: "experienced" },
      { name: "Docker", variant: "experienced" },
      { name: "Jenkins", variant: "experienced" },
      { name: "JSP", variant: "experienced" },
    ],
  },
];

export const projectsKr: ProjectItem[] = [
  {
    name: "예산 관리 대시보드",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      // "개인 예산 관리 웹 애플리케이션을 설계·구현했습니다. 카테고리별 지출 분석, 거래 내역 관리 목적으로 UX 중심으로 플로우를 구성했습니다.",
      "개인 자산 흐름을 계좌·거래 단위로 구조화하고 거래 기록, 잔액 반영, 인증, 입력 UX까지 전반을 설계한 예산 관리 서비스입니다.",
    tags: ["React", "TypeScript", "SCSS", "Nest", "GraphQL", "Prisma"],
    meta: "개인 프로젝트 · 재무 관리",
    thumbnail: "/projects/budget-book-banner.png",
    github: "https://github.com/jaemin96/Budget-book",
    // details: [
    //   "카테고리별 지출 분석 차트 및 월간 예산 대비 실적 시각화",
    //   "GraphQL 기반 API 설계 — 쿼리/뮤테이션 타입 직접 정의",
    //   "Prisma ORM으로 트랜잭션 내역 스키마 모델링",
    //   "SCSS 모듈로 컴포넌트 단위 스타일 격리",
    // ],
    details: [
      "단순 거래 기록을 넘어 계좌별 총자산, 가용 현금, 저축·투자·보류 금액까지 분리 집계하는 자산 관리 구조를 설계했습니다.",
      "NestJS 기반 GraphQL API에서 Query/Mutation 타입과 DTO를 직접 정의해 프론트엔드와 백엔드가 같은 도메인 언어로 통신하도록 구성했습니다.",
      "Prisma ORM으로 User, Account, Transaction 스키마와 관계를 모델링하고, 입금·지출·이체 시 잔액 변동이 함께 반영되도록 서비스 로직을 트랜잭션 단위로 처리했습니다.",
      "Next.js App Router와 Apollo Client를 사용해 GraphQL 프록시, 쿠키 기반 JWT 인증, 인증 실패 시 리다이렉트까지 포함한 사용자 흐름을 구현했습니다.",
      "거래 입력 생산성을 높이기 위해 자주 쓰는 거래 프리셋과 카카오페이 자동충전/지출 시나리오를 UX에 반영했고, SCSS 모듈로 스타일 충돌 없이 컴포넌트 단위 UI를 관리했습니다.",
    ],
  },
  // {
  //   name: "터보레포 학습용 모노레포",
  //   period: "2024",
  //   role: "Frontend / Infra",
  //   summary:
  //     "터보레포 기반 학습용 모노레포를 운영하며, 공통 UI 패키지, 유틸 패키지를 분리하고 버전 관리, 빌드 파이프라인을 실험하고 있습니다.",
  //   tags: ["Turborepo", "Monorepo", "UI Library"],
  //   meta: "개인 레포 · 학습용",
  //   thumbnail: "/projects/sample-project.svg",
  //   github: "https://github.com/jaemin96",
  //   details: [
  //     "apps / packages 분리 구조로 공통 UI·유틸 패키지 관리",
  //     "Turbo 파이프라인으로 빌드·린트 태스크 캐싱 최적화",
  //     "패키지 간 workspace:* 의존성 및 tsconfig path alias 설정",
  //     "shadcn/ui 기반 공통 컴포넌트 라이브러리 실험 운영",
  //   ],
  // },
];

export const experiencesKr: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2023.10 - 재직 중",
    title: "Frontend Engineer",
    bullets: [
      "GB 단위의 대용량 병리 이미지(WSI)를 웹 환경에서 지연 없이 렌더링하기 위해 Tiling 및 Lazy Loading 기법을 적용해 뷰잉 성능을 개선했습니다.",
      "병리 전문의의 진단 편의를 위한 Annotation 도구(측정, 구역 표시 등) 및 실시간 화상 자문 시스템의 프론트엔드 아키텍처를 설계했습니다.",
      "수만 장의 슬라이드를 관리하는 의료 현장의 특성을 반영해, 정보 밀도가 높은 데이터 그리드와 직관적인 필터링 시스템을 구현했습니다.",
      "진단 과정의 휴먼 에러를 방지하기 위한 상태 관리 로직을 설계하고 사용자 피드백을 반영했습니다.",
    ],
  },
  {
    org: "Harbor X",
    period: "2021.06 - 2023.09",
    title: "Frontend Engineer",
    bullets: [
      "가상자산 지갑 연동, 트랜잭션 서명 등 블록체인 특유의 비동기 흐름을 사용자에게 명확히 전달하는 온보딩 프로세스를 설계·구현했습니다.",
      "실시간 시세 및 자산 변동 내역을 차트·그래프로 시각화해 데이터 가독성을 높이고, Pending/Success/Fail 트랜잭션 상태를 WebSocket/Polling으로 UI에 실시간 반영했습니다.",
      "프론트엔드 관점에서 필요한 데이터 구조를 정의하고, 백엔드 개발자와 함께 RESTful API 규격 및 DB 스키마 설계에 참여해 불필요한 개발 리소스를 줄였습니다.",
      "백오피스 기능을 모듈화된 컴포넌트로 개발해 반복되는 관리자 UI 개발 비용을 절감했습니다.",
    ],
  },
];
