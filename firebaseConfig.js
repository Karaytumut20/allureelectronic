// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYOOa5J3U6k_kVM721xF7LCoxWY6EsE7Q",
  authDomain: "electronic-b4925.firebaseapp.com",
  projectId: "electronic-b4925",
  storageBucket: "electronic-b4925.appspot.com",
  messagingSenderId: "904593171488",
  appId: "1:904593171488:web:3a8f5967cad2bd7bbac845",
  measurementId: "G-BSXFE5FHJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

