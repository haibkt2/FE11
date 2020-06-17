function $(id){
    return document.getElementById(id);
}

function Creat_result(){   
    var no = document.getElementById("number_input"); 
    var value_no = no.value;
    var a = [];
    for(let i = 0 ; i < value_no ; i++){
        var el_p = document.createElement("p");
        el_p.className="pt-2";
        a[i] =  Math.floor(Math.random() * 100 ); 
        var text_p = document.createTextNode("Số thứ " + (i+1) + " là : "+a[i]);
        el_p.appendChild(text_p);
        $("result").appendChild(el_p);
    }
    var el_rp = document.createElement("p");
    var text_rp = document.createTextNode("Số lớn nhất là : "+ Math.max.apply(Math, a));
    el_rp.appendChild(text_rp); 
    $("result").appendChild(el_rp);
    var el_rp1 = document.createElement("p");
    var text_rp1 = document.createTextNode("Số nhỏ nhất là : "+Math.min.apply(Math, a));
    el_rp1.appendChild(text_rp1); 
    $("result").appendChild(el_rp1);
}

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
    

}


