// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqJ42uFzZQNLidZuewTQH-KSFZ188yOwc",
  authDomain: "grader-23b4f.firebaseapp.com",
  databaseURL: "gs://grader-23b4f.appspot.com",
  projectId: "grader-23b4f",
  storageBucket: "grader-23b4f.appspot.com",
  messagingSenderId: "555525871700",
  appId: "1:555525871700:web:b8560cfcbb748cf118b5c1",
  measurementId: "G-M5TP8H9RTZ"
};

// Initialize Firebase
firebase.initializeApp({firebaseConfig});

// const storage = firebase.storage();

const storage = firebase.app().storage('gs://grader-23b4f.appspot.com');
        
// const storageRef = await storage.ref();

export { storage, firebase as default };