function $(id){
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
function removeError(){
    var cl_error = document.getElementsByClassName('error');
    for (let i =0; i <=cl_error.length;i++){
        cl_error[i].remove();
    }
}
function validate(){
    // removeError();
    var arr_input = document.getElementsByClassName('cl-user');
    for(let i = 0; i < arr_input.length; i++){
        var v_input = arr_input[i].value.trim();
        // check required
        if(v_input == '') {
            arr_input[i].parentElement.innerHTML += '<p class="error">Vui lòng điền thông tin vào ô trên</p>';
            return false;
    }
        // check pass
    var attr = arr_input[i].getAttribute('type');
    if(attr == 'password') {
        if(v_input.length < 8) {
            arr_input[i].parentElement.innerHTML += '<p class="error">Password phải từ 8 kí tự</p>';
            return false;
        }
        else{
            if(v_input != $('re_pass').value){
                arr_input[i].parentElement.innerHTML += '<p class="error">Password không tương thích</p>';
                return false;
            }
        }
        }
    }	
    return true;
}

//Contructor
var user_obj = function(user_name,pass,first_name, last_name, email, phone){
    this.user_name = user_name;
    this.pass = pass;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
}
function registerUser() {
// body... 
// check user name
var user_name_input = $('user_name').value;
var user_name_reg = localStorage.getItem(user_name_input);
if(user_name_reg == null){
    var user = new user_obj(user_name_input,
                             $('pass').value,
                             $('first_name').value,
                             $('last_name').value,
                             $('email').value ,
                             $('phone').value);
    var info = user.user_name + ':' + user.pass + ':' + user.first_name + ':' +user.last_name + ':' + user.email +':' + user.phone;
    localStorage.setItem(user_name_input,info);
    location.replace("../html/Login.html");
} else{
    alert('Tên đăng nhập đã tồn tại!');
}
}
//Login
function login(){
    var v_user_name = $('user_Login').value;
    var info_user = localStorage.getItem(v_user_name);
    if(info_user == null){
         alert("Vui lòng kiểm tra lại tên đăng nhập");
    }else{
    var v_pass = $('pass_Login').value;
    var pass_reg = info_user.split(':')[1];
        if(v_pass == pass_reg){
            alert("Đăng nhập thành công");
            //Hiển thị info
            $("login").parentElement.innerHTML = 
                    '<h2 class="text-danger">User Informaion</h2>'
                    + '<div class="col-md-6">'
                    +    '<p><span  class="p_info">User Name:</span>' + info_user.split(':')[0] +'</p>'
                    +  '</div>'

                    + '<div class="col-md-6">'
                    +    '<p><span  class="p_info">First Name:</span>' + info_user.split(':')[2] +'</p>'
                    +  '</div>'

                    + '<div class="col-md-6">'
                    +    '<p><span  class="p_info">Last Name:</span>' + info_user.split(':')[3] +'</p>'
                    +  '</div>'

                    + '<div class="col-md-6">'
                    +    '<p><span  class="p_info">Email:</span>' + info_user.split(':')[4] +'</p>'
                    +  '</div>'

                    + '<div class="col-md-6">'
                    +    '<p><span  class="p_info">Phone Number:</span>' + info_user.split(':')[5] +'</p>'
                    +  '</div>'
        }
        else{
            alert("Vui lòng xem lại mật khẩu");
        }
    }
}
/*
//kiểm tra password
function checkPass(){
    var alert = $("alert_pass");
   var pass = $("pass").value;
   var repass = $("re_pass").value;
   if(pass != repass){
        var el = document.createElement("p");
        var con = document.createTextNode("Mật khẩu không khớp!");
        el.appendChild(con);
        alert.appendChild(el);
   }
   else{
       
   }
}*/
