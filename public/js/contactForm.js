// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKzbGMB2bYAuiPKNBqxYC17bazgknJNvA",
    authDomain: "tedxvssut-dee7f.firebaseapp.com",
    projectId: "tedxvssut-dee7f",
    storageBucket: "tedxvssut-dee7f.appspot.com",
    messagingSenderId: "382729734652",
    appId: "1:382729734652:web:85003ad2e4c3ffc7268a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(db)

const form = document.querySelector('#contact-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('submit')
})