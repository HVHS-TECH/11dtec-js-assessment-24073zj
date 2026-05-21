const OUTPUT = document.getElementById("devOutput");

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
    moneyEntered: 0
};

function AddToCart(_item){
    cart.push(_item);
}
function Show()
{
    OUTPUT.innerHTML = " ";
    if(cart[0] == undefined){
        OUTPUT.innerHTML = "There is nothing in your cart";
    }
    for(let i = 0; i < cart.length; i++){
        OUTPUT.innerHTML += i + ":" + cart[i] + "<br>";
    }
}