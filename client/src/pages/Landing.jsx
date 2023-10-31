import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components/index";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>{" "}
          <p>
            Navigate a sea of possibilities with our job finding platform. We
            streamline your search, making the hunt for that perfect job a
            breeze. Join now and step into a brighter, more rewarding
            professional future."
          </p>{" "}
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job finding" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
