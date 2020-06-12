
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


/* //nhap n ptu neu khong nhap thi n=5
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
    }
}
document.write("so hoc sinh co diem lon hon hoac bang 5 la:"+dem+"<br>");
//add them diem vao mang
arrn=arrn.concat(["7","7","9"]);

arrn.sort(function(a, b){return b - a});
document.write(arrn+"<br>");
 */

 //window-> sự kiệnload                                                                                        
//button-> sự kiện click
//control or link
/* function $(id){
    return document.getElementById(id);
  }
function ClickA(){

    alert("Clicked");
}
$("id_bt").onclick =function(){
    $("id").removeAttribute("class_");
    $("id").setAttribute()
}
window.onload = function(){
    $("in1").ondblclick = ClickA;
    $("id_bt").onclick = ClickA;
}
//xuất ra valua là array
//var div = document.getElementsByTagName("div");
var div = document.getElementsByClassName("class");
var div = document.getElementsByName("id_");
var a = document.getElementsByName("mail");
/* var a =bl_div.childNodes[1].firstChild.nodeValue();
var ani = $("in1").firstChild.nodeValue;
$("in1").firstChild.nodeValue="mot hia\\"; */

//

/* document.getElementById("id_").setAttribute("class_"," class_n");
document.getElementById("id_").getAttribute("class_"); */
function $(id){
    return document.getElementById(id);
  }


$("id_i").onclick = function(){
    //tao input
    var el1 = document.createElement("input");
    el1.style = "email";
    el1.className = "class1 col-6";
    el1.placeholder = "Enter email";
    $("div1").appendChild(el1,"id_i");

    //tao i
    var eli = document.createElement("i");
    eli.className = "fas fa-minus-circle pl-2";
    $("div1").appendChild(eli,"id_i");
}
/* function remoel(){
    var pt_el = document.getElementsByTagName("input");
    pt_el.remove();
    var pt_el1 = document.getElementsByTagName("i");
    pt_el1.remove();
} */




$("id_i3").onclick = function(){
    //tao span
    var sp = document.createElement("span");
    var node = document.createTextNode("+");
    sp.appendChild(node);
    $("div2").appendChild(sp,"id_i3");

    //tao input 1
    var el2 = document.createElement("input");
    el2.style = "text";
    el2.className = "col-1 pl-2";
    el2.placeholder = "84";
    $("div2").appendChild(el2,"id_i3");

    //tao span
    var sp1 = document.createElement("span");
    var node1 = document.createTextNode("-");
    sp.appendChild(node1);
    $("div2").appendChild(sp1,"id_i3");

    //tao input 2
    var el3 = document.createElement("input");
    el3.style = "tel";
    el3.className = "col-5";
    el3.placeholder = "123465789";
    $("div2").appendChild(el3,"id_i3");

    //tao i
    var eli = document.createElement("i");
    eli.className = "fas fa-minus-circle pl-2 pt-2";
    $("div2").appendChild(eli,"id_i3");
}



