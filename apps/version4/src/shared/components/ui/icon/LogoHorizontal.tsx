interface LogoHorizontalProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LogoHorizontal: React.FC<LogoHorizontalProps> = ({
  width = 300,
  height = 100,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoHGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
        <clipPath id="textClipPath">
          <rect x="100" y="60" width="120" height="30" />
        </clipPath>
      </defs>

      {/* 아이콘 부분 (왼쪽) */}
      <g transform="translate(10, 10)">
        {/* 배경 음파 레이어 */}
        <g opacity="0.15">
          <path
            d="M 10 40 Q 22 34, 40 40 T 70 40"
            stroke="url(#logoHGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 10 46 Q 22 40, 40 46 T 70 46"
            stroke="url(#logoHGradient)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 10 52 Q 22 46, 40 52 T 70 52"
            stroke="url(#logoHGradient)"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* 메인 'J' + 병 형태 */}
        <path
          d="M 30 18 L 30 44 Q 30 56, 40 56 Q 50 56, 50 44"
          stroke="url(#logoHGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* 상단 장식 */}
        <circle cx="30" cy="16" r="4" fill="url(#logoHGradient)" />

        {/* 내부 점들 - 'IN' 표현 */}
        <g opacity="0.7">
          <circle cx="37" cy="36" r="2.5" fill="var(--primary)" />
          <circle cx="43" cy="36" r="2.5" fill="var(--secondary)" />
          <circle cx="40" cy="42" r="3" fill="url(#logoHGradient)" />
        </g>
      </g>

      {/* 타이틀 텍스트 (오른쪽) */}
      <text
        x="100"
        y="58"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="36"
        fontWeight="700"
        fill="var(--foreground)"
      >
        Jam IN
      </text>

      {/* 서브 텍스트 (애니메이션) - 연속 흐름 */}
      <text
        x="220"
        y="75"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="12"
        fontWeight="400"
        fill="var(--muted-foreground)"
        opacity="0.7"
        clipPath="url(#textClipPath)"
      >
        Blending technologies
        <animate
          attributeName="x"
          from="220"
          to="-100"
          dur="15s"
          repeatCount="indefinite"
        />
      </text>
      <text
        x="220"
        y="75"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="12"
        fontWeight="400"
        fill="var(--muted-foreground)"
        opacity="0.7"
        clipPath="url(#textClipPath)"
      >
        brewing experiences
        <animate
          attributeName="x"
          from="220"
          to="-100"
          dur="15s"
          repeatCount="indefinite"
          begin="7.5s"
        />
      </text>
    </svg>
  );
};
