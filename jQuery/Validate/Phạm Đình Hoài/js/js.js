

$().ready( function() {
    $("#information").hide();
    $("#email").focus();
    $(":radio").change( function() {
        var radio = $(":radio:checked").val();
        if (radio == "1") {
            $("#company").attr("disabled", false);
            $("#company").addClass("user");
            $("#company").next().text("  *");
        }
        else {
            $("#company").attr("disabled", true);
            $("#company").removeClass("user");
            $("#company").next().text("");
        }
    })
    $.validator.addMethod ("checkEmail", function() {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test($('#email').val()) == false) 
        {
            return false;
        }
        return true;
});
    $("#form").validate({
        rules: {
            email: {
                required: true,
                email: true,
                checkEmail: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },
            firstname: "required",
            lastname: "required",
            phone: "required",
            company: "required"
        },
        messages: {
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: jQuery.validator.format("Your password must be at least {0} characters long")
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long",
                equalTo: "Please enter the same password as above"
            },
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
           
            company: "Please enter your company name",
            phone: "Please enter your phone number"
        },
        submitHandler:  function registerForm() {
            $("#register").hide();
            $("#information").show();
            var email = $("#email").val();
            var password = $("#password").val();
            var radio = $(":radio:checked").val();
            var fname = $("#name1").val();
            var lname = $("#name2").val();
            var phone = $("#phone").val();
            var member, company;
            if (radio == "1") {
                member = "Corporate";
                company = $("#company").val();
            } else {
                member = "Individual";
                company = "";
            }
            $("#information").html(
            '<h2 class="text-primary mt-3">Your Information</h2>'
            + '<p class = "mt-3">Email: ' +  email  + '</p> '
            + '<p class = "mt-3">Password: ' +  password  + '</p> '
            + '<p class = "mt-3">Membership type: ' +  member  + '</p> '
            + '<p class = "mt-3">Company Name: ' +  company  + '</p> '
            + '<p class = "mt-3">Họ: ' +  fname  + '</p> '
            + '<p class = "mt-3">Tên: ' +  lname  + '</p> '
            + '<p class = "mt-3">Phone Number: ' +  phone  + '</p> ')
            
        }
        
    })
});
    
  


/**function validation() {
    removeError();
    var arr_input = $(".user");
    for (let i = 0; i < arr_input.length; i++){
        var input = arr_input[i].value.trim();
        var inputType = arr_input[i].getAttribute("type");
        if (input == ''){
            arr_input[i].parentElement.innerHTML += '<p class = "text-danger error col-5 text-right">Please enter input </p> ';
            return false;
        }
        else {
        
        if (inputType == 'password'){ 
            if (input.length < 6){ 
                    arr_input[i].parentElement.innerHTML += '<p class = "text-danger error col-5 text-right">Password must be more 6 characters</p> ';
                    return false;
                }
            if (arr_input[i] == $("#repass")){
                var pass =  $("#password").val().trim();
                if (input !== pass){
                    arr_input[i].parentElement.innerHTML += '<p class = "text-danger error col-5 text-right">Password must be same </p> ';
                    return false;   
                    }
                }
        }
       
        }


    
}
return true;

}
$("#submit").click ( function registerUser() {
    // validate
    var c_valid = validation();
	// save info user to local
	if(c_valid) {
		registerForm();
	}
}
);
function removeError() {
    var error = $('.error');
    for ( let i = 0 ; i < error.length ; i++ ) {
        error[i].remove();
    }
}
*/