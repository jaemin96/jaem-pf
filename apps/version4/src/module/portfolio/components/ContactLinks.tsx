"use client";

import { useState } from "react";
import { PdfDownload } from "@/shared/components/ui";

const linkClass =
  "underline decoration-ink-3 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber";

interface ContactLinksProps {
  email: string;
  github?: string;
  blog?: string;
  isKo: boolean;
  className?: string;
}

/** GitHub · Blog · Email(복사) · 이력서 PDF 링크 묶음. 소개 영역과 푸터에서 같이 쓴다. */
export function ContactLinks({ email, github, blog, isKo, className }: ContactLinksProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className={`flex flex-wrap items-baseline gap-x-5 gap-y-1.5 ${className ?? ""}`}>
      {github && (
        <a className={linkClass} href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      )}
      {blog && (
        <a className={linkClass} href={blog} target="_blank" rel="noreferrer">
          Blog
        </a>
      )}
      <span className="inline-flex items-baseline gap-1.5">
        <a className={linkClass} href={`mailto:${email}`}>
          Email
        </a>
        <button
          type="button"
          onClick={copy}
          aria-label={isKo ? "이메일 주소 복사" : "Copy email address"}
          className="cursor-pointer text-[12px] text-ink-3 transition-colors hover:text-amber"
        >
          <span aria-live="polite">{copied ? (isKo ? "복사됨 ✓" : "copied ✓") : isKo ? "복사" : "copy"}</span>
        </button>
      </span>
      <PdfDownload label={isKo ? "이력서 PDF" : "Resume PDF"} className={`cursor-pointer ${linkClass}`} />
    </div>
  );
}
