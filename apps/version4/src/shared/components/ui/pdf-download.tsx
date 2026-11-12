"use client";

import * as React from "react";
import { FileDown } from "lucide-react";
import { Button } from "./button";
import { pdf } from "@react-pdf/renderer";
import { PortfolioPDF } from "@/shared/components/pdf/PortfolioPDF";
import { useLanguage } from "@/shared/contexts";
import { heroKr, stacksKr, projectsKr, experiencesKr } from "@/module/portfolio/data/kr";
import { heroEn, stacksEn, projectsEn, experiencesEn } from "@/module/portfolio/data/en";

/** 객체 안의 모든 문자열에서 [[ x ]] 빈칸 표시를 [ x ] 로 바꾼다. */
function cleanPlaceholders<T>(value: T): T {
  if (typeof value === "string") return value.replace(/\[\[([^\]]+)\]\]/g, "[$1]") as T;
  if (Array.isArray(value)) return value.map(cleanPlaceholders) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, cleanPlaceholders(v)])
    ) as T;
  }
  return value;
}

interface PdfDownloadProps {
  /** 지정하면 아이콘 버튼 대신 텍스트 링크 스타일 버튼으로 렌더링 */
  label?: string;
  className?: string;
}

export function PdfDownload({ label, className }: PdfDownloadProps = {}) {
  const [isGenerating, setIsGenerating] = React.useState(false);
  const { language } = useLanguage();

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // 언어별 데이터 선택. 사이트와 같은 기준으로 숨김 작업(deferred)은 빼고, [[빈칸]] 표시는 [ ] 로 바꾼다.
      const raw = language === "ko"
        ? { hero: heroKr, stacks: stacksKr, projects: projectsKr, experiences: experiencesKr }
        : { hero: heroEn, stacks: stacksEn, projects: projectsEn, experiences: experiencesEn };
      const data = cleanPlaceholders({
        ...raw,
        projects: raw.projects.filter((p) => !p.deferred),
        stacks: raw.stacks.map((s) => ({
          ...s,
          tags: s.tags.map((t) => (typeof t === "string" ? { name: t } : t)),
        })),
      });

      // PDF 생성
      const blob = await pdf(
        <PortfolioPDF
          language={language}
          hero={data.hero}
          stacks={data.stacks}
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

  if (label) {
    return (
      <button type="button" className={className} onClick={handleDownload} disabled={isGenerating}>
        {isGenerating ? "…" : label}
      </button>
    );
  }

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
