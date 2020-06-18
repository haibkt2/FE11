         var sub_;
         var sel_;
         var per_;
         var amo_;
         var tot_;
         function $(id) {
	         return document.getElementById(id);
         }
         function Valid(value, condition) {
	         var checked = (isNaN(value) || value < 0 || value > condition) ? true : false;
	         if(checked) {
		         alert("Pls input again");
		         $("id_form").reset();
		         $("id_sub").focus();
	         }
	         return 0;
         }
         function calculate(){
            tot_ = ( sub_ * per_ ) - parseFloat(amo_);
            $("id_tot").value = tot_.toFixed(2);
         }
         function getAmount(){
            var v_input = $("id_sub").value;
            sub_ = parseFloat(v_input);
            var n = parseFloat(1000000000);
            Valid(sub_, n);
            var v_select = $("id_sel").value; 

            if(v_input < 10000){
               $("id_amo").disabled = true;
               amo_ = parseFloat(0).toFixed(2);
               per_ = parseFloat(0.1);
               $("id_amo").value = amo_;
               var per = 10;
               $("id_per").value = per.toFixed(2);
            calculate();
            }
            
            if(v_input >= 10000 && v_select ==1){
               $("id_amo").disabled = true;
               amo_ = parseFloat(200).toFixed(2);
               $("id_amo").value = amo_;
               if(sub_ < 15000){
                  per_ = parseFloat(0.1);
                  var per= 10;
                  $("id_per").value = per.toFixed(2);
               }else{
                  per_ = parseFloat(0.15);
                  var per = 15;
                  $("id_per").value = per.toFixed(2);
               }
            calculate();
            }

            if(v_input >= 10000 && v_select ==2){
               $("id_amo").disabled = true;
               amo_ = parseFloat(300).toFixed(2);
               $("id_amo").value = amo_;
               if(sub_ < 15000){
                  per_ = parseFloat(0.15);
                  var per = 15;
                  $("id_per").value = per.toFixed(2);
               }else{
                  per_ = parseFloat(0.20);
                  var per = 20;
                  $("id_per").value = per.toFixed(2);
               }
               calculate();
            }
            
            if(v_input >= 10000 && v_select ==3){
               per_ = parseFloat(0.15);
               var per = 15;
               $("id_per").value = per.toFixed(2);
               $("id_amo").disabled = false;
               amo_ = $("id_amo").value;
               amo_ = parseFloat(amo_);
               var n = parseFloat(1000000000);
               Valid(amo_, n);
               if(amo_<500){
                  calculate();
               }else{
                  alert("Re-enter amount value < 500");
               }
            }else{
               $("id_amo").disabled = true;
            }
         }
         
         $("bt_cal").onclick = calculate;
         $("id_sel").onchange = getAmount;
         $("id_sub").onchange = getAmount;
         $("id_amo").onchange = getAmount;
