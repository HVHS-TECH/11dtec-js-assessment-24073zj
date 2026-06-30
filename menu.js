const MENU_FORM = document.getElementById("menuForm");
const ORDER_FORM = document.getElementById("orderForm");

const OUTPUT = document.getElementById("devOutput");

var cart = [];

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
    OUTPUT.innerHTML = "Your order:<br>";
    if(cart[0] == undefined){
        OUTPUT.innerHTML = "There is nothing in your cart";
        return 1;
    }
    for(let i = 0; i < cart.length; i++){
        OUTPUT.innerHTML += (i + 1) + ": " + cart[i] + "<br>";
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

function ToggleFirstSection(){
    let divArea = document.getElementById("menuSection1");
    if(divArea.style.display == "flex"){
        divArea.style.display = "none";
    }
    else{
        divArea.style.display = "flex";
    }
}

function ToggleSection(_num, _this){
    let divArea = document.getElementById(`menuSection${_num}`);
    if(divArea.style.display == "flex"){
        divArea.style.display = "none";
        _this.style.borderRadius = "10px 10px 10px 10px";
    }
    else{
        divArea.style.display = "flex";
        _this.style.borderRadius = "10px 10px 0px 0px";
    }
}


