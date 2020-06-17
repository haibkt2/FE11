function $(id){
    return document.getElementById(id);
}
/* add mail*/
function addmail(){
    
    var divemail = document.createElement("div");

    var inputemail = document.createElement("input");
    inputemail.setAttribute("placeholder","Enter email");
    inputemail.setAttribute("class"," mt-3 ml-4")

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
    else{
        alert("Không thể xóa. Phải có ít nhất 1 trường email");
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
    inputphone84.setAttribute("class"," col-md-2 mt-3 ml-1 mr-1")

    // span -
    var addspan0 = document.createElement("span-")
    addspan0.className=("addspan2")
    var span2= document.createTextNode("-");
    addspan0.appendChild(span2);
    

    // input 123456789
    var inputphone = document.createElement("input");
    inputphone.setAttribute("placeholder","123456789");
    inputphone.setAttribute("class"," mt-3 ml-1")
    
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
//
function checkerror() {
    // tra ve the arr toan bo the input 
    var arr_el_input = document.getElementsByTagName("input");
    // loop get value input
    for (let i=0; i<= arr_el_input.length; i++) {
        //get input value
        var el_input = arr_el_input[i];
        //
        if (el_input.value.trim() == "") {
            var num_el = el_input.parentElement.childElementCount;
            //
            if (num_el == 2 || num_el == 5) {
                var error_p = document.createElement("p");
                error_p.setAttribute("class"," error")
                var err = document.createTextNode("Pls, Hãy nhập đầu đủ thông tin.");
                error_p.appendChild(err);
                el_input.parentElement.appendChild(error_p);
            }
        }
    }
}

$("id_bt_submit").onclick = checkerror;