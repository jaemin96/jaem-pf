"use client";

import {
  PortfolioPageKr,
  PortfolioPageEn,
  PortfolioSkeleton,
} from "@/module/portfolio/components";
import { useLanguage } from "@/shared/contexts";

const hasData = true;

export default function Home() {
  const { language } = useLanguage();

  if (!hasData) {
    return <PortfolioSkeleton />;
  }

  return language === "ko" ? <PortfolioPageKr /> : <PortfolioPageEn />;
}
