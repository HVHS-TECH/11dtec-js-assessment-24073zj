var cart = JSON.parse(sessionStorage.getItem("cartData"));

const COST_LABEL = document.getElementById("costLabel");
const RECEIPT = document.getElementById("receipt");

const menuItems = [
    { name: "Cheeseburger", price: 5 },
    { name: "Double Cheeseburger", price: 7 },
    { name: "Chicken Burger", price: 6 },
    { name: "Fries", price: 3 },
    { name: "Coke", price: 3.5 },
    { name: "Sprite", price: 3.5 },
    { name: "Fanta", price: 3.5 },
    { name: "Chocolate Sundae", price: 5 },
    { name: "Soft Serve", price: 3 }
];

var orderPrice = 0;

function ShowCost(){
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + orderPrice + " dollars.<br><br>";
}

function CalculateCost(){
    var localPrice = 0;

    for (const itemName of cart) {
        var thisItem = menuItems.find(i => i.name === itemName);

        localPrice += thisItem["price"];
        console.log("Name: " + itemName + "; Price: " + thisItem["price"]);
    }
    
    orderPrice = localPrice;
}

function OrderShow()
{
    RECEIPT.innerHTML = ""
    RECEIPT.innerHTML += "Name: " + "Zac" + "<br><br>";
    RECEIPT.innerHTML += "Your items: " + "<br>";
    for (const item of cart)
    {
        RECEIPT.innerHTML += item + "<br>";
    }
    RECEIPT.innerHTML += "<br>Total cost: $" + orderPrice + "<br><br>";
    RECEIPT.innerHTML += "Money given: $" + orderPrice + "<br><br>";
    RECEIPT.innerHTML += "Your change: $" + 0 + "<br>";
}

ShowCost();