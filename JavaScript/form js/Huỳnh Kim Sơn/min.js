function $(id){
    return document.getElementById(id);
}
/* add mail*/
function addmail(){
    var inputemail = document.createElement("input");
    inputemail.setAttribute("placeholder","Enter email");
    inputemail.setAttribute("class","w-75 mt-2 ml-5")
    inputemail.id = "email_new";
    

    var icon = document.createElement("i");
    icon.id="icon_mail_new"
    icon.setAttribute("class"," fa fa-times ml-1");

    $("mail").appendChild(inputemail);
    $("mail").appendChild(icon);
    

}
$("iconaddmail").onclick = addmail;

/* removemail */
function removemail(){
    var removeinput = document.getElementById("email_new");
    removeinput.remove();

    var removeicon = document.getElementById("icon_mail_new");
    removeicon.remove();
}
$("iconremovemail").onclick = removemail;

/* add phone */
function addphone(){
    var inputphone84 = document.createElement("input");
    inputphone84.setAttribute("placeholder","+84");
    inputphone84.setAttribute("class","mt-3 ml-5")
    inputphone84.id = "phone_new84";

    var inputphone = document.createElement("input");
    inputphone.setAttribute("placeholder","0123456789");
    inputphone.setAttribute("class","mt-2 ml-2")
    inputphone.id = "phone_new";

    var icon = document.createElement("i");
    icon.id="icon_phone_new"
    icon.setAttribute("class"," fa fa-times ml-1");

    $("phonenumber").appendChild(inputphone84);
    $("phonenumber").appendChild(inputphone);
    $("phonenumber").appendChild(icon);
    

}
$("iconaddphone").onclick = addphone;
/* remove phone */
function removephone(){
    var removeinputphone84 = document.getElementById("phone_new84");
    removeinputphone84.remove();

    var removeinput = document.getElementById("phone_new");
    removeinput.remove();

    var removeicon = document.getElementById("icon_phone_new");
    removeicon.remove();
}
$("iconremovephone").onclick = removephone;

