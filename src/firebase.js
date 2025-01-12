import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApqgLU8KdIjh8yYd4Y2UVtYkv7S7vvCcY",
  authDomain: "petshop-b6610.firebaseapp.com",
  projectId: "petshop-b6610",
  storageBucket: "petshop-b6610.firebasestorage.app",
  messagingSenderId: "645956569212",
  appId: "1:645956569212:web:daced83ea55df4950e21f9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
