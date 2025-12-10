import { useEffect, useState } from "react";
import { useNavOptions } from "./useNavOptions";
import { usePathname } from "next/navigation";

type OptionType = "side" | "header";

interface MenuProps {
  optionType: OptionType;
}

export const useMenu = ({ optionType = "side" }: Partial<MenuProps> = {}) => {
  const pathname = usePathname();
  const [activeUrl, setActiveUrl] = useState<string>(pathname ?? "/");
  const { navMain: navItems } = useNavOptions();

  useEffect(() => {
    setActiveUrl(pathname);
  }, [pathname]);

  // 메뉴 타입에 따라 소스 선택
  let source = null;
  switch (optionType) {
    case "header":
      break;
    case "side":
      source = navItems;
      break;
    default:
      console.log({ optionType });
  }

  const navMain = source?.map((group) => {
    if (!group) return group;

    // 그룹 내 items가 있는 경우
    if (Array.isArray(group.items) && group.items.length > 0) {
      const updatedItems = group.items.map((item) => ({
        ...item,
        isActive: activeUrl === item.url,
      }));

      const shouldBeOpen = updatedItems.some((item) => item.isActive);

      return {
        ...group,
        items: updatedItems,
        defaultOpen: group.collapsible ? shouldBeOpen : group.defaultOpen,
      };
    }

    // 단일 메뉴 항목
    return {
      ...group,
      isActive: activeUrl === group.url,
    };
  });

  const handleMenuClick = (url: string) => {
    setActiveUrl(url);
  };

  return { navMain, activeUrl, setActiveUrl, handleMenuClick };
};
