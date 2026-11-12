"use client";

import { useState } from "react";
import { useLanguage } from "@/shared/contexts";
import { ScrollToTop } from "@/shared/components/ui";
import { Header } from "@/layout";
import { getPortfolioData, heroLink, type ViewMode } from "../data";
import { recentPosts } from "../data/posts";
import { BioSection, WorkSection, ExperienceSection, SkillsSection, WritingSection } from "./sections";
import { ContactLinks } from "./ContactLinks";
import { PortfolioSkeleton } from "./PortfolioSkeleton";
import { DemoProvider, useDemo } from "./demo";

const hasData = true;

/** 포트폴리오 한 페이지 전체. 언어는 LanguageProvider(= 경로)에서 받는다. */
export function PortfolioPage() {
  return (
    <DemoProvider>
      <PortfolioContent />
    </DemoProvider>
  );
}

function PortfolioContent() {
  const { language, t } = useLanguage();
  const demo = useDemo();
  const [mode, setMode] = useState<ViewMode>("short");

  const { hero, projects, experiences, stacks } = getPortfolioData(language);
  // deferred: 아직 공개하지 않을 작업 (PDF에서도 같은 기준으로 빠진다)
  const mainProjects = projects.filter((p) => !p.deferred);
  const blog = heroLink(hero, "blog");

  const contact = <ContactLinks email={hero.email} github={heroLink(hero, "github")} blog={blog} />;

  return (
    <>
      {/* 데모 패널이 열리면 본문 열이 왼쪽으로 비켜선다 (demo/DemoPanel.tsx) */}
      <main
        style={demo.mainStyle}
        className="mx-auto max-w-[600px] px-5 pb-28 pt-16 text-[15px] leading-[1.75] text-ink sm:pt-[72px]"
      >
        <Header primaryName={hero.primaryName} secondaryName={hero.secondaryName} />

        {hasData ? (
          <div className="space-y-16">
            <BioSection
              hero={hero}
              labels={{ short: t.mode.short, long: t.mode.long }}
              modeHint={t.mode.hint}
              moreLabel={t.work.more}
              mode={mode}
              onModeChange={setMode}
            >
              <div className="mt-4 text-[14px]">{contact}</div>
            </BioSection>
            <WorkSection projects={mainProjects} heading={t.sections.work} mode={mode} />
            <ExperienceSection experiences={experiences} heading={t.sections.experience} mode={mode} />
            <SkillsSection stacks={stacks} heading={t.sections.skills} />
            <WritingSection
              posts={recentPosts}
              heading={t.sections.writing}
              moreLabel={t.sections.allPosts}
              moreHref={blog ?? "#"}
            />
          </div>
        ) : (
          <PortfolioSkeleton />
        )}

        <footer className="mt-[72px] border-t border-rule pt-8">
          <p className="mb-3 text-[15px]">{t.contact.footerCta}</p>
          {contact}
          <p className="mt-6 text-[12px] text-ink-3">
            © {new Date().getFullYear()} {hero.primaryName}
          </p>
        </footer>
      </main>
      {/* 패널이 열려 있으면 오른쪽 아래 버튼이 패널을 가리므로 숨긴다 */}
      {!demo.isOpen && (
        <ScrollToTop showAfter={600} size={40} strokeWidth={2} className="border-rule shadow-none" />
      )}
    </>
  );
}
