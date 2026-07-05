import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD77dbqNteQxVu_xrsf5OuMjVG2hsx7BTY",
    authDomain: "origen-coffee.firebaseapp.com",
    projectId: "origen-coffee",
    storageBucket: "origen-coffee.firebasestorage.app",
    messagingSenderId: "539474342127",
    appId: "1:539474342127:web:1c39ea3f05c3abff376b1a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };