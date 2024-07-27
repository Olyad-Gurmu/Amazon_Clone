// Import the functions you need from the SDKs you need
// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
             //
// const firebaseConfig = {
//   apiKey: "AIzaSyD49IOvpyTC-WOFvz_Tx9QVHJZCvYq8Do0",
//   authDomain: "clone-627ee.firebaseapp.com",
//   projectId: "clone-627ee",
//   storageBucket: "clone-627ee.appspot.com",
//   messagingSenderId: "1042340684229",
//   appId: "1:1042340684229:web:db2a2a17f8ae42b74febac",
             //

  const firebaseConfig = {
    apiKey: "AIzaSyBRVpBRXrJ5GkeoqU6-kfW5CtK6fmisoZI",
    authDomain: "clone-bf8b1.firebaseapp.com",
    projectId: "clone-bf8b1",
    storageBucket: "clone-bf8b1.appspot.com",
    messagingSenderId: "316285994710",
    appId: "1:316285994710:web:15c9a7121cf8b084d76b77"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
