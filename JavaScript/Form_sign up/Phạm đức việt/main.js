function $(id){
    return document.getElementById(id);
}
// function saveAll(){
   
// }

// function valid(){
//     var check = document.querySelectorAll("input");
//     for( var i=0; i<check.length; i++){

//        if( check[i].value.trim() == ""){
           
//            var p = document.createElement("p");
//            var p_text = document.createTextNode("loi roi");
//            p.appendChild(p_text);
//            var index = check[i].parentElement.childElementCount;
//            if(index ==3){
//             check[i].parentElement.lastElementChild.remove();
//            }
//            check[i].parentElement.appendChild(p);
          
//        }
//        else{
//         if(check[i].getAttribute("type")=="password"){
//             check[i].setAttribute("pattern","[a-z A-Z 0-9]{8}")
//             check[i].setAttribute("title", "mat khau khong trung khop");
//             var checkPassword = document.querySelectorAll("input[type='password']");
//             if(checkPassword[0] != checkPassword[1]){
               
//                 var p = document.createElement("p");
//                 var p_text = document.createTextNode("mat khau khong trung khop");
//                 p.appendChild(p_text);
//                 checkPassword[1].parentElement.appendChild(p);
//                 break;
//             }
//         }
//        }
       
//     }

// }
function regUser(){
    var c_vail = validate();

    if(c_vail){
        registerUser();
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
function validate(){
    var arr_input = document.getElementsByTagName("input");
    var checked = true;
    for(let i = 0; i<arr_input.length; i++){
       
        var v_input = arr_input[i].value.trim();
        if(v_input ==""){
            arr_input[i].parentElement.innerHTML +="<p>Error</p>";   
            checked = false;        
        }
        var checkPassword = arr_input[i].getAttribute("type");
        //check password
        if(checkPassword =="password"){
            if(v_input.length < 8) {
                arr_input[i].parentElement.innerHTML += "<p>min 8</p>";
                checked =  false;
            }
            
             if(arr_input[i] == $("id_pass_again")){
                var pass_ = $("id_pass").value.trim();
   
                if(  v_input != pass_){
                arr_input[i].parentElement.innerHTML += "<p>not same with pass</p>";
                checked = false;
                }
            }

            
        }
        //check email
        if(arr_input[i] == $("id_mail")){
            if (!validateEmail(v_input) ) {
                arr_input[i].parentElement.innerHTML += "<p>" +v_input + " is not valid :(</p>";
                
                checked = false;
               }
        }

        
    }
   
    return checked;
   
}
function  registerUser(){
     //check user name
     // var user_name_input = value input
    //   var user_name_input_reg = localStorage.getItem(user_name_input)
    var user_name_input = $("id_name").value.trim();
    var pass_input = $("id_pass").value.trim();
    if(localStorage.getItem(user_name_input) == null){
        localStorage.setItem(user_name_input,pass_input);
        alert("ok rồi đó mày ơi");
       $("form").reset();
    }
    else{
        $("id_name").parentElement.innerHTML += "<p>Tên đăng nhập đã tồn tại</p>";

    }

}

$("id_btn").onclick = regUser;
