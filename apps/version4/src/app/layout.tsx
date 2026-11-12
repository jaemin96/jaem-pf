import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/shared/components/ui";
import { LanguageProvider } from "@/shared/contexts";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// TODO: 배포 주소를 NEXT_PUBLIC_SITE_URL 환경변수로 넣어주세요. (OG 이미지 절대 경로에 필요)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:12555";
const TITLE = "김재민 · Jaemin Kim — Frontend Engineer";
const DESCRIPTION =
  "React · TypeScript 4년+ 프론트엔드 개발자. GB 단위 병리 이미지(WSI)를 웹에서 다루는 뷰어를 만들고 있습니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Jaemin Kim", url: "https://github.com/jaemin96" }],
  keywords: ["Frontend Engineer", "프론트엔드", "React", "TypeScript", "Next.js", "WSI", "포트폴리오"],
  openGraph: {
    type: "profile",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Jaemin Kim",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`folio ${mono.variable} min-h-svh antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
