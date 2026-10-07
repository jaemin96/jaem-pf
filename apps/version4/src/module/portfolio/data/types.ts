export type CtaVariant = "default" | "outline" | "ghost";

export interface HeroCta {
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
}

/** 페이지 전체 보기 모드. short면 상세가 모두 접히고, long이면 모두 펼쳐진다. */
export type ViewMode = "short" | "long";

export interface PostItem {
  title: string;
  /** YYYY-MM-DD */
  createdAt: string;
  href: string;
}

export interface ExperienceItem {
  org: string;
  period: string;
  title: string;
  bullets: string[];
}
