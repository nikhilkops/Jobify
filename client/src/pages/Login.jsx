import { Link, Form, redirect, useNavigation,useActionData } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors ={msg:""}
 
  if(data.password.length < 3)
  {
    errors.msg = "Password is too Short"
    console.log(errors)
    return errors ;
  }
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";

   const isDarkToast = { theme: isDarkTheme ? "dark" : "light" };

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful", isDarkToast);
    return redirect("/dashboard");
  } catch (err) {
    toast.error(err?.response?.data?.message, isDarkToast);
    errors.msg = err?.response?.data?.message;
    return errors;
  }
  return null;
};
const Login = () => {
  const navigation = useNavigation();
  const error = useActionData() ;
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        {error?.msg && (
          <p style={{ color: "red", fontSize: 12 }}>{error.msg}</p>
        )}

        <FormRow type="text" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          {isSubmitting ? "Loggin In..." : "Login"}
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a member yet ?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
