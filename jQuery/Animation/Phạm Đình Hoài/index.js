   setTimeout   (function animation() {
       var i = 0;
       var j = 0;
       do {
           i += 50;
           j += 50;
           $("#div").animate({ "top":650-i ,backgroundColor: 'blue' }, 1000 ).animate({ "left": 650-j, backgroundColor: 'yellow' }, 1000 ).
           animate({ "top": i, backgroundColor: 'purple' }, 1000 ).animate({ "left": j, backgroundColor: 'red' }, 1000 ); 
        } while (( i !== 300 ) && ( j !== 300));
        },1000)