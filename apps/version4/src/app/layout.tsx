import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppSidebar } from "@/module/navigation/components";
import { Header } from "@/layout";
import {
  SidebarProvider,
  ScrollToTop,
  ThemeProvider,
} from "@/shared/components/ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jam IN",
  description: "Blending technologies, brewing experiences",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased theme-mono-paper`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SidebarProvider>
            {/* Header */}
            <Header isSearch={false} isAuth={false} isLogo={true} />

            {/* 모바일 전용 Sidebar */}
            <div className="md:hidden">
              <AppSidebar />
            </div>

            {/* 페이지 내용 */}
            <main className="w-full overflow-y-auto max-h-[calc(100svh-64px)] mt-16">
              {children}
            </main>

            {/* <Toaster position="top-right" /> */}

            {/* Scroll to Top 버튼 */}
            <ScrollToTop />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
