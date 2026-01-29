// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW8mo2Ips2qIGhf7qsHgL6u693zI3c7hc",
  authDomain: "singai-thirumurai-web.firebaseapp.com",
  projectId: "singai-thirumurai-web",
  storageBucket: "singai-thirumurai-web.firebasestorage.app",
  messagingSenderId: "244560809994",
  appId: "1:244560809994:web:5693af540d407abe5ecff3",
  measurementId: "G-KMF6B471VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);