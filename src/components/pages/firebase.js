// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMXMTYQdg0qHCHF7r6LsbIqnM9kssBJIk",
  authDomain: "iiscvaani-1230b.firebaseapp.com",
  projectId: "iiscvaani-1230b",
  storageBucket: "iiscvaani-1230b.appspot.com",
  messagingSenderId: "126060230149",
  appId: "1:126060230149:web:8f4f13cda71f2851db0e6c",
  measurementId: "G-3459DN8X98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);