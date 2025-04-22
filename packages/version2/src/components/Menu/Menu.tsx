import { NavLink } from "react-router";

interface MenuProps {}

interface MenuItem {
  key: string;
  to: string;
  name: string;
}

type MenuAlign = "left" | "right";

const menuItems: MenuItem[] = [
  { key: "Hero", to: "/", name: "Hero" },
  { key: "AboutMe", to: "/about", name: "About me" },
  { key: "Projects", to: "/project", name: "My Projects" },
  { key: "Experience", to: "/experience", name: "Experience" },
  { key: "Contact", to: "/contact", name: "Contact" },
];

export const Menu: React.FC<MenuProps> = (props) => {
  const menuAlign: MenuAlign = "right";
  return (
    <>
      <nav id="pf-menu" className={`${menuAlign}`}>
        {menuItems?.map((item: MenuItem) => {
          return (
            <NavLink
              key={item?.key}
              to={item?.to}
              style={({ isActive }) => ({
                color: isActive ? "green" : "blue",
              })}
            >
              {item?.name}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};
