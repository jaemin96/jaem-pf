"use client";

import Image from "next/image";
import type { ProjectItem, ViewMode } from "../../data/types";
import { SectionHeading } from "./SectionHeading";
import { Keywords } from "../Keywords";

interface WorkSectionProps {
  projects: ProjectItem[];
  heading: string;
  isKo: boolean;
  mode: ViewMode;
}

const linkClass =
  "underline decoration-ink-3 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber";

function Media({ project }: { project: ProjectItem }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md border border-rule bg-black ${
        // 영상이 없고 와이드 배너 썸네일만 있을 때는 원본 비율(약 4.3:1)로 보여준다
        !project.video && project.thumbnail ? "aspect-[4.3/1]" : "aspect-video"
      }`}
    >
      {project.video ? (
        <video
          src={project.video}
          poster={project.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      ) : project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          sizes="(min-width: 640px) 600px, 100vw"
          className="object-cover opacity-90 transition duration-500 group-hover/work:scale-[1.015] group-hover/work:opacity-100"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[repeating-linear-gradient(45deg,#151413_0_12px,#191817_12px_24px)] text-[13px] text-[#6b665c]">
          {project.name}
        </div>
      )}
    </div>
  );
}

export function WorkSection({ projects, heading, isKo, mode }: WorkSectionProps) {
  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      <div className="space-y-10">
        {projects.map((p) => (
          <article key={p.name} className="group/work">
            <Media project={p} />
            <div className="mt-3.5 flex items-baseline justify-between gap-3">
              <h3 className="text-[15px] font-semibold">{p.name}</h3>
              <span className="whitespace-nowrap text-[13px] tabular-nums text-ink-2">{p.period}</span>
            </div>
            <p className="mb-1.5 mt-0.5 text-[15px] leading-[1.75]">
              <Keywords text={p.outcome ?? p.summary} />
            </p>
            <div className="font-mono text-[12px] text-ink-2">{(p.stack ?? p.tags).join(" · ")}</div>

            {p.details?.length ? (
              // key로 모드가 바뀔 때만 초기 상태를 재설정하고, 이후 수동 토글은 자유롭게 허용
              <details key={mode} open={mode === "long"} className="group/more mt-2">
                <summary className="w-max cursor-pointer list-none text-[13px] text-ink-3 transition-colors hover:text-amber [&::-webkit-details-marker]:hidden">
                  <span className="group-open/more:hidden">+ </span>
                  <span className="hidden group-open/more:inline">− </span>
                  {isKo ? "자세히" : "More"}
                </summary>
                <div className="mt-3">
                  <ul className="space-y-2">
                    {p.details.map((d) => (
                      <li
                        key={d}
                        className="relative pl-4 text-sm leading-[1.7] text-ink/85 before:absolute before:left-0 before:text-ink-3 before:content-['–']"
                      >
                        <Keywords text={d} />
                      </li>
                    ))}
                  </ul>
                  {(p.github || p.demo) && (
                    <div className="mt-2.5 flex gap-3.5 text-[13px]">
                      {p.github && (
                        <a className={linkClass} href={p.github} target="_blank" rel="noreferrer">
                          GitHub ↗
                        </a>
                      )}
                      {p.demo && (
                        <a className={linkClass} href={p.demo} target="_blank" rel="noreferrer">
                          Demo ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </details>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
