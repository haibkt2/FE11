function $(id) {
    return document.getElementById(id);
}

function removeEmail() {
    var email_counter = $("emailDiv").childElementCount;
    if (email_counter > 1) {
        var revEmail = this.parentElement.remove();
    } else {
        alert("Khong the xoa input cuoi cung");
    }
}

function removePhone() {
    var phone_counter = this.parentElement.parentElement.childElementCount;
    if (phone_counter > 1) {
        var revPhone = this.parentElement.remove();
    } else {
        alert("khong the xoa email/cuoi cung");
    }
}

function addEmail() {
    var addDiv = document.createElement("div");
    addDiv.className = "mb-2 col-md-12"

    var addInp = document.createElement("input");
    addInp.type = "email";
    addInp.className = "form-control col-md-11";
    addInp.placeholder = "Enter email";

    var addI = document.createElement("i");
    addI.className = "fas fa-minus-circle col-md-1";
    addI.onclick = removePhone;

    addDiv.appendChild(addInp);
    addDiv.appendChild(addI);
    $("emailDiv").appendChild(addDiv);
}
$("emailAdd").onclick = addEmail;

function addPhone() {
    var phoneDiv = document.createElement("div");
    phoneDiv.className = "mb-2 col-md-12";

    var el_span1 = document.createElement("span");
    el_span1.appendChild(document.createTextNode("+"));
    el_span1.className = "col-md-1";

    var addPhone1 = document.createElement("input");
    addPhone1.type = "tel";
    addPhone1.className = "form-control col-md-2 mr-1 ml-1";
    addPhone1.placeholder = "84";

    var el_span2 = document.createElement("span");
    el_span2.appendChild(document.createTextNode("-"));
    el_span2.className = "col-md-1";

    var addPhone2 = document.createElement("input");
    addPhone2.type = "tel";
    addPhone2.className = "form-control col-md-8 ml-1";
    addPhone2.placeholder = "123456789";

    var delI = document.createElement("i");
    delI.className = "fas fa-minus-circle col-md-1";
    delI.onclick = removePhone;

    phoneDiv.appendChild(el_span1);
    phoneDiv.appendChild(addPhone1);
    phoneDiv.appendChild(el_span2);
    phoneDiv.appendChild(addPhone2);
    phoneDiv.appendChild(delI);
    $("phoneNumberDiv").appendChild(phoneDiv);
}
$("phoneNumberAdd").onclick = addPhone;
addPhone();
addEmail();

function check() {
    var arr_el_input = document.getElementsByTagName("input");
    for (let i=0; i<= arr_el_input.length; i++) {
        var el_input = arr_el_input[i];
        if (el_input.value.trim() == "") {
            var num_el = el_input.parentElement.childElementCount;
            if (num_el == 2 || num_el == 5) {
                var error_p = document.createElement("p");
                error_p.className = 'error';
                error_p.appendChild(document.createTextNode("Chua nhap thong tin"));
                el_input.parentElement.appendChild(error_p);
            }
        }
    }
}

$("submitBtn").onclick = check;
