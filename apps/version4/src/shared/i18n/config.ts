/**
 * 언어 설정
 *  - 한국어는 "/", 영어는 "/en" 경로로 나눈다. (주소만 보고 언어가 정해지므로 서버에서부터 해당 언어로 그려진다)
 *  - 언어를 추가하려면 LOCALES와 PATHS, dictionary.ts에 항목을 하나씩 더하면 된다.
 */
export const LOCALES = ["ko", "en"] as const;
export type Language = (typeof LOCALES)[number];
export const DEFAULT_LANGUAGE: Language = "ko";

const PATHS: Record<Language, string> = { ko: "/", en: "/en" };

export const isLanguage = (v: unknown): v is Language => LOCALES.includes(v as Language);

/** 언어 → 페이지 경로 */
export const localePath = (lang: Language) => PATHS[lang];

/** 지금 언어가 아닌 다른 언어 (언어 전환 링크에 사용) */
export const otherLanguage = (lang: Language): Language => (lang === "ko" ? "en" : "ko");

/**
 * [[...lang]] 경로 파라미터 → 언어
 *  - [] / undefined  → 기본 언어(ko)
 *  - ["en"]          → en
 *  - 그 외           → null (404)
 */
export function resolveLanguage(segments: string[] | undefined): Language | null {
  if (!segments || segments.length === 0) return DEFAULT_LANGUAGE;
  if (segments.length === 1 && isLanguage(segments[0]) && segments[0] !== DEFAULT_LANGUAGE) {
    return segments[0];
  }
  return null;
}
