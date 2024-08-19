// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from "firebase/firebasestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOBUwHHMcX2-aD88kbhp5Ggr9wgygAYwI",
  authDomain: "ai-flashcards-saas-app.firebaseapp.com",
  projectId: "ai-flashcards-saas-app",
  storageBucket: "ai-flashcards-saas-app.appspot.com",
  messagingSenderId: "287805217320",
  appId: "1:287805217320:web:55881fae50ad0da6d3331d",
  measurementId: "G-ZNPNNVEKDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app);

export {db};