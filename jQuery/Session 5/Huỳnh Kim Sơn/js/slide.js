var image = [
    {link : "../image/anhbia4.png", title :"slide1"},
    {link : "../image/mon1.png", title :"slide2"}, 
    {link : "../image/mon2.png", title :"slide3"},
    {link : "../image/mon3.png", title :"slide4"}              
];
var i = 0;
function f_(argument){
    i = (++i) % image.length;
    $("#id_img").attr("src", image[i].link);
    $("#id_img").attr("alt", image[i].title);
    $("#id_caption").text(image[i].title);
    $("#id_img").slideToggle(1300);
    $("#id_caption").slideToggle(1300);
   
}
var play = setInterval(f_, 2000);
$("#id_stop").click(function(){
    if(play !=  null){
        clearInterval(play);
        play = null;
    } else {
        play = setInterval(f_, 2000);
    }
  });

// $("#id_slide").animate({
//     "top" : "50px",
//     "left" : "70px"
// },2000, function(){alert(333)}
// );
$("#id_slide").animate(
    {
        "width" : "1000px"
    },2000
).animate({
    "height" : "1000px"
},2000
);