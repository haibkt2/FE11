function $(id){
    return document.getElementById(id);
}
//----------------------------------------REGISTER----------------------------------
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
        var inputType = arr_input[i].getAttribute('type'); 
        if (input == ''){
            arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Please enter input </p> ';
            return false;
        }
        else {
        
        if (inputType == 'password'){ 
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
                    if (inputType == 'email') {
                    if (reg.test($('email').value) == false) 
                    {
                        arr_input[i].parentElement.innerHTML += '<p class = "text-danger error">Invalid Email Address </p> ';
                        $('email').focus();
                        return false;
                    }
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
    userInput = userInput.toLowerCase();
    var userReg = localStorage.getItem(userInput);
    if ( userReg == null ){
        var user = new user_obj ( userInput, $('pass').value.trim(), $('name1').value,$('name2').value, $('email').value, $('phone').value);
        
        user = JSON.stringify(user);
        localStorage.setItem(userInput, user);
        alert("Đăng ký thành công");
        $('form').reset();
        $('register').style.display = 'none';
        $('login').style.display = 'block';
        return true;
    } else {
        $('username').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập đã tồn tại </p> ';
        $('username').focus();
        return false;
    }
 
}
var fn_ = function(e){
    if(e.keyCode == 13){
        registerUser();
    }
}

//-------------------------------LOG IN----------------------------------
function logIn() {
    removeError();
    var userInput = $('username2').value;
    userInput = userInput.toLowerCase();
    var passInput = $('pass2').value;
    if (userInput == '' || passInput == '') {
        $('pass2').parentElement.innerHTML +=  '<p class = "text-danger error">Nhập tài khoản và mật khẩu </p> ';
        $('username2').focus();
    }
    else {
    var infoUser = localStorage.getItem(userInput);
    infoUser = JSON.parse(infoUser);
    if (infoUser == null ) {
        $('pass2').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập hoặc mật khẩu không đúng </p> ';
        return false;
    } else {
        
        var userReg = infoUser.username;
        var passReg = infoUser.pass;
        if (userInput == userReg && passInput == passReg ) {
            alert('Bạn đã đăng nhập thành công');
            $('form2').parentElement.innerHTML = 
            '<h2 class="text-primary text-center mt-3" id="">Thông tin đăng ký</h2>'
            +  '<p class = "mt-3">Username: ' +  infoUser.username  + '</p> '
            + '<p class = "mt-3">Password: ' +  infoUser.pass  + '</p> '
            + '<p class = "mt-3">Họ: ' +  infoUser.name1  + '</p> '
            + '<p class = "mt-3">Tên: ' +  infoUser.name2  + '</p> '
            + '<p class = " mt-3">Email: ' +  infoUser.email  + '</p> '
            + '<p class = "mt-3">Phone Number: ' +  infoUser.phone  + '</p> '
            + '<div class="d-flex justify-content-center">' + '<a href="../html/formUser.html">Back to register</a>' + '</div>';
        
        } else {
            $('pass2').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập hoặc mật khẩu không đúng </p> ';
            return false;
        }
    }
    }
    
}
var fn_2 = function(e){
    if(e.keyCode == 13){
        logIn();
    }
}
window.onload = function() {
    $('login').style.display = 'none';
    $("form").onkeypress = fn_;
    $("button").onclick = registerUser;
    $("form2").onkeypress = fn_2;
    $("button2").onclick = logIn;
}


