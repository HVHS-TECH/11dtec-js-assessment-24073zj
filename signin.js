const passwordElement = document.getElementById("passwordInput");

const password = "abc123pizza";

var enteredpassword = "";

function EnterPassword(){
    enteredpassword = passwordElement.value;
    console.log(enteredpassword);
}