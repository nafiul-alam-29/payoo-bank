
// function for get input value

function getInput(id){
    const input = document.getElementById(id)
    const value = input.value;
    return value;
}

function getBalance(){
    const balanceElement = document.getElementById('current-balance')
    const balance = balanceElement.innerText;
    return Number(balance)
}

function setBalance(value){
    const balanceElement = document.getElementById('current-balance')
    balanceElement.innerText = value
}