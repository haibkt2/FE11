$(document).ready(function(){
    $("h3").next().hide(); 
    $("h3").click(function(){
       $(this).toggleClass("fa fa-minus");
       if($(this).attr("class") == "fa fa-minus"){
            $(this).next().show();
            $(this).css("color","blue");

        } else {
            $(this).next().hide(); 
            $(this).css("color","black");
             
       }
    });
}); 


