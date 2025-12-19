import {
  PortfolioPageKr,
  PortfolioSkeleton,
} from "@/module/portfolio/components";
import type { Metadata } from "next";

const hasData = true; // false로 바꾸면 스켈레톤 상태 미리보기

export const metadata: Metadata = {
  title: "Portfolio Test (KR)",
};

export default function TestKrPage() {
  if (!hasData) {
    return <PortfolioSkeleton />;
  }

  return <PortfolioPageKr />;
}
