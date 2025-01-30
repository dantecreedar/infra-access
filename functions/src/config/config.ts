// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKuTN-cvOUfu47KxhYGNDEp9d4T_sRKAo",
  authDomain: "fb-api-79e8c.firebaseapp.com",
  projectId: "fb-api-79e8c",
  storageBucket: "fb-api-79e8c.firebasestorage.app",
  messagingSenderId: "71655946350",
  appId: "1:71655946350:web:d597ed2914e3fb30f74e7f",
  measurementId: "G-72EJDL3QHS",
};

// Initialize Firebase
const admin = initializeApp(firebaseConfig);

export const db = getFirestore(admin);

export const auth = getAuth(admin);

export default {
  db,
  auth,
  admin,
};
