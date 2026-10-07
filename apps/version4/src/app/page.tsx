"use client";

import { useState } from "react";
import { useLanguage } from "@/shared/contexts";
import { PdfDownload } from "@/shared/components/ui";
import { Header } from "@/layout";
import { heroKr, projectsKr, experiencesKr } from "@/module/portfolio/data/kr";
import type { ViewMode } from "@/module/portfolio/data/types";
import { recentPosts } from "@/module/portfolio/data/posts";
import { heroEn, projectsEn, experiencesEn } from "@/module/portfolio/data/en";
import {
  BioSection,
  DeepZoomDemo,
  WorkSection,
  ExperienceSection,
  WritingSection,
  PortfolioSkeleton,
} from "@/module/portfolio/components";

const hasData = true;
// 병리 뷰어 카드와 딥줌 데모 노출 여부 (회사별 상세 UI 완성 전까지 숨김)
const SHOW_DEFERRED = false;

const linkClass =
  "underline decoration-ink-3 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber";

export default function Home() {
  const { language } = useLanguage();
  const [mode, setMode] = useState<ViewMode>("short");
  const isKo = language === "ko";

  const hero = isKo ? heroKr : heroEn;
  const projects = isKo ? projectsKr : projectsEn;
  const experiences = isKo ? experiencesKr : experiencesEn;
  const mainProjects = projects.filter((p) => !p.deferred);
  const deferredProjects = projects.filter((p) => p.deferred);

  const href = (label: string) => hero.ctas.find((c) => c.label === label)?.href ?? "#";

  return (
    <main className="mx-auto max-w-[600px] px-5 pb-28 pt-16 text-[15px] leading-[1.75] text-ink sm:pt-[72px]">
      <Header primaryName={hero.primaryName} secondaryName={hero.secondaryName} />

      {hasData ? (
        <div className="space-y-16">
          <BioSection
            hero={hero}
            labels={isKo ? { short: "요약", long: "상세" } : { short: "Brief", long: "Full" }}
            mode={mode}
            onModeChange={setMode}
          />
          <WorkSection projects={mainProjects} heading={isKo ? "대표 작업" : "Selected work"} isKo={isKo} mode={mode} />
          <ExperienceSection experiences={experiences} heading={isKo ? "경력" : "Experience"} mode={mode} />
          <WritingSection
            posts={recentPosts}
            heading={isKo ? "글" : "Writing"}
            moreLabel={isKo ? "전체 글 보기" : "All posts"}
            moreHref={href("Blog")}
          />

          {/* 임시 하단 영역: 추후 회사별 상세 작업 UI로 고도화해 이쪽으로 옮길 예정. 지금은 숨김 */}
          {SHOW_DEFERRED && (
            <>
            <WorkSection projects={deferredProjects} heading="Humintec" isKo={isKo} mode={mode} />
            <DeepZoomDemo
              heading="Deep zoom demo"
              caption={
                isKo
                  ? "보이는 영역의 타일만 줌 레벨별로 지연 생성합니다. WSI 뷰어에서 쓰는 타일 피라미드 방식의 축소판이에요."
                  : "Only the visible tiles are generated lazily per zoom level — a miniature of the tile-pyramid approach used in WSI viewers."
              }
            />
            </>
          )}
        </div>
      ) : (
        <PortfolioSkeleton />
      )}

      <footer className="mt-[72px] flex flex-wrap gap-x-5 gap-y-1.5">
        <a className={linkClass} href={href("GitHub")} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className={linkClass} href={href("Blog")} target="_blank" rel="noreferrer">
          Blog
        </a>
        <a className={linkClass} href="mailto:lemon__96@naver.com">
          Email
        </a>
        <PdfDownload label="PDF" className={`cursor-pointer ${linkClass}`} />
      </footer>
    </main>
  );
}
