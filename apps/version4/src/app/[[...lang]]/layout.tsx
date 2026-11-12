import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/shared/components/ui";
import { LanguageProvider } from "@/shared/contexts";
import { DEFAULT_LANGUAGE, LOCALES, getDictionary, localePath, otherLanguage, resolveLanguage } from "@/shared/i18n";
import "../globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// TODO: 배포 주소를 NEXT_PUBLIC_SITE_URL 환경변수로 넣어주세요. (OG 이미지·언어별 주소를 절대 경로로 만들 때 필요)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:12555";

type Params = Promise<{ lang?: string[] }>;

// app/opengraph-image.tsx 가 만드는 미리보기 이미지. 최상위 레이아웃이 없어서 자동으로 붙지 않으므로 직접 지정한다.
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Jaemin Kim — Frontend Engineer" };

/**
 * 언어별 경로: "/" = 한국어, "/en" = 영어
 * [[...lang]]는 "있어도 되고 없어도 되는" 경로 조각이라 "/"와 "/en"을 한 파일로 처리한다.
 * 두 경로만 미리 만들어 두고(dynamicParams = false) 나머지 주소는 404로 보낸다.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang: lang === DEFAULT_LANGUAGE ? [] : [lang] }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const lang = resolveLanguage((await params).lang) ?? DEFAULT_LANGUAGE;
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    authors: [{ name: "Jaemin Kim", url: "https://github.com/jaemin96" }],
    keywords: ["Frontend Engineer", "프론트엔드", "React", "TypeScript", "Next.js", "WSI", "포트폴리오"],
    // 검색엔진에 "이 페이지의 다른 언어판은 여기"라고 알려준다 (hreflang)
    alternates: {
      canonical: localePath(lang),
      languages: {
        ko: localePath("ko"),
        en: localePath("en"),
        "x-default": localePath(DEFAULT_LANGUAGE),
      },
    },
    openGraph: {
      type: "profile",
      locale: meta.ogLocale,
      alternateLocale: [getDictionary(otherLanguage(lang)).meta.ogLocale],
      url: localePath(lang),
      siteName: "Jaemin Kim",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/icon.svg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const lang = resolveLanguage((await params).lang) ?? DEFAULT_LANGUAGE;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`folio ${mono.variable} min-h-svh antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider lang={lang}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
