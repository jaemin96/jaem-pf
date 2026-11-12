import { ImageResponse } from "next/og";

// 카카오톡·슬랙·링크드인 등에 링크를 붙였을 때 보이는 미리보기 이미지.
// 기본 폰트에 한글 글리프가 없어서 영문으로만 구성한다.
export const alt = "Jaemin Kim — Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#1b1a19",
          color: "#e8e4dc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#d9a15b" }} />
          <div style={{ fontSize: 28, color: "#8f8a80" }}>Frontend Engineer</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>Jaemin Kim</div>
          <div style={{ fontSize: 36, color: "#c9c3b8", lineHeight: 1.4 }}>
            I put in the work yesterday, so today runs easy.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 26, color: "#8f8a80" }}>
          <span>React</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Large-image rendering (WSI)</span>
        </div>
      </div>
    ),
    size
  );
}
