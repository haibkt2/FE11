$(document).ready(function() {

    $("h2").click(function() {
        $( this ).next().toggle();
       
       
        if($( this ).attr("class")!="fas fa-plus"){
            $( this ).removeClass("fas fa-minus");
            $( this ).addClass("fas fa-plus");   
            
        }
       else{
            $( this ).removeClass("fas fa-plus");
            $( this ).addClass("fas fa-minus");
            
       }
     
    })
    

})
