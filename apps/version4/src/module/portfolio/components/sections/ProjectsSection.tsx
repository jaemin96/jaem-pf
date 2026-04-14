"use client";

import { useState } from "react";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon, SearchIcon } from "lucide-react";
import type { ProjectItem } from "../../data/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/shared/components/ui";

interface ProjectsSectionProps {
  projects: ProjectItem[];
  heading: string;
  isKo?: boolean;
}

interface ProjectDetailSheetProps {
  project: ProjectItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isKo?: boolean;
}

function ProjectDetailSheet({ project, open, onOpenChange, isKo }: ProjectDetailSheetProps) {
  if (!project) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="pb-4">
          <div className="flex items-center gap-2 pr-8">
            <SheetTitle className="text-lg">{project.name}</SheetTitle>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {project.period}
            </span>
          </div>
          <SheetDescription className="text-xs uppercase tracking-[0.12em]">
            {project.role} · {project.meta}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-5 px-4 pb-6">
          {project.thumbnail && (
            <div className="relative h-36 overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5">
              <Image
                src={project.thumbnail}
                alt={`${project.name} thumbnail`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                quality={100}
              />
            </div>
          )}

          <div className="space-y-2">
            <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          </div>

          {project.details && project.details.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {isKo ? "주요 내용" : "Key Highlights"}
              </h3>
              <ul className="space-y-1.5">
                {project.details.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <GithubIcon className="size-3.5" />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <ExternalLinkIcon className="size-3.5" />
                Demo
              </a>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function ProjectsSection({ projects, heading, isKo }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  function openDetail(project: ProjectItem) {
    setSelectedProject(project);
    setSheetOpen(true);
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Work
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="grid gap-4 rounded-2xl border border-dashed border-border/80 p-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:p-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold text-foreground">{project.name}</div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-foreground/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={`${project.name} thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    priority={false}
                  />
                ) : null}
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-muted-foreground">{project.role}</span>
                <div className="flex items-center gap-1.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="size-3.5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      aria-label="Demo"
                    >
                      <ExternalLinkIcon className="size-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => openDetail(project)}
                    className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    aria-label="상세 보기"
                  >
                    <SearchIcon className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectDetailSheet
        project={selectedProject}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        isKo={isKo}
      />
    </section>
  );
}
