function $(id) {
	return document.getElementById(id);
}
function calculate() {
	// validate for subtotal
	valid(v, Math.max);
	// validate for amount
	valid(v, 400);
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
function valid(value, condition) {
	var checked = (isNaN(value) || value < 0 || value > condition) ? true : false;
	if(checked) {
		alert("Pls input again");
		$("id_form").reset();
		$("id_subtotal").focus();
	}
	return checked;
}
$("bt_calculate").onclick = calculate;
$("opt_select").onchange = getAmount;
$("id_subtotal").onchange = getAmount;