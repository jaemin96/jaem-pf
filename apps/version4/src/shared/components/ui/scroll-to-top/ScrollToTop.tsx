"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@repo/utils/src";

interface ScrollToTopProps {
  /** 버튼이 나타나는 스크롤 위치 (px) */
  showAfter?: number;
  /** 버튼 크기 (px) */
  size?: number;
  /** 프로그레스 링 두께 (px) */
  strokeWidth?: number;
  /** 스크롤 컨테이너 선택자 (기본: main 또는 window) */
  containerSelector?: string;
  className?: string;
}

export function ScrollToTop({
  showAfter = 50,
  size = 48,
  strokeWidth = 3,
  containerSelector = "main",
  className,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<Element | Window | null>(null);

  // 스크롤 가능한 컨테이너 찾기
  const getScrollContainer = useCallback(() => {
    if (typeof window === "undefined") return null;

    const container = document.querySelector(containerSelector);
    if (container && container.scrollHeight > container.clientHeight) {
      return container;
    }
    return window;
  }, [containerSelector]);

  // 스크롤 정보 가져오기
  const getScrollInfo = useCallback((container: Element | Window) => {
    if (container instanceof Window) {
      return {
        scrollTop: window.scrollY,
        scrollHeight: document.documentElement.scrollHeight,
        clientHeight: window.innerHeight,
      };
    }
    return {
      scrollTop: container.scrollTop,
      scrollHeight: container.scrollHeight,
      clientHeight: container.clientHeight,
    };
  }, []);

  // 스크롤 진행률 계산
  const calculateScrollProgress = useCallback(
    (container: Element | Window) => {
      const { scrollTop, scrollHeight, clientHeight } =
        getScrollInfo(container);
      const maxScroll = scrollHeight - clientHeight;

      if (maxScroll <= 0) return 0;
      return Math.min((scrollTop / maxScroll) * 100, 100);
    },
    [getScrollInfo]
  );

  useEffect(() => {
    const container = getScrollContainer();
    if (!container) return;

    containerRef.current = container;

    const handleScroll = () => {
      const { scrollTop } = getScrollInfo(container);
      setIsVisible(scrollTop > showAfter);
      setScrollProgress(calculateScrollProgress(container));
    };

    // 초기값 설정
    handleScroll();

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [showAfter, getScrollContainer, getScrollInfo, calculateScrollProgress]);

  const scrollToTop = () => {
    const container = containerRef.current;
    if (!container) return;

    if (container instanceof Window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // SVG 원형 프로그레스 계산
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "flex items-center justify-center",
        "rounded-full bg-background/80 backdrop-blur-sm",
        "shadow-lg border border-border/50",
        "transition-all duration-300 ease-out",
        "hover:scale-110 hover:shadow-xl",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        "cursor-pointer",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* SVG 프로그레스 링 */}
      <svg className="absolute inset-0 -rotate-90" width={size} height={size}>
        {/* 배경 링 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted-foreground/20"
        />
        {/* 프로그레스 링 */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-primary transition-all duration-150 ease-out"
        />
      </svg>

      {/* 화살표 아이콘 */}
      <ArrowUp className="h-5 w-5 text-foreground relative z-10" />
    </button>
  );
}
