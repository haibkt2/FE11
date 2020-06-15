function $(id) {
    return document.getElementById(id);
}

function addEmail() {
    var addInp = document.createElement("input");
    addInp.type = "email";
    addInp.className = "form-control col-md-11 mb-2 emailInp";
    addInp.placeholder = "Enter email";

    var addI = document.createElement("i");
    addI.className = "fas fa-minus-circle col-md-1 mb-2 emailDel";
    addI.onclick = function () {
        $("emailDiv").removeChild(addInp);
        $("emailDiv").removeChild(addI);
    }
    $("emailDiv").appendChild(addInp,emailDiv[0]);
    $("emailDiv").appendChild(addI,emailDiv[1]);
}
$("emailAdd").onclick = addEmail;

function addPhone() {
    var addPhone1 = document.createElement("input");
    addPhone1.type = "tel";
    addPhone1.className = "form-control col-md-2 mr-1 ml-1 mb-2 phoneInp1";
    addPhone1.placeholder = "84";

    var addPhone2 = document.createElement("input");
    addPhone2.type = "tel";
    addPhone2.className = "form-control col-md-8 ml-1 mb-2 phoneInp2";
    addPhone2.placeholder = "123456789";

    var delI = document.createElement("i");
    delI.className = "fas fa-minus-circle col-md-1 mb-2 phoneNumberDel";
    delI.onclick = function() {
        $("phoneNumberDiv").removeChild(addPhone1);
        $("phoneNumberDiv").removeChild(addPhone2);
        $("phoneNumberDiv").removeChild(delI);
    }
    $("phoneNumberDiv").appendChild(addPhone1,phoneNumberDiv[0]);
    $("phoneNumberDiv").appendChild(addPhone2,phoneNumberDiv[1]);
    $("phoneNumberDiv").appendChild(delI,phoneNumberDiv[2]);
}
$("phoneNumberAdd").onclick = addPhone;