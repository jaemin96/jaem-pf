import { Outlet } from "react-router";
import { Menu } from "../Menu/Menu";

const PFLayout: React.FC = () => {
  return (
    <div id="pf-layout">
      <Menu />
      <main id="pf-main">
        <Outlet />
      </main>
    </div>
  );
};

export default PFLayout;
