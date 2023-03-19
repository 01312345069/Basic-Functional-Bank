/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field 
*/

// step - 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

})