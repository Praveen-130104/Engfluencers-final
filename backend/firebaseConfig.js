import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDKft09fNx-z66mPGcWyopfZiqpThhNQqI",
    authDomain: "sigmax-58424.firebaseapp.com",
    projectId: "sigmax-58424",
    storageBucket: "sigmax-58424.appspot.com",
    messagingSenderId: "654541925783",
    appId: "1:654541925783:web:2f8386bf7376658318a8d2",
    measurementId: "G-CLJB0XH3HH"
  };


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

export { storage, app ,auth };
