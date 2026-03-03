"use client";

import Image from "next/image";
import type { ProjectItem } from "../../data/types";

interface ProjectsSectionProps {
  projects: ProjectItem[];
  heading: string;
}

export function ProjectsSection({ projects, heading }: ProjectsSectionProps) {
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
              <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                <span>{project.role}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                  {project.meta}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
