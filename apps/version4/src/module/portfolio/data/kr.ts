import type { ExperienceItem, HeroData, ProjectItem, StackItem } from "./types";

/*
 * ✏️ 채워 넣을 곳 안내
 * - 본문의 [[ ... ]] 표시는 실제 수치/사례로 바꿔야 하는 빈칸입니다.
 *   화면에서는 점선 박스로 강조되고, PDF에서는 [ ... ] 로 찍힙니다.
 * - 수치를 못 구하면 [[ ]] 부분을 문장에서 통째로 지우면 됩니다. (대략치·"약 N배"도 충분)
 * - 수치 예시: 첫 화면 표시 시간, 메모리 사용량, 화면/기능 수, 사용자·기관 수,
 *   줄어든 개발 기간, 문의·오류 건수, Lighthouse 점수 등
 */

export const heroKr: HeroData = {
  primaryName: "김재민",
  secondaryName: "Jaemin Kim",
  role: "Frontend Engineer",
  headline: "오늘 편하기 위해 어제 고생해두는 개발자",
  summary:
    "React · TypeScript로 4년 넘게 웹 프론트엔드를 개발했고, 현재 Humintec에서 GB 단위 병리 이미지(WSI) 뷰어를 만들고 있습니다.\n반복되는 일은 도구로 만들어 두고, 사용자가 기다리는 시간을 줄이는 일을 좋아합니다.\n이전에는 Harbor X에서 가상자산 서비스의 비동기 트랜잭션 UX와 백오피스 모듈화를 맡았습니다.",
  bioShort: [
    "Frontend Engineer. 오늘 편하기 위해 어제 고생해두는 개발자입니다.",
    "React · TypeScript로 4년 넘게 웹 프론트엔드를 개발했고, 현재 Humintec에서 GB 단위 병리 이미지(WSI)를 브라우저에서 다루는 뷰어를 만들고 있습니다.",
  ],
  bioLong: [
    "반복되는 일은 도구로 만들어 둡니다. [[예: 사내 공통 컴포넌트 / 배포·QA 자동화 스크립트]]를 만들어 [[팀의 반복 작업을 주 N시간]] 줄였고, 이 포트폴리오도 pnpm 모노레포와 공통 설정 패키지로 관리하고 있습니다.",
    "사용자가 기다리는 시간을 줄이는 일을 좋아합니다. 대용량 이미지 타일링, 필요한 것만 그리는 렌더링처럼 체감 속도를 바꾸는 작업에 가장 오래 몰입합니다.",
    "이전에는 Harbor X에서 가상자산 서비스의 비동기 트랜잭션 UX와 백오피스 모듈화를 맡았습니다.",
  ],
  email: "lemon__96@naver.com",
  // 구직 상태 한 줄. 노출하고 싶지 않으면 빈 문자열("")로 두세요.
  availability: "새로운 프론트엔드 포지션에 열려 있습니다.",
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

export const stacksKr: StackItem[] = [
  {
    title: "Frontend",
    desc: "React를 중심으로 타입 안정성이 보장된 UI를 설계합니다. 재사용 가능한 컴포넌트 단위 개발에 익숙하며, 관심사 분리와 의존성 방향을 고려한 구조를 지향합니다.",
    tags: [
      { name: "React", variant: "primary" },
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
    title: "그 외 경험",
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
    // 회사 코드라 실제 화면 대신 같은 원리로 만든 딥줌 데모를 미디어 자리에 보여준다.
    // TODO: 실제 사용한 뷰어 라이브러리(OpenSeadragon 등)와 수치를 [[ ]] 자리에 채워주세요.
    name: "병리 이미지 뷰어 (WSI)",
    period: "2024.08 - 현재",
    role: "Frontend",
    summary:
      "GB 단위의 병리 이미지(WSI)를 웹에서 보고, 주석을 달고, 실시간으로 자문받는 진단 지원 화면입니다.",
    outcome:
      "GB 단위 슬라이드를 보이는 타일만 불러오는 방식으로 웹에서 끊김 없이 표시 — 첫 화면 [[N초 → M초]]",
    stack: ["React", "TypeScript", "Canvas"],
    tags: ["React", "TypeScript"],
    meta: "Humintec",
    interactive: "deepzoom",
    caption:
      "회사 코드 대신, 같은 원리(줌 레벨별 타일 피라미드 + 보이는 영역만 지연 생성)로 직접 만든 축소판 데모입니다. 클릭 후 스크롤로 확대, 드래그로 이동해 보세요.",
    details: [
      "슬라이드를 줌 레벨별 타일 피라미드로 나누고, 화면에 보이는 타일만 중심부터 우선순위대로 불러오도록 구성했습니다. ([[사용 라이브러리 / 직접 구현한 부분]])",
      "첫 화면 표시 시간을 [[N초 → M초]], 확대·이동 중 메모리 사용량을 [[N% ]] 줄였습니다.",
      "측정·구역 표시 등 Annotation 도구와 실시간 화상 자문 화면의 프론트엔드 구조를 설계했습니다.",
      "수만 장의 슬라이드를 다루는 현장에 맞춰 정보 밀도가 높은 데이터 그리드와 필터를 구현했습니다.",
      "진단 중 실수를 줄이기 위해 [[예: 저장 전 이탈 방지, 슬라이드 혼동 방지]] 같은 상태 관리 규칙을 설계했습니다.",
    ],
  },
  {
    name: "Picvora",
    period: "2026.01 - 2026.03",
    role: "Frontend / Backend",
    summary:
      "사진을 올리면 촬영 정보와 분석 결과를 붙여 공유할 수 있는 사진 공유 서비스입니다.",
    outcome:
      "사진 업로드부터 분석, 피드, 알림, 관리자 기능까지 혼자 설계하고 구현한 풀스택 서비스",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion"],
    meta: "사진 공유 서비스",
    thumbnail: "/projects/picvora-thumbnail.png",
    github: "https://github.com/jaemin96/picvora",
    // TODO: 배포 주소가 있으면 demo에 넣어주세요. 5초 내외 무음 루프 영상(mp4)이 있으면 video에도.
    // demo: "https://",
    // video: "/projects/picvora-loop.mp4",
    details: [
      "계정 상태별 접근 규칙을 먼저 정리하고 Next.js App Router 미들웨어로 처리했습니다.",
      "업로드 단계에서 HEIC 변환, EXIF 추출, GPS 보정, 크롭을 거치고, 이미지와 메타데이터로 태그·분위기·촬영 팁을 생성합니다.",
      "게시물은 공개 범위(public / followers / private), 조회수, 삭제·복구까지 하나의 수명주기로 관리합니다.",
      "지역 필터, 팔로잉 피드, 무한 스크롤, 좋아요, 대댓글, 공유·다운로드를 갖춘 피드와 상세 화면을 구현했습니다.",
      "팔로우·댓글·좋아요 이벤트는 Supabase 트리거로 알림에 연결하고, 알림함과 읽음 처리까지 만들었습니다.",
      "프로필 편집, 문의 접수·답변, 관리자 승인과 계정 제재 등 운영에 필요한 기능을 포함했습니다.",
      "전체 규모: [[화면 N개 · 테이블 N개 · 개발 기간 N주]]",
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
];

// TODO: 2023.09 ~ 2024.08 공백 기간에 한 일(개인 프로젝트, 학습 등)이 있다면
//       경력 항목이나 소개 문단에 한 줄 추가하는 것을 고려해 주세요. 면접에서 자주 묻습니다.
export const experiencesKr: ExperienceItem[] = [
  {
    org: "Humintec",
    period: "2024.08 - 재직 중",
    title: "Frontend Engineer",
    highlight:
      "GB 단위 병리 이미지(WSI) 뷰어와 Annotation·화상 자문 화면의 프론트엔드를 맡고 있습니다.",
    bullets: [
      "GB 단위 병리 이미지(WSI)를 보이는 영역의 타일만 줌 레벨별로 불러오는 Tiling · Lazy Loading 구조로 렌더링해, 첫 화면 표시 시간을 [[N초 → M초]]로 줄였습니다.",
      "병리 전문의가 쓰는 Annotation 도구(측정, 구역 표시 등)와 실시간 화상 자문 시스템의 프론트엔드 구조를 설계했습니다. ([[N개 기관 / 전문의 N명]] 사용)",
      "수만 장([[N만 장]])의 슬라이드를 관리하는 현장에 맞춰 정보 밀도가 높은 데이터 그리드와 필터를 구현해, 슬라이드를 찾는 시간을 [[N초 → M초]]로 줄였습니다.",
      "진단 중 휴먼 에러를 막는 상태 관리 규칙([[예: 저장 전 이탈 방지, 슬라이드 혼동 방지]])을 설계하고, 현장 피드백을 [[N회]] 이상 반영했습니다.",
    ],
  },
  {
    org: "Harbor X",
    period: "2021.06 - 2023.09",
    title: "Frontend Engineer",
    highlight:
      "가상자산 서비스의 지갑 연동·트랜잭션 UX와 백오피스 공통 컴포넌트를 맡았습니다.",
    bullets: [
      "지갑 연동, 트랜잭션 서명 등 블록체인 특유의 비동기 흐름을 단계별로 안내하는 온보딩을 설계·구현해 [[온보딩 이탈률 / 관련 문의를 N%]] 줄였습니다.",
      "실시간 시세와 자산 변동 내역을 차트로 시각화하고, Pending/Success/Fail 트랜잭션 상태를 WebSocket/Polling으로 화면에 실시간 반영했습니다.",
      "프론트엔드에 필요한 데이터 구조를 먼저 정의하고 백엔드와 RESTful API 규격·DB 스키마 설계에 함께 참여해, 개발 중 API 수정 요청을 줄였습니다.",
      "백오피스 화면을 공통 테이블·폼 컴포넌트로 모듈화해 신규 관리자 화면 개발 기간을 [[N일 → M일]]로 줄였습니다.",
    ],
  },
];
