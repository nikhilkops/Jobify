import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from './Logo'
import { useDashboardContext } from "../pages/DashBoardLayout";
const BigSideBar = () => {

  const {showSideBar} = useDashboardContext();
 
  return <Wrapper> 
    <div className={!showSideBar?"sidebar-container show-sidebar":"sidebar-container"}>
      <div className="content">
        <header>
          <Logo/>
        </header>
        <NavLinks isBigSidebar/>
      </div>
    </div>
  </Wrapper>;
};
export default BigSideBar;
