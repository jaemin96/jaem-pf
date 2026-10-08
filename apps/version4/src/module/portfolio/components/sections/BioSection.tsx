"use client";

import { cn } from "@repo/utils/src";
import type { HeroData, ViewMode } from "../../data/types";
import { Keywords } from "../Keywords";

interface BioSectionProps {
  hero: HeroData;
  labels: Record<ViewMode, string>;
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  moreLabel: string;
}

export function BioSection({ hero, labels, mode, onModeChange, moreLabel }: BioSectionProps) {
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
        {hero.bioLong.length > 0 && (
          // key로 모드가 바뀔 때만 초기 상태를 재설정하고, 이후 수동 토글은 자유롭게 허용
          <details key={mode} open={mode === "long"} className="group/more">
            <summary className="w-max cursor-pointer list-none text-[13px] text-ink-3 transition-colors hover:text-amber [&::-webkit-details-marker]:hidden">
              <span className="group-open/more:hidden">+ </span>
              <span className="hidden group-open/more:inline">− </span>
              {moreLabel}
            </summary>
            <div className="mt-3 space-y-3">
              {hero.bioLong.map((p) => (
                <p key={p}>
                  <Keywords text={p} />
                </p>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
