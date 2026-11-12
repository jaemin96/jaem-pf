"use client";

import { createContext, useContext, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@repo/utils/src";
import { useLanguage } from "@/shared/contexts";

/**
 * 라이브 데모 패널
 *
 *  넓은 화면(데스크톱, 큰 태블릿 가로)
 *    1) 데모 링크를 누르면 링크 밑줄이 점(dot)으로 흩어지고, 밑줄 높이 그대로 오른쪽으로 흘러간다.
 *       (본문 글자 위로 점이 날아다니지 않게 가로로만 이동)
 *    2) 동시에 본문 열은 왼쪽으로 비켜서 오른쪽에 넓은 자리를 만든다.
 *    3) 점들이 본문을 빠져나간 지점(본문과 패널 사이)에서 패널 테두리 자리로 퍼지고,
 *       점 격자 박스가 위에서 아래로 펼쳐지며 데모 사이트가 iframe으로 뜬다.
 *    4) 패널이 이미 열려 있을 때 다른 데모를 누르면 점은 다시 날리지 않고, 안쪽 화면만 바꿔 끼운다.
 *    → 새 창 없이 포트폴리오를 읽으면서 옆에서 실제 서비스를 써볼 수 있다.
 *
 *  좁은 화면(모바일, 태블릿 세로 등 패널 자리가 부족할 때)
 *    → 평범한 링크처럼 새 탭으로 연다.
 *
 *  Ctrl/⌘/Shift 클릭, 가운데 클릭도 브라우저 기본 동작(새 탭)을 그대로 따른다.
 *  "동작 줄이기" 설정을 켠 사용자에게는 점 애니메이션 없이 바로 패널을 연다.
 */

export interface DemoTarget {
  href: string;
  title: string;
  subtitle?: string;
}

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

// 레이아웃 기준값 (본문 열 너비는 PortfolioPage의 max-w-[600px]과 같아야 한다)
const MAIN_W = 600;
const GAP = 40;
const MARGIN = 24;
const MIN_PANEL_W = 560;
const MAX_PANEL_W = 1180;
const MIN_PANEL_H = 520;
const RADIUS = 14;

/** 패널을 띄울 자리가 있으면 본문 이동량과 패널 위치를, 없으면 null을 돌려준다. */
function computeLayout(): { shift: number; panel: Rect } | null {
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const width = Math.min(MAX_PANEL_W, vw - MAIN_W - GAP - MARGIN * 2);
  if (width < MIN_PANEL_W || vh - MARGIN * 2 < MIN_PANEL_H) return null;
  // 본문 + 간격 + 패널 묶음을 화면 가운데에 둔다 (아주 넓은 화면에서 패널이 끝까지 늘어나지 않게)
  const left = (vw - (MAIN_W + GAP + width)) / 2;
  return {
    shift: left - (vw - MAIN_W) / 2,
    panel: { left: left + MAIN_W + GAP, top: MARGIN, width, height: vh - MARGIN * 2 },
  };
}

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** 사각형 둘레를 왼쪽 위에서 시계 방향으로 n등분한 점들 */
function perimeterPoints(r: Rect, n: number) {
  const total = 2 * (r.width + r.height);
  return Array.from({ length: n }, (_, i) => {
    let d = (total * i) / n;
    if (d < r.width) return { x: r.left + d, y: r.top };
    d -= r.width;
    if (d < r.height) return { x: r.left + r.width, y: r.top + d };
    d -= r.height;
    if (d < r.width) return { x: r.left + r.width - d, y: r.top + r.height };
    d -= r.width;
    return { x: r.left, y: r.top + r.height - d };
  });
}

const DOTS = 18;
const TRAVEL_MS = 820;
const STAGGER_MS = 16;
/** 전체 이동 시간 중 "오른쪽으로 흘러가는" 구간의 비율. 나머지는 패널 테두리로 퍼지는 구간 */
const GATE_AT = 0.55;

/**
 * 링크 밑줄 위치에서 점들을 만들어
 *   ① 밑줄 높이 그대로 오른쪽으로 흘려보내고 (오른쪽 끝 점부터 출발해서 밑줄이 쓸려가는 느낌)
 *   ② 본문과 패널 사이 간격(gate)을 지나면서 패널 테두리 자리로 퍼뜨린다.
 * 점이 모두 도착하는 시점에 resolve (점이 사라지는 페이드는 그 뒤에 따로 진행).
 */
function flyDots(layer: HTMLElement, from: DOMRect, to: Rect): Promise<void> {
  const y0 = from.bottom + 1;
  const gateX = to.left - GAP / 2;
  // 링크가 패널 높이 범위를 벗어난 위치에 있으면 패널 안쪽 높이로 맞춘다
  const gateY = Math.min(Math.max(y0, to.top + 16), to.top + to.height - 16);
  // gate에서 가까운 테두리 점부터 정렬. 먼저 출발하는 점(밑줄 오른쪽 끝)이 가장 먼 점으로 간다.
  const targets = perimeterPoints(to, DOTS).sort(
    (a, b) => Math.hypot(a.x - gateX, a.y - gateY) - Math.hypot(b.x - gateX, b.y - gateY)
  );

  for (let i = 0; i < DOTS; i++) {
    const x0 = from.left + (from.width * (i + 0.5)) / DOTS;
    const order = DOTS - 1 - i; // 오른쪽 끝 점이 0번으로 먼저 출발
    const target = targets[i];
    // gate에 도착할 때 한 점으로 뭉치지 않게 세로로 살짝 벌린다
    const spreadY = gateY + (i - (DOTS - 1) / 2) * 1.5;

    const dot = document.createElement("span");
    dot.className = "absolute left-0 top-0 -ml-[2.5px] -mt-[2.5px] h-[5px] w-[5px] rounded-full bg-amber";
    layer.appendChild(dot);

    dot
      .animate(
        [
          { transform: `translate(${x0}px, ${y0}px) scale(0.4)`, opacity: 0, easing: "ease-out" },
          {
            transform: `translate(${x0}px, ${y0}px) scale(1)`,
            opacity: 1,
            offset: 0.08,
            easing: "cubic-bezier(0.5, 0, 0.6, 1)",
          },
          {
            transform: `translate(${gateX}px, ${spreadY}px) scale(1)`,
            opacity: 1,
            offset: GATE_AT,
            easing: "cubic-bezier(0.2, 0.7, 0.25, 1)",
          },
          { transform: `translate(${target.x}px, ${target.y}px) scale(1)`, opacity: 1 },
        ],
        { duration: TRAVEL_MS, delay: order * STAGGER_MS, fill: "forwards" }
      )
      .finished.then(() => dot.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 420, fill: "forwards" }).finished)
      .catch(() => {})
      .finally(() => dot.remove());
  }

  return new Promise((resolve) => window.setTimeout(resolve, TRAVEL_MS + (DOTS - 1) * STAGGER_MS - 120));
}

