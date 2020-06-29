function $(id) {
    return document.getElementById(id);
}

function createEL(el) {
    return document.createElement(el);
}

function createTextNode(tn) {
    return document.createTextNode(tn);
}
$("exampleInputPassword2").onchange = function () {
    var getInputPass = $("exampleInputPassword1");
    var valueInputPass = getInputPass.value;
    var getInputPass1 = $("exampleInputPassword2");
    var valueInputPass1 = getInputPass1.value;
    if (valueInputPass.trim() != valueInputPass1.trim()) {
        var el_span = createEL("span");
        var nodeSpan = createTextNode("Mật khẩu không trùng khớp");
        el_span.appendChild(nodeSpan);
        if (getInputPass1.parentElement.childElementCount == 2) {

            getInputPass1.parentElement.appendChild(el_span);
        }
    }
}
function checValid() {
    var c_valid = validate();
    if (c_valid) {
        checkuserlocal();
        $("form").submit();
        $("exampleInputPassword1").focus();
    }
}
function validate() {
    var arr_inpt = document.getElementsByClassName('form-control');
    for (let i = 0; i < arr_inpt.length; i++) {
        var input = arr_inpt[i].value.trim();
        if (input == "") {
            arr_inpt[i].parentElement.innerHTML += "<p>yêu cầu phải nhập</p>";
            return false;
        }
        return true
    }
    return false
}
var user_obj = function (userName, pass, fullName, email, phone) {
    this.userName = userName;
    this.pass = pass;
    this.fullName = fullName;
    this.email = email;
    this.phone = phone;
}
function checkuserlocal() {
    ///check user name đk r ko đc đk nữa
    // var usename=value input
    // khác null thì ko cho đăng kí nữa ==null thì đk tiếp
    var name = $("exampleInputEmail1").value.trim();
    var getlocal = localStorage.getItem(name);
    if (getlocal == null) {
        var user= new user_obj( name,$("exampleInputPassword1").value,$("hovaten").value,$("tencuaban").value,$("emailcuaban").value,$("sdt").value);
        var infor=user.userName +":"+user.pass+":"+user.fullName+":"+user.email+":"+user.phone;
        localStorage.setItem(name,infor)
        alert("bạn đã đăng kí thành coong")
    } else {
        alert("tài khoản đã được đăng kí")
    }

}

function login(){
    var userName=$("exampleInputEmail1").value;
    var userNamereg=localStorage.getItem(userName);
    if(userNamereg==null){
        alert("bạn đk thất bại")
    }else{
        var pass=$("exampleInputPassword1").value;
        var pass_reg=userNamereg.split(":")[1];
        alert("bạn đăng nhập thành công")
    }
}
// $("btn").onclick =checValid ;
$("btn").onclick = login;
