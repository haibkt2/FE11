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

    var messAdd = document.createElement("span");
    var textMess=document.createTextNode(" ");
    messAdd.appendChild(textMess);
    addRowEmail.appendChild(messAdd);

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
var abc = document.getElementsByClassName("abc");
function processSubmit(){
   for (var i=0;i<inputEmaila.length;i++){
    if(inputEmaila[i].value ==""){
        for (var j=0;j<abc.length;j++){
            var addMss =  abc[j].nextElementSibling;
            addMss.innerHTML="Please input value !";
            addMss.setAttribute("class","text-danger");
            $("inputEmail").setAttribute("class","form-control mx-2 col col-8 mb-2 border border-danger");
     }
    }
    else{
        for (var j=0;j<abc.length;j++){
        var addMss =  abc[j].nextElementSibling;
        addMss.innerHTML="";
        $("inputEmail").setAttribute("class","form-control mx-2 col col-8 mb-2");
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



