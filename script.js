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

sessionStorage.setItem('userData', user);

