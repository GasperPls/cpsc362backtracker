// Total Income
let totalIncome = 0;
var newPercArr = [];


function updateTotalIncome() {
  totalIncome = document.getElementById('totalIncome').value;
  //document.getElementById('leftoversIncome').innerHTML = `Total Leftovers Income: $` + totalIncome;
  calculateLeftoversIncome();
}


document.getElementById('totalIncome').oninput = function() {
  updateTotalIncome();
}


function calculateLeftoversIncome() {
  let totalPercent = document.getElementById('percent1').value;
  let totalLeftoversIncome = totalIncome * (1 - totalPercent / 100);


 
  // Loop through additional expense forms
  document.querySelectorAll('.additional-expense').forEach(form => {
    let percent = form.querySelector('.percent').value;


    // Add percent from additional form to total percent
    totalPercent += percent;


    // Calculate and add leftover income from additional form
    totalLeftoversIncome -= (totalIncome * (percent / 100));
  });


  // Update display
  if( totalLeftoversIncome >=0 ){
    document.getElementById('leftoversIncome').innerHTML = `Total Leftovers Income: $${totalLeftoversIncome.toFixed(2)}`;
  } else {
    alert("Percent increases maximum amount.");
  }
 
 
}


// Initially calculate leftovers income
calculateLeftoversIncome();




// Function to add a new expense form
function addExpenseForm() {
  const additionalExpensesDiv = document.getElementById('additionalExpenses');
  const existingForms = document.querySelectorAll('.additional-expense').length;


  // Check if maximum forms limit reached
  if (existingForms < 9) {
    // Create new form
    const newForm = document.createElement('form');
    newForm.classList.add('additional-expense');


    newForm.innerHTML = `
      <label for="newExpenseName">Expense Name:</label>
      <input type="text" class="expenseName" name="expenseName"><br>
      <label for="percent">Percent:</label>
      <input type="number" id="percent" class="percent" name="percent" oninput="updateTotalIncome()"><br>
    `;


    // Append new form to additional expenses div
    additionalExpensesDiv.appendChild(newForm);
    let tempInput = document.getElementsByClassName('percent').value;
    newPercArr.push(tempInput);
  } else {
    alert('Maximum number of categories reached (10).');
  }
}

// Add event listener to the "Add Category" button
document.getElementById('addCategory').addEventListener('click', addExpenseForm);
//document.getElementById('percent1').addEventListener('input', updateTotalIncome);
document.getElementById('updateLeftovers').addEventListener('click', updateTotalIncome);


function deleteForm() {
  const deletedForm = document.getElementsByClassName('additional-expenses');
  deletedForm.remove();
}


document.getElementById('deleteForm').addEventListener('click', deleteForm);

/*
const expenseList = document.querySelector('expenseName');


// Setup Lists
const setupExpenses = (data) => {
  let html = ``;
  data.forEach(doc => {
    const cats = doc.data();
    console.log(cats);
  })
}*/
