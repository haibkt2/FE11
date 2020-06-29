function $(id) {
    return document.getElementById(id);
}

function createEL(el) {
    return document.createElement(el);
}

function createTextNode(tn) {
    return document.createTextNode(tn);
}
$("exampleInputPassword2").onchange=function(){
    var getInputPass=$("exampleInputPassword1");
    var valueInputPass=getInputPass.value;
    var getInputPass1=$("exampleInputPassword2");
    var valueInputPass1=getInputPass1.value;
    if(valueInputPass.trim()!=valueInputPass1.trim()){
        var el_span=createEL("span");
        var nodeSpan=createTextNode("Mật khẩu không trùng khớp");
        el_span.appendChild(nodeSpan);
        if(getInputPass1.parentElement.childElementCount==2){
            
            getInputPass1.parentElement.appendChild(el_span);
        }
    }
}
function checValid(){
     var c_valid=validate();
     if(c_valid){
         checkuserlocal();
         $("form").submit();
         $("exampleInputPassword1").focus();
     }
}
function validate(){
    var arr_inpt=document.getElementsByClassName('form-control');
    for(let i=0;i<arr_inpt.length;i++){
        var input=arr_inpt[i].value.trim();
        if(input==""){
            arr_inpt[i].parentElement.innerHTML+="<p>yêu cầu phải nhập</p>";
            return false;
        }
        return true
    }
    return false
}
var name=$("exampleInputEmail1").value.trim();

function checkuserlocal(){
    ///check user name đk r ko đc đk nữa
    // var usename=value input
    // khác null thì ko cho đăng kí nữa ==null thì đk tiếp
    var name=$("exampleInputEmail1").value.trim();
    localStorage.setItem("userName",name);
    var  getlocal=localStorage.getItem("userName");
    if(getlocal==null){
        alert("Tài khoản đã được đăng kí");
        
    }else{
       
      alert("Đăng kí thành công")

    }
}
$("btn").onclick=checValid;
