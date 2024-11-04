// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXrz7TKOzrcEcjiS9Ol82ybeOLQBmKG0o",
  authDomain: "notion-clone-f2b44.firebaseapp.com",
  projectId: "notion-clone-f2b44",
  storageBucket: "notion-clone-f2b44.firebasestorage.app",
  messagingSenderId: "471780598163",
  appId: "1:471780598163:web:3ec2d1c00e6187455f4866"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };