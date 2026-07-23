// get cart data from previous page
var cart = JSON.parse(sessionStorage.getItem("cartData"));

const NAME_INPUT = document.getElementById("nameInput");
const MONEY_INPUT = document.getElementById("moneyInput");

const COST_LABEL = document.getElementById("costLabel");
const RECEIPT = document.getElementById("receipt");

// Where all the items and prices are stored
const menuItems = [
    { name: "Pepperoni Pizza", price: 7 },
    { name: "Cheese Pizza", price: 6 },
    { name: "Hawaiian Pizza", price: 7 },
    { name: "Fries", price: 3 },
    { name: "Garlic Bread", price: 4 },
    { name: "Coke", price: 3.5 },
    { name: "Sprite", price: 3.5 },
    { name: "Fanta", price: 3.5 }
];

var orderPrice = 0;

// alert box stuff
const ALERT_BOX = document.getElementById("alertbox");
const ALERT_OKAY_BUTTON = document.getElementById("alert-okay-button");
const ALERT_YES_BUTTON = document.getElementById("alert-yes-button");
const ALERT_NO_BUTTON = document.getElementById("alert-no-button");
var alertResult = false;

// cost functions
function CalculateCost(){
    var localPrice = 0;

    for (const itemName of cart) {
        var thisItem = menuItems.find(i => i.name === itemName);

        localPrice += thisItem["price"];
    }
    
    orderPrice = localPrice;
}
function ShowCost(){
    RECEIPT.hidden = true;
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + orderPrice + " dollars.<br>";
}

// Input actions
function GoBack(){
    sessionStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "menu.html";
}
function AutoFill(){
    MONEY_INPUT.value = orderPrice;
}

// show the reciept or alert the user of a mistake
function OrderShow()
{
    var username = NAME_INPUT.value;
    var usermoney = Number(MONEY_INPUT.value);
    if(!/\d/.test(username)){ // if username doesnt contain number
        if(usermoney >= orderPrice){
            RECEIPT.hidden = false;
            RECEIPT.innerHTML = ""
            RECEIPT.innerHTML += "Name: " + NAME_INPUT.value + "<br><br>";
            RECEIPT.innerHTML += "Your items: " + "<br>";
            for (var item of cart)
            {
                let thisItem = menuItems.find(i => i.name === item);
                RECEIPT.innerHTML += item + " $" + thisItem["price"] + "<br>";
            }

            let change = usermoney - orderPrice;
            RECEIPT.innerHTML += "<br>Total cost: $" + orderPrice + "<br><br>";
            RECEIPT.innerHTML += "Money given: $" + usermoney + "<br><br>";
            RECEIPT.innerHTML += "Your change: $" + change + "<br>";
        }
        else if(isNaN(usermoney)){
            ShowAlert(225, 300, "You have not entered the money amount correctly.<br>Please write the amount as only a number e.g. '5'.", 1);
        }
        else{
            ShowAlert(225, 300, "You have not entered enough money to pay for your order.", 1);
        }
    }
    else{
        ShowAlert(225, 300, "Your name cannot contain numbers.", 1);
    }
}

// alert functions
function ShowAlert(_x, _y, _message, _mode){
    ALERT_BOX.style.display = "block";
    ALERT_BOX.style.left = `${_x}px`;
    ALERT_BOX.style.top = `${_y}px`;
    ALERT_BOX.querySelector('p').innerHTML = _message;
    if(_mode == 0){
        ALERT_OKAY_BUTTON.style.display = "none";
        ALERT_YES_BUTTON.style.display = "none";
        ALERT_NO_BUTTON.style.display = "none";
    }
    else if(_mode == 1){
        ALERT_OKAY_BUTTON.style.display = "block";
        ALERT_YES_BUTTON.style.display = "none";
        ALERT_NO_BUTTON.style.display = "none";
    }
    else if (_mode == 2){
        ALERT_OKAY_BUTTON.style.display = "none";
        ALERT_YES_BUTTON.style.display = "inline";
        ALERT_NO_BUTTON.style.display = "inline";
    }
}
function HideAlert(_result){
    ALERT_BOX.style.display = "none";
    ALERT_BOX.style.left = `0px`;
    ALERT_BOX.style.top = `0px`;
    ALERT_BOX.querySelector('p').innerHTML = "";
    ALERT_YES_BUTTON.style.display = "none";
    ALERT_NO_BUTTON.style.display = "none";
    ALERT_OKAY_BUTTON.style.display = "none";
    if(_result){
        result = true;
        cart = [];
        MenuShow();
    }
    else{
        result = false;
    }
}


ShowCost();