import React, { use, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import Authcontext from '../contexts/Authcontext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    
    const [successful,setSuccessful] =useState(false)
  const [showpassword ,setshowpassword] = useState(false)

  const [errorMessage,setErrorMessage] = useState('')

  const { createUser,setUser,updateuser } = use(Authcontext);

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    
    const photo = form.photo.value;
    const email = form.email.value;
//     
    const password = form.password.value;
//     const repassword = form.repassword.value;
    const agree = form.agree.checked;

    // const neUser = { name, email, photo};
//    console.log(neUser);

    

    if(!agree){
      // seterrormessage('')
      setErrorMessage("please accept our condition")
       return

     }

    setSuccessful(false)
 setErrorMessage('')

  //  const passwordregexp =/^(?=.*[A-Za-z])(?=.*\d).{6,}$/
  //  if (passwordregexp.test.(password)===false){
  //   setErrorMessage('password must be 6 charcter')
  //   return
  //  }

  createUser(email, password)
      .then((result) => {
       console.log(result.user);
       const usser=result.user
         const neUser = { name, email, photo,ceationtime:usser?.metadata?.creationTime,lastSignInTime:usser?.metadata?.lastSignInTime};
       toast.success("register successfully!")

      //  verified.............

      //  sendEmailVerification(auth.currentUser)
      //  .then(()=>{

      //  })

      // updateprofile.........

      // const profile =
      updateuser({ displayName:name,photoURL:photo})
      .then(()=>{
        setUser({...usser, displayName:name,photoURL:photo})
        
      }) 
      .catch((error) => {
        console.log(error.message); 
           
      setUser(usser)
      toast.error("Something went wrong!");
      }); 
      setSuccessful(true)
    //   fetch('https://as-10-freelaning-server.vercel.app/users',{
    //           method:"POST",
    //           headers :{
    //               'content-type':'application/json'
    //           },
    //           body :JSON.stringify(neUser)
    //       })
    //       .then(res =>res.json())
    //       .then(data=>{
    //            console.log('affter adding ',data)
      
    //             if(data.insertedId){
    //   //         console.log('affter adding ',data)
    //           Swal.fire({
    //     title: "added successful!",
    //     icon: "success",
    //     draggable: true
    //    });
      
    //   //     //  form.reset()
        //  }
        //   })
       navigate('/')
      })
      .catch((error) => {
        console.log(error.message); 
        toast.error("Something went wrong!")
      // setErrorMessage(error.message)
      });

//     if (password !== repassword) {
//       alert("Password and Re-Password do not match.");
//     }

   const newUser = { name, email, photo, password };
   console.log(newUser);
//     form.reset();
   };



    return (
        <div>
             <div>
            <div className=" mx-auto w-4/12  mt-[80px] bg-white p-10 mb-10 rounded-3xl">

      <Helmet>
        <title>Dashboard | Register</title>
      </Helmet>

       <ToastContainer position="top-right" autoClose={3000} />
      {/* Left Side: Blank */}
      <div className=""></div>

      {/* Center: Form */}
      <div className="">
        <p className=" text-center text-black font-bold">Register</p>
        <h1 className="text-2xl font-bold text-black text-center">
          Start for free Today
        </h1>
        {/* <p className=" mb-4 text-center">
          Access to all features. No credit card required.
        </p> */}
    
        {/* <GoogleSigni></GoogleSignin> */}

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
{/*  */}
        <form onSubmit={handleRegister} className="space-y-4 text-black">


          <div>
            <label className="block text-sm font-medium text-white ">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Steven Job"
              className="w-full border rounded-md py-2 px-3" required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white ">photo-url*</label>
            <input
              type="text"
              name="photo"
              placeholder="photo url..."
              className="w-full border rounded-md py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="stevenjob@gmail.com"
              className="w-full border rounded-md py-2 px-3" required
            />
          </div>

          

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password *
            </label>
            <div className="relative">
              <input
              type={showpassword?"text":"password"}
              name="password" required
              onChange={(e) => {
                const value = e.target.value;
                const message = document.getElementById("passwordHint");

                const isValid = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(value);

                if (!isValid) {
                  message.textContent =
                    "❌ Password must be at least 6 characters and include letters & numbers.";
                  message.className = "mt-1 text-sm text-red-500";
                } else {
                  message.textContent = "✅ Looks good!";
                  message.className = "mt-1 text-sm text-green-600";
                }
              }}
              className="w-full border rounded-md py-2 px-3 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />

            <button onClick={()=>{setshowpassword(!showpassword)}} className='absolute top-3 right-7'>{showpassword?<FaEyeSlash size={20}></FaEyeSlash>:<FaEye size={16}></FaEye>}</button>
                    
            </div>
            

            <p id="passwordHint" className="mt-1 text-sm text-gray-500">
              Must be at least 6 characters, with letters and numbers.
            </p>
          </div>

          {/* <div>
            <label className="block text-sm font-medium ">Re-Password *</label>
            <input
              type="password"
              name="repassword"
              className="w-full border rounded-md py-2 px-3"
            />
          </div> */}

          {/* <div className='relative'>
                      <label className="label " >Password</label>
                    <input type={showpassword?"text":"password"}

                    
                     className="input" name='password' placeholder="Password" required />
          
                    <button onClick={()=>{setshowpassword(!showpassword)}} className='absolute top-7 right-7'>{showpassword?<FaEyeSlash size={20}></FaEyeSlash>:<FaEye size={16}></FaEye>}</button>
                    </div> */}

          <div className="flex items-center">
            <input type="checkbox" name="agree" className="h-4 w-4" />

            <label className="ml-2 text-sm ">
              Agree to our terms and policy
            </label>

           
          </div> {errorMessage&& <p className="text-red-400">{errorMessage}</p> }
          <input
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-md text-center"
            value="Save&Register"
          />
        </form>

        <p> Already have an account? <Link className='text-blue-500' to="/login">login</Link></p>

        {/* <p className="text-center text-sm mt-4">
          ?
          <a href="/signin" className="text-blue-500">
            Sign in
          </a>
        </p> */}
      </div>

      {/* {errorMessage&& <p className="text-red-400">{errorMessage}</p> } */}

      {successful && <p className="text-emerald-600"> create user successfull</p>}

      {/* Right Side: Animation */}
      <div className="flex-1 hidden lg:flex justify-center items-center mt-[200px]">
        {/* <Lottie
          className="opacity-50"
          animationData=""
        /> */}
      </div>
    </div>
        </div>
            
        </div>
    );
};

export default Register;