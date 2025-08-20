// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Ge5BojUJkC4_kvSkj9a4johP4tOd7RA",
  authDomain: "great-unknown.firebaseapp.com",
  projectId: "great-unknown",
  storageBucket: "great-unknown.firebasestorage.app",
  messagingSenderId: "199011519338",
  appId: "1:199011519338:web:86c235a1af6ac6e0b8f313",
  measurementId: "G-JDQ21T5BBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);