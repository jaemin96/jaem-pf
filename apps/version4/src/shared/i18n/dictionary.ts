import type { Language } from "./config";

/**
 * 화면에 고정으로 들어가는 UI 문구 모음 (버튼, 섹션 제목, 안내 문구 등)
 *  - 소개·경력·프로젝트 같은 "콘텐츠"는 언어별로 다시 쓰는 글이라 data/kr.ts, data/en.ts에 따로 둔다.
 *  - 여기에는 언어만 바뀌고 의미는 같은 짧은 문구만 둔다.
 *  - en은 Dictionary 타입을 따르므로 ko에 키를 추가하고 en에 빠뜨리면 타입 에러가 난다.
 */
const ko = {
  meta: {
    title: "김재민 · Jaemin Kim — Frontend Engineer",
    description:
      "React · TypeScript 4년 넘게 다뤄온 프론트엔드 개발자. GB 단위 병리 이미지(WSI)를 웹에서 다루는 뷰어를 만들고 있습니다.",
    ogLocale: "ko_KR",
  },
  header: {
    switchLanguage: "EN",
    switchLanguageAria: "Switch to English",
    toggleTheme: "테마 전환",
  },
  mode: { hint: "보기", short: "요약", long: "상세" },
  sections: {
    work: "대표 작업",
    experience: "경력",
    skills: "기술",
    writing: "글",
    allPosts: "전체 글 보기",
  },
  work: {
    deepzoomHint: "클릭 후 스크롤로 확대 · 드래그로 이동",
    deepzoomReset: "처음으로",
    liveDemo: "라이브 데모",
    more: "자세히",
  },
  contact: {
    copy: "복사",
    copied: "복사됨 ✓",
    copyAria: "이메일 주소 복사",
    resume: "이력서 PDF",
    footerCta: "함께 이야기 나누고 싶다면 편하게 연락 주세요.",
  },
  demo: {
    label: "데모",
    rebuiltNote: "회사 코드가 아니라, 당시 맡았던 화면을 바탕으로 다시 만든 데모입니다.",
    newTab: "새 탭에서 열기",
    close: "데모 닫기",
    loading: "데모 불러오는 중…",
  },
  /** 재직 기간 표기 (예: 2년 4개월) */
  tenure: (years: number, months: number) =>
    [years && `${years}년`, months && `${months}개월`].filter(Boolean).join(" "),
  pdf: {
    experience: "경력",
    projects: "프로젝트",
    stacks: "기술 스택",
    fileName: "포트폴리오_김재민.pdf",
  },
};

export type Dictionary = typeof ko;

const en: Dictionary = {
  meta: {
    title: "Jaemin Kim — Frontend Engineer",
    description:
      "Frontend engineer with 4+ years of React and TypeScript, building a web viewer for gigabyte-scale pathology images (WSI).",
    ogLocale: "en_US",
  },
  header: {
    switchLanguage: "KO",
    switchLanguageAria: "한국어로 보기",
    toggleTheme: "Toggle theme",
  },
  mode: { hint: "View", short: "Brief", long: "Full" },
  sections: {
    work: "Selected work",
    experience: "Experience",
    skills: "Skills",
    writing: "Writing",
    allPosts: "All posts",
  },
  work: {
    deepzoomHint: "click, then scroll to zoom · drag to pan",
    deepzoomReset: "reset",
    liveDemo: "Live demo",
    more: "More",
  },
  contact: {
    copy: "copy",
    copied: "copied ✓",
    copyAria: "Copy email address",
    resume: "Resume PDF",
    footerCta: "If you'd like to talk, feel free to reach out.",
  },
  demo: {
    label: "Demos",
    rebuiltNote: "Not company code: rebuilt from the screens I worked on there.",
    newTab: "Open in new tab",
    close: "Close demo",
    loading: "Loading demo…",
  },
  tenure: (years, months) =>
    [years && `${years} yr${years > 1 ? "s" : ""}`, months && `${months} mo`].filter(Boolean).join(" "),
  pdf: {
    experience: "Experience",
    projects: "Projects",
    stacks: "Skills",
    fileName: "Portfolio_jaemin_kim.pdf",
  },
};

const DICTIONARIES: Record<Language, Dictionary> = { ko, en };

export const getDictionary = (lang: Language) => DICTIONARIES[lang];
