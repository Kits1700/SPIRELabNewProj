// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZneMi1ns5qygD_yCCx-f9bsH7Ioi_ehs",
  authDomain: "iiscvaani.firebaseapp.com",
  projectId: "iiscvaani",
  storageBucket: "iiscvaani.appspot.com",
  messagingSenderId: "577067482636",
  appId: "1:577067482636:web:b968343da47d1be389f829",
  measurementId: "G-5R9WFJE2W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);