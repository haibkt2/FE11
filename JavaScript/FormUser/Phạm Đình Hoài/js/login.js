function $(id) {
    return document.getElementById(id);
}

function logIn() {
    removeError();
    var userInput = $('username').value.toLowerCase();
    var passInput = $('pass').value;
    if (userInput == '' || passInput == '') {
        $('pass').parentElement.innerHTML +=  '<p class = "text-danger error">Nhập tài khoản và mật khẩu </p> ';
        $('username').focus();
    }
    else {
    var infoUser = localStorage.getItem(userInput);
    infoUser = JSON.parse(infoUser);
    if (infoUser == null ) {
        $('pass').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập hoặc mật khẩu không đúng </p> ';
        return false;
    } else {
        
        var userReg = infoUser.username;
        var passReg = infoUser.pass;
        if (userInput == userReg && passInput == passReg ) {
            alert('Bạn đã đăng nhập thành công');
            $('form').parentElement.innerHTML = 
            '<h2 class="text-primary text-center mt-3" id="">Thông tin đăng ký</h2>'
            +  '<p class = "mt-3">Username: ' +  infoUser.username  + '</p> '
            + '<p class = "mt-3">Password: ' +  infoUser.pass  + '</p> '
            + '<p class = "mt-3">Họ: ' +  infoUser.name1  + '</p> '
            + '<p class = "mt-3">Tên: ' +  infoUser.name2  + '</p> '
            + '<p class = " mt-3">Email: ' +  infoUser.email  + '</p> '
            + '<p class = "mt-3">Phone Number: ' +  infoUser.phone  + '</p> '
            + '<div class="d-flex justify-content-center">' + '<a href="../html/register.html">Back to register</a>' + '</div>';
        
        } else {
            $('pass').parentElement.innerHTML +=  '<p class = "text-danger error">Tên đăng nhập hoặc mật khẩu không đúng </p> ';
            return false;
        }
    }
    }
    
    
    
}
function removeError() {
    var error = document.getElementsByClassName('error');
    for ( let i = 0 ; i < error.length ; i++ ) {
        error[i].remove();
    }
}
var fn_ = function(e){
    if(e.keyCode == 13){
        logIn();
    }
}
$("form").onkeypress = fn_;
$('button').onclick = logIn;