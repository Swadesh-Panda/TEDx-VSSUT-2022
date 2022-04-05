// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
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

const loading = `<div class="spinner-border text-white" role="status">
            <span class="sr-only">Loading...</span>
          </div>`
const notLoading = `Submit Message`

const form = document.querySelector('#contact-form')
const formbtn = document.querySelector('#contact-form-btn')

async function submitMessage(doc) {
    const docRef = await addDoc(collection(db, "messages"), doc);
    console.log("Document written with ID: ", docRef.id);
    console.log(docRef)
    return docRef
}


form.addEventListener('submit', e => {
    e.preventDefault()
    formbtn.innerHTML = loading
    console.log('submit')
    const doc = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        message: form.message.value
    }
    console.log(doc)
    submitMessage(doc)
        .then(res => {
            alert('Message sent successfully!')
            console.log(res)
        })
        .catch(err => {
            alert('Error:', err)
        })
    formbtn.innerHTML = notLoading
})