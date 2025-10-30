import { Outlet } from "react-router";
import { Menu } from "../Menu/Menu";

interface PFLayoutProps {}

const PFLayout: React.FC<PFLayoutProps> = (props) => {
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
