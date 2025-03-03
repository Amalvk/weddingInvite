// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDh_gMEd4lnTwHw8nKMYnNO2EXCBy6fuhM",
    authDomain: "weddingstore-41bc7.firebaseapp.com",
    projectId: "weddingstore-41bc7",
    storageBucket: "weddingstore-41bc7.firebasestorage.app",
    messagingSenderId: "842912998258",
    appId: "1:842912998258:web:9ed42d9e6cf20adc08f3eb",
    measurementId: "G-T8K030K2LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getFirestore(app);

export { database };
