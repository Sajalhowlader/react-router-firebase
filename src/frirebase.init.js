// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsz34mvVkQOCvxoRZ-QadWHBfEse81UBM",
    authDomain: "react-router-firebase2.firebaseapp.com",
    projectId: "react-router-firebase2",
    storageBucket: "react-router-firebase2.appspot.com",
    messagingSenderId: "395420293810",
    appId: "1:395420293810:web:9a61bfa73de8ea14b287ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;