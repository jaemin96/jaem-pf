import { Fragment } from "react";
import { KEYWORDS } from "../data/keywords";

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// 긴 키워드부터 매칭해야 "Tailwind CSS"가 "CSS"보다 먼저 잡힌다
const pattern = new RegExp(
  `(${[...KEYWORDS].sort((a, b) => b.length - a.length).map(escape).join("|")})`,
  "g"
);
const keywordSet = new Set(KEYWORDS);

/** 텍스트 안의 기술 키워드만 모노스페이스 폰트로 감싼다. */
export function Keywords({ text }: { text: string }) {
  return (
    <>
      {text.split(pattern).map((part, i) =>
        keywordSet.has(part) ? (
          <span key={i} className="font-mono text-[0.88em] tracking-tight text-ink">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
