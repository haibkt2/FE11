function $(id){
    return document.getElementById(id);
}
var arr = [];
function displayNumber(){
    if ($("displayNumber").childElementCount>1){
        while ($("displayNumber").firstChild) {
        $("displayNumber").removeChild($("displayNumber").firstChild);
        }
    }
    var input = parseInt($("number").value);
    for (var i = 0; i<input; i++){
        var createNewP = document.createElement("p");
        arr[i] = Math.ceil(Math.random()*100);
        var createNewText = document.createTextNode("Number no."+(i+1)+" : "+arr[i]);
        createNewP.appendChild(createNewText);
        $("displayNumber").appendChild(createNewP);
    }//display random number [1-100]
       var max = Math.max.apply(Math, arr); 
       var min = Math.min.apply(Math, arr); 
       var createNewMaxMin = document.createElement("p");
       var createTextMaxMin=document.createTextNode("Max: "+max+" "+"Min: "+min);
        createNewMaxMin.appendChild(createTextMaxMin);
       $("displayNumber").appendChild(createNewMaxMin);
    }//display max and min in array

function validForm(){
    var inp = $("number").value;
    if(inp.trim() ==""){
        alert("Please enter input");
    }
    else if (isNaN(inp) || inp < 0) {
        alert("Nhập sai");
        $("form").reset();
    }
    else {
        displayNumber();
    }
}//function check input number

 $("button").onclick=validForm;






    