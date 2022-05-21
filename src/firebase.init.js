// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQXJL6ECwBvbtWm8nd07Xu8HEB3D3kleA",
  authDomain: "manufacturer-website-618e3.firebaseapp.com",
  projectId: "manufacturer-website-618e3",
  storageBucket: "manufacturer-website-618e3.appspot.com",
  messagingSenderId: "261455454224",
  appId: "1:261455454224:web:1ceb5f52ed018e7035aa95"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;