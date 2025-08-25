// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUH9sPAvIhXb9pLtMU86lWbKGK5fY3omQ",
  authDomain: "netflixgpt-new-24672.firebaseapp.com",
  projectId: "netflixgpt-new-24672",
  storageBucket: "netflixgpt-new-24672.firebasestorage.app",
  messagingSenderId: "537022165517",
  appId: "1:537022165517:web:8754c8e06bec544ba05b44",
  measurementId: "G-69X8Q867QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();

export default app;