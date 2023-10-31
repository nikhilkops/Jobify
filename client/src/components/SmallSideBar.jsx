import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashBoardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from './NavLinks'

const SmallSideBar = () => {
  const data = useDashboardContext();

  const { showSideBar, toggleSideBar } = useDashboardContext();
 
  return (
    <Wrapper>
      {" "}
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <button
          type="button"
          color="white"
          className="close-btn"
          onClick={toggleSideBar}
        >
          <FaTimes style={{ fill: "#fff" }} />
        </button>
        <header>
          <Logo />
        </header>
        <NavLinks></NavLinks>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
