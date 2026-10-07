"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/shared/contexts";

const toolClass = "cursor-pointer text-[13px] text-ink-2 transition-colors hover:text-ink";

interface HeaderProps {
  primaryName: string;
  secondaryName?: string;
}

const Header: React.FC<HeaderProps> = ({ primaryName, secondaryName }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="mb-12 flex items-baseline justify-between">
      <h1 className="text-[22px] font-semibold leading-tight tracking-[-0.02em]">
        <Link href="/" className="transition-colors hover:text-amber">
          {primaryName}
        </Link>
        {secondaryName && <small className="ml-2 text-[15px] font-normal text-ink-2">{secondaryName}</small>}
      </h1>
      <div className="flex gap-3.5">
        <button type="button" className={toolClass} onClick={toggleLanguage} aria-label="Toggle language">
          {language === "ko" ? "EN" : "KO"}
        </button>
        <button
          type="button"
          className={toolClass}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {mounted ? (isDark ? "light" : "dark") : "theme"}
        </button>
      </div>
    </header>
  );
};

export default Header;
