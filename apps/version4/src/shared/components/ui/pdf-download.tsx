"use client";

import * as React from "react";
import { FileDown } from "lucide-react";
import { Button } from "./button";
import { pdf } from "@react-pdf/renderer";
import { PortfolioPDF } from "@/shared/components/pdf/PortfolioPDF";
import { useLanguage } from "@/shared/contexts";
import { heroKr, stacksKr, projectsKr, experiencesKr } from "@/module/portfolio/data/kr";
import { heroEn, stacksEn, projectsEn, experiencesEn } from "@/module/portfolio/data/en";

export function PdfDownload() {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const { language } = useLanguage();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // 언어별 데이터 선택
      const data = language === "ko"
        ? { hero: heroKr, stacks: stacksKr, projects: projectsKr, experiences: experiencesKr }
        : { hero: heroEn, stacks: stacksEn, projects: projectsEn, experiences: experiencesEn };

      // PDF 생성
      const blob = await pdf(
        <PortfolioPDF
          hero={data.hero}
          stacks={data.stacks as any}
          projects={data.projects}
          experiences={data.experiences}
        />
      ).toBlob();

      // 파일 다운로드
      const fileName = language === "ko"
        ? "포트폴리오_김재민.pdf"
        : "Portfolio_jaemin_kim.pdf";

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={handleDownload}
      disabled={isGenerating}
      title="Download as PDF"
    >
      <FileDown className="h-4 w-4" />
      <span className="sr-only">Download PDF</span>
    </Button>
  );
}
