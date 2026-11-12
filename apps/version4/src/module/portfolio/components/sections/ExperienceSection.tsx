"use client";

import type { ExperienceItem, ViewMode } from "../../data/types";
import { SectionHeading } from "./SectionHeading";
import { Keywords } from "../Keywords";
import { useLanguage } from "@/shared/contexts";
import type { Dictionary } from "@/shared/i18n";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  heading: string;
  mode: ViewMode;
}

/** "2021.06 - 2023.09" / "2024.08 - 재직 중" 형태의 기간을 "2년 3개월"로 바꾼다. 형식이 다르면 null. */
function tenure(period: string, format: Dictionary["tenure"]): string | null {
  const [start, end] = period.split("-").map((s) => s.trim());
  const parse = (s: string) => {
    const m = /^(\d{4})\.(\d{1,2})$/.exec(s);
    return m ? Number(m[1]) * 12 + Number(m[2]) - 1 : null;
  };
  const from = parse(start);
  if (from === null) return null;
  const now = new Date();
  const to = parse(end ?? "") ?? now.getFullYear() * 12 + now.getMonth();
  // 시작 월과 끝 월을 모두 포함해서 센다
  const months = to - from + 1;
  if (months <= 0) return null;
  const y = Math.floor(months / 12);
  const mo = months % 12;
  return format(y, mo);
}

export function ExperienceSection({ experiences, heading, mode }: ExperienceSectionProps) {
  const { t } = useLanguage();
  return (
    <section id="experience">
      <SectionHeading>{heading}</SectionHeading>
      <div className="border-b border-rule">
        {experiences.map((exp) => {
          const span = tenure(exp.period, t.tenure);
          return (
            <details key={`${exp.org}-${mode}`} open={mode === "long"} className="group border-t border-rule py-3.5">
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 [&::-webkit-details-marker]:hidden">
                <span className="font-semibold transition-colors group-hover:text-amber">
                  {exp.org}
                  <span className="ml-2 text-[12px] font-normal text-ink-3 group-open:hidden">+</span>
                  <span className="ml-2 hidden text-[12px] font-normal text-ink-3 group-open:inline">−</span>
                </span>
                <span className="text-[13px] tabular-nums text-ink-2">{exp.period}</span>
                <span className="text-[13px] text-ink-2">
                  {exp.title}
                  {span && <span className="text-ink-3"> · {span}</span>}
                </span>
                {exp.highlight && (
                  // 요약 모드에서도 회사별 핵심 한 줄은 항상 보인다
                  <span className="col-span-2 mt-1.5 text-sm leading-[1.7] text-ink/85">
                    <Keywords text={exp.highlight} />
                  </span>
                )}
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
          );
        })}
      </div>
    </section>
  );
}
