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
function removeErro () {
	var cl_error = document.getElementsByClassName('error');
	for(let i = 0 ; i < cl_error.length;i++){
		cl_error[i].remove();
	}
}

function validate(){
	removeErro();
	var arr_input = document.getElementsByClassName('cl-user');
	for(let i = 0; i < arr_input.length; i++){
		var v_input = arr_input[i].value.trim();
		// check required
		if(v_input == '') {
			arr_input[i].parentElement.innerHTML += '<p class ="error">Please enter information.</p>';
			return false;
		}
		// check pass
		var attr = arr_input[i].getAttribute('type');
		if(attr == 'password') {
			if(v_input.length < 8) {
				arr_input[i].parentElement.innerHTML += '<p class ="error"> Password is more than 8 characters.</p>';
				return false;
			}
			else {
				if(v_input != $('re-pass').value){
					arr_input[i].parentElement.innerHTML += '<p class ="error">Not same with pass.</p>';
					return false;

					}
				}
		}
		//check mail
		if (attr == "email") {
				var atposition = v_input.indexOf("@");
        		var dotposition = v_input.lastIndexOf(".");
        		if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= v_input.length) {
					arr_input[i].parentElement.innerHTML += '<p class ="error">Please enter a valid e-mail address.</p>';
           			 return false;
       		 }
		}
		//check phone
		// if (attr == "phone") {
		// 	var rule_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
		// 		if (rule_phone.test(v_input) == false) 
		// 		{
		// 			arr_input[i].parentElement.innerHTML += '<p class ="error">Số điện thoại của bạn không đúng định dạng!</p>';

		// 		}
		// }
	}	
	return true;
}
var user_obj = function(user_name, pass, last_name, first_name, email, phone) {
	this.user_name = user_name;
	this.pass = pass;
	this.last_name = last_name;
	this.first_name = first_name;
	this.email = email;
	this.phone = phone;
}
function registerUser() {
	// check user name
	var user_name_input = $('user_name').value;
	var user_name_reg = localStorage.getItem(user_name_input);
	if(user_name_reg == null) {
		var user = new user_obj(user_name_input, 
								$('pass').value,
								$('last_name').value,
								$('first_name').value, 
								$('email').value, 
								$('phone').value);
	    user = JSON.stringify(user);
		localStorage.setItem(user_name_input, user);
		alert('Đăng ký thành công !')
		location.replace("../html/Login.html");

	} else {
		alert('Tên đăng nhập đang được sử dụng. Xin vui lòng dùng tên đăng nhập khác !')

	}
}

// js login
function Login() {
	removeErro();
	var user_name_input = $('user_name').value;
	var pass_input = $('pass').value;
	if (user_name_input == '' || pass_input == '') {
		$('pass').parentElement.innerHTML += '<p class ="error">Tên đăng nhập hoặc mật khẩu không đúng !</p>';
	}
	else{
		var info_use = localStorage.getItem($('user_name').value);
		info_use = JSON.parse(info_use);
		if(info_use == null){
			$('pass').parentElement.innerHTML += '<p class ="error"> không đúng !</p>';

		} else{
			var user_login = info_use.user_name;
			var pass_login = info_use.pass;
				if (user_name_input == user_login && pass_input == pass_login  ) {
					alert(" Chúc mừng bạn đã đăng nhập thành công !");
					//$("form_login").reset();
					$("form_login").parentElement.innerHTML = 
					'<h3 class =" mt-5" style="color: red; text-align: center;">Thông tin thành viên</h3>'
					
					+'<div class="col-md-4 " >'
					+ ' <p><b>User name:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.user_name   + '</p>'
					+ '</div>'

					+'<div class="col-md-4">'
					+ ' <p><b>Password:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.pass   + '</p>'
					+ '</div>'

					+'<div class="col-md-4">'
					+ ' <p><b>Họ:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.last_name   + '</p>'
					+ '</div>'

					+'<div class="col-md-4">'
					+ ' <p><b>Tên:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.first_name   + '</p>'
					+ '</div>'

					+'<div class="col-md-4">'
					+ ' <p><b>Email:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.email   + '</p>'
					+ '</div>'

					+'<div class="col-md-4">'
					+ ' <p><b>Phone:</b> ' + '&nbsp' + '&nbsp' + '&nbsp' +  info_use.phone   + '</p>'
					+ '</div>'
					
				}else{
					$('pass').parentElement.innerHTML += '<p class ="error">Vui lòng nhập đúng thông tin !</p>';
					return false ;
				}
		}
	
	} 
}


