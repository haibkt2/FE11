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
        // check first name
        var first_name = $("#id_first").val().trim();
        if( first_name == "" || first_name == Number){
            $("#id_first").next().text("Input Information");

        } else {
            $("#id_first").next().text("");
        }
        // check last name
        var last_name = $("#id_last").val().trim();
        if( last_name == "" || last_name == Number){
            $("#id_last").next().text("Input Information");

        } else {
            $("#id_last").next().text("");
        }
       
    
});