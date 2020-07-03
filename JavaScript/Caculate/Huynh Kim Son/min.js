function $(id){
    return document.getElementById(id);
}

function calculate(){
     //validate for subtotal
     var s = $("id_subtotal").value;
     var total, amount, percent, c = true;
     // get value input
    
     // validate
     if(!valid(s, Math.max)){
         //caludate
         s = parseFloat(s);
         if(s < 10000){
           amount = 0 ;
           percent = 0.1;
        } else {
               var op_select = $("id_select").value;
               switch (op_select){
                    case 0:
                       amount = 200;
                       percent = ( s < 15000) ? 0.1 : 0.15;
                       break;
                    case 1:
                        amount = 300;
                        percent = (s < 15000) ? 0.15 : 0.2;
                        break;
                    case 2:
                        amount = $("id_amount").value;
                        if(valid(amount, 500)){
                            c = false;
                        } else{
                            amount = parseFloat(amount);
                            percent = 0.15;
                        }
                        break;
                    default:
                        displayError();
                      
               }
           }
        // calculate
        if(c){
            total = s * percent - amount;
            //display values
            displayValue(percent, amount, total);

        } else {
			displayError();
		}
	} else {
		displayError();
	}
  }

//
function displayValue(percent, amount, total) {
	$("id_percent").value = percent;
	$("id_amount").value = amount;
	$("id_total").value = total;
}
// displayError
function displayError(){
    alert("Pls, input again.");
    $("id_form").reset();
    $("id_subtotal").focus();
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

// valid thuc hien tra ve true or false
function valid(value, max){
    var checked = (isNaN(value) || value < 0 || value >= max ) ? true : false;
    return checked;
}

$("bt_calculate").onclick = calculate;
$("id_select").onchange = getAmount;
$("id_subtotal").onclick = getAmount;


