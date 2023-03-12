// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsbxkr_FBTEhcuVTK-elQb7wzu6rqcaRs",
  authDomain: "bookstore-3368f.firebaseapp.com",
  projectId: "bookstore-3368f",
  storageBucket: "bookstore-3368f.appspot.com",
  messagingSenderId: "162044806498",
  appId: "1:162044806498:web:330c724018175b9431583b",
  measurementId: "G-R6BR036MB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);