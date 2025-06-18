import React, { use, useEffect, useState } from 'react';
import Authcontext from '../contexts/Authcontext';
import { Link, NavLink } from 'react-router';
import { Tooltip } from 'react-tooltip';
import "./nav.css"

const Navbar = () => {
     const {user,signOutuser} = use(Authcontext)
//   console.log('hello.iam hero...')
  console.log(user)


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
        <div className='bg-white'>
        
            
      <div className="">
        {/* <a  className="text-5xl" data-tooltip-id="my-tooltip">◕‿‿◕</a> */}
<Tooltip id="my-tooltip">
  <div>
    {user&&<><p className='font-bold'><span>name :{user.
displayName}</span></p>
    <p className=''><span>{user.email}</span></p>
    </>
    }
    {/* <h3>This is a very interesting header</h3>
    <p>Here's some interesting stuff:</p>
    <ul>
      <li>Some</li>
      <li>Interesting</li>
      <li>Stuff</li>
    </ul> */}
  </div>
</Tooltip>
      </div >

                  <div className="navbar  shadow-sm "  data-tooltip-id="my-tooltip">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            {links}
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-black">FUTURE BOX</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      
      <li className='font-bold text-black'><NavLink to='/'>Home</NavLink></li>
      
<li className='font-bold text-black'>
  <NavLink to='/user'>Browse Tasks</NavLink>
</li>
         
       <li className='font-bold text-black'> 
          {user&& <NavLink to='pending'>Pending Assignments</NavLink>
          } 
           </li>
         

        {/* <li className='font-bold'>  <NavLink to='/user'></NavLink>  Task Details Page:
</li> */}

       
    
    </ul>
  </div>
  
        <div>
             <div className="main">
               
      <h1>{isDark ?  <p className='text-red-500'>Dark </p> : "Light"}</h1>
      <button onClick={toggleTheme} className='  '><input type="checkbox" value="synthwave" className="toggle bg-blue-700 " /></button>
    </div>
            
        </div>
  <div className="navbar-end flex gap-5">
    <button className='font-bold btn hover:bg-blue-600'><NavLink to='/register'>Register</NavLink></button>
    
   
    
    {
      user?<div className='flex'><Link onClick={handlesignout} className='btn btn-outline hover:bg-green-400 text-black'>sign out</Link>  <br />
      
      </div> : <Link className="btn btn-outline text-black hover:bg-purple-300" to="/login">login now</Link>
    }
   <div>
    {/* <img className='h-12 w-12 rounded-full' src={`${user?user.photoURL :<FaUserAlt  /> }`} alt="" /> */}
    {user? 
    <details className="dropdown">
  <summary className="btn  m-1"><img className='h-12 w-12 rounded-full  ' src={user.photoURL} alt="profile" /></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li > <Link
            to="/create-assignment"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-emerald-500"
          >
            Create Assignments
          </Link>
          </li>
    <li><Link
            to="/my-attempts"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-blue-600"
          >
            My Attempted Assignments
             
          </Link></li>
  </ul>
</details>:<details className="dropdown">
  <summary className="btn m-1"><img className='h-10 w-10 rounded-full' src="https://i.ibb.co/5hfGS1SV/user.png" alt="" /></summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><Link
            to="/create-assignment"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-blue-600"
          >
            Create Assignments
          </Link></li>
    <li><Link
            to="/my-attempts"
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-indigo-600"
          >
            My Attempted Assignments
             
          </Link></li>
  </ul>
</details>}
    

     { user&&
     <>
     {/* <p className=' hover:bottom-[1.5rem] left-1/2 transform -translate-x-1/2
     bg-gray-800  px-2 py-1 rounded group-hover:opacity-100 transition-opacity'>{user.providerData[0]. displayName}</p> */}
<p className=''><span>{user.email}</span></p>
     </>  }
 
   </div>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;