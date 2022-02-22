import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk7GZZIUNH_7moXQqW9rI4pZbm3p4qBBQ",
  authDomain: "pensieve-71430.firebaseapp.com",
  projectId: "pensieve-71430",
  storageBucket: "pensieve-71430.appspot.com",
  messagingSenderId: "40819751381",
  appId: "1:40819751381:web:c71c35f03ff281bb6ca55c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
