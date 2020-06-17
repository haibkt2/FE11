function $(id){
    return document.getElementById(id);
}
function createElements(tag){
	return document.createElement(tag);
}
/*
function addEmail(){
    var input = document.createElement("input");
    input.type = "email";
    input.className = "form-control col-md-11 mb-2";
    input.placeholder = "Enter email"

    var icon = document.createElement("i");
    icon.className = "fa fa-minus-circle ml-2";
    $("emailDiv").appendChild(input);
    $("emailDiv").appendChild(icon);
    icon.onclick = removeEmail;
}*/ 

function addEmail(){    //ADD EMAIL
	var el_div = createElements("div");
    el_div.className = "form-group form-inline col-md-12 col-sm-12";

    var el_input = createElements("input");
    el_input.type = "email";
    el_input.placeholder = "Enter email"
    el_input.className = "form-control col-md-11 col-sm-11 mb-2";
	//add attribute for tag input
    var el_i = createElements("i");
    el_i.className = "fa fa-minus-circle ml-2 iInput";
	//add attribute for tag i
	//append input and i tag into div tag
	el_div.appendChild(el_input);
	el_div.appendChild(el_i);
    $("id_div_mail").appendChild(el_div);
    el_i.onclick = removeEmail; //remove

    
}
function removeEmail (){ //REMOVE EMAIL
        var el_i = this;
        var el_div_parent = this.parentElement;
        el_div_parent.remove();
        	
}
function addPhone(){ //ADD PHONE
    var el_div_phone = createElements("div");
    el_div_phone.className = "form-group form-inline col-md-12 col-sm-12";
    
    var el_span = createElements("span");
    el_span = document.createTextNode("+");
    
    var el_input_phone = createElements("input");
    el_input_phone.placeholder = "84";
    el_input_phone.className = "form-control col-md-2 col-sm-2 mr-1 ml-1";

    var el_span2 = createElements("span");
    el_span2 = document.createTextNode("-");

    var el_input_phone2 = createElements("input");
    el_input_phone2.placeholder = "123456789";
    el_input_phone2.className = "form-control col-md-8 col-sm-8 ml-1";

    var el_i_phone =  createElements("i");
    el_i_phone.className = "fa fa-minus-circle ml-2 iInput";

    el_div_phone.appendChild(el_span);
    el_div_phone.appendChild(el_input_phone);
    el_div_phone.appendChild(el_span2);
    el_div_phone.appendChild(el_input_phone2);
    el_div_phone.appendChild(el_i_phone);
    $("id_div_phone").appendChild(el_div_phone);

    el_i_phone.onclick = removePhone; //remove

}
function removePhone (){ //REMOVE PHONE
    var el_i_phone = this;
    var el_div_phone_parent = this.parentElement;
    el_div_phone_parent.remove();
}
var input_email = document.getElementsByTagName("input");
var iInput = document.getElementsByClassName("iInput");

window.onload = function() {
    $("emailAdd").onclick = addEmail;
    $("phoneAdd").onclick = addPhone;
    $("submit").onclick = checkSubmit;
    //$("submit").onclick = submitForm;
}
function checkSubmit(){
    var arr_el_input = document.getElementsByTagName("input");
    for(var i = 0; i<arr_el_input.length;i++){
       
    
       var el_input = arr_el_input[i];
       if(el_input.value.trim()==""){
          el_input.style.border = '2px solid red';
          var num_el = el_input.parentElement.childElementCount;
          if(num_el == 2 || num_el ==5){
             var text = document.createTextNode("Please enter the information again. ");
             var el_p = document.createElement("p");
             el_p.appendChild(text);
             el_p.style.color = "red";
             el_input.parentElement.appendChild(el_p);

         }
       }
    }
    
    
 }

/*function submitForm (){
    var arr_el_input = document.getElementsByTagName("input");
	//loop get value input
	for(let i = 0; i<= arr_el_input.length; i++){
		//get input value
		var el_input = arr_el_input[i];
		if (el_input.value.trim() == ""){
			el_input.className = "border border-danger";
			var num_el = el_input.parentElement.childElementCount;
			if (num_el == 2 || num_el == 5 ){
				el_input.parentElement.lastElementChild.remove();
			}
			
		}
	}
}*/

/*

function removePhone(){
    $("newPhone1").remove();
    $("newPhone2").remove();
    $("newPhone").remove();
 }
 
 $("phoneDel").onclick = removePhone;


function addPhone(){
    var phone1 = document.createElement("input");
    phone1.type = "text";
    phone1.className = "form-control col-md-2 mr-1 ml-1 mb-2";
    phone1.placeholder = "84";
    phone1.id = "newPhone1"

    var phone2 = document.createElement("input");
    phone2.type = "text";
    phone2.className = "form-control col-md-8 ml-1 mb-2";
    phone2.placeholder = "123456789";
    phone2.id = "newPhone2"

    var iconPhone = document.createElement("i");
    iconPhone.className = "fa fa-minus-circle  ml-2";
    iconPhone.id = "newPhone";
    $("phoneDiv").appendChild(phone1);
    $("phoneDiv").appendChild(phone2);
    $("phoneDiv").appendChild(iconPhone);
}
//$("emailAdd").onclick = addEmail;
//$("phoneAdd").onclick = addPhone;



/*
function submitForm(){
    var inputEmail = $("emailInp").value;
    var inputPhone = $("phoneInp").value;
    if(inputEmail.length>8) {
        $("form").submit();
    }else {
        console.log("Please enter input");
        $("form").reset();
 		$("emailInp").focus();
    }
}
$("submit").onclick = submitForm;
*/
