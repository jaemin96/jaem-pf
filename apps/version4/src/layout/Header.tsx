import { SidebarTrigger } from "@/shared/components/ui";
import Link from "next/link";
import { useMenu } from "@/module/navigation/hooks";

interface HeaderProps {
  children?: React.ReactNode;
  isSearch?: boolean;
  isAuth?: boolean;
  isLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLogo }) => {
  const { navMain } = useMenu({ optionType: "header" });

  return (
    <header className="fixed top-0 w-full bg-gray-800 z-50">
      <div className="grid grid-cols-3 items-center h-16 px-4 text-white">
        {/* Left : Logo + Mobile trigger */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>

          {isLogo && (
            <Link href="/" className="text-xl">
              Portfolio
            </Link>
          )}
        </div>

        {/* Center : Navigation */}
        <nav className="hidden md:flex justify-center gap-6 text-white">
          {navMain?.map((group) =>
            group.items?.length ? (
              <div key={group.title} className="relative group cursor-pointer">
                <span className="hover:opacity-80">{group.title}</span>

                {/* Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-gray-700 rounded-md py-2 min-w-[160px] shadow-lg">
                  {group.items.map((item) => (
                    <Link
                      href={item.url}
                      key={item.title}
                      className="block px-4 py-1 hover:bg-gray-600"
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
                className="hover:opacity-80"
              >
                {group.title}
              </Link>
            )
          )}
        </nav>

        {/* Right : reserved for future (Login, Profile, etc) */}
        <div className="flex justify-end items-center">
          {/* <HeaderUserDropdown /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
