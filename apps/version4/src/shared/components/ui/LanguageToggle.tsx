"use client";

import * as React from "react";
import { useLanguage } from "@/shared/contexts";
import { Button } from "./button";

export function LanguageToggle() {
  const { language, t, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      aria-label="Toggle language"
      title={t.header.switchLanguageAria}
    >
      {language === "ko" ? (
        <span className="text-base font-semibold">A</span>
      ) : (
        <span className="text-base font-semibold">가</span>
      )}
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
