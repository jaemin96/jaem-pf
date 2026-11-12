import { notFound } from "next/navigation";
import { resolveLanguage } from "@/shared/i18n";
import { PortfolioPage } from "@/module/portfolio/components";

export default async function Home({ params }: { params: Promise<{ lang?: string[] }> }) {
  // "/" · "/en" 외의 주소는 404
  if (!resolveLanguage((await params).lang)) notFound();
  return <PortfolioPage />;
}
