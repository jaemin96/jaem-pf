"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "./SectionHeading";

interface DeepZoomDemoProps {
  heading: string;
  caption: string;
}

const TILE_PX = 256; // 화면에 그려지는 타일 크기
const GEN_PX = 96; // 실제로 생성하는 타일 해상도
const BASE = 90; // 레벨 0에서의 world unit 당 px
const MAX_LEVEL = 22;
const MAX_CACHE = 600;

/** 타일 하나를 생성한다. 지금은 만델브로 집합이며, 실제 사진 타일 이미지 로드로 교체할 자리. */
function renderTile(level: number, tx: number, ty: number): HTMLCanvasElement {
  const size = TILE_PX / (BASE * 2 ** level);
  const x0 = tx * size;
  const y0 = ty * size;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = GEN_PX;
  const g = canvas.getContext("2d")!;
  const img = g.createImageData(GEN_PX, GEN_PX);
  const d = img.data;
  const maxIt = Math.min(1500, 60 + level * 45);

  for (let j = 0; j < GEN_PX; j++) {
    for (let i = 0; i < GEN_PX; i++) {
      const a = x0 + ((i + 0.5) / GEN_PX) * size;
      const b = y0 + ((j + 0.5) / GEN_PX) * size;
      let x = 0;
      let y = 0;
      let xx = 0;
      let yy = 0;
      let n = 0;
      while (n < maxIt && xx + yy <= 256) {
        y = 2 * x * y + b;
        x = xx - yy + a;
        xx = x * x;
        yy = y * y;
        n++;
      }
      const o = (j * GEN_PX + i) * 4;
      if (n === maxIt) {
        d[o] = 15;
        d[o + 1] = 14;
        d[o + 2] = 13;
      } else {
        const t = (n + 1 - Math.log2(Math.log2(xx + yy) / 2)) * 0.09;
        d[o] = 140 + 110 * Math.sin(t + 0.6);
        d[o + 1] = 90 + 90 * Math.sin(t + 0.2);
        d[o + 2] = 50 + 60 * Math.sin(t - 0.4);
      }
      d[o + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return canvas;
}

export function DeepZoomDemo({ heading, caption }: DeepZoomDemoProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current!;
    const cv = canvasRef.current!;
    const hud = hudRef.current!;
    const ctx = cv.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    const cache = new Map<string, HTMLCanvasElement>();
    let queue: { key: string; level: number; tx: number; ty: number }[] = [];
    let W = 0;
    let H = 0;
    let cx = -0.6;
    let cy = 0;
    let scale = BASE * 1.6;
    const maxScale = BASE * 2 ** MAX_LEVEL;
    let raf = 0;
    let busy = false;
    let timer = 0;
    let drag: { x: number; y: number } | null = null;

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const pump = () => {
      if (busy || !queue.length) return;
      busy = true;
      timer = window.setTimeout(() => {
        const t = queue.shift();
        if (t && !cache.has(t.key)) {
          cache.set(t.key, renderTile(t.level, t.tx, t.ty));
          if (cache.size > MAX_CACHE) cache.delete(cache.keys().next().value!);
        }
        busy = false;
        schedule();
      }, 30);
    };

    function frame() {
      raf = 0;
      ctx.fillStyle = "#0f0e0d";
      ctx.fillRect(0, 0, W, H);

      const level = Math.max(0, Math.min(MAX_LEVEL, Math.round(Math.log2(scale / BASE))));
      const size = TILE_PX / (BASE * 2 ** level);
      const wpx = size * scale;
      const left = cx - W / 2 / scale;
      const top = cy - H / 2 / scale;
      const tx0 = Math.floor(left / size);
      const ty0 = Math.floor(top / size);
      const tx1 = Math.floor((left + W / scale) / size);
      const ty1 = Math.floor((top + H / scale) / size);

      const need: { key: string; level: number; tx: number; ty: number; d: number }[] = [];
      let shown = 0;
      for (let ty = ty0; ty <= ty1; ty++) {
        for (let tx = tx0; tx <= tx1; tx++) {
          const px = (tx * size - left) * scale;
          const py = (ty * size - top) * scale;
          const key = `${level}/${tx}/${ty}`;
          const tile = cache.get(key);
          if (tile) {
            ctx.drawImage(tile, px, py, wpx + 0.5, wpx + 0.5);
            shown++;
          } else {
            ctx.fillStyle = "#171615";
            ctx.fillRect(px, py, wpx, wpx);
            ctx.strokeStyle = "#2a2826";
            ctx.strokeRect(px + 0.5, py + 0.5, wpx - 1, wpx - 1);
            need.push({ key, level, tx, ty, d: Math.hypot(px + wpx / 2 - W / 2, py + wpx / 2 - H / 2) });
          }
        }
      }
      need.sort((a, b) => a.d - b.d);
      queue = need;

      const mag = scale / BASE;
      hud.textContent = `level ${level} · ${mag.toFixed(mag < 10 ? 1 : 0)}× · tiles ${shown}/${shown + need.length} · cached ${cache.size}`;
      pump();
    }

    const resize = () => {
      const r = cv.getBoundingClientRect();
      W = r.width;
      H = r.height;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      schedule();
    };

    const zoomAt = (px: number, py: number, f: number) => {
      const next = Math.max(BASE * 0.8, Math.min(maxScale, scale * f));
      const wx = cx + (px - W / 2) / scale;
      const wy = cy + (py - H / 2) / scale;
      scale = next;
      cx = wx - (px - W / 2) / scale;
      cy = wy - (py - H / 2) / scale;
      box.dataset.touched = "true";
      schedule();
    };

    const local = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top] as const;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const [x, y] = local(e);
      zoomAt(x, y, Math.exp(-e.deltaY * 0.0018));
    };
    const onDbl = (e: MouseEvent) => {
      const [x, y] = local(e);
      zoomAt(x, y, 2.2);
    };
    const onDown = (e: PointerEvent) => {
      cv.setPointerCapture(e.pointerId);
      drag = { x: e.clientX, y: e.clientY };
      box.dataset.touched = "true";
      box.dataset.drag = "true";
    };
    const onMove = (e: PointerEvent) => {
      if (!drag) return;
      cx -= (e.clientX - drag.x) / scale;
      cy -= (e.clientY - drag.y) / scale;
      drag = { x: e.clientX, y: e.clientY };
      schedule();
    };
    const onUp = () => {
      drag = null;
      delete box.dataset.drag;
    };
    const onKey = (e: KeyboardEvent) => {
      const step = 60 / scale;
      if (e.key === "+" || e.key === "=") zoomAt(W / 2, H / 2, 1.6);
      else if (e.key === "-") zoomAt(W / 2, H / 2, 1 / 1.6);
      else if (e.key === "ArrowLeft") cx -= step;
      else if (e.key === "ArrowRight") cx += step;
      else if (e.key === "ArrowUp") cy -= step;
      else if (e.key === "ArrowDown") cy += step;
      else return;
      e.preventDefault();
      box.dataset.touched = "true";
      schedule();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(cv);
    cv.addEventListener("wheel", onWheel, { passive: false });
    cv.addEventListener("dblclick", onDbl);
    cv.addEventListener("pointerdown", onDown);
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerup", onUp);
    cv.addEventListener("pointercancel", onUp);
    box.addEventListener("keydown", onKey);
    resize();

    return () => {
      ro.disconnect();
      cv.removeEventListener("wheel", onWheel);
      cv.removeEventListener("dblclick", onDbl);
      cv.removeEventListener("pointerdown", onDown);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerup", onUp);
      cv.removeEventListener("pointercancel", onUp);
      box.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      <div
        ref={boxRef}
        tabIndex={0}
        aria-label="Deep zoom demo. Scroll to zoom, drag to pan, plus and minus keys to zoom."
        className="group/dz relative cursor-grab touch-none overflow-hidden rounded-md border border-rule bg-[#0f0e0d] data-[drag=true]:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-amber"
      >
        <canvas ref={canvasRef} className="block h-[280px] w-full" />
        <div
          ref={hudRef}
          className="pointer-events-none absolute bottom-2.5 left-3 text-[11px] tabular-nums text-[#b9b3a6] [text-shadow:0_1px_2px_#000]"
        />
        <div className="pointer-events-none absolute right-3 top-2.5 text-[11px] text-[#b9b3a6] transition-opacity [text-shadow:0_1px_2px_#000] group-data-[touched=true]/dz:opacity-0">
          scroll to zoom · drag to pan
        </div>
      </div>
      <p className="mt-2.5 text-[13px] leading-relaxed text-ink-2">{caption}</p>
    </section>
  );
}
