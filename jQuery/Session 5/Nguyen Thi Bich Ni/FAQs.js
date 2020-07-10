var hoverr = $("#hoverr");
$(document).ready(function() {
    $("#hoverr").next().hide();
    $("#hoverr").hover(function() {
        $(this).toggleClass("div");
        //$(this).toggleClass("fa fa-minus text-primary");
        if ($(this).attr("class") !== "div") {
            $(this).next().hide();
            hoverr.css("color","blue");
        } else {
            $(this).next().show();
        }
    })
})
/*var div = $(".div");

hoverr.hover(function(){
    hoverr.mouseover(function(){
        hoverr.css("color","pink");
    }),
    hoverr.mouseout(function(){
        hoverr.css("color","blue");
        div.hide();
    })   
})*/

