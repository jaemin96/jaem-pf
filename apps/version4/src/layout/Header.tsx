"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/shared/contexts";
import { localePath, otherLanguage } from "@/shared/i18n";

const toolClass = "cursor-pointer text-[13px] text-ink-2 transition-colors hover:text-ink";

interface HeaderProps {
  primaryName: string;
  secondaryName?: string;
}

const Header: React.FC<HeaderProps> = ({ primaryName, secondaryName }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { language, t, alternateHref } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="mb-12 flex items-baseline justify-between">
      <h1 className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">
        <Link href={localePath(language)} className="transition-colors hover:text-amber">
          {primaryName}
        </Link>
        {secondaryName && <small className="ml-2 text-[15px] font-normal text-ink-2">{secondaryName}</small>}
      </h1>
      <div className="flex gap-3.5">
        {/* 언어 전환 = 다른 언어 경로로 이동. 새 탭 열기, 주소복사도 되게 하려고 링크로 구성 */}
        <Link
          href={alternateHref}
          scroll={false}
          hrefLang={otherLanguage(language)}
          className={toolClass}
          aria-label={t.header.switchLanguageAria}
        >
          {t.header.switchLanguage}
        </Link>
        <button
          type="button"
          className={toolClass}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={t.header.toggleTheme}
        >
          {mounted ? (isDark ? "light" : "dark") : "theme"}
        </button>
      </div>
    </header>
  );
};

export default Header;
