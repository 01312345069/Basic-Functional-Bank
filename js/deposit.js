// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step - 2: get the deposit amount from the deposit input field 
    // for input field use .value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const NweDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(NweDepositAmountString);

    // step - 3: get the current deposit total 
    // for non-input (Element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositeTotal;

    // Step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // Last Step-$ clear the deposit filed 
    depositField.value = '';
})

