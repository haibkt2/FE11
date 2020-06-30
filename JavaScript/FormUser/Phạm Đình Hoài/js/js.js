function $(id){
    return document.getElementById(id);
}

function registerUser() {
	// validate
	var c_valid = validForm();
	// save info user to local
	if(c_valid) {
		registerForm();
	}
}

function removeError() {
    var error = document.getElementsByClassName('error');
    for ( let i = 0 ; i < error.length ; i++ ) {
        error[i].remove();
    }
}
   
function validForm(){

    removeError();
    var arr_input = document.getElementsByClassName('user');
   
    for (let i = 0; i < arr_input.length; i++){
        var input = arr_input[i].value.trim();
        var inputPass = arr_input[i].getAttribute('type');
        if (input == ''){
            arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Please enter input </p> ';
            return false;
            
        }
        
        
        if (inputPass == 'password'){
            if (input.length < 8){
                    arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Password must be more 8 characters</p> ';
                    return false;
                }
                    if (arr_input[i] == $("re-pass")){
                        var pass =  $("pass").value.trim();
                        if (input !== pass){
                            arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Password must be same </p> ';
                            return false;   
                    }
                    }
                    
        }
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var inputEmail = arr_input[i].getAttribute('type');
                    if (inputEmail == 'email') {
                    if (reg.test($('email').value) == false) 
                    {
                        arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Invalid Email Address </p> ';
                        $('email').focus();
                        return false;
                    }
                }

    
}
    return true;
    
}
var user_obj = function(username, pass, name1, name2, email, phone) {
	this.username = username;
	this.pass = pass;
    this.name1 = name1;
    this.name2 = name2;
	this.email = email;
    this.phone = phone;
}
function registerForm(){
    var userInput = $('username').value.trim();
    var userReg = localStorage.getItem(userInput);
    if ( userReg == null ){
        var user = new user_obj ( userInput, $('pass').value.trim(), $('name1').value,$('name2').value, $('email').value, $('phone').value);
        var info = {
            username: userInput,
            pass: user.pass,
            name1: user.name1,
            name2: user.name2,
            email: user.email,
            phone: user.phone
        }
        info = JSON.stringify(info);
        localStorage.setItem(userInput, info);
        alert("Đăng ký thành công");
        $('form').reset();
        location.replace("../html/login.html");
        return true;
    } else {
        $('username').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập đã tồn tại </p> ';
        $('username').focus();
        return false;
    }
 
}


$("button").onclick = registerUser;



