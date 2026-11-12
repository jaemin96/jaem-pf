"use client";

import React, { createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDictionary, localePath, otherLanguage, type Dictionary, type Language } from "@/shared/i18n";

interface LanguageContextType {
  language: Language;
  /** 현재 언어의 UI 문구 사전 */
  t: Dictionary;
  /** 다른 언어 페이지 경로 (언어 전환 링크용) */
  alternateHref: string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 언어는 주소로 정해진다: "/" = 한국어, "/en" = 영어.
 * 레이아웃(서버)이 경로에서 언어를 읽어 넘겨주므로 첫 화면부터 해당 언어로 그려진다.
 * 언어를 바꾸는 것은 곧 다른 언어 경로로 이동하는 것이다.
 */
export function LanguageProvider({ lang, children }: { lang: Language; children: React.ReactNode }) {
  const router = useRouter();
  const alternateHref = localePath(otherLanguage(lang));

  // 예전 링크(/?lang=en)는 next.config의 리다이렉트로 /en?lang=en 에 도착한다. 남은 ?lang= 은 주소창에서 지운다.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (!url.searchParams.has("lang")) return;
    url.searchParams.delete("lang");
    window.history.replaceState(window.history.state, "", url);
  }, []);

  const setLanguage = (next: Language) => {
    if (next !== lang) router.push(localePath(next), { scroll: false });
  };

  const value: LanguageContextType = {
    language: lang,
    t: getDictionary(lang),
    alternateHref,
    setLanguage,
    toggleLanguage: () => setLanguage(otherLanguage(lang)),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
