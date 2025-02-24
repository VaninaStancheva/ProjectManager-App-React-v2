// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhmcZKfpfE36Vd_k-gvNSXSl8UsGGQOEU",
    authDomain: "pm-app-react.firebaseapp.com",
    projectId: "pm-app-react",
    storageBucket: "pm-app-react.firebasestorage.app",
    messagingSenderId: "230104638132",
    appId: "1:230104638132:web:e362647ae48e362d346de1",
    measurementId: "G-VKBC0SKE73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log(getApps().length > 0 ? "Firebase is connected!" : "Firebase is NOT connected.");
console.log("Firestore Instance:", db);

