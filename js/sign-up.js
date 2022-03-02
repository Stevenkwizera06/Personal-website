// const firebaseConfig = {
//     apiKey: "AIzaSyBUjqJ4fy-CCxZA0gDotJ2Qj2qoXc0mPdM",
//     authDomain: "personal-website-62f4e.firebaseapp.com",
//     projectId: "personal-website-62f4e",
//     storageBucket: "personal-website-62f4e.appspot.com",
//     messagingSenderId: "638607433773",
//     appId: "1:638607433773:web:a912f47e961595387818a4",
//     measurementId: "G-0K3RYQHHH9"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true});
// // const auth = getAuth()


// const articleLists = document.querySelector('#articleLists');
// const form = document.querySelector('.sign-form')



// console.log(form);
// // saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('sign up').signup({
//         email:form.email.value,
//         password:form.password.value,
//         repeatpassword:form.repeatpassword.value

//     })
//     console.log(form.email.value);
// })




 
   const firebaseConfig = {
    apiKey: "AIzaSyBUjqJ4fy-CCxZA0gDotJ2Qj2qoXc0mPdM",
    authDomain: "personal-website-62f4e.firebaseapp.com",
    projectId: "personal-website-62f4e",
    storageBucket: "personal-website-62f4e.appspot.com",
    messagingSenderId: "638607433773",
    appId: "1:638607433773:web:a912f47e961595387818a4",
    measurementId: "G-0K3RYQHHH9"
   }

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();

signUp.addEventListener('click',(e) => {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
          email: email
      })

      alert('user created!');
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    
    });

});

// const firebaseConfig = {
//       apiKey: "AIzaSyBUjqJ4fy-CCxZA0gDotJ2Qj2qoXc0mPdM",
//       authDomain: "personal-website-62f4e.firebaseapp.com",
//       projectId: "personal-website-62f4e",
//       storageBucket: "personal-website-62f4e.appspot.com",
//       messagingSenderId: "638607433773",
//       appId: "1:638607433773:web:a912f47e961595387818a4",
//       measurementId: "G-0K3RYQHHH9"
//      }

//      // initialize firebase
//      firebase.initializeApp(firebaseConfig);
//      var firebaseRef = firebase.database().ref()('emails');
//      document.querySelector('#register').addEventListener('click', ()=>{
//        const email = document.getElementById('email').value;
//        firebaseRef.push(email);
//      })