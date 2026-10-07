"use client";

import type { PostItem } from "../../data/types";
import { SectionHeading } from "./SectionHeading";

interface WritingSectionProps {
  posts: PostItem[];
  heading: string;
  moreLabel: string;
  moreHref: string;
}

export function WritingSection({ posts, heading, moreLabel, moreHref }: WritingSectionProps) {
  if (!posts.length) return null;
  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      <ul>
        {posts.map((p) => (
          <li key={p.href + p.title}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-4 py-2 transition-colors hover:text-amber"
            >
              <span>{p.title}</span>
              <time dateTime={p.createdAt} className="whitespace-nowrap text-[13px] tabular-nums text-ink-2">
                {p.createdAt}
              </time>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[13px] text-ink-2">
        <a
          className="underline decoration-ink-3 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
          href={moreHref}
          target="_blank"
          rel="noreferrer"
        >
          {moreLabel} ↗
        </a>
      </p>
    </section>
  );
}
