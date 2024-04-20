import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-yellow-500 font-bold text-3xl">
          Food Hunter
        </a>
      </div>
      <div className="flex-none">
        <div className="">
          <Link
            to="/"
            className="btn btn-ghost text-yellow-500 font-bold text-xl"
          >
            Home
          </Link>
        </div>
        <div className="ms-3 me-3">
          <Link
            to="/"
            className=" text-yellow-500 font-bold btn btn-ghost text-xl"
          >
            Blog
          </Link>
        </div>
        {user ? (
          <div className="btn btn-ghost btn-circle avatar">
            user?
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-ghost text-yellow-500 font-bold text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
