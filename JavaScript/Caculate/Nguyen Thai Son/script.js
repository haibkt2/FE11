function $(id) {
    return document.getElementById(id);
}

function process() {
    var subtotal = $('subtotal').value;
    var customerType = $('customer_type').value;
    var percent = $('percent').value;
    var amount = $('amount').value;
    var total = $('total').value;

    if (subtotal == "") {
        alert("Enter a Invoice Subtotal value pls!")
        $('subtotal').focus();
    } else if (subtotal <= 0) {
        alert("Invoice Subtotal value must be >0")
        $('subtotal').focus();
    }

    if (subtotal <10000) {
        $('amount').disabled = true;
        amount = 0;
        percent = subtotal*(10/100);
        total = (subtotal*percent)-amount;
        $('amount').value = amount;
        $('percent').value = 10;
        $('total').value = total.toFixed(2);
    }

    if (subtotal >= 10000 && customerType == 'lay') {
        $('amount').disabled = true;
        amount = 200;
        $('amount').value = amount;
        if (subtotal < 15000) {
            percent = subtotal*(10/100);
            $('percent').value = 10;
        } else {
            percent = subtotal*(15/100);
            $('percent').value = 15;
        }
        total = (subtotal*percent)-amount;
        $('total').value = total.toFixed(2);
    }

    if (subtotal >= 10000 && customerType == 'honor') {
        $('amount').disabled = true;
        amount = 300;
        $('amount').value = amount;
        if (subtotal < 15000) {
            percent = subtotal*(15/100);
            $('percent').value = 15;
        } else {
            percent = subtotal*(20/100);
            $('percent').value = 20;
        }
        total = (subtotal*percent)-amount;
        $('total').value = total.toFixed(2);
    }

    if (subtotal >= 10000 && customerType == 'other') {
        percent = subtotal*(15/100);
        $('percent').value = 15;
        $('amount').disabled = false;

        if (amount <= 0) {
            alert("Discount Amount must be > 0");
            $('amount').focus();
        }

        if (amount == "") {
            alert("Enter a Discount Amount value pls!");
            $('amount').focus();
        }

        if (amount > 500) {
            alert("Discount Amount value must be <500");
            $('amount').focus();
        }

        if (amount > 0 && amount < 500) {
            total = (subtotal*percent)-amount;
            $('total').value = total.toFixed(2);
        }
    }
}

$('calculate').onclick = process;
$('customer_type').onchange = process;
$('subtotal').onchange = process;