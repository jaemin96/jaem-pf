interface LogoCompactProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LogoCompact: React.FC<LogoCompactProps> = ({
  width = 220,
  height = 80,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient
          id="logoCompactGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
      </defs>

      {/* 아이콘 부분 (왼쪽) */}
      <g transform="translate(5, 10)">
        {/* 배경 음파 레이어 */}
        <g opacity="0.15">
          <path
            d="M 8 30 Q 18 26, 30 30 T 52 30"
            stroke="url(#logoCompactGradient)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 8 35 Q 18 31, 30 35 T 52 35"
            stroke="url(#logoCompactGradient)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 8 40 Q 18 36, 30 40 T 52 40"
            stroke="url(#logoCompactGradient)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* 메인 'J' + 병 형태 */}
        <path
          d="M 22 14 L 22 33 Q 22 42, 30 42 Q 38 42, 38 33"
          stroke="url(#logoCompactGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* 상단 장식 */}
        <circle cx="22" cy="12" r="3" fill="url(#logoCompactGradient)" />

        {/* 내부 점들 - 'IN' 표현 */}
        <g opacity="0.7">
          <circle cx="28" cy="27" r="2" fill="var(--primary)" />
          <circle cx="32" cy="27" r="2" fill="var(--secondary)" />
          <circle cx="30" cy="32" r="2.5" fill="url(#logoCompactGradient)" />
        </g>
      </g>

      {/* 타이틀 텍스트 (오른쪽) */}
      <text
        x="75"
        y="48"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="32"
        fontWeight="700"
        fill="var(--foreground)"
      >
        Jam IN
      </text>
    </svg>
  );
};
