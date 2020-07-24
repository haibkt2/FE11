
         $.validator.addMethod("name_company", function(){
         var name_ = $("#company_name").val().trim();
         if ( name_ == '' ) {
            return false;
            }
            return true;
        });
    
        $.validator.addMethod("number1", function(){
            var number_ = $("#max_hours").val();
            if ( number_ <= 0 ) {
                return false;
            }
            return true;
        });
    
        $.validator.addMethod("select", function(){
            select_ = $("#id_setselect option").text();
            if ( select_ == '') {
                return false;
            }
            return true;
        });
              $("#id_form").validate({
                 rules:{
                    company:{
                       required: true,
                       name_company: true,
                    },
                    operating:{
                       required: true,
                    },
                    maxHours:{
                       required: true,
                       number: true,
                       number1: true,
                    },
    
                    select_:{ 
                       select: true
                      }
                 },
    
                 messages: {
                    company:"Error!Enter company name. ",
                    operating:"Error!",
                    maxHours:"Error!Hours > 0.",
                    select_: { select: "Please select Whitelisted Zone.",
                   },
                 },
    
                 //-------------------Save-------------------------
                 submitHandler: function(){
                   var arr_sel;
                   $('#id_setselect option').prop('selected', true);
                   arr_sel = $('#id_setselect').val();
                   var company_name = $('#company_name').val();
                   get_company_name = localStorage.getItem(company_name);
                   if(get_company_name==null){
                      var obj_ = new company_obj(company_name, $('#max_hours').val(), $('#status').val(), $('#color_code').val(), arr_sel);
                      var key_company = localStorage.getItem('key_company');
                      key_company = (key_company== null) ? company_name :  key_company + ',' + company_name;
                      localStorage.setItem('key_company', key_company);
                      obj_ = JSON.stringify(obj_);
                      localStorage.setItem(company_name, obj_);
                      location.href='Company_Management.html';
                   }else{
                      alert('Please re-enter company name information.');
                      $("#company_name").focus();
                   }
                   
                 } 
              })
              //--------------------------------------------------
              var company_obj = function(company_name, max_hours, status, color_code, setselect){
                this.company_name = company_name;
                this.max_hours = max_hours;
                this.status = status;
                this.color_code = color_code;
                this.setselect = setselect;
              }
              
              $('#id_select').change(function(){
                var a = $(this).val();
                $('#id_setsel').click(function(){
                   $('#id_setselect option').remove();
                   for(let i=0; i<a.length; i++){
                      $('#id_setselect').append('<option class='+i+ '>'+ a[i]+ '</option>');
                      var c= '.' + String(i);
                      $(c).attr('value', a[i]);
                   }
                })
             });
             
             $('#id_removesel').click(function(){
                $('#id_setselect option:selected').remove();
             });
             
             $('#Manage').click(function(){
                location.href='Company_Management.html';
             })
    
             $('#cancel_').click(function(){
                $('#id_setselect option').remove();
             })