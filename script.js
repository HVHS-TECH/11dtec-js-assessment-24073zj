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
    for(let i = 0; i < cart.length; i++){
        OUTPUT.innerHTML += i + ":" + cart[i] + "<br>";
    }
}