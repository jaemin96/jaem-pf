"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "pf-lang";
const isLanguage = (v: unknown): v is Language => v === "ko" || v === "en";

/**
 * 언어 결정 순서: URL의 ?lang=en|ko > 마지막으로 고른 언어(localStorage) > 기본값 ko
 * 언어를 바꾸면 URL에도 ?lang=을 반영해서, 주소를 그대로 공유하면 같은 언어로 열린다.
 * (예: 해외 채용 담당자에게는 ...?lang=en 링크를 보내면 된다)
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    const fromStorage = window.localStorage.getItem(STORAGE_KEY);
    const initial = isLanguage(fromUrl) ? fromUrl : isLanguage(fromStorage) ? fromStorage : null;
    if (initial) setLanguageState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    if (lang === "ko") url.searchParams.delete("lang");
    else url.searchParams.set("lang", lang);
    window.history.replaceState(null, "", url);
  };

  const toggleLanguage = () => setLanguage(language === "ko" ? "en" : "ko");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
