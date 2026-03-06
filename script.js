let totalIncome = 0;
let rentExpense = 0;
let housingExpenses = 0;
let utilitiesExpense = 0;
let savingTarget = 0;
let groceriesExpense = 0;
let transportExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;
let totalExpenses = 0;
let actualSavingsPossible = 0;
//check the added salary with JS


 function addSalary() {
    let salaryInput = document.getElementById("salaryInput");
    let salary = Number(salaryInput.value);
    //checking value enter in the input box
    console.log(salary);
    console.log(typeof salary);


   //can not be in 0 or - numbers
    if(salary >0){
        console.log("Good");
        totalIncome = salary;
        updateSummary();
    }
 }
 function addRent(){
    let rentInput = document.getElementById("rentInput");
    let amount = Number(rentInput.value);
    console.log(amount);
    if (amount > 0) {
        rentExpense = amount;
        updateSummary();
    }
 }


 function addUtilities(){
    let input = document.getElementById("utilitiesInput");
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0) {
        utilitiesExpense = amount;
        updateSummary();
 }
 }
 function calculateHousingExpenses(){
    let = result = rentExpense + utilitiesExpense;
    console.log(result);
    return result;
 }
 function setSavingGoal(){
    let savingInput = document.getElementById("savingInput");
    let amount = Number(savingInput.value);
    if (amount > 0){
        savingTarget = amount;
        updateSummary();
    }
 }
 function addGroceries(){
    let input = document.getElementById("groceriesInput")
    let amount = Number(input.value);
    if (amount > 0){
        groceriesExpense = amount;
        updateSummary();
    }
 }
 function addTransport(){
    let input = document.getElementById("transportInput")
    let amount = Number(input.value);
    if (amount > 0){
        transportExpense = amount;
        updateSummary();
    }
 }
 function calculateLivingExpenses(){
    return groceriesExpense + transportExpense;
   
 }
 function addEntertainment(){
    let input = document.getElementById("entertainmentInput")
    let amount = Number(input.value);
    if (amount > 0){
        entertainmentExpense = amount;
        updateSummary();
    }
 }
 function addMisc(){
    let input = document.getElementById("miscInput")
    let amount = Number(input.value);
    if (amount > 0){
        miscExpense = amount;
        updateSummary();
    }
 }
 function calculateOtherExpenses(){
    return entertainmentExpense + miscExpense;

 }
 function calculateTotalExpenses(){
    totalExpenses = calculateHousingExpenses() +
    calculateLivingExpenses() + 
    calculateOtherExpenses();
    return totalExpenses;
 }
 function calculateRemainingExpenses(){
    actualSavings = totalIncome - calculateTotalExpense();
    return actualSavings
}
/*  function actualSavingsPossible(){
    if(calculateRemaining() >= savingsTarget){
        return savingsTarget
    }
} */
 function updateSummary(){
    
    //update monthly expanse
    document.getElementById("totalIncome").textContent = totalIncome;
    // document.getElementById("rentExpenses").textContent = rentExpenses;
    document.getElementById("housingExpenses").textContent = 
    calculateHousingExpenses();

    document.getElementById("livingExpenses").textContent =
    calculateLivingExpenses();

    document.getElementById("otherExpenses").textContent =
    calculateOtherExpenses();

    document.getElementById("totalExpenses").textContent =
    calculateTotalExpenses();

    document.getElementById("remainingBudget").textContent =
    calculateRemainingExpenses();
    //saving goal
    document.getElementById("savingsGoal").textContent = savingTarget;

    document.getElementById("actualSavings").textContent = actualSavingsPossible;

    //yearly
    document.getElementById("yearlyIncome").textContent = totalIncome * 12;
    document.getElementById("yearlyExpenses").textContent = totalExpenses * 12;
    document.getElementById("yearlySavings").textContent = actualSavings * 12;
 }