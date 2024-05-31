// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGZtWMqqG9CPDtbpKgf1giEIIXDCbRito",
  authDomain: "quizz-320c0.firebaseapp.com",
  projectId: "quizz-320c0",
  storageBucket: "quizz-320c0.appspot.com",
  messagingSenderId: "925635097878",
  appId: "1:925635097878:web:7edf2969f6eb9c4ac1cc37",
  measurementId: "G-MEB7R4MTLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);