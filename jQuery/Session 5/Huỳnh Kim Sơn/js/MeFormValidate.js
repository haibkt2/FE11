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
            email : {
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
            phone: {
                required : true ,
                minlength:10,
                maxlength:10
            }
        },
        messages : {
            email: {
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
            phone: {
                required : "Vui lòng mời bạn nhập Phone number." ,
                minlength : " Vui lòng mời bạn nhập đúng Phone number không dưới 10 số. ",
                maxlength : " Vui lòng mời bạn nhập đúng Phone number không quá 10 số. "
            }
        },
        // display
        submitHandler : function(form){ 
            var email = $("#id_email").val();
            var password = $("#id_password").val();
            var verifypassword = $("#id_verify").val();
            var company = $("#id_company").val();
            var firstname = $("#id_first").val();
            var lastname = $("#id_last").val();
            var phone = $("#id_phone").val();
            //
            $("#show_email").html("<b>Email Address:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + email);
            $("#show_pass").html("<b>Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + password);
            $("#show_verify").html("<b>Verify Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + verifypassword);
            $("#show_company").html("<b>Company Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + company);
            $("#show_first").html("<b>First Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + firstname);
            $("#show_last").html("<b>Last Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + lastname);
            $("#show_phone").html("<b>Phone Number:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + phone);
        }
        //
        // $.ajax({
        //     type : "get",
        //     url : "http://192.168.2.109:8080/DemoFE/demo.jsp?fbclid=IwAR04128mjkIVpqDry2KoXs1EttPOPS_mvqnO2VeQ3zeIxKB59GpECTPmw7Q",
        //     beforeSend: function() {$("#id_form").html("Loading...");},
        //     timeout : 10000,
        //     error : function(xhr, status, error){
        //         alert("Error : " + xhr.status + "-" + error);
        //     },
        //     dataType : "xml",
        //     success : function(data){
        //         $("#id_form").html("");
        //         $(data).find("management").children().each(function(){
        //             var xmlDoc =  $(this);
        //             $("#show").html(data);
        //         })
        //     }

        // })
    
    })
});
$("#bt_submit").click(function(){
    $.ajax({
        type : "get",
        url : "http://192.168.2.109:8080/DemoFE/demo.jsp",
        data : $("#id_form").serialize(),
        success : function(data){
            $("#show").html(data); 
        }
    })
})