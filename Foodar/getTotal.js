
function totalPrice() {
    
    var cost = document.getElementById("total");
    var checkPrice = document.querySelector('input[name="style"]:checked');
      
    if(checkPrice != null) {
        cost.innerHTML = '$'+ checkPrice.value;
    }
    else {
        cost.innerHTML = '$0';
    }
    
    var checkTip = document.querySelector('input[name="tip"]:checked' );

    if(checkTip != null) {
        priceNum = Number(checkPrice.value)
        tipNum = Number(checkTip.value);
        var finalCost = priceNum + (priceNum * tipNum);
        cost.innerHTML = '$'+ finalCost.toFixed(2);
    }
    else {
        cost.innerHTML = '$'+ checkPrice.value;
    }
}