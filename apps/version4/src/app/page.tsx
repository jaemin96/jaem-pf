"use client";

import { useState } from "react";
import { useLanguage } from "@/shared/contexts";
import { ScrollToTop } from "@/shared/components/ui";
import { Header } from "@/layout";
import { heroKr, projectsKr, experiencesKr, stacksKr } from "@/module/portfolio/data/kr";
import type { ViewMode } from "@/module/portfolio/data/types";
import { recentPosts } from "@/module/portfolio/data/posts";
import { heroEn, projectsEn, experiencesEn, stacksEn } from "@/module/portfolio/data/en";
import {
  BioSection,
  WorkSection,
  ExperienceSection,
  SkillsSection,
  WritingSection,
  ContactLinks,
  PortfolioSkeleton,
} from "@/module/portfolio/components";

const hasData = true;

export default function Home() {
  const { language } = useLanguage();
  const [mode, setMode] = useState<ViewMode>("short");
  const isKo = language === "ko";

  const hero = isKo ? heroKr : heroEn;
  const projects = isKo ? projectsKr : projectsEn;
  const experiences = isKo ? experiencesKr : experiencesEn;
  const stacks = isKo ? stacksKr : stacksEn;
  // deferred: 아직 공개하지 않을 작업 (PDF에서도 같은 기준으로 빠진다)
  const mainProjects = projects.filter((p) => !p.deferred);

  const href = (label: string) => hero.ctas.find((c) => c.label === label)?.href;

  const contact = (
    <ContactLinks email={hero.email} github={href("GitHub")} blog={href("Blog")} isKo={isKo} />
  );

  return (
    <>
      <main className="mx-auto max-w-[600px] px-5 pb-28 pt-16 text-[15px] leading-[1.75] text-ink sm:pt-[72px]">
        <Header primaryName={hero.primaryName} secondaryName={hero.secondaryName} />

        {hasData ? (
          <div className="space-y-16">
            <BioSection
              hero={hero}
              labels={isKo ? { short: "요약", long: "상세" } : { short: "Brief", long: "Full" }}
              modeHint={isKo ? "보기" : "View"}
              mode={mode}
              onModeChange={setMode}
            >
              <div className="mt-4 text-[14px]">{contact}</div>
            </BioSection>
            <WorkSection
              projects={mainProjects}
              heading={isKo ? "대표 작업" : "Selected work"}
              isKo={isKo}
              mode={mode}
            />
            <ExperienceSection
              experiences={experiences}
              heading={isKo ? "경력" : "Experience"}
              mode={mode}
              isKo={isKo}
            />
            <SkillsSection stacks={stacks} heading={isKo ? "기술" : "Skills"} />
            <WritingSection
              posts={recentPosts}
              heading={isKo ? "글" : "Writing"}
              moreLabel={isKo ? "전체 글 보기" : "All posts"}
              moreHref={href("Blog") ?? "#"}
            />
          </div>
        ) : (
          <PortfolioSkeleton />
        )}

        <footer className="mt-[72px] border-t border-rule pt-8">
          <p className="mb-3 text-[15px]">
            {isKo
              ? "함께 이야기 나누고 싶다면 편하게 연락 주세요."
              : "If you'd like to talk, feel free to reach out."}
          </p>
          {contact}
          <p className="mt-6 text-[12px] text-ink-3">
            © {new Date().getFullYear()} {hero.primaryName}
          </p>
        </footer>
      </main>
      <ScrollToTop showAfter={600} size={40} strokeWidth={2} className="border-rule shadow-none" />
    </>
  );
}
