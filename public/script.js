// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"


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
const db = getFirestore();

// THIS PRINTS ALL DOC.IDS IN THE COLLECTION
const collRef = collection(db, "categories");
collection(db, "categories")


/*
const qSnapshot = await getDocs(collRef);
qSnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});*/
/*
await setDoc(doc(db, 'categories'), {
  expense: document.getElementsByClassName('expenseName').value,
  percent: document.getElementsByClassName('percent').value
});
*/
/*
const categoriesRef = collection(db, 'categories');
const docSnap = await getDocs(categoriesRef);


docSnap.forEach((doc) => {
  console.log(doc.data());
});
*/
/*
if(docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}*/

// Status tracker of user
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user logged in: ", user);
  } else {
    console.log("user logged out");
  }
});

// Registration Form
const register = document.querySelector('#regForm');
if(register) {
  register.addEventListener('submit', (e) => {
    e.preventDefault();


    const email = regForm['regEmail'].value;
    const password = regForm['regPassword'].value;
    const repass = regForm['regRepassword'].value;
   
    if(repass != password) {
      alert("Please make sure passwords match");
    } else {
      // Create user!
      createUserWithEmailAndPassword(auth, email, password).then(cred => {
        regForm.reset();
        location.href = "/home.html"
    });}
  });
}

// Login Form
const loginForm = document.querySelector('#myForm');
if(loginForm) {
  // Add an event listener for when the login form has been submitted
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();


    // Get user inputs
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;


    //
    signInWithEmailAndPassword(auth, email, password).then(cred => {
      //Reset Form and then send the user to Home
      loginForm.reset();
      location.href = "/home.html";
    })
    .catch((error) => {
      loginForm.reset();
      alert("Incorrect username or password.");
    });
  });
}

// Logging out
const logout = document.querySelector("#logout");
if(logout) {
  logout.addEventListener('click', (e) => {
    e.preventDefault();
 
    auth.signOut().then(() => {
      location.href = "/index.html";
    });
  });
}

// Function that alerts user to go to 'Contact' to send an inquiry about changing their password
function alertUser() {
  alert("Go to the contact us page and send us an inquiry about this!");
}
document.getElementById('resetPW').addEventListener('click', alertUser);


