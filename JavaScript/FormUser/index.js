function $(id) {
    return document.getElementById(id);
}
function regUser() {
	// validate
	var c_valid = validate();
	// save info user to local
	if(c_valid) {
		registerUser();
	}
}
function validate(){
	var arr_input = document.getElementsByClassName('cl-user');
	for(let i = 0; i < arr_input.length; i++){
		var v_input = arr_input[i].value.trim();
		// check required
		if(v_input == '') {
			arr_input[i].parentElement.innerHTML += '<p>error</p>';
			return false;
		}
		// check pass
		var attr = arr_input[i].getAttribute('type');
		if(attr == 'password') {
			if(v_input.length < 8) {
				arr_input[i].parentElement.innerHTML += '<p>min 8 c</p>';
				return false;
			}
			else {
				if(v_input != $('re-pass'))
					arr_input[i].parentElement.innerHTML += '<p>not same with pass</p>';
					return false;
				}
		}
		return true;
	}	
	return false;
}
function registerUser() {
	// body... 
	// check user name
	var user_name_input = v...input
	var user_name_reg = localStorage.getItem(user_name_input);
}
$('bt_register').onclick = regUser;