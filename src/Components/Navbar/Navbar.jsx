import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../contexts/Authcontext";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";
import "./nav.css"

const Navbar = () => {
  const { user, signOutuser } = useContext(Authcontext);

  const handleSignOut = () => {
    signOutuser()
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.log(error.message));
  };

  // Theme toggle with localStorage persistence
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Common Links
  const guestLinks = (
    <>
      <li><NavLink to="/">🏠 Home</NavLink></li>
      <li><NavLink to="/faq">❓ FAQ</NavLink></li>
      <li><NavLink to="/about">ℹ About</NavLink></li>
    </>
  );

  const userLinks = (
    <>
      <li><NavLink to="/">🏠 Home</NavLink></li>
      <li><NavLink to="/faq">❓ FAQ</NavLink></li>
      <li><NavLink to="/pending">🕒 Pending</NavLink></li>
      <li><NavLink to="/my-attempts">📚 My Attempts</NavLink></li>
      <li><NavLink to="/create-assignment">📝 Create</NavLink></li>
    </>
  );

  return (
    <div className="bg-primary text-white sticky top-0 z-50 w-full" data-tooltip-id="my-tooltip">
      {/* Tooltip */}
      {user && (
        <Tooltip id="my-tooltip">
          <p className="font-bold">Name: {user.displayName}</p>
          <p>{user.email}</p>
        </Tooltip>
      )}

      <div className="navbar px-4 max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box mt-3 w-52 p-2 shadow z-10"
            >
              {user ? userLinks : guestLinks}
            </ul>
          </div>

          {/* Logo / Site Name */}
          <Link to="/" className="btn btn-ghost lg:text-2xl md:text-xl sm:text-[16px] font-bold">
            <motion.span
              animate={{ color: ["#facc15", "#06b6d4", "#f43f5e"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ASSIGNMENT SITE
            </motion.span>
          </Link>
        </div>

        {/* Center Menu - Large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {user ? userLinks : guestLinks}
          </ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center gap-2">
          {/* Theme Toggle */}
          <div className="flex items-center gap-1">
            <span className="hidden md:block lg:block">{isDark ? "🌙" : "☀️"}</span>
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={isDark}
              onChange={toggleTheme}
            />
          </div>

          {/* Auth Buttons */}
          {!user && (
            <Link to="/register" className="btn btn-sm btn-accent">
              Register
            </Link>
          )}
          {user ? (
            <button onClick={handleSignOut} className="btn btn-sm btn-accent">
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="btn btn-sm btn-accent">
              Login
            </Link>
          )}

          {/* Profile Dropdown */}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/5hfGS1SV/user.png"}
                    alt="Profile"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black  rounded-box w-52 mt-3 shadow"
              >
                <li><Link to="/create-assignment">📝 Create Assignments</Link></li>
                <li><Link to="/my-attempts">📚 My Attempted Assignments</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
