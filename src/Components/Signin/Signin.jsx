import React, { use, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Authcontext from '../contexts/Authcontext';
import { Link, useLocation, useNavigate } from 'react-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {

    

    const [errormessage,seterrormessage] =useState('')

  const [showpassword ,setshowpassword] = useState(false)
  const { signInoldUser,googleSingIn } = use(Authcontext);
  
  const navigate= useNavigate()

  const location = useLocation()
const emailref = useRef()

const handleSignIn = (e) => {
    e.preventDefault();
     const form = e.target;
     const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // const check = form..cheched;
    

    if(!terms){
      // seterrormessage('')
      seterrormessage("please accept our condition")
      toast.error("please accept our condition!");
       return

     }
    seterrormessage('');
    signInoldUser(email, password)
      .then((result) => {
        console.log(result.user);

        // if(!result.user.emailVerified){
        //   alert("please verifed your email")
        // }
        // else{

        // }
        const signininfo ={email,lastSignInTime:result.user?.metadata?.lastSignInTime}

        // fetch(`https://as-10-freelaning-server.vercel.app/users`,{
        //       method:'PATCH',
        //      headers :{
        //     'content-type':'application/json'
          
        //  }, 
        //   body :JSON.stringify(signininfo)
        //   })
        //  .then(res =>res.json())
        //  .then(data =>{
        //     console.log('patch',data)})
        
        



        toast.success("login successfully!")
        navigate(location.state ||'/')

      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
        seterrormessage('worng password')
      });
  };



  const handlegooglelogin =()=>{
    googleSingIn()
    .then((result) => {
        console.log(result.user);
        toast.success("login successfully!")
        
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      });

  }


  const handleforgetpassword =()=>{
 const email = emailref.current.value
   seterrormessage('')
     sendPasswordResetEmail(auth,email)
     .then(()=>{
      alert ("password reset email is sent you email")
     })
     .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
        seterrormessage(error.message)
      });
  }

    return (
        <div>
              <div>
             <div className="mx-auto  min-h-screen">

               <Helmet>
        <title>Dashboard | Login-site</title>
      </Helmet>

        <ToastContainer position="top-right" autoClose={3000} />
  
      <h1 className="text-5xl font-bold text-center mb-8 mt-16">Login now!</h1>
      
    
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div  className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" ref={emailref} name='email' placeholder="Email" required />

          <div className='relative'>
            <label className="label " >Password</label>
          <input type={showpassword?"text":"password"}
           className="input" name='password' placeholder="Password" required />

          <button onClick={()=>{setshowpassword(!showpassword)}} className='absolute top-7 right-7'>{showpassword?<FaEyeSlash size={20}></FaEyeSlash>:<FaEye size={16}></FaEye>}</button>
          </div>

          {/* check box.......... */}

           <label className="label">
    <input type="checkbox"  className="checkbox" name='terms' />
    Remember me
  </label>
          {/* forget pasword......... */}

          <div onClick={handleforgetpassword}><a className="link link-hover">Forgot password?</a></div>

          {/* <Link className="" to="/">Login</Link> */}
          {/* <button btn  mt-4>login</button> */}
          <button className='btn'>login </button>
          

          <button onClick={handlegooglelogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
          <p>if you have not account please <span className='font-medium text-blue-500'> <Link to="/register">Register</Link></span> here</p>

           <p className='text-red-500'>{errormessage}</p>
        </form>

       
      </div>
   
</div>
        </div> 
        </div>
            
        </div>
    );
};

export default Signin;