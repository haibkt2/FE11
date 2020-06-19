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
    getPercent = parseFloat(getPercent);
    getAmount = parseFloat(getAmount);
    tt = getinputInvoiceSubtotal * (getPercent / 100) - getAmount;
    tt = parseFloat(tt);
    $("sum").value = tt;
}

function getValuePercent() {
    var getValueOption = $("id_selection").value;
    var getinputInvoiceSubtotal = $("getinputInvoice").value;
    if (getinputInvoiceSubtotal < 10000) {
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
// sử dụng swich case : với 3 điều kiện trở lên
// function caculate() {
//     var t, s, a, p, c;
//     var v = $("getinputInvoice").value;
//     if (!valid(v, Math.max)) {
//         v = Math.parseFloat(v);
//         if (v < 10000) {
//             a = 0;
//             p = 0.1;
//         } else {
//             var v_select = $("id_selection").value;
//             switch (v_select) {
//                 case 0:
//                     a = 200;
//                     p = (s < 15000) ? 0.1 : 0.15;
//                     break;
//                 case 1:
//                     a = 300;
//                     p = (s < 15000) ? 0.15 : 0.2;
//                     break;
//                 case 3:
//                     a = $("amount").value;
//                     if (valid(a, 500)) {
//                         c = false;
//                     } else {
//                         a = parseFloat(a);
//                         p = 0.15;
//                     }
//                     break;
//                 default:
//                     displayEror();
//             }
//         }
//         if (c) {
//             t = s * p - a;
//         }
//     }
// }