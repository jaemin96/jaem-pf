interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 200,
  height = 200,
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="jamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--primary)" }} />
          <stop offset="100%" style={{ stopColor: "var(--secondary)" }} />
        </linearGradient>
      </defs>

      {/* 음파/레이어 형태 - 기술 스택의 조화 표현 */}
      <g opacity="0.2">
        <path
          d="M 40 100 Q 70 80, 100 100 T 160 100"
          stroke="url(#jamGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 40 110 Q 70 90, 100 110 T 160 110"
          stroke="url(#jamGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 40 120 Q 70 100, 100 120 T 160 120"
          stroke="url(#jamGradient)"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* 메인 'J' 형태 + 병/잼 항아리 추상화 */}
      <path
        d="M 80 50 L 80 110 Q 80 140, 100 140 Q 120 140, 120 110"
        stroke="url(#jamGradient)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* 'J' 상단 장식 - 음표/비트 느낌 */}
      <circle cx="80" cy="45" r="6" fill="url(#jamGradient)" />

      {/* 내부 'IN' 표현 - 점들이 모이는 형태 */}
      <g opacity="0.6">
        <circle cx="95" cy="90" r="3" fill="var(--primary)" />
        <circle cx="105" cy="90" r="3" fill="var(--secondary)" />
        <circle cx="100" cy="100" r="4" fill="url(#jamGradient)" />
      </g>

      {/* Text 'Jam IN' */}
      <text
        x="100"
        y="175"
        fontFamily="var(--font-sans, system-ui, sans-serif)"
        fontSize="20"
        fontWeight="600"
        textAnchor="middle"
        fill="var(--foreground)"
      >
        Jam IN
      </text>
    </svg>
  );
};