/*
var current = 1;          // Counter for number of active categories!
//Create new Categories
const calcForm = document.querySelector('#calculatorForm')
if(calcForm) {
 
  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();


    // Create a new form
    var newForm = document.createElement("form");
    newForm.classList = "newCalculatorForm";


    // Add elements to the new form
    var expenseLabel = document.createElement("label");
    expenseLabel.textContent = "Expense Name:";
    newForm.appendChild(expenseLabel);;


    var expenseInput = document.createElement("input");
    expenseInput.type = "text";
    expenseInput.id = "expenseName" + current;
    newForm.appendChild(expenseInput);


    var percentageLabel = document.createElement("label");
    percentageLabel.textContent = "Expense Percent (1-100):";
    newForm.appendChild(percentageLabel);


    var percentageInput = document.createElement("input");
    percentageInput.min = 0;
    percentageInput.max = 100;
    percentageInput.type = "number";
    percentageInput.id = "newPercent" + current;
    newForm.appendChild(percentageInput);


    //Breakline
    newForm.appendChild(document.createElement("br"));
    newForm.appendChild(document.createElement("br"));
   
    // Limit to a total of 10 categories being allowed
    if (current <= 10) {
      document.getElementById("calculator").appendChild(newForm);
      current++;
    }
  });


  // Updates leftovers based on the elements
  document.getElementById("income").addEventListener("input", updateLeftovers);
 
  if(current == 1) {
    document.getElementById("expensePercentage").addEventListener("input", updateLeftovers);
  } else {
    console.log(current);
    document.getElementById(percentageInput.id).addEventListener("input", updateLeftovers);
    console.log(percentageInput.id);
  }
};


// Function that calcualtes the leftovers
function calculateLeftovers() {
  const income = document.getElementById('income').value;
  var percent = document.getElementById('expensePercentage').value;
  var leftovers = income * (1 - percent / 100);


  document.querySelectorAll('.newCalculatorForm').forEach(form => {
    const newPercent = document.getElementById(percentageInput.id).value;


    percent += newPercent;


    leftovers += income * (1 - newPercent / 100);
  });


  document.getElementById("totalExpenses").innerText = "Leftover Income: $" + leftovers.toFixed(2);
 
};


calculateLeftovers();
/*
/*
// Function that displays the updated leftovers
function updateLeftovers() {
  //current = 2;
  var income = document.getElementById("income").value;
  var percent = document.getElementById("expensePercentage").value;
  var leftovers = income * (1 - percent / 100);
 
  document.querySelectorAll('.newCalculatorForm').forEach(form => {
    const newPercent = form.querySelector(percentageInput.id).value;


    percent += newPercent;


    leftovers += income * (1 - newPercent / 100);
    current++;
  });


  if(current = 1) {
    leftovers = calculateLeftovers(current, income, percent);
    console.log("I reach when current == 1!");
    current++;
  } else {
    //document.querySelector(newForm.id).addEventListener('submit', (e) => {
      var extraCats = document.getElementById(percentageInput.id);
      leftovers = calculateLeftovers(current, income, extraCats);
    //})
    current++;
  }
  document.getElementById("totalExpenses").innerText = "Leftover Income: $" + leftovers.toFixed(2);
};*/
/*
//Create new Categories
const calcForm = document.querySelector('#calculatorForm')
//var current = 0;          // Counter for number of active categories!


if(calcForm) {
  //var current = 1;          // Counter for number of active categories!
  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (current < 10) {
      const addExpDiv = document.getElementById('addExp');
      current++;
      // Create a new form
      var newForm = document.createElement("form");
      newForm.classList.add("newCalculatorForm");


      newForm.innerHTML = `
        <label for="expenseName">Expense Name:</label>
        <input type="text" class="expenseName" name="expenseName"><br>
        <label for="percent">Expense Percent (1-100):</label>
        <input type="number" class="percent" name="percent"><br><br>
      `;


      addExpDiv.appendChild(newForm);


      newForm.querySelector('input').forEach(input => {
        input.addEventListener('input', calculateLeftovers)
      })




      /*
      // Add elements to the new form
      var expenseLabel = document.createElement("label");
      expenseLabel.textContent = "Expense Name:";
      newForm.appendChild(expenseLabel);;


      var expenseInput = document.createElement("input");
      expenseInput.type = "text";
      expenseInput.classList = "expenseName" + current;
      newForm.appendChild(expenseInput);


      var percentageLabel = document.createElement("label");
      percentageLabel.textContent = "Expense Percent (1-100):";
      newForm.appendChild(percentageLabel);


      var percentageInput = document.createElement("input");
      percentageInput.min = 0;
      percentageInput.max = 100;
      percentageInput.type = "number";
      percentageInput.id = "newPercent" + current;
      newForm.appendChild(percentageInput);


      //Breakline
      newForm.appendChild(document.createElement("br"));
      newForm.appendChild(document.createElement("br"));
     
      // Limit to a total of 10 categories being allowed
    }
  });
};


*/
/*
// Function that calcualtes the leftovers
function calculateLeftovers() {
  const totalIncome = document.getElementById('income').value;
  var totalPercent = document.getElementById('.percent').value;
  var leftovers = totalIncome * (1 - totalPercent / 100);


  document.querySelector('.newCalculatorForm').forEach(form => {
    const percent = form.querySelector('.percent').value;
 
    totalPercent += percent;
    leftovers += totalIncome * (1 - percent / 100);


  });


  document.getElementById('totalExpenses').innerHTML = 'Total Leftovers Income: ${totalLeftoversIncome.toFixed(2)}';
};


calculateLeftovers();
*/
/*
  var taken = income * (percent / 100);
 
  if(current != 1) {
    taken += (newPerc / 100);
    //console.log("I reach a new current Cat!");
  }
  var leftoverIncome = income - taken;
  return leftoverIncome;
  */
/*


// Function that displays the updated leftovers
function updateLeftovers() {
  //current = 2;
  var income = document.getElementById("income").value;
  var percent = document.getElementById("expensePercentage").value;
  var leftovers = 0;
  if(current = 1) {
    leftovers = calculateLeftovers(current, income, percent);
    console.log("I reach when current == 1!");
    current++;
  } else {
    //document.querySelector(newForm.id).addEventListener('submit', (e) => {
      //percent += document.getElementById("newPercent" + current).value;
      var extraCats = document.getElementById(percentageInput.id);
      leftovers = calculateLeftovers(current, income, extraCats);
      //console.log("I reach a new current Cat!"); --> Doesn't reach here
    //})
    current++;
  }
  document.getElementById("totalExpenses").innerText = "Leftover Income: $" + leftovers.toFixed(2);
};
*/
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
*/





