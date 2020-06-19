function $(id) {
    return document.getElementById(id);
}

function valid(value) {
    var check = isNaN(value) || value < 0 || value <= 500 ? true : false;
    if (check) {
        alert("please again");
        $("id_form").reset();
        $("getinputInvoice").focus();
    }
    return check;
}


function calulate() {
    var getValueOption = $("id_selection").value;
    var getinputInvoiceSubtotal = $("getinputInvoice").value;
    var getPercent = $("getValuePercent").value;
    var getAmount = $("amount").value;
    valid(getinputInvoiceSubtotal);
    valid(getAmount);
    if (getValueOption === "0") {
        $("amount").setAttribute("value", "200");
        if (getinputInvoiceSubtotal > 15000) {
            $("getValuePercent").setAttribute("value", "10");
        } else {
            $("getValuePercent").setAttribute("value", "15");
        }
    }
    if (getValueOption === "1") {
        $("amount").setAttribute("value", "300");
        if (getinputInvoiceSubtotal > 15000) {
            $("getValuePercent").setAttribute("value", "15");
        } else {
            $("getValuePercent").setAttribute("value", "20");
        }
    }
    if (getValueOption === "2") {
        $("getValuePercent").setAttribute("value", "15");
    }
    var tt = 0;
    getinputInvoiceSubtotal = parseInt(getinputInvoiceSubtotal);
    getPercent = parseInt(getPercent);
    getAmount = parseInt(getAmount);
    tt = getinputInvoiceSubtotal * (getPercent / 100) - getAmount;
    $("sum").value = tt;
}

function getValuePercent() {
    var getValueOption = $("id_selection").value;
    var getinputInvoiceSubtotal = $("getinputInvoice").value;
    if (getinputInvoiceSubtotal < 1000) {
        $("getValuePercent").setAttribute("value", "10");
        $("amount").setAttribute("value", "0");
    } else if (getValueOption === "2" && getinputInvoiceSubtotal > 1000) {
        $("amount").disabled = false;
    } else {
        $("amount").disabled = true;
    }
}
$("btn").onclick = calulate;
$("id_selection").onchange = getValuePercent;
$("getinputInvoice").onchange = getValuePercent;