// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvUIdEsIdQoMOMaSB-uIRtei1cX_oHfQc",
  authDomain: "the-dragon-news-c3740.firebaseapp.com",
  projectId: "the-dragon-news-c3740",
  storageBucket: "the-dragon-news-c3740.appspot.com",
  messagingSenderId: "527072769849",
  appId: "1:527072769849:web:a7fa6c7ecf41856d3f5ae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app