// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB15nc7WQSyXc7NurHiPH3LouMkU7Hz3RA",
  authDomain: "fengshui-koi-consulting-system.firebaseapp.com",
  projectId: "fengshui-koi-consulting-system",
  storageBucket: "fengshui-koi-consulting-system.appspot.com",
  messagingSenderId: "685143935412",
  appId: "1:685143935412:web:100e6d6b8d6e1dc2f30ae1",
  measurementId: "G-ED307ZZKZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };