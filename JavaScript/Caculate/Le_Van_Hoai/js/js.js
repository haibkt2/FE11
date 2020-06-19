function $(id) { 
    return document.getElementById(id); 
};
function getAmount(){
    if  ($("selectCustomer").value==="other" && parseFloat($("invoiceSub").value)>=10000){
        $("discountAmount").disabled=false;
    }
    else
        $("discountAmount").disabled=true;
}
function valid(value,condition){
    var checked =(isNaN(value) || value < 0 || value > condition ? true: false);
    if(checked){
        alert("Please input again!");
        $("form").reset();
        $("invoiceSub").focus();
    }
    return checked;
}
function processCaculate() {
    var customerType = $("selectCustomer").value;
    var invoiceSubtotal = parseFloat( $("invoiceSub").value );
    $("invoiceSub").value = invoiceSubtotal.toFixed(2);
    var discountPercent = 0;
    var discountAmount =0;
    if (invoiceSubtotal <10000){
        discountAmount =0;
        discountPercent=0.1;
    }
    else if (customerType === "lay") {
        discountAmount =200;
        if (invoiceSubtotal < 15000) {
            discountPercent = 0.1;
        } 
        else{
            discountPercent = 0.15;
        }
    } 
    else if (customerType === "honer") {
        discountAmount =300;
        if (invoiceSubtotal < 15000) {
            discountPercent = 0.15;
        } 
        else{
            discountPercent = 0.2;
        }
    } 
    else if (customerType === "other") {
        discountPercent = 0.15;
        discountAmount=parseFloat($("discountAmount").value);
    }  
    var invoiceTotal;
    invoiceTotal = invoiceSubtotal * discountPercent - discountAmount;
    $("discountPer").value = (discountPercent * 100).toFixed(2) ;
    $("discountAmount").value = discountAmount.toFixed(2);
    $("invoiceTotal").value = invoiceTotal.toFixed(2);
    valid(parseFloat($("discountAmount").value),500);
    valid(parseFloat($("invoiceSub").value),Math.max);
}

window.onload = function() {
$("btnCaculate").onclick = processCaculate;
$("selectCustomer").onchange=getAmount;
$("invoiceSub").onchange=getAmount;
}