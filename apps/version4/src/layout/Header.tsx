"use client";

import {
  SidebarTrigger,
  LogoHorizontal,
  LogoCompact,
  Logo,
  ThemeToggle,
} from "@/shared/components/ui";
import Link from "next/link";
import { useMenu } from "@/module/navigation/hooks";

interface HeaderProps {
  children?: React.ReactNode;
  isSearch?: boolean;
  isAuth?: boolean;
  isLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLogo }) => {
  const { navMain } = useMenu({ optionType: "side" });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-3 items-center px-4 text-sm text-foreground/90 md:px-6">
        {/* Left : Logo + Mobile trigger */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>

          {isLogo && (
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              {/* <LogoHorizontal width={120} height={40} /> */}
              {/* <LogoCompact width={120} height={40} /> */}
              <Logo width={50} height={50} />
            </Link>
          )}
        </div>

        {/* Center : Navigation */}
        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navMain?.map((group) =>
            group.items?.length ? (
              <div key={group.title} className="relative group cursor-pointer">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/70 transition-colors group-hover:text-primary">
                  {group.title}
                </span>

                {/* Dropdown */}
                <div className="absolute left-1/2 top-full hidden min-w-40 -translate-x-1/2 rounded-md border border-border/80 bg-popover/95 py-2 text-sm shadow-lg group-hover:block">
                  {group.items.map((item) => (
                    <Link
                      href={item.url}
                      key={item.title}
                      className="block px-4 py-1.5 text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={group.title}
                href={group.url}
                className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-primary"
              >
                {group.title}
              </Link>
            )
          )}
        </nav>

        {/* Right : Theme toggle, Search, Auth, etc. */}
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
