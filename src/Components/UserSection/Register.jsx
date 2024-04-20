import React from "react";
import { Form, Link } from "react-router-dom";

const Register = () => {
  const registerHangle = (event) => {};
  return (
    <div>
      <h1 className="text-center text-2xl text-yellow-500 font-bold">
        Register Now
      </h1>
      <Form
        className="flex flex-col  items-center mt-4"
        onSubmit={registerHangle}
      >
        <label className="input mb-4  input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow w-72"
            placeholder="Name"
            name="name"
            required
          />
        </label>
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
            name="passsword"
            required
            className="grow w-72"
            placeholder="********"
          />
        </label>
        <p>
          Already Have An Account ?
          <Link className="ms-2 text-orange-500" to="/login">
            Please Login
          </Link>
        </p>
        <button type="submit" className="mt-4 btn btn-success">
          Register
        </button>
      </Form>
    </div>
  );
};

export default Register;
