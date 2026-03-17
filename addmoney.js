document.getElementById('add-money-btn').addEventListener('click', function(){
    const bankAccount = getInput('add-money-number')
    if(bankAccount =='select a bank')
    {
        alert('Please Select a bank')
        return
    }

    const addMoney = getInput('add-amount')
    
    
    // get pin validation
    const addMoneyPin = getInput('add-money-pin')
    if(addMoneyPin!='2126')
    {
        alert('Sorry Pin is Incorrect')
        return
    }

    // get current balance
    const currentBalance = getBalance('current-balance')
    const newAddbalance = Number(currentBalance)+ Number(addMoney)
    setBalance(newAddbalance)
})