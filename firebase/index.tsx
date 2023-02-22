import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWB_mYYXhQ0mY43Ikp3GwT2lrfxL9fyP0",
  authDomain: "todo-app-next8.firebaseapp.com",
  projectId: "todo-app-next8",
  storageBucket: "todo-app-next8.appspot.com",
  messagingSenderId: "382648930972",
  appId: "1:382648930972:web:a1482918fbf285c2bcd359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};