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

    /*
    for(let i = 0; i < cart.length; i++){
        let thisItem = menuItems.find(item => item.name === cart[0]);
        localPrice += thisItem.price;
        console.log("a" + localPrice + cart[0] + thisItem.price);
    }*/
    for(let i = 0; i < cart.length; i++){
        if(menuItems.find(item => item.name === cart[i]) != undefined){
            let thisItem = menuItems.find(item => item.name === cart[i]);
            localPrice = thisItem.price;
        }else{
            console.log("couldnt find cart item");
        }
    }
    orderPrice = localPrice;
}

function OrderShow()
{
    OUTPUT.innerHTML = ""
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + orderPrice + " dollars.<br>";
}