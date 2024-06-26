import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../hooks/title_hooks";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };
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
            to="/blogs"
            className=" text-yellow-500 font-bold btn btn-ghost text-xl"
          >
            Blog
          </Link>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
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
