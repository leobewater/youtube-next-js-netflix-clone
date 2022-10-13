// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB27SWzAGXWA_W7s3u0_3Ysfgjl6fx_Ezw",
  authDomain: "nextjs-netflix-clone-3eeb3.firebaseapp.com",
  projectId: "nextjs-netflix-clone-3eeb3",
  storageBucket: "nextjs-netflix-clone-3eeb3.appspot.com",
  messagingSenderId: "419466626043",
  appId: "1:419466626043:web:8e0d5e5373f54e57fcc15e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage }