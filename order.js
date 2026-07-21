var cart = JSON.parse(sessionStorage.getItem("cartData"));

const NAME_INPUT = document.getElementById("nameInput");
const MONEY_INPUT = document.getElementById("moneyInput");

const COST_LABEL = document.getElementById("costLabel");
const RECEIPT = document.getElementById("receipt");

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

function ShowCost(){
    RECEIPT.hidden = true;
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + orderPrice + " dollars.<br>";
}

function AutoFill(){
    MONEY_INPUT.value = orderPrice;
}

function CalculateCost(){
    var localPrice = 0;

    for (const itemName of cart) {
        var thisItem = menuItems.find(i => i.name === itemName);

        localPrice += thisItem["price"];
    }
    
    orderPrice = localPrice;
}

function OrderShow()
{
    var usermoney = Number(MONEY_INPUT.value);
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
        alert("You have not entered the money amount correctly.\nPlease write the amount as only a number e.g. '5'.");
    }
    else{
        alert("You have not entered enough money to pay for your order.");
    }
}
function GoBack(){
    sessionStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "menu.html";
}

ShowCost();