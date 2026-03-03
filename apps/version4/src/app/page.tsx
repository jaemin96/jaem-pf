"use client";

import { useLanguage } from "@/shared/contexts";
import { heroKr, stacksKr, projectsKr, experiencesKr } from "@/module/portfolio/data/kr";
import { heroEn, stacksEn, projectsEn, experiencesEn } from "@/module/portfolio/data/en";
import {
  HeroSection,
  StackSection,
  ProjectsSection,
  ExperienceSection,
  PortfolioSkeleton,
} from "@/module/portfolio/components";

const hasData = true;

export default function Home() {
  const { language } = useLanguage();
  const isKo = language === "ko";

  const hero = isKo ? heroKr : heroEn;
  const stacks = isKo ? stacksKr : stacksEn;
  const projects = isKo ? projectsKr : projectsEn;
  const experiences = isKo ? experiencesKr : experiencesEn;

  if (!hasData) {
    return <PortfolioSkeleton />;
  }

  return (
    <div className="min-h-[calc(100svh-64px)] bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-10 lg:px-0 lg:pb-24 lg:pt-12">
        <HeroSection hero={hero} />
        <StackSection stacks={stacks} heading={isKo ? "기술 스택" : "Tech Stack"} />
        <ProjectsSection projects={projects} heading={isKo ? "프로젝트" : "Selected Projects"} />
        <ExperienceSection experiences={experiences} heading={isKo ? "연혁" : "Timeline"} />
      </div>
    </div>
  );
}
