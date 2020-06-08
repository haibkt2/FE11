
//tất cả giá trị mà người dùng input trong thẻ input đều là string 
/*var a_num = prompt("Nhập a:");
var b_num = prompt("Nhập b:");
var c_num = prompt("Nhập c:");

var max =Math.max(a_num,b_num,c_num);
document.writeln("so lon nhat la:"+max);
var min =Math.min(a_num,b_num,c_num);
document.writeln("so nho nhat la:"+min);*/



/*var sum_bc=0;
for(var num=0;num<=1000;num++){
    if((num%3==0)&&(num%5==0)){
        document.writeln(num+"<br>");
        sum_bc=bc+num;
        
    }
}
document.write("tong boi so la"+sum_bc);*/


/*var arr = new Array(1,2,4,5,"hoái","ức");
for(var i=0 ; i<arr.length; i++){
    document.writeln(arr[i]+"<br>");
}*/

//boi chung cua 5 va 3
/*
var arr = [];
var index=0;
for(var i=0; i<1000; i++){
    if((i%3==0)&&(i%5==0)){
        arr[index]=i;
        index++;        
    }
}
for(var j=0; j<arr.length; j++){    
        document.writeln(arr[j]+"<br>");   
}
*/


//nhap n ptu neu khong nhap thi n=5
var num_n = prompt("nhap n so ptu:",5);
//nhap diem vao mang roi in ra
var arrn = [];
for(var i=0 ; i<num_n ; i++){    
        arrn[i]= prompt("nhap diem i:");  
        document.write("Diem hoc sinh:"+arrn[i]+"<br>"); 
}
//so hoc sinh co diem >=5
var dem =0;
for(i=0 ; i<arrn.length ; i++){
    if(arrn[i]>=5){
        dem=dem+1;
        document.write("hoc sinh co diem >=5 :"+arrn[i]+"<br>");        
    }
}
document.write("so hoc sinh co diem lon hon hoac bang 5 la:"+dem+"<br>");

//add them diem vao mang
arrn=arrn.concat([7,8.5,9]);

arrn.sort(function(a, b){return b - a});
document.write(arrn+"<br>");
