// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-native-todo-app-cf3fc.firebaseapp.com",
  projectId: "react-native-todo-app-cf3fc",
  storageBucket: "react-native-todo-app-cf3fc.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
