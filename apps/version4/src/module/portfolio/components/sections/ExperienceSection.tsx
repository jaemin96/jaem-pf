"use client";

import type { ExperienceItem } from "../../data/types";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  heading: string;
}

export function ExperienceSection({ experiences, heading }: ExperienceSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Experience
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={exp.org} className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
            <div className="hidden md:flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary" />
              {idx !== experiences.length - 1 && (
                <div className="mt-1 h-16 w-px bg-border" />
              )}
            </div>
            <div className="relative space-y-2 rounded-xl border border-dashed border-border/80 p-4 before:absolute before:left-0 before:top-0 before:h-px before:w-1/4 before:rounded-tl-xl before:bg-gradient-to-r before:from-primary before:to-transparent before:content-[''] md:before:hidden">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-base font-semibold text-foreground">{exp.org}</div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {exp.period}
                </div>
              </div>
              <div className="text-sm font-medium text-primary">{exp.title}</div>
              <ul className="space-y-1.5 pt-1">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted-foreground">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
