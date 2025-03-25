import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPcodPxe7SukgwhYeoG-cQyGUDjEYsqM",
  authDomain: "login-fa8ca.firebaseapp.com",
  projectId: "login-fa8ca",
  storageBucket: "login-fa8ca.firebasestorage.app",
  messagingSenderId: "356385155219",
  appId: "1:356385155219:web:181ad0fd614452d2dec566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword,signInWithEmailAndPassword, doc, setDoc };