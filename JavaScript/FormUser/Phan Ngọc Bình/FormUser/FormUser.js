function $(id) {
   return document.getElementById(id);
}
function regUser(){
   var c_valid = validate();
   if(c_valid){
      registerUser();
   }
}
function removeErro(){
   var cl_error = document.getElementsByClassName('error');
   for(let i = 0; i < cl_error.length; i++){
      cl_error[i].remove();
   }
}
function validate(){
   removeErro();
   var arr_input = document.getElementsByClassName('user');
   for(let i=0; i<arr_input.length;i++){
      var v_input =arr_input[i].value.trim();
      if(v_input==''){
         arr_input[i].parentElement.innerHTML +='<p class="error">error</p>';
         return false;
      }
      var attr = arr_input[i].getAttribute('type');
      if(attr == 'password') {
         if(v_input.length < 8) {
            arr_input[i].parentElement.innerHTML += '<p class="error">min 8</p>';
            return false;
         }
         else {
            if(v_input != $('pass').value){
               arr_input[i].parentElement.innerHTML += '<p class="error">not same with pass</p>';
               return false;}
         }
      }
   }
   return true;
}
var user_obj =function(user_name,pass,sur,name, email,phone){
	this.user_name = user_name;
	this.pass = pass;
   this.sur =sur;
   this.name =name;
	this.email = email;
	this.phone = phone;
}
function registerUser() {
	var user_name_input = $('user_name').value;
	var user_name_reg = localStorage.getItem(user_name_input);
	if(user_name_reg == null){
		var user = new user_obj(user_name_input, $('pass').value, $('sur').value,$('name').value,$('email').value, $('phone').value);
		var info = user.user_name + ' : ' + user.pass +' : '+ user.sur +' : '+ user.name +' : '+ user.email + ' : ' + user.phone;
		localStorage.setItem(user_name_input, info);
	}else{
		alert('Please re-enter user information.');
	}
}
$('bt_register').onclick = regUser;
