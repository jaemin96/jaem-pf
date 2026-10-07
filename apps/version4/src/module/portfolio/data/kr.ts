import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

export const heroKr: HeroData = {
  primaryName: "김재민",
  secondaryName: "Jaemin Kim",
  role: "Frontend Engineer",
  headline: "오늘의 편함을 위해 어제 고생하는 개발자",
  summary:
    "4년+ 동안 React 기반 웹 프론트엔드를 중심으로 개발해왔습니다. \n 반복 작업과 비효율적인 프로세스를 자동화와 모듈화로 해결하며 팀의 시간을 아끼고, 퍼포먼스 최적화와 원활한 협업을 위한 환경 구축에 시간을 투자합니다.\n개발 워크플로우를 지속적으로 개선하며 더 나은 개발 경험을 만들어가는 것을 중요하게 생각합니다.",
  bioShort: [
    "Frontend Engineer. 오늘의 편함을 위해 어제 고생하는 개발자입니다.",
    "React · TypeScript 기반 웹 프론트엔드를 4년+ 개발해왔고, 현재 Humintec에서 GB 단위 병리 이미지(WSI)를 웹에서 다루고 있습니다.",
  ],
  bioLong: [
    "반복 작업과 비효율적인 프로세스를 자동화와 모듈화로 해결하며 팀의 시간을 아끼고, 퍼포먼스 최적화와 원활한 협업을 위한 환경 구축에 시간을 투자합니다.",
    "개발 워크플로우를 지속적으로 개선하며 더 나은 개발 경험을 만들어가는 것을 중요하게 생각합니다. 이전에는 Harbor X에서 가상자산 서비스의 비동기 트랜잭션 UX와 백오피스 모듈화를 맡았습니다.",
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
      "사진을 올리면 촬영 정보와 분석 결과를 붙여 공유할 수 있는 사진 공유 서비스입니다.",
    outcome: "사진 업로드부터 분석, 피드, 알림, 관리자 기능까지 혼자 설계하고 구현한 풀스택 서비스",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    meta: "사진 공유 서비스",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    details: [
      "계정 상태별 접근 규칙을 먼저 정리하고 Next.js App Router 미들웨어로 처리했습니다.",
      "업로드 단계에서 HEIC 변환, EXIF 추출, GPS 보정, 크롭을 거치고, 이미지와 메타데이터로 태그·분위기·촬영 팁을 생성합니다.",
      "게시물은 공개 범위(public / followers / private), 조회수, 삭제·복구까지 하나의 수명주기로 관리합니다.",
      "지역 필터, 팔로잉 피드, 무한 스크롤, 좋아요, 대댓글, 공유·다운로드를 갖춘 피드와 상세 화면을 구현했습니다.",
      "팔로우·댓글·좋아요 이벤트는 Supabase 트리거로 알림에 연결하고, 알림함과 읽음 처리까지 만들었습니다.",
      "프로필 편집, 문의 접수·답변, 관리자 승인과 계정 제재 등 운영에 필요한 기능을 포함했습니다.",
    ],
  },
  {
    name: "예산 관리 대시보드",
    period: "2024 - 2025",
    role: "Frontend / Backend",
    summary:
      "계좌와 거래를 기준으로 개인 자산 흐름을 기록하고 관리하는 서비스입니다.",
    outcome: "입금·지출·이체 시 잔액이 거래 단위로 함께 반영되는 개인 자산 관리 서비스",
    stack: ["React", "TypeScript", "NestJS", "GraphQL", "Prisma"],
    tags: ["React", "TypeScript", "SCSS", "Nest", "GraphQL", "Prisma"],
    meta: "개인 프로젝트",
    thumbnail: "/projects/budget-book-banner.png",
    github: "https://github.com/jaemin96/Budget-book",
    details: [
      "총자산, 가용 현금, 저축·투자·보류 금액을 계좌별로 나누어 집계합니다.",
      "NestJS GraphQL API의 타입과 DTO를 직접 정의해 프론트엔드와 같은 도메인 용어로 맞췄습니다.",
      "Prisma로 User, Account, Transaction을 모델링하고, 잔액 변동을 트랜잭션 단위로 처리했습니다.",
      "쿠키 기반 JWT 인증과 인증 실패 시 리다이렉트를 구현했습니다.",
      "자주 쓰는 거래 프리셋과 자동충전·지출 시나리오로 입력 과정을 줄였습니다.",
    ],
  },
  {
    // 하단 영역(deferred)에 표시. 추후 회사별 상세 UI로 대체 예정.
    // TODO: 성과 수치(로딩 시간 등), 실제 사용 라이브러리, 루프 영상(video)을 채워주세요.
    name: "병리 이미지 뷰어",
    period: "2024.08 - 현재",
    role: "Frontend",
    summary:
      "GB 단위의 병리 이미지(WSI)를 웹에서 보고, 주석을 달고, 실시간으로 자문받는 진단 지원 화면입니다.",
    outcome: "GB 단위 슬라이드를 타일링과 지연 로딩으로 웹에서 끊김 없이 표시",
    stack: ["React", "TypeScript"],
    tags: ["React", "TypeScript"],
    meta: "Humintec",
    deferred: true,
    details: [
      "측정, 구역 표시 등 주석 도구와 화상 자문 화면의 프론트엔드 구조를 설계했습니다.",
      "수만 장의 슬라이드를 다루는 현장에 맞춰 데이터 그리드와 필터링을 구현했습니다.",
      "진단 중 실수를 줄이기 위한 상태 관리 로직을 설계했습니다.",
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
