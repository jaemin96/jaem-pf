import { Fragment } from "react";
import { KEYWORDS } from "../data/keywords";

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// 긴 키워드부터 매칭해야 "Tailwind CSS"가 "CSS"보다 먼저 잡힌다
const pattern = new RegExp(
  `(${[...KEYWORDS].sort((a, b) => b.length - a.length).map(escape).join("|")})`,
  "g"
);
const keywordSet = new Set(KEYWORDS);

/** [[ ... ]] 로 감싼 부분은 아직 채우지 않은 빈칸(수치·사례)이다. */
const PLACEHOLDER = /(\[\[[^\]]+\]\])/g;
const isPlaceholder = (s: string) => s.startsWith("[[") && s.endsWith("]]");

function KeywordText({ text }: { text: string }) {
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

/** 텍스트 안의 기술 키워드는 모노스페이스로, [[빈칸]]은 점선 박스로 표시한다. */
export function Keywords({ text }: { text: string }) {
  return (
    <>
      {text.split(PLACEHOLDER).map((part, i) =>
        isPlaceholder(part) ? (
          <mark
            key={i}
            title="채워야 할 빈칸"
            className="rounded-sm border border-dashed border-amber/70 bg-amber/10 px-1 text-[0.92em] text-amber"
          >
            {part.slice(2, -2).trim()}
          </mark>
        ) : (
          <KeywordText key={i} text={part} />
        )
      )}
    </>
  );
}
