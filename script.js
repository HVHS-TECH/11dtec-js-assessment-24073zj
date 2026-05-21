const MENU_FORM = document.getElementById("menuForm");
const ORDER_FORM = document.getElementById("orderForm");

const OUTPUT = document.getElementById("devOutput");
const COST_LABEL = document.getElementById("costLabel");

var cart = [];

var menuItems = [
    {
    name: "Cheeseburger",
    price: 5
    },
    {
    name: "Double Cheeseburger",
    price: 7
    }
];

const user = {
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
        cart[i]
    }
}

function OrderShow()
{
    COST_LABEL.innerHTML = "Your order will cost " + " dollars.<br>";
}