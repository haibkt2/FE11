$(".hs").click(function(){
   $(this).toggleClass("fa-plus");
   $(this).next().toggleClass("col");
   $(this).next().next().toggle();
})