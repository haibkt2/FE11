var animates=[
   {left:'600px', top:'600px', left1:'0px',   top1:'100px'},
   {left:'500px', top:'500px', left1:'100px', top1:'200px'},
   {left:'400px', top:'400px', left1:'200px', top1:'300px'},
   {left:'300px', top:'300px', left1:'300px', top1:'400px'},
];

$("#Run").click(function(){
   for(var i=0;i<3;i++){
      $('.div').animate({
         left:animates[i].left,
      },1000).animate({
         top: animates[i].top,
      },1000).animate({
         left: animates[i].left1, 
      },1000 ).animate({
         top: animates[i].top1,
      },1000);
   }
   $('.div').animate({
       left:'300px',
      },1000);
})