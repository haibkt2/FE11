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
				if(v_input != $('re-pass').value)
					arr_input[i].parentElement.innerHTML += '<p>not same with pass</p>';
					return false;
				}
		}
	}	
	return true;
}
var user_obj = function(user_name, pass, full_name, email, phone) {
	this.user_name = user_name;
	this.pass = pass;
	this.full_name = full_name;
	this.email = email;
	this.phone = phone;
}
function registerUser() {
	// body... 
	// check user name
	var user_name_input = $('user_name').value;
	var user_name_reg = localStorage.getItem(user_name_input);
	if(user_name_reg == null) {
		var user = new user_obj(user_name_input, $('pass').value,
				$('full_name').value, $('email').value, $('phone').value);
		var info = user.user_name + ':' + user.pass + ':' + user.full_name 
					+ ':' + user.phone;
		localStorage.setItem(user_name_input, info);
	} else {
		// alert user name exist
	}
}
function login() {
	var v_user_name = $('user_name').value;
	var info_use = localStorage.getItem(v_user_name);
	if (info_use == null) {
		// alert error
	} else {
		var v_pass = $('pass').value;
		var pass_reg = info_use.split(':')[1];
	}
}
$('bt_register').onclick = regUser;