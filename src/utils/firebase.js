import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJlu-75p6e1Yn1zb3i2xTnqHrO4-kjc5c",
  authDomain: "netflix-gpt-d7e8f.firebaseapp.com",
  projectId: "netflix-gpt-d7e8f",
  storageBucket: "netflix-gpt-d7e8f.appspot.com",
  messagingSenderId: "563141159647",
  appId: "1:563141159647:web:793ccfa51962421c9f576a",
  measurementId: "G-DX7HD4JS3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()