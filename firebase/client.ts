// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUIzvU7fpL6JfR6WTt_gGfvFVDFzXIQB0",
  authDomain: "prepwise-da243.firebaseapp.com",
  projectId: "prepwise-da243",
  storageBucket: "prepwise-da243.firebasestorage.app",
  messagingSenderId: "525695051752",
  appId: "1:525695051752:web:372ea3d292d2e06e33265d",
  measurementId: "G-MZ55LHE202",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
