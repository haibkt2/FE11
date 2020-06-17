function $(id){
    return document.getElementById(id);
}
/* add mail*/
function addmail(){
    
    var divemail = document.createElement("div");

    var inputemail = document.createElement("input");
    inputemail.setAttribute("placeholder","Enter email");
    inputemail.setAttribute("class"," form-control col-md-11 mt-2 ml-3")

    var iconremovemail = document.createElement("i");
    iconremovemail.setAttribute("class"," fa fa-times ml-1");
    //tao onclick removephone
    iconremovemail.onclick = removeMP;

    divemail.appendChild(inputemail);
    divemail.appendChild(iconremovemail);
    $("mail").appendChild(divemail);
    
}
$("iconaddmail").onclick = addmail;

/* remove mail and phone (removeMP) */
function removeMP(){
    // this is objHTML user cliecked
    var el_i =this;
    var div_bl = this.parentElement.parentElement;
    var num_child = div_bl.childElementCount;
    if (num_child > 1){
        var el_div_parent = this.parentElement;
        el_div_parent.remove();
    }
}

/* add phone */
function addphone(){

    var divephonenumber = document.createElement("div");
    //span +
    var addspan = document.createElement("span")
    addspan.className=("addspan1")
    var span1= document.createTextNode("+");
    addspan.appendChild(span1);

    // input 84
    var inputphone84 = document.createElement("input");
    inputphone84.setAttribute("placeholder","84");
    inputphone84.setAttribute("class"," form-control col-md-2 mt-2 mr-1 ml-3")

    // span -
    var addspan0 = document.createElement("span-")
    addspan0.className=("addspan2")
    var span2= document.createTextNode("-");
    addspan0.appendChild(span2);
    

    // input 123456789
    var inputphone = document.createElement("input");
    inputphone.setAttribute("placeholder","123456789");
    inputphone.setAttribute("class","form-control col-md-8 mt-2 ml-1")
    
    // input icon remove
    var iconremovephone = document.createElement("i");
    iconremovephone.setAttribute("class"," fa fa-times ml-1");
    //tao onclick removephone
    iconremovephone.onclick = removeMP;

    divephonenumber.appendChild(span1);
    divephonenumber.appendChild(inputphone84);
    divephonenumber.appendChild(span2);
    divephonenumber.appendChild(inputphone);
    divephonenumber.appendChild(iconremovephone);
    $("phonenumber").appendChild(divephonenumber);


}
$("iconaddphone").onclick = addphone;
/* remove phone */

