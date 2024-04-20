import React from "react";
import { Form, Link } from "react-router-dom";

const Login = () => {
  const loginHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email,pass);
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
    </div>
  );
};

export default Login;
