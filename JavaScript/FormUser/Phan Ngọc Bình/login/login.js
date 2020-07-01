function $(id) {
   return document.getElementById(id);
}
function login(){
   var v_user_name = $('user_name').value;
   var info_user = localStorage.getItem(v_user_name);
   if(info_user ==null){
      alert("Error!")
   }else{
      var v_pass = $('pass').value;
      var pass_reg = info_user.split(' : ')[1];
      if(v_pass==pass_reg){
         document.write(info_user);
      }else{
         alert('Error!');
      }
   }
}
$('bt_login').onclick = login;