import {
  PortfolioPageEn,
  PortfolioSkeleton,
} from "@/module/portfolio/components";
import type { Metadata } from "next";

const hasData = true; // toggle this to false to preview skeleton state

export const metadata: Metadata = {
  title: "Portfolio Test (EN)",
};

export default function TestPage() {
  if (!hasData) {
    return <PortfolioSkeleton />;
  }

  return <PortfolioPageEn />;
}
