// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2dOv_3dlDmxhfkoIHyUF30hf6fWi_Udg",
  authDomain: "honeycomb-6e5d9.firebaseapp.com",
  projectId: "honeycomb-6e5d9",
  storageBucket: "honeycomb-6e5d9.appspot.com",
  messagingSenderId: "47281153862",
  appId: "1:47281153862:web:ae5c5927ecab3af42d2747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app