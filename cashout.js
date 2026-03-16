document.getElementById('cashout-btn').addEventListener('click',function(){
    // cashout agent number
    const cashoutInput = getInput('cashout-number')
    // agent number validation
    if(cashoutInput.length !=11)
    {
        alert("Please Enter 11 Digit Agent Number")
        return
    }
    // cashout input amount
    const cashoutInputAmount = getInput('cashout-amount')
    // current balance
    const currentBalance = getBalance()
    // pin validation
    const pin = getInput('cashout-pin')
    if (pin !== '2126') {
        alert("Invalid Pin")
        return;
    }

    // balance calculator
    const newBalance = currentBalance - Number(cashoutInputAmount)
   

    if (newBalance < 0) {
        alert("Invalid Amount")
        return;
    }

    setBalance(newBalance)
    alert("Cashout Successful")
})



// document.getElementById('cashout-btn').addEventListener('click', function () {

//     // cashout agent number
//     const cashOutInputNumber = document.getElementById('cashout-number')
//     const cashoutInput = cashOutInputNumber.value;
//     if(cashoutInput.length !=11)
//     {
//         alert("Please Enter 11 Digit Agent Number")
//         return
//     }

//     // cashout amount
//     const cashoutInputAmount = document.getElementById('cashout-amount')
//     const cashoutAmount = cashoutInputAmount.value;
//     console.log(cashoutAmount)

//     // current balance
//     const balanceElement = document.getElementById('current-balance')
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // pin
//     const cashOutPinInput = document.getElementById('cashout-pin')
//     const cashoutPin = cashOutPinInput.value;

//     if (cashoutPin !== '2126') {
//         alert("Invalid Pin")
//         return;
//     }

//     // balance calculator
//     const newBalance = Number(balance) - Number(cashoutAmount)

//     if (newBalance < 0) {
//         alert("Invalid Amount")
//         return;
//     }

//     balanceElement.innerText = newBalance;
//     alert("Cashout Successful")

// })