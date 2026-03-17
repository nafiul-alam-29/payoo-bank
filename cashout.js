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



