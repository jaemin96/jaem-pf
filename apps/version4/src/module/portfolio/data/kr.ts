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
    desc: "프로젝트의 규모와 목적에 맞춰 CSS-in-JS, Tailwind, SCSS를 선택적으로 사용합니다.",
    tags: [
      { name: "SCSS", variant: "primary" },
      { name: "Tailwind CSS", variant: "primary" },
      { name: "Module CSS", variant: "secondary" },
    ],
  },
  {
    title: "State & Data",
    desc: "TanStack Query와 GraphQL을 활용해 데이터를 효율적으로 패칭합니다. Context API와 zustand로 클라이언트 상태를 역할에 맞게 분리해 관리합니다.",
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
    desc: "프론트엔드와 백엔드 사이의 전체적인 데이터 흐름을 고려하여 개발합니다.",
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
    desc: "단순한 기능 구현을 넘어 코드의 가독성과 재사용성을 위한 리팩토링과 아키텍처 구조에 관심이 많습니다. 프로세스를 자동화하고 개발 생산성을 높이는 환경을 선호합니다.",
    tags: [
      { name: "Git", variant: "primary" },
      { name: "monorepo", variant: "primary" },
      { name: "Git Actions", variant: "secondary" },
      { name: "Vercel", variant: "secondary" },
    ],
  },
  {
    title: "Experience",
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
      { name: "antd", variant: "experienced" },
    ],
  },
];

export const projectsKr: ProjectItem[] = [
  {
    name: "Picvora",
    period: "2026.01 - 2026.03",
    role: "Frontend / Backend",
    summary:
      "AI 기반 사진 분석과 소셜 피드 흐름을 결합한 사진 공유 서비스로, 이미지 업로드부터 EXIF/GPS 보강, 분석 결과 편집,공개 범위 제어, 피드·댓글·좋아요·알림·관리자 운영 기능까지 전반을 구성한 풀스택 웹 애플리케이션입니다.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Anthropic Claude",
      "Framer Motion",
      "VibeCode",
    ],
    meta: "서비스 템플릿 분석 · 사진 분석/소셜 플랫폼",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    details: [
      "바이브 코딩 방식으로 빠르게 구현을 밀어가되, 단순 기능 추가보다 실제 서비스처럼 동작 흐름이 이어지도록 사용자 진입조건과 계정 상태별 접근 시나리오를 먼저 기획하고 Next.js App Router 미들웨어에 반영했습니다.",
      "사진 업로드 과정도 단순 첨부 기능이 아니라 사용 경험 중심으로 접근해 HEIC 변환, EXIF 추출, GPS 보정, 이미지 크롭 단계를 구성하고, Claude 비전 모델에 이미지와 메타데이터를 함께 전달해 태그·분위기·요약 문구·촬영 팁·주변 장소를 생성하도록 설계했습니다.",
      "게시물은 단일 이미지 데이터가 아니라 하나의 콘텐츠 단위로 보고, Supabase Storage와 DB를 연동해 업로드 저장, 공개 범위(public / followers / private), 조회수, 소프트 삭제/복구, 영구 삭제까지 포함한 수명주기 흐름으로 정리했습니다.",
      "메인 피드와 상세 화면은 사진 소비 경험을 기준으로 지역 필터, 팔로잉 피드, 무한 스크롤, 좋아요, 대댓글형 댓글, 링크공유, 다운로드 기능을 배치해 탐색에서 상호작용까지 자연스럽게 이어지도록 구성했습니다.",
      "소셜 반응이 끊기지 않도록 팔로우, 댓글, 좋아요, 댓글 좋아요 이벤트를 Supabase 트리거 기반 알림 구조로 연결하고, 사용자 알림함과 읽음 처리 API까지 포함해 반응 흐름을 완성했습니다.",
      "단순 사용자 기능에 그치지 않고 프로필 편집, 아바타 업로드/크롭, 좋아요한 사진 모아보기, 문의 접수/답변, 관리자 승인및 계정 제재 기능까지 확장하면서 서비스 운영 관점에서 필요한 구조도 함께 잡았습니다.",
    ],
  },
  {
    name: "예산 관리 대시보드",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      "개인 자산 흐름을 계좌·거래 단위로 구조화하고 거래 기록, 잔액 반영, 인증, 입력 UX까지 전반을 설계한 예산 관리 서비스입니다.",
    tags: ["React", "TypeScript", "SCSS", "Nest", "GraphQL", "Prisma"],
    meta: "개인 프로젝트 · 재무 관리",
    thumbnail: "/projects/budget-book-banner.png",
    github: "https://github.com/jaemin96/Budget-book",
    details: [
      "단순 거래 기록을 넘어 계좌별 총자산, 가용 현금, 저축·투자·보류 금액까지 분리 집계하는 자산 관리 구조를 설계했습니다.",
      "NestJS 기반 GraphQL API에서 Query/Mutation 타입과 DTO를 직접 정의해 프론트엔드와 백엔드가 같은 도메인 언어로 통신하도록 구성했습니다.",
      "Prisma ORM으로 User, Account, Transaction 스키마와 관계를 모델링하고, 입금·지출·이체 시 잔액 변동이 함께 반영되도록 서비스 로직을 트랜잭션 단위로 처리했습니다.",
      "Next.js App Router와 Apollo Client를 사용해 GraphQL 프록시, 쿠키 기반 JWT 인증, 인증 실패 시 리다이렉트까지 포함한 사용자 흐름을 구현했습니다.",
      "거래 입력 생산성을 높이기 위해 자주 쓰는 거래 프리셋과 카카오페이 자동충전/지출 시나리오를 UX에 반영했고, SCSS 모듈로 스타일 충돌 없이 컴포넌트 단위 UI를 관리했습니다.",
    ],
  },
];

export const experiencesKr: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2024.08 - 재직 중",
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
