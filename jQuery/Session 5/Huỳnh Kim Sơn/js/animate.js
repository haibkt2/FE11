
$(document).ready(function(){
    $("#id_start").click(function(){
        $(".child").animate({left:'450px'},1000);
        $(".child").animate({top:'450px'},1000);
        $(".child").animate({left:'0px'},1000);
        $(".child").animate({top:'50px'},1000);

        $(".child").animate({left:'400px'},900);
        $(".child").animate({top:'400px'},900);
        $(".child").animate({left:'50px'},900);
        $(".child").animate({top:'100px'},900);

        $(".child").animate({left:'350px'},800);
        $(".child").animate({top:'350px'},800);
        $(".child").animate({left:'100px'},800);
        $(".child").animate({top:'150px'},800);

        $(".child").animate({left:'300px'},700);
        $(".child").animate({top:'300px'},700);
        $(".child").animate({left:'150px'},700);
        $(".child").animate({top:'200px'},700);

        $(".child").animate({left:'250px'},600);
        $(".child").animate({top:'250px'},600);
        $(".child").animate({left:'200px'},600);
        $(".child").animate({top:'250px'},600);

        $(".child").animate({top:'225px'},500);
        $(".child").animate({left:'225px'},500);

    });
});