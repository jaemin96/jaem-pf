import { Home, Users } from 'lucide-react';

type NavItem = {
  title: string;
  url: string;
  isActive?: boolean;
};

type NavMainItem = {
  title: string;
  icon: React.ElementType;
  url: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  isActive?: boolean;
  items?: NavItem[];
};

export const useNavOptions = () => {
  return {
    navMain: [
      {
        title: 'Home',
        icon: Home,
        url: '/',
      },
      {
        title: 'test',
        icon: Users,
        collapsible: true,
        defaultOpen: false,
        url: '#',
        items: [{ title: 'test', url: `/test/${1}` }],
      },
    ] as NavMainItem[],
  };
};
