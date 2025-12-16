import { SidebarProvider } from '@/shared/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { Header } from '@/shared/components/ui/header';
import { Toaster } from '@/shared/components';
import { AppSidebar } from '@/module/navigation/components';

const visibleOption = {
  isSidebar: true,
  isHeader: true,
};

export const BaseLayout = () => {
  return (
    <>
      <SidebarProvider>
        {visibleOption?.isHeader && <Header isSearch={false} isAuth={false} isLogo={false} />}

        {/* 모바일 전용 사이드바 */}
        {visibleOption?.isSidebar && (
          <div className="md:hidden">
            <AppSidebar />
          </div>
        )}

        <main className={`w-full pt-2 overflow-y-auto ${visibleOption?.isHeader && 'max-h-[calc(100svh-64px)] mt-16'}`}>
          <Outlet />
        </main>
        <Toaster position="top-right" />
      </SidebarProvider>
    </>
  );
};
