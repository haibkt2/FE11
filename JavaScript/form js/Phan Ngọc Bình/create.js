function $(id){
   return document.getElementById(id);
   }
   function createEl(tag){
   return document.createElement(tag);
   }
   function removeEl(){
   var div_bl = this.parentElment.parentElment;
   var num_child = div_bl.childElementCount;
   if(num_child>1){
   var el_div_parent = this.parentElment;
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
   