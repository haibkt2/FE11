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
// add zone.
$("#addZone").click(
    function addZone(){
        var v_input = $("#list").val();
        if (v_input == ""){
            alert("Pls, tick option. Thanks!");
        } else {  
            for (var i = 0; i < v_input.length; i++){
                var out_put =
                    "<option>"
                    + v_input[i]
                    + "</option>"  
                    $("#list2").append(out_put);
                    $("#list option[value='"+ v_input[i] +"']").remove();
            } 
    }
}
)
// remove zone.
$("#removeZone").click(
    function removeZone(){
        var tick_remove = $("#list2").val();
        if (tick_remove == ""){
            alert("Pls, tick option remove. Thanks!");
        } else {  
            for (var i = 0; i < tick_remove.length; i++){  
                    $("#list2 option[value='"+ tick_remove[i] +"']").remove();
            } 
    }
    }
)

// function removeZone(selectedZoneValue2, selectedZone2) {
//     $("#list").append('<option value="' + selectedZoneValue2 + '">' + selectedZone2 + '</option>');
//     $("#list2 option[value='"+selectedZoneValue2+"']").remove();
// }
// $("#removeZone").click(function () {
//     var selectedZoneValue2 = $('#list2').val();
//     if( selectedZoneValue2 == "" )
//     {
//         return false;
//     }
//     var selectedZone2 = $("#list2 option[value='"+selectedZoneValue2+"']").text();
    
//     removeZone(selectedZoneValue2, selectedZone2);
// })
