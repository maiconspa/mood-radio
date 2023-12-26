// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyCJQ0cyrljt6NEONEvsC-QBDwd7CJvAl5A",
  authDomain: "loungefy.firebaseapp.com",
  projectId: "loungefy",
  storageBucket: "loungefy.appspot.com",
  messagingSenderId: "660930966158",
  appId: "1:660930966158:web:e1d4fbc15bf26815254fdf",
  measurementId: "G-N1JSCXDCPL"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);