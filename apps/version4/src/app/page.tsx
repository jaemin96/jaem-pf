"use client";

import {
  PortfolioPage,
  PortfolioSkeleton,
} from "@/module/portfolio/components";

const hasData = true;

export default function Home() {
  if (!hasData) {
    return <PortfolioSkeleton />;
  }

  return <PortfolioPage />;
}
