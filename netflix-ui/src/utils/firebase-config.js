
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGrvaYg0K9lkBaCJTqD_o_XyWu1Etj_RM",
  authDomain: "react-netflix-clone-b5555.firebaseapp.com",
  projectId: "react-netflix-clone-b5555",
  storageBucket: "react-netflix-clone-b5555.appspot.com",
  messagingSenderId: "1022235352331",
  appId: "1:1022235352331:web:ef19fb0e6401d860dd160e",
  measurementId: "G-F2MFB3Q11C"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
