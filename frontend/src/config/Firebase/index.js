// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvaDX_tL6KGq2t9xCQUT9a-LbyDuqFCgo",
  authDomain: "to-9d4fe.firebaseapp.com",
  projectId: "to-9d4fe",
  storageBucket: "to-9d4fe.appspot.com",
  messagingSenderId: "466247560053",
  appId: "1:466247560053:web:e18e38a3e35794a794413c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export default auth;
