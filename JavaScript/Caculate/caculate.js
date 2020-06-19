function $(id) {
	return document.getElementById(id);
}
function calculate() {
	var t, a, p, c = true;
	// Get value input
	var s = $("id_subtotal").value;
	// Validate
	if(!valid(s, Math.max)) {
		// Calculate
		s = parseFloat(s);
		if(s < 10000) {
			a = 0;
			p = 0.1;
		} else {
			var v_select = $("opt_select").value;
			switch (v_select) {
				case 0:
					a = 200;
					p = (s < 15000) ? 0.1 : 0.15;
					break;
				case 1:
					a = 300;
					p = (s < 15000) ? 0.15 : 0.2;
					break;
				case 2:
					a = $("id_amount").value;  
					if(valid(a, 500)){
						c = false;
					} else {
						a = parseFloat(a);
						p = 0.15;
					}
					break;
				default:
					displayError();
			}
		}
		// calculate
		if(c) {
			t = s * p - a;
			// Display value
			displayValue(p, a, t );
		} else {
			displayError();
		}
	} else {
		displayError();
	}
	
}
function displayValue(p, a, t) {
	$("id_percent").value = p;
	$("id_amount").value = a;
	$("id_total").value = t;
}
function displayError() {
	alert("Pls input again");
	$("id_form").reset();
	$("id_subtotal").focus(); 
}
function getAmount() {
	var v_input = $("id_subtotal").value;
	var v_select = $("opt_select").value;
	if(v_input >= 10000 && v_select == 2) {
		$("id_amount").disabled = false;
	} else {
		$("id_amount").disabled = true;
	}
}
function valid(value, max) {
	var checked = (isNaN(value) || value < 0 || value >= max) ? true : false;
	return checked;
}
$("bt_calculate").onclick = calculate;
$("opt_select").onchange = getAmount;
$("id_subtotal").onchange = getAmount;