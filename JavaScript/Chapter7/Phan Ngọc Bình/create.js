function $(id){
   return document.getElementById(id);
   }
   function createEl(tag){
   return document.createElement(tag);
   }
   function removeEl(){
   var div_bl = this.parentElement.parentElement;
   var num_child = div_bl.childElementCount;
   if(num_child>1){
   var el_div_parent = this.parentElement;
   el_div_parent.remove(); 
   }
   }

   $("createEmail").onclick = function(){
      var el_div = createEl("div");
      el_div.className ="form-group form-inline mt-2";

      var el_input = createEl("input");
      el_input.className ="form-control mb-2 mt-2";
      el_input.style = "width: 485px; margin-left:10px;";
      el_input.placeholder = "Enter email";

      var el_i = createEl("i");
      el_i.className = "col-md-1 fa fa-minus-circle";

      el_div.appendChild(el_input);
      el_div.appendChild(el_i);
      $("div1").appendChild(el_div);
      
      el_i.onclick = removeEl;

   }

   $("createPhone").onclick = function(){
      var el_div = createEl("div");
      el_div.className ="form-group form-inline mt-2";

      var el_span = createEl("span");
      var textNode = document.createTextNode("+");
      el_span.appendChild(textNode);
      el_span.style = "width:17px;text-align: left;";

      var el_input = createEl("input");
      el_input.className = "col-md-1 form-control";
      el_input.placeholder = "84";

      var el_span_ = createEl("span");
      var textNode = document.createTextNode("-");
      el_span_.appendChild(textNode);
      el_span_.style = "width:20px;text-align: center;";

      var el_input_p = createEl("input");
      el_input_p.className = "form-control mb-2 mt-2";
      el_input_p.placeholder = "123456789";
      el_input_p.style = "width: 413px;";
      
      var el_i = createEl("i");
      el_i.className = "col-md-1 fa fa-minus-circle";

      el_div.appendChild(el_span);
      el_div.appendChild(el_input);
      el_div.appendChild(el_span_);
      el_div.appendChild(el_input_p);
      el_div.appendChild(el_i);
      $("div2").appendChild(el_div);

      el_i.onclick = removeEl;

   }
   
   $("bt").onclick = function(){
      var arr_el_input = document.getElementsByTagName("input");
      for(var i = 0; i<arr_el_input.length;i++){
         
      
         var el_input = arr_el_input[i];
         if(el_input.value.trim()==""){
            el_input.style.border = '2px solid red';
            var num_el = el_input.parentElement.childElementCount;
           /* if(num_el==3||num_el==6){
            el_input.parentElment.lastElementChild.remove();
      }
            el_input.parentElement.appendChild("tag p...");*/
            if(num_el == 2 || num_el ==5){
               var text = document.createTextNode("Error..! Please enter the information again. ");
               var el_p = document.createElement("p");
               el_p.appendChild(text);
               el_p.style.color = "red";
               el_input.parentElement.appendChild(el_p);

           }
         }
      }
      
      
   }