$().ready(function(){

    $("#edit").hide();
    $("#add").click(function(){
        $("#edit").show();
    });
    $.validator.addMethod("select", function(){
        var a = $("#list2 option").text();
        if ( a == '') {
            return false;
        }
        return true;
    });
    $.validator.addMethod("number", function(){
        var b = $("#max").val();
        if ( b <= 0 ) {
            return false;
        }
        return true;
    });
    $.validator.addMethod("nameCompany", function(){
        var c = $("#company").val().trim();
        if ( c == '' ) {
            return false;
        }
        return true;
    });
    $("#form").validate({
        rules: {
            company: { required: true, nameCompany: true},
            operating: "required",
            max: { required: true, number: true},
            list2:  { select: true }
        },
        messages: {
            company: "Please enter company name",
            operating: "Please check",
            max: "Please enter Max Working Hours > 0",
            list2: { select: "Please select Whitelisted Zone" }
        },
        submitHandler:  function registerForm(){
            var whitelisted = $("#list2 option").text();
            var userInput = $('#company').val();
            var userReg = localStorage.getItem(userInput);
            userReg = JSON.parse(infoUser);
            if ( userReg == null ){
                var user = new user_obj ( userInput, $('#color2').val(), $('#max').val(), whitelisted, $('#status2').val());
                user = JSON.stringify(user);
                localStorage.setItem(userInput, user);
                $('#form').reset();
                $("#edit").hide();
            } else {
                alert("Tên công ty đã tồn tại");
                $("#company").focus();
            }
        }
    })
});
