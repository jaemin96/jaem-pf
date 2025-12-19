import type {
  ExperienceItem,
  HeroData,
  ProjectItem,
  StackItem,
} from "./types";

export const heroKr: HeroData = {
  primaryName: "김재민",
  secondaryName: "Jaemin Kim",
  role: "Frontend Engineer",
  headline: "사용자 경험과 코드 품질을 동시에 고민하는 프론트엔드 엔지니어",
  summary:
    "4년+ 동안 React 기반 웹 프론트엔드를 중심으로 제품을 만들어 왔습니다. 디자인 시스템, 퍼포먼스, 협업 프로세스를 중요하게 생각하며, 서버 사이드(NestJS)까지 함께 다루며 도메인 이해와 엔드투엔드 흐름을 챙깁니다.",
  ctas: [
    { label: "프로젝트 살펴보기", variant: "default" },
    {
      label: "GitHub",
      href: "https://github.com/jaemin96",
      variant: "outline",
    },
    {
      label: "Blog",
      href: "https://jaemin96.github.io",
      variant: "ghost",
    },
  ],
  stats: [
    { label: "경력", value: "4+년" },
    { label: "주요 스택", value: "React / TS" },
    { label: "서버 경험", value: "NestJS" },
  ],
};

export const stacksKr: StackItem[] = [
  {
    title: "Frontend",
    desc: "React를 중심으로 Next.js를 함께 사용하며, 타입스크립트 기반으로 UI를 설계합니다.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    title: "스타일링",
    desc: "SCSS와 Tailwind CSS를 상황에 맞게 혼합하여 사용하고, 재사용 가능한 컴포넌트와 토큰 기반 스타일을 선호합니다.",
    tags: ["SCSS", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "상태 & 데이터",
    desc: "React Query, Context API를 활용해 서버 상태와 전역 상태를 나눠 관리하며, GraphQL API도 함께 다뤄왔습니다.",
    tags: ["React Query", "Context API", "GraphQL"],
  },
  {
    title: "Backend & 서버",
    desc: "NestJS 기반 서버 개발 경험이 있으며, TypeORM을 활용해 도메인 모델과 API를 함께 설계합니다.",
    tags: ["NestJS", "TypeORM"],
  },
  {
    title: "테스팅 & 품질",
    desc: "기본적인 테스트와 타입 안정성을 중시하며, 린한 단위 테스트와 스토리북 등으로 회귀를 줄이는 것에 관심이 있습니다.",
    tags: ["TypeScript", "테스트", "Storybook"],
  },
  {
    title: "협업",
    desc: "디자이너, 백엔드와의 커뮤니케이션을 중요하게 생각하며, 문서화와 비동기 커뮤니케이션을 선호합니다.",
    tags: ["문서화", "커뮤니케이션"],
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


