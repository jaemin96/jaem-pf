"use client";

import type { StackItem, TagVariant } from "../../data/types";

const variantClasses: Record<TagVariant, string> = {
  primary: "tag-pill-primary",
  secondary: "tag-pill-secondary",
  accent: "tag-pill-accent",
  experienced: "tag-pill-experienced",
  default: "tag-pill-secondary",
};

interface StackSectionProps {
  stacks: StackItem[];
  heading: string;
}

export function StackSection({ stacks, heading }: StackSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Skills
        </span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="space-y-3 rounded-xl border border-dashed border-border/80 p-4"
          >
            <div className="text-base font-semibold text-foreground">{stack.title}</div>
            <p className="text-sm leading-relaxed text-muted-foreground">{stack.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.tags.map((tag) => {
                const tagName = typeof tag === "string" ? tag : tag.name;
                const variant = typeof tag === "string" ? "default" : tag.variant ?? "default";
                return (
                  <span key={tagName} className={variantClasses[variant]}>
                    {tagName}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
