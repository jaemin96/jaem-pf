"use client";

import type { StackItem } from "../../data/types";
import { SectionHeading } from "./SectionHeading";

interface SkillsSectionProps {
  stacks: StackItem[];
  heading: string;
}

/** 분야별 기술을 한 줄씩 보여준다. primary는 진하게, 나머지는 옅게. */
export function SkillsSection({ stacks, heading }: SkillsSectionProps) {
  return (
    <section id="skills">
      <SectionHeading>{heading}</SectionHeading>
      <dl className="grid grid-cols-[minmax(84px,auto)_1fr] gap-x-5 gap-y-2.5">
        {stacks.map((s) => (
          <div key={s.title} className="contents">
            <dt className="text-[13px] text-ink-2">{s.title}</dt>
            <dd className="font-mono text-[12.5px] leading-[1.7]">
              {s.tags.map((tag, i) => {
                const name = typeof tag === "string" ? tag : tag.name;
                const strong = typeof tag !== "string" && tag.variant === "primary";
                return (
                  <span key={name}>
                    {i > 0 && <span className="text-ink-3"> · </span>}
                    <span className={strong ? "text-ink" : "text-ink-2"}>{name}</span>
                  </span>
                );
              })}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
