import React, { use, useEffect, useState } from 'react';
import Authcontext from '../contexts/Authcontext';
import { Link, NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import "./nav.css"

import { easeOut, motion } from "framer-motion";

const Navbar = () => {
     const {user,signOutuser} = use(Authcontext)
//   console.log('hello.iam hero...')
  // console.log(user.email)


  const handlesignout =() =>{
    signOutuser()
      .then(() => {
       console.log("signou successful");
      })
      .catch((error) => {
        console.log(error.message);       });

  }
   const links = <><li>hello</li>
   </>
     const [isDark, setIsDark] = useState(false);

 useEffect(() => {
    // Add or remove "dark-theme" class to <body>
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };


    return (


<div className="bg-white px-4   "data-tooltip-id="my-tooltip">
  {/* Tooltip (No Changes) */}
  {user && (<Tooltip id="my-tooltip">
    <div className="  ">
      
        <>
          <p className="font-bold ">
            <span>Name: {user.displayName}</span>
          </p>
          <p>
            <span>{user.email}</span>
          </p>
        </>
      
    </div>
  </Tooltip>)}

  {/* Navbar - Responsive Only For sm/md */}
  <div className="navbar px-7 py-5 shadow-sm flex flex-wrap justify-between items-center">
    {/* Left Part */}
    <div className="navbar-start w-full md:w-auto flex items-center justify-between">
      {/* Mobile Dropdown */}
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost p-1 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
        >
          <li><NavLink to="/">🏠 Home</NavLink></li>
          <li><NavLink to="/user">🗂 Browse Tasks</NavLink></li>
          {user && <li><NavLink to="/pending">🕒 Pending Assignments</NavLink></li>}
        </ul>
      </div>

      <a className="btn btn-ghost text-lg sm:text-xl text-black"><motion.span
                            animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >ASSIGNMENT SITE</motion.span></a>
    </div>

    {/* Center Links - Show Only lg and above */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li className="font-bold text-black"><NavLink to="/">🏠 Home</NavLink></li>
        <li className="font-bold text-black"><NavLink to="/user">🗂 Browse Tasks</NavLink></li>
        {user && <li className="font-bold text-black"><NavLink to="/pending">🕒 Pending</NavLink></li>}
      </ul>
    </div>

    {/* Theme Toggle */}
    <div className="w-full md:w-auto flex justify-center items-center mt-2 md:mt-0 gap-2">
      <span className="text-lg">{isDark ? '🌙' : '☀️'}</span>
      <button onClick={toggleTheme}>
        <input type="checkbox" value="synthwave" className="toggle toggle-sm bg-blue-700" />
      </button>
    </div>

    {/* Right Side */}
    <div className="navbar-end w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
      <NavLink to="/register" className="btn btn-sm md:btn font-bold hover:bg-blue-600 w-full md:w-auto">
        Register
      </NavLink>

      {user ? (
        <button
          onClick={handlesignout}
          className="btn btn-outline btn-sm md:btn hover:bg-green-400 text-black w-full md:w-auto"
        >
          Sign Out
        </button>
      ) : (
        <Link to="/login" className="btn btn-outline btn-sm md:btn text-black hover:bg-purple-300 w-full md:w-auto">
          Login Now
        </Link>
      )}

      {/* Profile Dropdown */}
      <details className="dropdown w-full md:w-auto mr-14">
        <summary className="btn m-1 p-0 flex justify-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={user?.photoURL || 'https://i.ibb.co/5hfGS1SV/user.png'}
            alt="profile"
          />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          <li>
            <Link to="/create-assignment" className="block px-4 py-2 text-sm font-bold text-emerald-500">
              📝 Create Assignments
            </Link>
          </li>
          <li>
            <Link to="/my-attempts" className="block px-4 py-2 text-sm font-bold text-blue-600">
              📚 My Attempted Assignments
            </Link>
          </li>
        </ul>
      </details>

      {/* Email - Optional: show below */}
      {user && (
        <p className="text-xs sm:text-sm text-gray-600 truncate max-w-[200px] hidden sm:block">
          {user.email}
        </p>
      )}
    </div>
  </div>



  

  
</div>













    );
};

export default Navbar;