/* function $(id){
    return document.getElementById(id);
}


function Creat_result(){
    var el_arr = document.getElementsByClassName("rd_child");
    if(el_arr.length > 0){
        el_arr[0].remove();
    }
    var no = document.getElementById("number_input").value; 
    var min =100,max=0;
    var a = [];
    var el_div = document.createElement("div"); 
    el_div.className = "rd_child";
    for(let i = 0 ; i < no ; i++){        
        var el_p = document.createElement("p");
        el_p.className="pt-2";
        a[i] =  Math.ceil(Math.random() * 100 ); 
        var text_p = document.createTextNode("Số thứ " + (i+1) + " là : "+a[i]);
        el_div.appendChild(el_p);
        el_p.appendChild(text_p);
        max = (max < a[i]) ? a[i]:max;
        min = (min > a[i]) ? a[i]:min;
    }
    $("result").appendChild(el_div);
    var el_rp = document.createElement("p");
    var text_rp = document.createTextNode("Số lớn nhất là : "+ max/*Math.max.apply(Math, a)*//*);
    el_rp.appendChild(text_rp); 
    el_div.appendChild(el_rp);
    var el_rp1 = document.createElement("p");
    var text_rp1 = document.createTextNode("Số nhỏ nhất là : "+ min /*Math.min.apply(Math, a)*//*);
    el_rp1.appendChild(text_rp1); 
    el_div.appendChild(el_rp1);
   
}
//value,di
function error(){
    if($("number_input").value.trim()=="" || isNaN($("number_input").value) || parseInt($("number_input").value)<1){
        alert("Đã nhập sai,vui lòng nhập lại");
        $("form").reset();
        $("number_input").focus();
    }
    else Creat_result();
    
}

window.onload = function(){
    
    $("id_btn").onclick = Creat_result;
    $("id_btn").onclick = error;
        
    
    

} */
//border:1px dotted blue



function $(id){
    return document.getElementById(id);
}

function calcutater(){
    var el_subtotal = $("in_subtotal").value;
    var el_sl = $("id_select").value;
    var el_amount = $("amount").value;
    //validate for subtotal
    valid(el_subtotal,Math.max);
    //validate for amount
    valid(el_amount,400);
    var amount , percent , total = 0 ;
    if(parseFloat(el_subtotal)<10000){
        amount=0;
        percent = 10;
        total = parseInt(el_subtotal) * (1-percent/100)
    }
    else if(el_sl==1){
        amount=200;
        parseFloat(el_subtotal)<15000 ? percent = 10 : percent = 15;
        total = parseInt(el_subtotal) * (1-percent/100) - parseFloat(amount);
    }
    else if(el_sl==2){
        amount=300;
        parseFloat(el_subtotal)<15000 ? percent = 15 : percent = 20;
        total = parseInt(el_subtotal) * (1-percent/100) - parseFloat(amount);
    }
    else{
        percent=15;
        amount=parseFloat(el_amount)<500 ? el_amount : 0;
        total = parseInt(el_subtotal) * (1-percent/100) - parseFloat(amount);
    }
    $("percent").setAttribute("value",percent);
    $("amount").setAttribute("value",amount);
    $("in_total").setAttribute("value",total);
    //valid(el_amount,400);
}


function valid(value,condition){
    var checked =(isNaN(value) || value < 0 || value > condition ? true: false);
    if(checked){
        alert("pls input again");
        $("form").reset();
        $("in_subtotal").focus();
    }
    return checked;
    
}
function getAmount(){
    var el_subtotal = $("in_subtotal").value;
    var el_sl = $("id_select").value;
    if(el_subtotal >= 10000 && el_sl == 3 ){
        $("amount").disabled = false;
    } else {
        $("amount").disabled = true;
    }
} 

window.onload = function(){
    $("id_select").onchange = getAmount;
    $("in_subtotal").onchange = getAmount;
    $("bnt").onclick = calcutater;
}
