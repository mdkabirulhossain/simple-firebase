// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9FYmJRZARisfG-J-jX3rArG0WuoIgp-Q",
  authDomain: "simple-firebase-2e6b6.firebaseapp.com",
  projectId: "simple-firebase-2e6b6",
  storageBucket: "simple-firebase-2e6b6.appspot.com",
  messagingSenderId: "157943044073",
  appId: "1:157943044073:web:1da667a815413a7f395d78",
  measurementId: "G-YWBR93E64C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;