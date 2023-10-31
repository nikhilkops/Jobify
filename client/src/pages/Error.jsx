import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();

  if (error.status == 400) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not found" />
          <h3>Ohh!page not found </h3>
          <p>we can't seem to find the page you are looking for</p>
        </div>
      </Wrapper>
    );
  }
  console.log(error);

  return (
    <Wrapper>
      <div>
        <img src={img} alt="Not found" />
        <h3>Ohh!page not found </h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to="/">Go Back!</Link>{" "}
      </div>
    </Wrapper>
  );
};
export default Error;
