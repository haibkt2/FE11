$(document).ready(function(){
    //focus vao input email
    $("#id_email").focus();
    //event radio
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
    //check submit
    $("#id_submit").click(
        function(){
        //check email
        var check_email = $("#id_email").val().trim();
        var rule_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( check_email == ""){
            $("#id_email").next().text("Pls, This field is required.");

        }
        else if (!rule_email.test(check_email)) {
            $("#id_email").next().text("Please enter a valid e-mail address.");
  
        } else {
            $("#id_email").next().text("");

        }

        //check pass
        var pass = $("#id_password").val().trim();
        if(pass.length < 6 || pass == ""){
            $("#id_password").next().text("Must be 6 or more characters.");
        }
        else {
            $("#id_password").next().text("");

        }
       
        //check Verify pass 
        var verify_pass = $("#id_verify").val().trim();
        if (pass !== verify_pass || verify_pass == ""){
            $("#id_verify").next().text("Must equal first password entry.");

        } else {
            $("#id_verify").next().text("");

        }

        // check company
        if( !$("#id_company").attr("disabled")){
            var company_name = $("#id_company").val().trim();
                if( company_name == ""){
                    $("#id_company").next().text("Pls, This field is required.");
    
                } else {
                     $("#id_company").next().text("");
                }
        }

        // check first name
        var first_name = $("#id_first").val().trim();
        if( first_name == ""){
            $("#id_first").next().text("Pls, This field is required.");

        } else {
            $("#id_first").next().text("");
        }

        // check last name
        var last_name = $("#id_last").val().trim();
        if( last_name == ""){
            $("#id_last").next().text("Pls, This field is required.");

        } else {
            $("#id_last").next().text("");
        }
       // check phone
       var check_phone = $("#id_phone").val().trim();
       var rule_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;
       if( check_phone == "" ){
            $("#id_phone").next().text("Pls, This field is required.");

       } else if( !rule_phone.test(check_phone)){
           $("#id_phone").next().text("Pls, Use 09XX-XXX-XXX.");

       } else {
           $("#id_phone").next().text("");

       }

       // display 
        $("#show_email").html("<b>Email Address:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + check_email);
        $("#show_pass").html("<b>Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + pass);
        $("#show_verify").html("<b>Verify Password:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + verify_pass);
        $("#show_company").html("<bCompany Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + company_name);
        $("#show_first").html("<b>First Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + first_name);
        $("#show_last").html("<b>Last Name:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + last_name);
        $("#show_phone").html("<b>Phone Number:</b>"  + '&nbsp' + '&nbsp' + '&nbsp' + check_phone);

       
    })
   
});