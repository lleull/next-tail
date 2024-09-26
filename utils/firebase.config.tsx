
// import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyB73C3deb-xwKQT3Iuva6hyvDxCmzayXuY",
    authDomain: "firstapp-57210.firebaseapp.com",
    projectId: "firstapp-57210",
    storageBucket: "firstapp-57210.appspot.com",
    messagingSenderId: "963738841306",
    appId: "1:963738841306:web:a63202a4def9cc65c135e3",
    measurementId: "G-7H1XYZ5HFW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)