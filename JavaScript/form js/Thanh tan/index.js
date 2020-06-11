function $(id){
    return document.getElementById(id);
}
var createEmail=document.createElement("p");
var creatTextNode=document.createTextNode("Email");
createEmail.appendChild(creatTextNode);
$("form").appendChild(createEmail);
var createIcon=document.createElement("i");
createIcon.className="fas fa-plus-circle";
createEmail.appendChild(createIcon);
$("form").appendChild(createEmail);
var clickadd=document.getElementsByClassName("fa-plus-circle");
clickadd[0].onclick=function(){
    var createInput =document.createElement('input');
    createInput.className="form-control";
    $("form").appendChild(createInput);

}
