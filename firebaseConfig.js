// Firebase SDK'ları
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase yapılandırma ayarları
const firebaseConfig = {
  apiKey: "AIzaSyDk5oJe3s4VI5FuaxzpDrpXGrB0Sqoyuqs",
  authDomain: "allureelectronic-4f650.firebaseapp.com",
  projectId: "allureelectronic-4f650",
  storageBucket: "allureelectronic-4f650.firebasestorage.app",
  messagingSenderId: "421386373945",
  appId: "1:421386373945:web:ec5d1bd87d650d29fdf6e8",
  measurementId: "G-PKNY3VN43B",
};

// Firebase uygulamasını başlatma
const app = initializeApp(firebaseConfig);

// Firebase hizmetlerine erişim sağlama
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
