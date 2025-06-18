// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjt0cAqJR4DRalL73G8uGf8ncgLT00PT0",
  authDomain: "assignment-11-41e71.firebaseapp.com",
  projectId: "assignment-11-41e71",
  storageBucket: "assignment-11-41e71.firebasestorage.app",
  messagingSenderId: "1063672553767",
  appId: "1:1063672553767:web:48311694e3ee4dc80c4902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);