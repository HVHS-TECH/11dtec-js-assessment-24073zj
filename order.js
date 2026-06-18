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
        for (const item of cart)
        {
            RECEIPT.innerHTML += item + "<br>";
        }

        let change = usermoney - orderPrice;
        RECEIPT.innerHTML += "<br>Total cost: $" + orderPrice + "<br><br>";
        RECEIPT.innerHTML += "Money given: $" + usermoney + "<br><br>";
        RECEIPT.innerHTML += "Your change: $" + change + "<br>";
    }
}

ShowCost();