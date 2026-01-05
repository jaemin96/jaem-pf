interface IconOnlyProps {
  width?: number;
  height?: number;
  className?: string;
  showText?: boolean;
}

export const IconOnly: React.FC<IconOnlyProps> = ({
  width = 128,
  height = 128,
  className,
  showText = true,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
      </defs>

      {/* 배경 음파 레이어 */}
      <g opacity="0.15">
        <path
          d="M 20 64 Q 38 52, 64 64 T 108 64"
          stroke="url(#iconGradient)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 20 74 Q 38 62, 64 74 T 108 74"
          stroke="url(#iconGradient)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 20 84 Q 38 72, 64 84 T 108 84"
          stroke="url(#iconGradient)"
          strokeWidth="3"
          fill="none"
        />
      </g>

      {/* 메인 'J' + 병 형태 */}
      <path
        d="M 48 30 L 48 70 Q 48 90, 64 90 Q 80 90, 80 70"
        stroke="url(#iconGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* 상단 장식 */}
      <circle cx="48" cy="26" r="7" fill="url(#iconGradient)" />

      {/* 내부 점들 - 'IN' 표현 */}
      <g opacity="0.7">
        <circle cx="60" cy="58" r="4" fill="var(--primary)" />
        <circle cx="68" cy="58" r="4" fill="var(--secondary)" />
        <circle cx="64" cy="66" r="5" fill="url(#iconGradient)" />
      </g>

      {/* 하단 텍스트 (선택적) */}
      {showText && (
        <text
          x="64"
          y="112"
          fontFamily="var(--font-sans, system-ui, sans-serif)"
          fontSize="14"
          fontWeight="600"
          textAnchor="middle"
          fill="var(--foreground)"
        >
          Jam IN
        </text>
      )}
    </svg>
  );
};
