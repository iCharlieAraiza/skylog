// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibZ4eqmsdHlD_AIKsCA-uny6buPhJkL0",
  authDomain: "skylog-b293c.firebaseapp.com",
  projectId: "skylog-b293c",
  storageBucket: "skylog-b293c.appspot.com",
  messagingSenderId: "121140492775",
  appId: "1:121140492775:web:afb96b8c4e4f1919662542"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);