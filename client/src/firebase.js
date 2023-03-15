import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_I_RqaHw3JZoEqXMmuxANoPY8qdZFdo4",
  authDomain: "video-5642a.firebaseapp.com",
  projectId: "video-5642a",
  storageBucket: "video-5642a.appspot.com",
  messagingSenderId: "868522097410",
  appId: "1:868522097410:web:4813feb6e7f81cf8c7a01b",
  measurementId: "G-C50HDK0JF6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
