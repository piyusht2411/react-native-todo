import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxUlVmHQsszhVVtq4xh85UNMNKaQ2Q98c",
    authDomain: "piyusht2411-fa360.firebaseapp.com",
    projectId: "piyusht2411-fa360",
    storageBucket: "piyusht2411-fa360.appspot.com",
    messagingSenderId: "1056885307875",
    appId: "1:1056885307875:web:1034f5094710d8999bc8d6",
    measurementId: "G-7HVC6K0R5M"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

