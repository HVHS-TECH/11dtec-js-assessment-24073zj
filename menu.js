const MENU_FORM = document.getElementById("menuForm");
const ORDER_FORM = document.getElementById("orderForm");

const OUTPUT = document.getElementById("devOutput");

var cart;
if( JSON.parse(sessionStorage.getItem("cartData")) ){
    cart = JSON.parse(sessionStorage.getItem("cartData"));
}
else{
    cart = [];
};

var user = {
    name: "",
    orderPrice: 0,
    moneyEntered: 0
};

function AddToCart(_item){
    cart.push(_item);
    MenuShow();
}
function MenuShow()
{
    OUTPUT.innerHTML = "";
    OUTPUT.innerHTML += "Your order:<br>";
    OUTPUT.innerHTML += `<button onclick="ClearOrder()">Clear order</button><br>`;
    if(cart[0] == undefined){
        OUTPUT.innerHTML = "There is nothing in your cart yet";
        return 1;
    }
    for(let i = 0; i < cart.length; i++){
        OUTPUT.innerHTML += `<div class="cartItem">`
        + (i + 1) + ": " + cart[i]
        + ` <button style="font-size:12pt;" onclick="RemoveItem(${i})">Remove</button>` + "</div><br>";
    }
    sessionStorage.setItem("cartData", JSON.stringify(cart));
    return 0;
}

function NextPage(){
    let returnValue = MenuShow();
    if(returnValue != 1){
        window.location.href="order.html";
    }
}

function ToggleSection(_num, _this){
    let divArea = document.getElementById(`menuSection${_num}`);
    if(divArea.style.display == "flex"){
        divArea.style.display = "none";
        _this.style.borderRadius = "10px 10px 10px 10px";
        _this.querySelector('img').classList.toggle('spin-object');
    }
    else{
        divArea.style.display = "flex";
        _this.style.borderRadius = "10px 10px 0px 0px";
        _this.querySelector('img').classList.toggle('spin-object');
    }
}
function RemoveItem(item){
    cart.splice(item, 1);
    MenuShow();
}
function ClearOrder(){
    let result = confirm("Are you sure?");
    if(result){
        cart = [];
        MenuShow();
    }
}

MenuShow();