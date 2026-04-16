import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZZIcArLELSAb_x2lAxKWlXPGkDHGyamc",
  authDomain: "app-tanahora.firebaseapp.com",
  projectId: "app-tanahora",
  storageBucket: "app-tanahora.firebasestorage.app",
  messagingSenderId: "1094063141262",
  appId: "1:1094063141262:web:5201815b181a87dc1bb4df",
  measurementId: "G-SSBMBW7WKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);