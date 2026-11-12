export type CtaVariant = "default" | "outline" | "ghost";

export interface HeroCta {
  /** 링크 종류. 코드에서는 라벨 대신 이 값으로 링크를 찾는다. */
  id: "github" | "blog";
  label: string;
  variant: CtaVariant;
  href?: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export interface HeroData {
  primaryName: string;
  secondaryName?: string;
  role: string;
  headline: string;
  summary: string;
  /** 기본 소개 (Default 토글) */
  bioShort: string[];
  /** 상세 소개 (Long 토글) - bioShort 뒤에 이어서 표시 */
  bioLong: string[];
  ctas: HeroCta[];
  stats: HeroStat[];
  /** 연락용 이메일 (소개 영역 링크·복사 버튼에 사용) */
  email: string;
  /** 구직 상태 한 줄. 비워두면 표시하지 않는다. */
  availability?: string;
}

export type TagVariant = "primary" | "secondary" | "accent" | "experienced" | "default";

export interface StackTag {
  name: string;
  variant?: TagVariant;
}

export interface StackItem {
  title: string;
  desc: string;
  tags: Array<string | StackTag>;
}

export interface ProjectItem {
  name: string;
  period: string;
  role: string;
  summary: string;
  tags: string[];
  meta: string;
  thumbnail?: string;
  github?: string;
  demo?: string;
  details?: string[];
  /** 한 줄 성과 (가능하면 수치 포함) */
  outcome?: string;
  /** 작업 아래 한 줄로 표시되는 스택 (없으면 tags 사용) */
  stack?: string[];
  /** 5초 내외 무음 루프 영상 (public 기준 경로, mp4) */
  video?: string;
  /** true면 대표 작업 목록이 아니라 페이지 하단 영역에 표시 */
  deferred?: boolean;
  /** 썸네일 대신 보여줄 인터랙티브 데모 */
  interactive?: "deepzoom";
  /** 미디어 아래 작은 설명 (데모 사용법 등) */
  caption?: string;
}

/** 페이지 전체 보기 모드. short면 상세가 모두 접히고, long이면 모두 펼쳐진다. */
export type ViewMode = "short" | "long";

export interface PostItem {
  title: string;
  /** YYYY-MM-DD */
  createdAt: string;
  href: string;
}

/** 페이지 안 패널(넓은 화면) 또는 새 탭(좁은 화면)으로 여는 데모 링크 */
export interface DemoLink {
  label: string;
  href: string;
  /** 패널 제목 옆에 붙는 짧은 설명 */
  desc?: string;
}

export interface ExperienceItem {
  org: string;
  period: string;
  title: string;
  /** 요약 모드에서도 항상 보이는 핵심 한 줄 */
  highlight?: string;
  /** 첫 번째 항목은 대표 성과로, 접힌 상태에서도 보인다. 가장 강한 성과(수치)를 맨 앞에 둘 것. */
  bullets: string[];
  /** 회사에서 맡았던 화면을 바탕으로 다시 만든 데모 (회사 코드 아님) */
  demos?: DemoLink[];
}
