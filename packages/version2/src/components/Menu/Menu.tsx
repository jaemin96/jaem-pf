import { NavLink } from "react-router";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = (props) => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Home
        </NavLink>
        <NavLink
          to="/intro"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Intro
        </NavLink>
        <NavLink
          to="/project"
          style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
        >
          Project
        </NavLink>
      </nav>
    </>
  );
};
