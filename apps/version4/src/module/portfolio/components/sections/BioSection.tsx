"use client";

import { cn } from "@repo/utils/src";
import type { HeroData, ViewMode } from "../../data/types";
import { Keywords } from "../Keywords";

interface BioSectionProps {
  hero: HeroData;
  labels: Record<ViewMode, string>;
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export function BioSection({ hero, labels, mode, onModeChange }: BioSectionProps) {
  return (
    <section>
      <div className="mb-3.5 flex gap-3.5 text-[13px]" role="group" aria-label="bio length">
        {(["short", "long"] as const satisfies readonly ViewMode[]).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => onModeChange(m)}
            className={cn(
              "cursor-pointer underline-offset-[5px] transition-colors hover:text-ink",
              mode === m ? "text-ink underline decoration-amber" : "text-ink-3"
            )}
          >
            {labels[m]}
          </button>
        ))}
      </div>
      <div className="space-y-3 text-[15px] leading-[1.75]">
        {hero.bioShort.map((p) => (
          <p key={p}>
            <Keywords text={p} />
          </p>
        ))}
        {mode === "long" && hero.bioLong.map((p) => (
            <p key={p}>
              <Keywords text={p} />
            </p>
          ))}
      </div>
    </section>
  );
}
