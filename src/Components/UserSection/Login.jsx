import React, { useContext } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Navigate, useLocation } from "react-router-dom";
import useTitle from "../hooks/title_hooks";

const Login = () => {
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";
  const { user, signInUser, googlePopupLogin, githubLogin } =
    useContext(AuthContext);
  const loginHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        setUserId(loginUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const googleLogin = () => {
    googlePopupLogin()
      .then((result) => {
        const loggeduser = result.user;

        console.log(loggeduser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const githubLoginHandler = () => {
    githubLogin()
      .then((result) => {
        const loginuser = result.user;
        console.log(loginuser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl text-yellow-500 font-bold">
        Login Please
      </h1>
      <Form className="flex flex-col  items-center mt-4" onSubmit={loginHandle}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow w-72 "
            name="email"
            required
            placeholder="Email"
          />
        </label>

        <label className="input mt-4 input-bordered flex items-center gap-2">
          <input
            type="password"
            name="password"
            required
            className="grow w-72"
            placeholder="********"
          />
        </label>
        <p>
          Don’t Have An Account?{" "}
          <Link className="text-orange-500" to="/register">
            Register Now
          </Link>{" "}
        </p>
        <button type="submit" className="mt-4 btn btn-success">
          Login
        </button>
      </Form>
      <div className="flex gap-3 mt-7 justify-center">
        <button onClick={googleLogin} className="btn btn-outline btn-accent">
          <FaGoogle></FaGoogle>Google
        </button>
        <button
          onClick={githubLoginHandler}
          className="btn btn-outline btn-accent"
        >
          <FaGithub></FaGithub> Github
        </button>
      </div>
    </div>
  );
};

export default Login;
