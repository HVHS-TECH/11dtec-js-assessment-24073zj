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

// alert box
const ALERT_BOX = document.getElementById("alertbox");
const ALERT_OKAY_BUTTON = document.getElementById("alert-okay-button");
const ALERT_YES_BUTTON = document.getElementById("alert-yes-button");
const ALERT_NO_BUTTON = document.getElementById("alert-no-button");

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
    if(returnValue == 1){
        ShowAlert(100, 200, "You have no items in your cart.<br> Add an item to proceed.", 1);
    }
    else{
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
function ShowAlert(_x, _y, _message, _mode){
    ALERT_BOX.style.display = "block";
    ALERT_BOX.style.left = `${_x}px`;
    ALERT_BOX.style.top = `${_y}px`;
    ALERT_BOX.querySelector('p').innerHTML = _message;
    if(_mode == 0){
        ALERT_OKAY_BUTTON.style.display = "none";
        ALERT_YES_BUTTON.style.display = "none";
        ALERT_NO_BUTTON.style.display = "none";
    }
    else if(_mode == 1){
        ALERT_OKAY_BUTTON.style.display = "block";
        ALERT_YES_BUTTON.style.display = "none";
        ALERT_NO_BUTTON.style.display = "none";
    }
    else if (_mode == 2){
        ALERT_OKAY_BUTTON.style.display = "none";
        ALERT_YES_BUTTON.style.display = "block";
        ALERT_NO_BUTTON.style.display = "block";
    }
}
function HideAlert(){
    ALERT_BOX.style.display = "none";
    ALERT_BOX.style.left = `0px`;
    ALERT_BOX.style.top = `0px`;
    ALERT_BOX.querySelector('p').innerHTML = "";
    ALERT_YES_BUTTON.style.display = "none";
    ALERT_NO_BUTTON.style.display = "none";
    ALERT_OKAY_BUTTON.style.display = "none";
}

MenuShow();
HideAlert();
ShowAlert(100, 200, "hello world", 1);