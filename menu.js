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
        OUTPUT.innerHTML += i + ": " + cart[i] + "<br>";
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

function ShowSection(_num){
    let divArea = document.getElementById(`menuSection${_num}`);
    divArea.setAttribute("background-color", "blue");
    /*
    if(divArea.getBoundingClientRect().height <= 0){
        divArea.setAttribute("height", "100px");
    }
    else if(divArea.getBoundingClientRect().height > 0){
        divArea.setAttribute("height", "0px");
    }*/
}


