// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// The web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UNf6p6J-3gIajkcJVzt1Ro8QyRMl5rg",
  authDomain: "trial2-7c27c.firebaseapp.com",
  databaseURL: "https://trial2-7c27c-default-rtdb.firebaseio.com",
  projectId: "trial2-7c27c",
  storageBucket: "trial2-7c27c.appspot.com",
  messagingSenderId: "1078259781729",
  appId: "1:1078259781729:web:451e32c9d2aa9ac28bda20",
  databaseURL: "https://backtracker-4018e.web.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
/*
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

*/
function validateLogin(e) {
  e.preventDefault();

  // Get user inputs
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if email and password match
  if (email == "test@something.com" && password == "password123!") {
      location.href = "https://www.google.com/"
  } else {
      alert("Access denied. Invalid email or password.");
  }
}

document.querySelector('#myForm').addEventListener('submit', validateLogin);
/*
var current = 1;
function addCat() {
  // Create a new form
  var newForm = document.createElement("calculator");
  newForm.id = "calculatorForm";

  // Add elements to the new form
  var expenseLabel = document.createElement("label");
  expenseLabel.setAttribute("for", "expenseName");
  expenseLabel.textContent = "Expense Name:";
  newForm.appendChild(expenseLabel);

  var expenseInput = document.createElement("input");
  expenseInput.type = "text";
  expenseInput.id = "expenseName";
  expenseInput.name = "expenseName";
  newForm.appendChild(expenseInput);

  var percentageLabel = document.createElement("label");
  percentageLabel.setAttribute("for", "expensePercentage");
  percentageLabel.textContent = "Expense Percent (1-100):";
  newForm.appendChild(percentageLabel);

  var percentageInput = document.createElement("input");
  percentageInput.type = "number";
  percentageInput.id = "expensePercentage";
  percentageInput.name = "expensePercentage";
  newForm.appendChild(percentageInput);

  if (current <= 10) {
    // Append the new form to the container
    document.getElementById("calculator").appendChild(newForm);
    current++;
  } else {
    alert("Categories limit reached! Cannot proceed.");
  }  
}

document.querySelector('#calculatorForm').addEventListener('submit', addCat);
*/


const regForm = document.querySelector('#regForm')

regForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = regForm['regEmail'].value;
  const password = regForm['regPassword'].value;

  // Create user!
  createUserWithEmailAndPassword(auth, email, password).then(cred => {
    console.log(cred);
  });
});