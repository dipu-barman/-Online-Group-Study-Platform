import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Components/contexts/AuthProvider.jsx'
import Register from './Components/Register/Register.jsx'
import Signin from './Components/Signin/Signin.jsx'
import Home from './Components/Home/Home.jsx'
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import CreateAssignments from './Components/assignments/CreateAssignments.jsx'
import Attemtedassignment from './Components/assignments/Attemtedassignment.jsx'
import ViewAssignment from './Components/assignments/ViewAssignment.jsx'
import PendingAssignmen from './Components/assignments/PendingAssignmen.jsx'
import UpdateAssignment from './Components/assignments/UpdateAssignment.jsx'
import TakeAssignment from './Components/assignments/TakeAssignment.jsx'
import Teachermarking from './Components/assignments/Teachermarking.jsx'
import Privateroute from './Components/Private/Privateroute.jsx'

 // errorElement:<Eroor></Eroor>,
const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
   
    children:[
      {
        index:true,
       
        Component:Home
      },
      // {
      //   path:"addfree",
      //   // Component:Addfree
      //   element:<Privateroute><Addfree></Addfree></Privateroute>
      // },
      // {
      //   path:"/update/:id",
      //    loader :({params})=>fetch(`https://as-10-freelaning-server.vercel.app/free/${params.id}`),
      //   Component:Update
      // }
     ]
  },

  
       {
      path: "login",
      Component: Signin
    },

     {
      path: "/register",
      Component: Register
    },
     {
      path: "/create-assignment",
      // Component: CreateAssignments
       element:<Privateroute><CreateAssignments></CreateAssignments></Privateroute>
    },
     {
      path: "/my-attempts",
      // Component: Attemtedassignment,
      element:<Privateroute><Attemtedassignment></Attemtedassignment></Privateroute>
    },
    {
      path: "/view/:id",
      loader :({params})=>fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${params.id}`),
      Component: ViewAssignment
    },
     {
      path: "/pending",
      // Component: PendingAssignmen 
      element:<Privateroute><PendingAssignmen></PendingAssignmen></Privateroute>
    },
     {
      // "/update/:id"
      path: "/update/:id",
      loader :({params})=>fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmets/${params.id}`),
      Component: UpdateAssignment,
    
    },
    {
      path: "/take",
      Component: TakeAssignment
    },
    {
      path: "/mark/:id",
          loader :({params})=>fetch(`https://my-assignment-11-server-rouge.vercel.app/assignmentmark/${params.id}`),
      Component: Teachermarking
    },
    
    
    
    
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)


//  {
  //     path: "apply",
  //     Component: Moreapply
  //   },

  //  {
  //       path:"/update/:id",
  //        loader :({params})=>fetch(`https://as-10-freelaning-server.vercel.app/free/${params.id}`),
  //       Component:Update
  //     },



  // {
  //       path:"addfree",
  //       // Component:Addfree
  //       element:<Privateroute><Addfree></Addfree></Privateroute>
  //     },

  //  {
  //       path:"/deatiles/:id",
  //        loader :({params})=>fetch(`https://as-10-freelaning-server.vercel.app/free/${params.id}`),
  //       Component:Deatiles
  //     },





// {
    //   path: "/user",
    //   loader :()=>fetch('https://as-10-freelaning-server.vercel.app/users'),
    //   // Component: User
    //   element:<Privateroute><User></User></Privateroute>
    // },

    // {
    //   path: "/home",
    //   loader :()=>fetch('https://as-10-freelaning-server.vercel.app/free'),
       
    //    element:<Privateroute><Home></Home></Privateroute>
    // }

    