interface FaviconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Favicon: React.FC<FaviconProps> = ({
  width = 32,
  height = 32,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="favGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
      </defs>

      {/* 심플한 'J' 형태 - 더 크고 중앙 배치 */}
      <path
        d="M 14 9 L 14 21 Q 14 27, 18 27 Q 22 27, 22 21"
        stroke="url(#favGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 상단 포인트 - 더 크게 */}
      <circle cx="14" cy="8" r="2.5" fill="url(#favGradient)" />

      {/* 'IN' 표현 - 위치 조정 */}
      <circle cx="18" cy="19" r="2" fill="var(--primary)" />
    </svg>
  );
};
