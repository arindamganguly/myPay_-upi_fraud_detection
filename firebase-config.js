// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyBac3YoqKFOS-gdsRylLdOfcqjLjKE5nN0", 
    authDomain: "mypay-429c8.firebaseapp.com", 
    projectId: "mypay-429c8", 
    storageBucket: "mypay-429c8.firebasestorage.app", 
    messagingSenderId: "1056662437664", 
    appId: "1:1056662437664:web:20bff46ea25a660186e145" 
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);