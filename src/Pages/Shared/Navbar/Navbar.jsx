import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import userPic from "../../../assets/user.png";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
        {/* <NavLink to="/login">Login</NavLink> */}
        <NavLink to="/addNews">Add News</NavLink>
        <NavLink to="/mynews">My News</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>{navLinks}</li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{navLinks}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 rounded-full mr-2">
          <img alt="Tailwind CSS Navbar component" src={userPic} />
        </div>
        {user ? (
          <NavLink onClick={handleLogout} className={"btn"}>
            LogOut
          </NavLink>
        ) : (
          <NavLink className={"btn"} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
