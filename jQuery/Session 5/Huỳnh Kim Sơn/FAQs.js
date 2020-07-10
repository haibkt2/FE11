$(document).ready(function(){
    $("h3").next().hide(); 
    $("h3").click(function(){
       $(this).toggleClass("fast");
       if($(this).attr("class") == "fast"){
            $(this).next().show();
            $(this).css("color","blue");

        } else {
            $(this).next().hide(); 
            $(this).css("color","black");
             
       }
    });
}); 


