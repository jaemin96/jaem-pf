import type { Language } from "@/shared/i18n";
import { heroKr, projectsKr, experiencesKr, stacksKr } from "./kr";
import { heroEn, projectsEn, experiencesEn, stacksEn } from "./en";

export * from "./types";

const DATA = {
  ko: { hero: heroKr, projects: projectsKr, experiences: experiencesKr, stacks: stacksKr },
  en: { hero: heroEn, projects: projectsEn, experiences: experiencesEn, stacks: stacksEn },
} satisfies Record<Language, unknown>;

/** 언어별 포트폴리오 콘텐츠 (사이트와 PDF가 같이 쓴다) */
export const getPortfolioData = (lang: Language) => DATA[lang];

/** 소개 영역 링크(GitHub, Blog) 주소. 화면에 보이는 라벨이 아니라 id로 찾는다. */
export const heroLink = (hero: (typeof DATA)[Language]["hero"], id: "github" | "blog") =>
  hero.ctas.find((c) => c.id === id)?.href;
