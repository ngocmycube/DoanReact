import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2pX-0oAgQ3Y2LuVHfP4XvhZiBLrR9MNM",
  authDomain: "chat-app-d54cb.firebaseapp.com",
  projectId: "chat-app-d54cb",
  storageBucket: "chat-app-d54cb.appspot.com",
  messagingSenderId: "346447513734",
  appId: "1:346447513734:web:4aebdabdb8cd8dd9242907",
  measurementId: "G-HSHVG9676D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
