"use client";

import { useEffect, useRef } from "react";

/**
 * 마우스 효과 (Canvas 2D, 라이브러리 없음)
 *  1) 마우스를 한 박자 늦게 따라오는 점과 링 (링크 위에서는 링이 커진다)
 *  2) 클릭하면 레몬즙이 튀듯 물방울이 퍼져나가는 효과
 *
 * 구현 포인트
 *  - lerp: 현재값을 목표값 쪽으로 비율만큼만 이동 -> 부드럽게 따라오는 느낌
 *  - 파티클: 위치/속도/수명을 가진 객체를 매 프레임 갱신하고 그린다.
 *    속도에 중력(+y)과 마찰(*0.96)을 적용하면 "튀어나갔다가 가라앉는" 움직임이 된다.
 *  - 움직일 게 없으면 rAF 루프를 멈추고, 입력이 오면 다시 시작한다 (유휴 CPU 0)
 */

interface Drop {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number; // 0~1, 1에서 시작해 0이 되면 사라진다
  decay: number; // 프레임당 life 감소량
  color: number; // 0: amber, 1: lemon
}

interface Ring {
  x: number;
  y: number;
  r: number;
  life: number;
}

const LEMON_DARK = "#f4dc6a";
const LEMON_LIGHT = "#d4a90a";

export function CursorEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 마우스 같은 정밀 포인터 + 모션 허용일 때만 동작
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduceMotion.matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let amber = "#d9a15b";
    let lemon = LEMON_DARK;
    const syncTheme = () => {
      amber = getComputedStyle(document.body).getPropertyValue("--amber").trim() || amber;
      lemon = document.documentElement.classList.contains("dark") ? LEMON_DARK : LEMON_LIGHT;
    };
    syncTheme();
    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // 이후 좌표는 CSS px 기준으로 쓴다
    };
    resize();

    // 마우스 목표 위치, 점(빠름), 링(느림)
    const target = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };
    const ring = { x: -100, y: -100, r: 14, targetR: 14 };
    let seen = false; // 첫 이동 전에는 그리지 않는다
    let visible = true;
    const drops: Drop[] = [];
    const waves: Ring[] = [];
    let raf = 0;

    const INTERACTIVE = "a, button, summary, [role='button'], canvas";

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!seen) {
        seen = true;
        dot.x = ring.x = e.clientX;
        dot.y = ring.y = e.clientY;
      }
      visible = true;
      // 링크/버튼 위에서는 링을 키운다
      ring.targetR = (e.target as Element | null)?.closest?.(INTERACTIVE) ? 24 : 14;
      wake();
    };

    const onDown = (e: PointerEvent) => {
      // 물방울: 각도는 랜덤, 속도도 랜덤 -> 불규칙하게 퍼진다
      const count = 16;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = 2.5 + Math.random() * 5;
        drops.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1, // 살짝 위로 튀게
          r: 1.6 + Math.random() * 3,
          life: 1,
          decay: 0.014 + Math.random() * 0.014,
          color: Math.random() < 0.55 ? 1 : 0,
        });
      }
      waves.push({ x: e.clientX, y: e.clientY, r: 6, life: 1 });
      wake();
    };

    const onLeave = () => {
      visible = false;
      wake();
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    function frame() {
      raf = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1) 따라오는 점/링: lerp (계수가 작을수록 더 늦게 따라온다)
      dot.x += (target.x - dot.x) * 0.28;
      dot.y += (target.y - dot.y) * 0.28;
      ring.x += (target.x - ring.x) * 0.12;
      ring.y += (target.y - ring.y) * 0.12;
      ring.r += (ring.targetR - ring.r) * 0.18;

      if (seen && visible) {
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = amber;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.45;
        ctx.strokeStyle = amber;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 2) 클릭 파문: 반지름은 커지고 투명도는 줄어든다
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i];
        w.r += (46 - w.r) * 0.12;
        w.life -= 0.035;
        if (w.life <= 0) {
          waves.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = w.life * 0.5;
        ctx.strokeStyle = lemon;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3) 물방울: 속도 방향으로 길쭉하게 그려 "튀는" 느낌을 낸다
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.vx *= 0.96; // 마찰
        d.vy = d.vy * 0.96 + 0.12; // 마찰 + 중력
        d.x += d.vx;
        d.y += d.vy;
        d.life -= d.decay;
        if (d.life <= 0) {
          drops.splice(i, 1);
          continue;
        }
        const speed = Math.hypot(d.vx, d.vy);
        const stretch = 1 + Math.min(speed * 0.25, 1.6);
        ctx.globalAlpha = Math.min(1, d.life * 1.4);
        ctx.fillStyle = d.color ? lemon : amber;
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(Math.atan2(d.vy, d.vx));
        ctx.beginPath();
        ctx.ellipse(0, 0, d.r * stretch, d.r, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      // 아직 움직일 게 남아있을 때만 다음 프레임을 예약한다
      const settled =
        Math.abs(target.x - dot.x) < 0.1 &&
        Math.abs(target.y - dot.y) < 0.1 &&
        Math.abs(target.x - ring.x) < 0.1 &&
        Math.abs(target.y - ring.y) < 0.1 &&
        Math.abs(ring.targetR - ring.r) < 0.1;
      if (drops.length || waves.length || !settled) wake();
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}
