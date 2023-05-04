// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQzM48TyDoA4B8vN3tHUI25CZhc_b-YA",
  authDomain: "cooking-projext.firebaseapp.com",
  projectId: "cooking-projext",
  storageBucket: "cooking-projext.appspot.com",
  messagingSenderId: "259333830887",
  appId: "1:259333830887:web:723a1e7e2ee20ccecc0a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;