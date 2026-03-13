
document.getElementById('login-btn').addEventListener('click', function(){
    // get input mobile number
    const inputMobileNumber = document.getElementById('input-number')
    const contactNumber = inputMobileNumber.value;
    // get input pin number
    const inputPin = document.getElementById('input-pin')
    const pinNumber = inputPin.value
    
    if(contactNumber == "01687110333" && pinNumber =="2126")
    {
        alert("Login Successful")
        window.location.replace("./home.html")
    }
    else{
        alert("Mobile Number or Pin is Wrong, Try Another")
        return;
    }
    
})