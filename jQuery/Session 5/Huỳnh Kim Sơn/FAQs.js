$(document).ready(function(){
    $("h3").click(function(){
       $(this).toggleClass("fast");
       if($(this).attr("class") == "fast"){
            
            $(this).next().show();
            $(this).css("color","blue");
            //$("h1").css("color","black");

        } else {
            $(this).next().hide(); 
            $(this).css("color","black");
            //$("h1").css("color","blue");
             
       }
    });
}); 


