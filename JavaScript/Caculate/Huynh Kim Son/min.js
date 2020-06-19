function $(id){
    return document.getElementById(id);
}
// getamount
function getAmount() {
	var input_sub = $("id_subtotal").value;
	var op_select = $("id_select").value;
	if(input_sub >= 10000 && op_select == 2) {
		$("id_amount").disabled = false;
	} else {
		$("id_amount").disabled = true;
	}
}
// valid
function valid(value, condition){
    var checked = (isNaN(value) || value < 0 || value > condition ) ? true : false;
    if(checked){
        alert("Pls, input again.");
        $("id_form").reset();
        $("id_subtotal").focus();
    }
    return checked;
}
function calculate(){
    //validate for subtotal
    var input_sub = ("id_subtotal").value;
    var op_select = ("id_select").value;
    // validate for subtotal
	//valid(v, Math.max);
	// validate for amount
	//valid(v, 400);
    // set subtotal <10000
    if(input_sub<10000)
    {
        $("id_amount").setAttribute("value","0");
        $("id_percent").setAttribute("value","10");
        
    }
    // set loyalty
    else if(op_select== 0){
        $("id_amount").setAttribute("value","200");
        $("id_percent").setAttribute("value","10");
        if(input_sub < 15000){
            $("id_percent").setAttribute("value","15");
        }
    }
    //set honored
    else if(op_select== 1){
        $("id_amount").setAttribute("value","300");
        $("id_percent").setAttribute("value","15");
        if(input_sub < 15000){
            $("id_percent").setAttribute("value","20");
        }
    }
    //other
    else if(op_select== 2){
        $("id_percent").setAttribute("value","15");
    }
    // ép kiểu trả về giá trị số number
    var input_sub = parseFloat($("id_subtotal").value);
    var op_select = parseFloat($("id_select").value);
    var total = parseFloat($("id_total").value);
    var precent = parseFloa($("id_percent").value);
    var amount = parseFloat($("id_amount").value);
    // công thức tính total
   total = ((input_sub *(precent/100))-(amount))
   $("id_total").value=total;
}

$("bt_calculate").onclick = calculate;
$("id_select").onchange = getAmount;
$("id_subtotal").onchange = getAmount;

