// Import the functions you need from the SDKs you need
import { deleteApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD10uYEPrC4uByn9gs3mtIuOn7vRDoVkfw",
  authDomain: "studyhabit-rotinas-e-tarefas.firebaseapp.com",
  projectId: "studyhabit-rotinas-e-tarefas",
  storageBucket: "studyhabit-rotinas-e-tarefas.appspot.com",
  messagingSenderId: "296808499742",
  appId: "1:296808499742:web:3eaeb7b7a401c2ee3abc0f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;