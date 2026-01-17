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
}

export interface ExperienceItem {
  org: string;
  period: string;
  title: string;
  bullets: string[];
}
