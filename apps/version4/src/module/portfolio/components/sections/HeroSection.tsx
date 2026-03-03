"use client";

import { Button, LogoHorizontal } from "@/shared/components/ui";
import { Github, BookOpen } from "lucide-react";
import type { HeroData } from "../../data/types";

interface HeroSectionProps {
  hero: HeroData;
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80">
            Frontend Engineer
          </div>
          <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {hero.primaryName}
          </div>
          {hero.secondaryName && (
            <p className="text-sm text-muted-foreground">{hero.secondaryName}</p>
          )}
          <p className="text-lg text-foreground/80 sm:text-xl">{hero.headline}</p>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
          {hero.summary}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          {hero.ctas.map((cta) => {
            const icon =
              cta.label === "GitHub" ? (
                <Github className="h-4 w-4" />
              ) : cta.label === "Blog" ? (
                <BookOpen className="h-4 w-4" />
              ) : null;

            return cta.href ? (
              <Button
                key={cta.label}
                asChild
                variant={cta.variant}
                size="lg"
                className={cta.variant === "default" ? "text-white/70" : ""}
              >
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  {icon}
                  {cta.label}
                </a>
              </Button>
            ) : (
              <Button
                key={cta.label}
                variant={cta.variant}
                size="lg"
                className={cta.variant === "default" ? "text-white/70" : ""}
              >
                <span className="flex items-center gap-2">
                  {icon}
                  {cta.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm">
          <div className="relative h-28 rounded-xl bg-gradient-to-br from-primary/10 via-primary/20 to-primary/5">
            <div className="absolute inset-0 rounded-xl bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <LogoHorizontal width={180} height={65} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm font-medium text-foreground/80">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-dashed border-border/80 px-3 py-2"
              >
                <div className="text-base font-semibold text-primary">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
