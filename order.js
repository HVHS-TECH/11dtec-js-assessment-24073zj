var cart = sessionStorage.getItem('cartData');

const OUTPUT = document.getElementById("devOutput");
const COST_LABEL = document.getElementById("costLabel");

const menuItems = [
    { name: "Cheeseburger", price: 5 },
    { name: "Double Cheeseburger", price: 7 },
    { name: "Chicken Burger", price: 5 },
    { name: "Fries", price: 3 },
    { name: "Coke", price: 5 },
    { name: "Sprite", price: 5 },
    { name: "Fanta", price: 5 },
    { name: "Chocolate Sundae", price: 5 },
    { name: "Soft Serve", price: 5 }
];

var orderPrice = 0;

function CalculateCost(){
    var localPrice = 0;

    for (const item of cart) {
        console.log("name: " + item["name"] + "price: " + item["price"]);
    }

    // for(let i = 0; i < cart.length; i++){
    //     //var thisItem = menuItems.filter(item => item.name === "Cheeseburger");
    //     thisItem = menuItems[0];
    //     //localPrice += thisItem[0]["price"];
    //     localPrice += thisItem["price"];
    //     console.log(thisItem["price"]);
    // }
    
    orderPrice = localPrice;
}

function OrderShow()
{
    OUTPUT.innerHTML = ""
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + orderPrice + " dollars.<br>";
}