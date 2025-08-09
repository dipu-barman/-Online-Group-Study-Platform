import React, { useEffect, useState } from 'react';
import Authcontext from './Authcontext';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);


   //   // creat user
 const createUser = (email, password) => {
   setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);  };

     // sign in old user
 const signInoldUser = (email, password) => {
   setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
   };

   //   // Google Sign In
  
  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth,GoogleProvider ); // ✅ Use the instance you created
  };


  //   // log out
 const signOutuser = () => {
    setLoading(true);
    return signOut(auth);
  };


   // updateProfile.......

  const updateuser = (updatedata)=>{
    return updateProfile(auth.currentUser,updatedata)
  }

  // TO CLEAR MEMORY AFTER LOGOUT
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser);
     
       setLoading(false);

      //  for tokken ....

       if(currentUser?.email){
        const userData={email:currentUser.email}
        axios.post('http://localhost:3000/jwt',userData,{
          withCredentials:true
        })
        .then(res=>{
          console.log(res.data)
        })
        .catch(error =>console.log(error)
        )
       }
    });
    return () => {
      unscribe();
    };
  }, []);



  //   // value for auth AuthContext
  const authInfo = {
       user,
       setUser,
  loading,
    createUser,
   signInoldUser,
   googleSingIn,
  signOutuser,
  updateuser,
  };


  // signin jwt token 
  
    return (
        <div>
             <Authcontext value={authInfo}>
        {children}
        </Authcontext>
        </div>
    );
};

export default AuthProvider;