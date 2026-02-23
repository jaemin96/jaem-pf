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
    navMain: [] as NavMainItem[],
  };
};
