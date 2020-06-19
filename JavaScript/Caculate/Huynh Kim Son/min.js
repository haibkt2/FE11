function $(id){
    return document.getElementById(id);
}

function calculate(){
     //validate for subtotal
     var total, amount, precent, c=true;
     // get value input
     var subtotal = $("id_subtotal").value;
     // validate
     if(!valid(subtotal,Math.max)){
         //caludate
         subtotal = parseFloat(subtotal);
         if(subtotal < 10000){
           amount = 0 ;
           precent = 0.1;
        } else {
               var op_select = $("id_select").value;
               switch (op_select){
                    case 0:
                       amount = 200;
                       precent = ( subtotal < 15000) ? 0.1 : 0.15;
                       break;
                    case 1:
                        amount = 300;
                        precent = (subtotal < 15000) ? 0.15 : 0.2;
                        break;
                    case 2:
                        amount = $("id_amount").value;
                        if(valid(amount, 500)){
                            c = false;
                        } else{
                            amount = parseFloat(amount);
                            precent = 0.15;
                        }
                        break;
                    default:
                        displayError();
                      
               }
           }
        }
        // calculate
        if(c){
            total = subtotal * precent - amount;
            //display values
            displayValue(percent, amount, total);

        } else {
            displayError();
            
        } 
  }

//
function displayValue(percent, amount, total) {
	$("id_percent").value = precent;
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
$("id_subtotal").onchange = getAmount;


