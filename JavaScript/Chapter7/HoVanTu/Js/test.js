
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
//function common creat element
/* function creatEl(tag){
    return document.createElement(tag);
} */
//xoa div con trong div cha 

 function removeEl(){
    //this
    //this.method();
    var eli = this;
    var div_bl = this.parentElement.parentElement;
    var num_child = div_bl.childElementCount;    
    if(num_child>1){
        var el_div = this.parentElement;    
        el_div.remove();
    }
    else{
        alert("cần phải có một ptu");
    }

}

$("id_i").onclick = function(){
    //tạo thẻ div
    //tao div
    var el_div = document.createElement("div");
    el_div.className = "row divmail pt-2";
    $("email1").appendChild(el_div);

    //tao input
    var el1 = document.createElement("input");
    el1.style = "email";
    el1.className = "class1 form-control col-8";
    el1.placeholder = "Enter email";
    el_div.appendChild(el1);

    //tao i
    var eli = document.createElement("i");
    eli.className = "fas fa-minus-circle pl-2 pt-2";
    el_div.appendChild(eli);
    //add vào div cha của div tạo ở trên
    //assign event for i tag
    eli.onclick = removeEl;

    //xóa ptu gốc
    
    
}
$("id_i2").onclick = function(){    
        
    var divcha = document.getElementById("email1");
    var numdivcon = divcha.childElementCount;
    if(numdivcon > 1){ 
        var a = document.getElementById("id_i2").parentElement;
        a.remove();

    }
    else{
        alert("cần phải có một ptu");
    }
    
}





$("id_i3").onclick = function(){
    //tao div
    var div = document.createElement("div");
    div.className = "row pt-2";
    $("number").appendChild(div);
    //tao span
    var sp = document.createElement("span");
    sp.className = "sp1 col-1";
    var node = document.createTextNode("+");    
    sp.appendChild(node);
    div.appendChild(sp);

    //tao input 1
    var el2 = document.createElement("input");
    el2.style = "text";
    el2.className = "form-control col-1 pl-2";
    el2.placeholder = "84";
    div.appendChild(el2);

    //tao span
    var sp1 = document.createElement("span");
    sp1.className = "sp2 col-1";
    var node1 = document.createTextNode("-");
    sp1.appendChild(node1);
    div.appendChild(sp1);

    //tao input 2
    var el3 = document.createElement("input");
    el3.style = "tel";
    el3.className = "form-control col-5";
    el3.placeholder = "123465789";
    div.appendChild(el3);

    //tao i
    var eli1 = document.createElement("i");
    eli1.className = "fas fa-minus-circle pl-2 pt-2";
    div.appendChild(eli1);
    eli1.onclick = removeEl;
}

$("id_i4").onclick = function(){    
        
    var divcha = document.getElementById("number");
    var numdivcon = divcha.childElementCount;
    if(numdivcon > 1){ 
        var a = document.getElementById("id_i4").parentElement;
        a.remove();

    }
    else{
        alert("cần phải có một ptu");
    }
    
}


$("btn").onclick = function(){
    var arr_ip = document.getElementsByTagName("input");
    for(let i=0 ; i<arr_ip.length ; i++){
        var el_ip = arr_ip[i];
        if(el_ip.value.trim()==""){            
            var sp0 = document.createElement("p");        
            var node0 = document.createTextNode("pls input");  
            sp0.className="text-danger col-6";          
            sp0.appendChild(node0);            
            var num_el = el_ip.parentElement.childElementCount;
            if(num_el == 2 || num_el ==5){
                el_ip.parentElement.appendChild(sp0);
            }
            el_ip.style.borderColor="red";
        }
        else{
            
            el_ip.style.borderColor="";
            
            
        }
    }
}