interface DemoContextValue {
  /** 지금 열려 있거나 열리는 중인 데모 주소 (링크 강조용) */
  activeHref: string | null;
  isOpen: boolean;
  /** 본문 열(main)에 적용할 스타일: 패널이 열리면 왼쪽으로 비켜선다 */
  mainStyle: CSSProperties;
  open: (target: DemoTarget, origin: HTMLElement) => void;
  close: () => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemo must be used within DemoProvider");
  return ctx;
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const { language, t } = useLanguage();
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [current, setCurrent] = useState<DemoTarget | null>(null);
  const [panelRect, setPanelRect] = useState<Rect | null>(null);
  const [shift, setShift] = useState(0);
  const [loadedHref, setLoadedHref] = useState<string | null>(null);
  // 패널 안 iframe 목록. 마지막이 지금 데모이고, 앞쪽은 바꿔 끼우는 동안 빠져나가는 중인 데모.
  // (새 iframe을 뒤에 붙이기만 하므로 기존 iframe은 DOM에서 옮겨지지 않아 다시 로드되지 않는다)
  const [frames, setFrames] = useState<string[]>([]);
  const frameBoxRef = useRef<HTMLDivElement>(null);

  const layerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  // 열기 요청 순번. 애니메이션 도중 다른 데모를 누르거나 닫으면 이전 요청은 무시한다.
  const seq = useRef(0);
  const isOpen = activeHref !== null || panelRect !== null;

