function $(id){
    return document.getElementById(id);
}

var myArray=[];

function processCreate(){
    if ($("result").childElementCount>1){
        while ($("result").firstChild) {
        $("result").removeChild($("result").firstChild);
        }
    }
    var input = parseInt($("input_Num").value);
    for (var i=0;i<input;i++){
        var createP = document.createElement("p");
        myArray[i]=parseInt(Math.floor(Math.random() *100));
        var createText=document.createTextNode("Số thứ "+ (i+1) +": "+myArray[i]);
        createP.appendChild(createText);
        $("result").appendChild(createP);
    }
    var max = Math.max(...myArray);
    var min =Math.min(...myArray);
    var createMax = document.createElement("p");
    var createTextMax=document.createTextNode("Max: "+max + " Min: "+ min);
    createMax.appendChild(createTextMax);
    $("result").appendChild(createMax);
}

function valid(){
    if ($("input_Num").value ==""){
        alert("Please input value");
    }
    else if (isNaN($("input_Num").value)) {
        alert("Must be a number. Please input again!");
        $("form").reset();
    }
    else if (parseInt($("input_Num").value)<1) {
        alert("Must be a number >=1. Please input again!");
        $("form").reset();
    }
    else{
        processCreate();
    }
    
}

window.onload=function(){
    $("btnCreate").onclick=valid;
}