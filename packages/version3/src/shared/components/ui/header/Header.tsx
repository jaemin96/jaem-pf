import { HeaderUserDropdown } from './HeaderUserDropdown';
import { SidebarTrigger } from '@shared/components/ui/sidebar';
import { SearchBar } from '@shared/components/ui/input';
import { Link } from 'react-router-dom';

interface HeaderProps {
  children?: React.ReactNode;
  isSearch?: boolean;
  isAuth?: boolean;
  isLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, isSearch, isAuth, isLogo }) => {
  return (
    <header className={`fixed top-0 w-full bg-gray-800`}>
      <div className="flex items-center justify-between h-16 px-4">
        {/* 공백(로고) */}
        <div className="flex justify-center items-center gap-1.5 text-white">
          <SidebarTrigger className="mt-0.5" />
          {isLogo && (
            <Link to={'/'} className="text-xl">
              Portfolio
            </Link>
          )}
        </div>

        {/* 데스크톱 검색 */}
        {isSearch && (
          <div className="text-white hidden md:block">
            <SearchBar />
          </div>
        )}

        {/* MENU */}
        {isAuth && (
          <div className="flex gap-2">
            {/* 모바일 검색 */}
            <div className="text-white block md:hidden">
              <SearchBar />
            </div>
            {children}
            <HeaderUserDropdown />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
