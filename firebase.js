// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCioCTyXjRUAETDWjrxLfvaqOMRtUnBc1A",
  authDomain: "mypay-f80a1.firebaseapp.com",
  projectId: "mypay-f80a1",
  storageBucket: "mypay-f80a1.appspot.com",
  messagingSenderId: "808150369436",
  appId: "1:808150369436:web:47192f0fac47f79f219959"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Shared services
export const auth = getAuth(app);
export const db = getFirestore(app);
