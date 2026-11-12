/** 섹션 제목. 오른쪽으로 옅은 선을 그어 페이지 구조가 한눈에 보이게 한다. */
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-[18px] flex items-center gap-3 text-[13px] font-semibold tracking-[0.02em] text-ink-2 after:h-px after:flex-1 after:bg-rule">
      {children}
    </h2>
  );
}
