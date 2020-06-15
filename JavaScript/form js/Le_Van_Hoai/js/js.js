var countBtn=document.getElementsByClassName("rowEmail");
var countBtnPhone = document.getElementsByClassName("rowPhone");

function $(id){
    return document.getElementById(id);
}

function emailAdd(){
    //Create thẻ div 
    var addRowEmail =document.createElement("div");
    addRowEmail.setAttribute ("class","row rowEmail");
    $("emailForm").appendChild(addRowEmail);

    //Create thẻ input email
    var addEmail = document.createElement("input");
    addEmail.setAttribute("type","email");
    addEmail.setAttribute("placeholder","Please input email");
    addEmail.setAttribute("class","form-control mx-2 col col-8 mb-2");
    addRowEmail.appendChild(addEmail);

    //Create icon remove
    var iconAdd=document.createElement("i");
    iconAdd.setAttribute("class","fas fa-minus-circle col col-2 mt-2 abc");
    addRowEmail.appendChild(iconAdd);

    

    iconAdd.onclick=function(){
        if (countBtn.length > 1){
            $("emailForm").removeChild(addRowEmail);
        }
        else{
            alert("Không thể xóa. Phải có ít nhất 1 trường email");
        }
    }
}

function emailRemove(){
    if (countBtn.length>1){
        var emailPar=document.getElementById("email");
        $("emailForm").removeChild(emailPar);
    }
    else{
        alert("Không thể xóa. Phải có ít nhất 1 trường email"); 
    }
}

function phoneAdd(){
    //Create thẻ div 
    var addRowPhone = document.createElement("div");
    addRowPhone.className=("row rowPhone");
    $("phoneForm").appendChild(addRowPhone);

    //create thẻ label +
    var addLabelPlus = document.createElement("label");
    addLabelPlus.className=("col col-1 mb-2");
    var addTextPlus=document.createTextNode("+");
    addLabelPlus.appendChild(addTextPlus);
    addRowPhone.appendChild(addLabelPlus);

    //create thẻ input +
    var addPhone1=document.createElement("input");
    addPhone1.setAttribute("type", "tel");
    addPhone1.setAttribute("placeholder","84");
    addPhone1.className=("form-control col col-1 mb-2");
    addRowPhone.appendChild(addPhone1);

    //create thẻ label -
    var addLabelMinus = document.createElement("label");
    addLabelMinus.className=("col col-1 mb-2");
    var addTextMinus=document.createTextNode("-");
    addLabelMinus.appendChild(addTextMinus);
    addRowPhone.appendChild(addLabelMinus);

    //create thẻ input -
    var addPhone2=document.createElement("input");
    addPhone2.setAttribute("type", "tel");
    addPhone2.setAttribute("placeholder","123456789");
    addPhone2.className=("form-control  mx-2 col col-5 mb-2");
    addRowPhone.appendChild(addPhone2);

    //Create icon remove
    var iconPhoneAdd=document.createElement("i");
    iconPhoneAdd.setAttribute("class","fas fa-minus-circle col col-2 mt-2 abc");
    addRowPhone.appendChild(iconPhoneAdd);

    var messAdd1 = document.createElement("span");
    var textMess1=document.createTextNode(" ");
    messAdd1.appendChild(textMess1);
    addRowPhone.appendChild(messAdd1);

    iconPhoneAdd.onclick=function(){
        if (countBtnPhone.length > 1){
            $("phoneForm").removeChild(addRowPhone);
        }
        else{
            alert("Không thể xóa. Phải có ít nhất 1 trường phone number");
        }
    }
    
    
}

function phoneRemove(){
    if (countBtnPhone.length>1){
        var PhonePar=document.getElementById("phone");
        $("phoneForm").removeChild(PhonePar);
    }
    else{
        alert("Không thể xóa. Phải có ít nhất 1 trường phone number"); 
    }
}
var inputEmaila = document.getElementsByTagName("input");
function processSubmit(){
   for (let i=0;i<inputEmaila.length;i++){
    if(inputEmaila[i].value.trim() ==""){
        /* var addMss =  inputEmaila[i].nextElementSibling;
        addMss.innerHTML="Please input value !";
        addMss.setAttribute("class","text-danger");
        inputEmaila[i].style.borderColor="red"; */
        var messAdd = document.createElement("span");
        var textMess=document.createTextNode("Please input value !");
        messAdd.className="text-danger col col-6";
        messAdd.appendChild(textMess);
        var num_el= inputEmaila[i].parentElement.childElementCount;
        if (num_el ==3 || num_el ==6){
            inputEmaila[i].parentElement.lastElementChild.remove();
            
        }
        inputEmaila[i].parentElement.appendChild(messAdd);
        inputEmaila[i].style.borderColor="red";
        
    }
    else{
        inputEmaila[i].style.borderColor="";
        if (num_el >2 || num_el >5){
            inputEmaila[i].parentElement.lastElementChild.remove();
        }
    }
   }
   
}

window.onload = function(){
    $("btnaddemail").onclick =emailAdd;
    $("btnaddphone").onclick=phoneAdd;
    $("btnRemoveEmail").onclick=emailRemove;
    $("btnRemovePhone").onclick=phoneRemove;
    $("submit").onclick=processSubmit;
}



