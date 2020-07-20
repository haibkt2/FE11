$().ready(function(){
    // check radio disabled
    $(":radio").change(
        function(){
            var check_radio = $(":radio:checked").val();
            if(check_radio == "0"){
                $("#id_company").attr("disabled",true);
                $("#id_company").next().text("");
            } else {
                $("#id_company").attr("disabled",false);
                $("#id_company").next().text("*");
            }
        }
    )
    // submit validate()
    $("#id_form").validate({
        rules : {
            emailaddress: {
                required : true ,
                email : true
            },
            password: {
                required : true ,
                minlength : 8
            },
            verifypassword: {
                equalTo : "#id_password" ,
                minlength : 8
            },
            company: {
                required : true 
            },
            firstname: {
                required : true 
            },
            lastname: {
                required : true 
            },
            phonenumber: {
                required : true ,
                minlength:10,
                maxlength:10
            }
        },
        messages : {
            emailaddress: {
                required : "Vui lòng mời bạn nhập email." ,
                email : "Vui lòng mời bạn nhập đúng email."
            },
            password: {
                required : "Vui lòng mời bạn nhập Password." ,
                minlength : "Vui lòng mời bạn nhập Password lớn hơn 8 kí tự."
            },
            verifypassword: {
                equalTo : "Vui lòng mời bạn nhập đúng Password" ,
                minlength : "Vui lòng mời bạn nhập Password lớn hơn 8 kí tự ."
            },
            company: {
                required : "Vui lòng mời bạn nhập Company name." ,
            },
            firstname: {
                required : "Vui lòng mời bạn nhập First name." ,
            },
            lastname: {
                required : "Vui lòng mời bạn nhập Last name." ,
            },
            phonenumber: {
                required : "Vui lòng mời bạn nhập Phone number." ,
                minlength : " Vui lòng mời bạn nhập đúng Phone number không dưới 10 số. ",
                maxlength : " Vui lòng mời bạn nhập đúng Phone number không quá 10 số. "
            }
        },
        // display
        submitHandler : function(form){
            
            $("#show_email").html("<b>Email Address:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + emailaddress);
            $("#show_pass").html("<b>Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + password);
            $("#show_verify").html("<b>Verify Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + verifypassword);
            $("#show_company").html("<b>Company Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + company);
            $("#show_first").html("<b>First Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + firstname);
            $("#show_last").html("<b>Last Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + lastname);
            $("#show_phone").html("<b>Phone Number:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + phonenumber);
            
            form.submit();
        }
    })
});