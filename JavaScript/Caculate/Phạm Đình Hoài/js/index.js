function $(id){
    return document.getElementById(id);
}

function getAmount(){
    var inputSubtotal = $("subtotal").value;
    var selectType = $("type").value;
    if (inputSubtotal >= 10000 && selectType == '2'){
        $("amount").disabled = false;
    }else {
        $("amount").disabled = true;
    }
}
function calculate() {
	


    var inputAmount= $("amount").value;
    var inputSubtotal = $("subtotal").value;
    var selectType = $("type").value;

    if (inputSubtotal.trim() == "" || isNaN(inputSubtotal) || inputSubtotal <= 0 ){
        alert("Please enter input");
        $("form").reset();
        $("subtotal").focus();
    }
    
    var percent ,amount, total;
    
    if(inputSubtotal < 10000){
        percent = $("percent").value = 10;
        $("amount").value = 0;
        total = inputSubtotal  * percent;
    }
    else{
        if( selectType == 0){
            percent = (inputSubtotal < 15000) ? .15 : .2;
            amount = 300;
            total = inputSubtotal  * percent - amount;
        
        }
        else if (selectType == 1){
            percent = (inputSubtotal <15000) ? .1: .15;
            amount = 200;
            total = inputSubtotal  * percent - amount;
        }
        else {
            percent = .15;
            amount = (inputAmount < 500) ? inputAmount : ""; 
            total = inputSubtotal  *  percent - amount;
        }
}
       
        if(valid(inputAmount, 500)){
            $("amount").focus();
            $("percent").setAttribute("value", "0.00");
            $("total").setAttribute("value","0.00");
    }
    $("percent").setAttribute("value", percent*100);
    $("amount").setAttribute("value", amount);
    $("total").setAttribute("value",total.toFixed(2));
}
function valid(value, condition) {
	var checked = (isNaN(value) || value < 0 || value > condition) ? true : false;
	if(checked) {
		alert("Pls input again");
        $("form").reset();
		$("subtotal").focus();
	}
	return checked;
}
$("button").onclick = calculate;
$("subtotal").onchange = getAmount;
$("type").onchange = getAmount;
