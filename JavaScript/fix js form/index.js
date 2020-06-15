function $(id) {
    return document.getElementById(id);
}

function createEl(el) {
    return document.createElement(el);
}
var createEmail = createEl("p");
var createNodeTextEmail = document.createTextNode("Email");
createEmail.appendChild(createNodeTextEmail);
$("email1").appendChild(createEmail);
var createIconadd = createEl("i");
createIconadd.className = "fas fa-plus-circle ml-1 px-2 pt-1";
$("email1").appendChild(createIconadd);
createIconadd.setAttribute("id", "create");
// xoas el
function removeInput() {
    var removeAllEl = this.parentElement.parentElement;
    var numberEl = removeAllEl.childElementCount;
    if (numberEl > 1) {
        var el_i = this;
        var div_block = this.parentElement;
        div_block.remove();
    }
}
//click vào icon để tạo input
$("create").onclick = function() {
    var createDiv = createEl("div");
    createDiv.className = "createDiv";
    var createInput = createEl("input");
    createInput.className = "input col-md-6";
    var createi = createEl("i");
    createi.className = "fas fa-minus-circle col-md-6";
    createi.onclick = removeInput;
    createDiv.appendChild(createInput);
    createDiv.appendChild(createi);
    $("div1").appendChild(createDiv);
};

// create div phone
var createPhone = createEl("p");
var createTextNodePhone = document.createTextNode("Phone");
createPhone.appendChild(createTextNodePhone);
$("textphone").appendChild(createPhone);
var createIconPhone = createEl("i");
createIconPhone.className = "fas fa-plus-circle ml-1 px-2 pt-1";
$("textphone").appendChild(createIconPhone);
createIconPhone.setAttribute("id", "iconPhone");

//onclick in iicon create input
$("iconPhone").onclick = function() {
    var createDiv = createEl("Div");
    createDiv.className = "createDiv";
    var createspan1 = createEl("span");
    createspan1.setAttribute = " input col-md-3";
    var createTextNodespan = document.createTextNode("+");
    createspan1.appendChild(createTextNodespan);
    createDiv.appendChild(createspan1);
    var createInput = createEl("input");
    createInput.setAttribute("id", "input1");
    createInput.setAttribute = " form-control col-md-3";
    createDiv.appendChild(createInput);
    var createspan2 = createEl("span");
    var createTextNodespan1 = document.createTextNode("-");
    createspan2.appendChild(createTextNodespan1);
    createDiv.appendChild(createspan2);
    var createInput = createEl("input");
    createInput.setAttribute("id", "input2");
    createInput.setAttribute = " form-control col-md-3";
    createDiv.appendChild(createInput);
    var createi = createEl("i");
    createi.className = "fas fa-minus-circle col-md-6";
    createi.onclick = removeInput;
    $("form_phone").appendChild(createDiv);
    createDiv.appendChild(createi);
    createDiv.appendChild(createi);
};
$("btn").onclick = function() {
   // get toàn bô các thẻ input, trả về là 1 array gồm các thẻ input
   var arr_input = document.getElementsByTagName("input");
   // lần lượt get value đã input trong các thẻ
   // sử dụng loop
   for(let i = 0; i< arr_input.length;i++){
       // cứ mõi phần tử trong array là 1 phần htmlobject input
       var el_input = arr_input[i];
       // get value của input
       var value_input = el_input.value;
       // kiểm tra giá trị input vào xem có empty không
       if(value_input.trim() == "" ){
           // hiện thị lỗi
           // tạo thẻ span
           var el_span = document.createElement("span");
           // taọ node mess lỗi
        var node_err = document.createTextNode("Plse input");
        // add node vaò tag span
        el_span.appendChild(node_err);
        // display errỏ
        
        // với viêcj input trước đó lỗi và đã có mess lỗi hiện thị rồi thì không display lỗi nữa
        // cânf check xem đã cos mess lôix tưong ưngứ cuar input đó chưa
        if(el_input.parentElement.childElementCount == 2 
            || el_input.parentElement.childElementCount == 5){
            
            // = 2 la cho input của block mail, bang năm cho block phone
            // băng 2 và naưm là chưa có messs erro
            el_input.parentElement.appendChild(el_span); // done
            // button maf thư hiện js thì để type buttoon 
        }       
    }// ok thaayf e camr onw aj
    
   }
}