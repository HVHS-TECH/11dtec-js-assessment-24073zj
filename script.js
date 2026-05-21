const MENU_FORM = document.getElementById("menuForm");
const ORDER_FORM = document.getElementById("orderForm");

const OUTPUT = document.getElementById("devOutput");
const COST_LABEL = document.getElementById("costLabel");

var cart = [];

const menuItems = [
    {
    name: "Cheeseburger",
    price: 5
    },
    {
    name: "Double Cheeseburger",
    price: 7
    },
    {
    name: "Chicken Burger",
    price: 5
    },
    {
    name: "Fries",
    price: 5
    },
    {
    name: "Coke",
    price: 5
    },
    {
    name: "Sprite",
    price: 5
    },
    {
    name: "Fanta",
    price: 5
    },
    {
    name: "Chocolate Sundae",
    price: 5
    }
];

var user = {
    name: "",
    orderPrice: 0,
    moneyEntered: 0
};

//----- Menu page -----//
function AddToCart(_item){
    cart.push(_item);
}
function MenuShow()
{
    OUTPUT.innerHTML = " ";
    if(cart[0] == undefined){
        OUTPUT.innerHTML = "There is nothing in your cart";
    }
    for(let i = 0; i < cart.length; i++){
        OUTPUT.innerHTML += i + ": " + cart[i] + "<br>";
    }
}

//----- Order page -----//
function CalculateCost(){
    let localPrice = 0;
    for(let i = 0; i < cart.length; i++){
        let thisItem = menuItems.find(item => item.name === cart[i]);
        localPrice += thisItem.price;
        console.log(localPrice);
    }
    user.orderPrice = localPrice;
}

function OrderShow()
{
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + user.orderPrice + " dollars.<br>";
}