  const close = () => {
    const token = ++seq.current;
    setActiveHref(null);
    setShift(0);
    const finish = () => {
      if (token !== seq.current) return;
      setCurrent(null);
      setPanelRect(null);
      setFrames([]);
    };
    const el = panelRef.current;
    if (!el || prefersReducedMotion()) return finish();
    el.animate(
      [
        { clipPath: `inset(0 0 0 0 round ${RADIUS}px)`, opacity: 1 },
        { clipPath: `inset(0 0 100% 0 round ${RADIUS}px)`, opacity: 0.4 },
      ],
      { duration: 300, easing: "cubic-bezier(0.65, 0, 0.35, 1)", fill: "forwards" }
    ).finished.then(finish, finish);
    // 탭이 백그라운드라 애니메이션이 멈춰 있어도 패널은 확실히 닫히게 한다
    window.setTimeout(finish, 360);
  };

  const open = (target: DemoTarget, origin: HTMLElement) => {
    const layout = computeLayout();
    if (!layout) {
      window.open(target.href, "_blank", "noopener,noreferrer");
      return;
    }
    // 이미 열린 데모를 다시 누르면 닫기
    if (activeHref === target.href) return close();

    const token = ++seq.current;
    setActiveHref(target.href);
    setShift(layout.shift);

    // 패널이 이미 떠 있으면 점은 날리지 않고 안쪽 화면만 바꿔 끼운다
    if (panelRect && current) {
      // 닫히는 중이었다면 닫힘 애니메이션을 취소해서 패널을 다시 보이게 한다
      panelRef.current?.getAnimations().forEach((a) => a.cancel());
      setCurrent(target);
      setFrames((prev) => [...prev.filter((h) => h !== target.href), target.href]);
      return;
    }

    const show = () => {
      if (token !== seq.current) return;
      setPanelRect(layout.panel);
      setCurrent(target);
      setFrames([target.href]);
    };

    if (prefersReducedMotion() || !layerRef.current) return show();
    flyDots(layerRef.current, origin.getBoundingClientRect(), layout.panel).then(show);
  };

