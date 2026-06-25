const passwordElement = document.getElementById("passwordInput");

const password = "PizzaIsTheBest";

var enteredpassword = "";

function EnterPassword(){
    enteredpassword = passwordElement.value;
    if(enteredpassword == password){
        window.location.href = "backend.html";
    }
}