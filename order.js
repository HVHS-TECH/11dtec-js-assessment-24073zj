var user = sessionStorage.getItem('userData');

function CalculateCost(){
    var localPrice = 0;
    for(let i = 0; i < cart.length; i++){
        let thisItem = menuItems.find(item => item.name === cart[0]);
        localPrice += thisItem.price;
        console.log("a" + localPrice + cart[0] + thisItem.price);
    }
    user.orderPrice = localPrice;
    console.log("a" + localPrice);
}

function OrderShow()
{
    OUTPUT.innerHTML = "this ran"
    CalculateCost();
    COST_LABEL.innerHTML = "Your order will cost " + user.orderPrice + " dollars.<br>";
}