  // 창 크기가 바뀌면 자리를 다시 계산하고, 자리가 없어지면 닫는다
  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => {
      const layout = computeLayout();
      if (!layout) return close();
      setShift(layout.shift);
      setPanelRect((prev) => (prev ? layout.panel : prev));
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
    // close는 매 렌더 새로 만들어지지만 내부에서 ref/setState만 쓰므로 isOpen 기준으로만 다시 연결한다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // 언어를 바꾸면 (패널 제목 언어가 어긋나지 않게) 닫는다
  const langRef = useRef(language);
  useEffect(() => {
    if (langRef.current === language) return;
    langRef.current = language;
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // 패널이 처음 나타날 때: 점 격자 박스가 위에서 아래로 펼쳐진다
  const mounted = panelRect !== null;
  useEffect(() => {
    if (!mounted || !panelRef.current || prefersReducedMotion()) return;
    panelRef.current.animate(
      [
        { clipPath: `inset(0 0 100% 0 round ${RADIUS}px)` },
        { clipPath: `inset(0 0 0 0 round ${RADIUS}px)` },
      ],
      { duration: 480, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  }, [mounted]);

  // 바꿔 끼울 때: 이전 화면은 왼쪽으로 살짝 밀리며 사라지고, 끝나면 목록에서 뺀다
  useEffect(() => {
    if (frames.length < 2 || !frameBoxRef.current) return;
    if (!prefersReducedMotion()) {
      frameBoxRef.current.querySelectorAll<HTMLIFrameElement>('iframe[data-leaving="true"]').forEach((el) =>
        el.animate(
          [
            { opacity: 1, transform: "none" },
            { opacity: 0, transform: "translateX(-28px) scale(0.985)" },
          ],
          { duration: 260, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" }
        )
      );
    }
    const id = window.setTimeout(() => setFrames((f) => f.slice(-1)), 280);
    return () => window.clearTimeout(id);
  }, [frames]);

  /** 새 화면이 다 불러와지면 오른쪽에서 살짝 밀려 들어온다 */
  const handleFrameLoad = (href: string, el: HTMLIFrameElement) => {
    if (href !== current?.href) return;
    setLoadedHref(href);
    if (prefersReducedMotion()) return;
    el.animate(
      [
        { opacity: 0, transform: "translateX(28px) scale(0.985)" },
        { opacity: 1, transform: "none" },
      ],
      { duration: 420, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
    );
  };

  // 열 때는 빠르게 비켜서서(ease-out) 점들이 본문을 빠져나갈 즈음 자리가 거의 비어 있게 한다
  const mainStyle: CSSProperties = {
    transform: shift ? `translateX(${shift}px)` : undefined,
    transition: shift
      ? "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)"
      : "transform 520ms cubic-bezier(0.65, 0, 0.35, 1)",
  };

  const loading = current !== null && loadedHref !== current.href;
  const host = current ? new URL(current.href).host : "";

  return (
    <DemoContext.Provider value={{ activeHref, isOpen, mainStyle, open, close }}>
      {children}

      {/* 날아가는 점들이 그려지는 층 */}
      <div ref={layerRef} aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" />

      {panelRect && current && (
        <aside
          ref={panelRef}
          aria-label={current.title}
          style={{ ...panelRect, borderRadius: RADIUS }}
          className="fixed z-40 flex flex-col overflow-hidden border border-rule bg-paper shadow-[0_30px_90px_-30px_rgba(0,0,0,0.65)]"
        >
          <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5 text-[13px]">
            <span className={cn("h-2 w-2 shrink-0 rounded-full bg-amber", loading && "animate-pulse")} />
            {/* 데모를 바꾸면 제목도 살짝 페이드되며 바뀐다 */}
            <span key={current.href} className="flex min-w-0 items-baseline gap-3 duration-300 animate-in fade-in-0">
              <span className="shrink-0 font-semibold text-ink">{current.title}</span>
              {current.subtitle && <span className="min-w-0 truncate text-ink-3">{current.subtitle}</span>}
            </span>
            <span className="ml-auto hidden shrink-0 font-mono text-[11.5px] text-ink-3 xl:inline">{host}</span>
            <a
              href={current.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 text-ink-2 transition-colors hover:text-amber max-xl:ml-auto"
            >
              {t.demo.newTab} ↗
            </a>
            <button
              type="button"
              onClick={close}
              aria-label={t.demo.close}
              title={`${t.demo.close} (Esc)`}
              className="-mr-1 grid h-7 w-7 shrink-0 cursor-pointer place-items-center rounded-md text-ink-2 transition-colors hover:bg-rule/60 hover:text-ink"
            >
              ✕
            </button>
          </div>
          {/* 불러오는 동안 보이는 점 격자 바탕 */}
          <div className="relative flex-1 bg-[radial-gradient(var(--rule)_1.2px,transparent_1.6px)] bg-[length:16px_16px]">
            {loading && (
              <div className="absolute inset-0 grid place-items-center text-[12px] text-ink-3">{t.demo.loading}</div>
            )}
            <div ref={frameBoxRef} className="absolute inset-0">
              {frames.map((href) => {
                const leaving = href !== current.href;
                return (
                  <iframe
                    key={href}
                    src={href}
                    title={leaving ? undefined : current.title}
                    data-leaving={leaving}
                    aria-hidden={leaving || undefined}
                    tabIndex={leaving ? -1 : undefined}
                    onLoad={(e) => handleFrameLoad(href, e.currentTarget)}
                    allow="clipboard-write; fullscreen"
                    className={cn(
                      "absolute inset-0 h-full w-full border-0",
                      leaving ? "pointer-events-none" : loading && "opacity-0"
                    )}
                  />
                );
              })}
            </div>
          </div>
        </aside>
      )}
    </DemoContext.Provider>
  );
}

interface DemoLinkProps extends DemoTarget {
  className?: string;
  children: ReactNode;
}

/**
 * 데모 링크. 넓은 화면에서는 페이지 안 패널로, 좁은 화면에서는 새 탭으로 연다.
 * 실제 <a href>라서 새 탭 열기·주소 복사·키보드 이동이 모두 평소처럼 된다.
 */
export function DemoLink({ href, title, subtitle, className, children }: DemoLinkProps) {
  const { open, activeHref } = useDemo();
  const active = activeHref === href;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-expanded={active}
      className={cn(className, active && "text-amber decoration-amber")}
      onClick={(e) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (!computeLayout()) return; // 자리가 없으면 기본 동작(새 탭)
        e.preventDefault();
        open({ href, title, subtitle }, e.currentTarget);
      }}
    >
      {children}
    </a>
  );
}
