

const firebaseConfig = {
    apiKey: "AIzaSyBUjqJ4fy-CCxZA0gDotJ2Qj2qoXc0mPdM",
        authDomain: "personal-website-62f4e.firebaseapp.com",
        projectId: "personal-website-62f4e",
        storageBucket: "personal-website-62f4e.appspot.com",
        messagingSenderId: "638607433773",
        appId: "1:638607433773:web:a912f47e961595387818a4",
        measurementId: "G-0K3RYQHHH9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email.value, password.value).then(res => {
        location.href = 'dashboard.html'
    }).catch(err => {
        alert(err.message)
    })
})
// console.log(loginBtn)

