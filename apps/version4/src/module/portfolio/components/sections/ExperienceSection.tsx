"use client";

import type { ExperienceItem, ViewMode } from "../../data/types";
import { SectionHeading } from "./SectionHeading";
import { Keywords } from "../Keywords";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  heading: string;
  mode: ViewMode;
}

export function ExperienceSection({ experiences, heading, mode }: ExperienceSectionProps) {
  return (
    <section id="experience">
      <SectionHeading>{heading}</SectionHeading>
      <div className="border-b border-rule">
        {experiences.map((exp) => (
          <details key={`${exp.org}-${mode}`} open={mode === "long"} className="group border-t border-rule py-3.5">
            <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 [&::-webkit-details-marker]:hidden">
              <span className="font-semibold transition-colors group-hover:text-amber">{exp.org}</span>
              <span className="text-[13px] tabular-nums text-ink-2">{exp.period}</span>
              <span className="text-[13px] text-ink-2">{exp.title}</span>
            </summary>
            <ul className="mt-3.5 space-y-2">
              {exp.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-4 text-sm leading-[1.7] text-ink/85 before:absolute before:left-0 before:text-ink-3 before:content-['–']"
                >
                  <Keywords text={b} />
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
