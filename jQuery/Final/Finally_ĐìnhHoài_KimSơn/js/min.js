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
// Start Check Form !
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
            max: "Pls enter Max Working Hours > 0",
            list2: { select: "Please select Whitelisted Zone" }
        },
        submitHandler:  function(){
            var company = $('#company').val();
            var userReg = localStorage.getItem(company);
            //userReg = JSON.parse(infoUser);
            if ( userReg == null ){
                var user = new user_obj ( company,
                                            $('#max').val(),
                                            $('#status2').val(),
                                            $('#color2').val(), 
                                            $("#list2 option").text()
                );
                user = JSON.stringify(user);
                localStorage.setItem( company, user);
                alert('Save Thành Công !')
                $("#edit").hide();
                //
                var info_use = localStorage.getItem($('#company').val());
                    info_use = JSON.parse(info_use);
                    if(info_use != null){ 					
                        $("#tbody").html(  
                            '<tr class=tr>'
                                + '<td> <input type="checkbox" class="checkbox">' + '</td>'
                                + '<td class="company">' + info_use.company + '</td>'
                                + '<td>' + info_use.color2 + '</td>'
                                + '<td>' + info_use.max + '</td>'
                                + '<td>' + info_use.list2 + '</td>'
                                + '<td>' + info_use.status2 + '</td>'
                                + '<td id = "fix_company" class="fa fa-paint-brush fix" ' + '</td>'
                                + '<td id = "remove_company" class="fa fa-shopping-basket" ' + '</td>'  
                            + '</tr>' )
                    } else {
                            alert("Sorry, No company information ! ");
                    }
            } else {
                alert("Tên công ty đã tồn tại");
                $("#company").focus();
            }
        }
}) // End Check Form !
    var user_obj = function(company, max, status2, color2, list2){
        this.company = company;
        this.max = max;
        this.status2 = status2;
        this.color2 = color2;
        this.list2 = list2;
    }

});

// Start Add Zone !
$("#addZone").click(
    function addZone(){
        var tick_add = $("#list").val();
        if (tick_add == ""){
            alert("Pls, tick option. Thanks!");
        } else {  
            for (var i = 0; i < tick_add.length; i++){
                var create_option = document.createElement("option");
                    create_option.setAttribute("value", i);
                var textnode_option = document.createTextNode("Zone " + tick_add[i]);
                    create_option.appendChild(textnode_option);
                $("#list2").append(create_option);
                $("#list option[value='"+ i +"']").remove();
            } 
    }
}
) // End Add Zone !
// Start Remove Zone !
$("#removeZone").click(
    function removeZone(){
        var tick_remove = $("#list2").val();
        if (tick_remove == ""){
            alert("Pls, tick option remove. Thanks!");
        } else {  
            for (var i = 0; i < tick_remove.length; i++){  
                var create_option = document.createElement("option");
                    create_option.setAttribute("value", i);
                var textnode_option = document.createTextNode("Zone " + tick_remove[i]);
                    create_option.appendChild(textnode_option);
                $("#list").append(create_option);
                $("#list2 option[value='"+ i +"']").remove();    
            } 
    }
}
) // End Remove Zone !

