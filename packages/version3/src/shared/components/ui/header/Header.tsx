import { SidebarTrigger } from '@shared/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { useMenu } from '@module/navigation/hooks';

interface HeaderProps {
  children?: React.ReactNode;
  isSearch?: boolean;
  isAuth?: boolean;
  isLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLogo }) => {
  const { navMain } = useMenu();

  return (
    <header className="fixed top-0 w-full bg-gray-800 z-50">
      <div className="grid grid-cols-3 items-center h-16 px-4 text-white">
        {/* Left : Logo 영역 (모바일에서는 SidebarTrigger 포함) */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>

          {isLogo && (
            <Link to="/" className="text-xl">
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
                {/* Desk Dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-gray-700 rounded-md py-2 min-w-[160px] shadow-lg">
                  {group.items.map((item) => (
                    <Link key={item.title} to={item.url} className="block px-4 py-1 hover:bg-gray-600">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={group.title} to={group.url} className="hover:opacity-80">
                {group.title}
              </Link>
            )
          )}
        </nav>

        {/* Right : 비어있는 우측 (추후 로그인 버튼 자리) */}
        <div className="flex justify-end items-center">
          {/* 일단 비워두기 (나중에 Login, UserMenu 등 들어갈 자리) */}
          {/* <HeaderUserDropdown /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
