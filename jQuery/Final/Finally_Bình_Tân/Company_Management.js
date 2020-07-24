var company_name = localStorage.getItem('key_company');
         if(company_name !=null){
         var arr_company = company_name.split(',');
         
         //-------------------Content-------------------
         function content_sel(arr_sel){
         var content_sel = '';
         for(let i = 0; i<arr_sel.length; i++){
            content_sel += arr_sel[i] + '<br>';
         }
         return content_sel;
         }
         //---------------------------------------------

         //--------------------Add----------------------
         $('#add').click(function(){
         var content_="";
         for(let i=0; i<arr_company.length; i++){
            var company_json = localStorage.getItem(arr_company[i]);
            var company_obj = JSON.parse(company_json);
            if(company_json != null){ 
            content_ +=         '<tr class=tr>'
                              + '<td> <input type="checkbox" class="checkbox_">' + '</td>'
                              + '<td class="company_name">' + company_obj.company_name + '</td>'
                              + '<td>' + company_obj.color_code + '</td>'
                              + '<td>' + company_obj.max_hours + '</td>'
                              + '<td>' + content_sel(company_obj.setselect) + '</td>'
                              + '<td>' + company_obj.status + '</td>'
                              + '<td class="fa fa-paint-brush fix" ' + '</td>'
                              + '<td class="fa fa-shopping-basket remove_" ' + '</td>'
                              + '</tr>';
                              
            }else{
               alert('No company!..');
            }              
            }
            $('#tbody').html(content_);

         //------------------Fix----------------------
            $('.fix').click(function(){
            var rem_ = $(this).prev().prev().prev().prev().prev().html();
            $(this).closest('.tr').remove();
            var tasks ='';
            for(let j=0; j<arr_company.length; j++){
            if(arr_company[j] !=rem_){
               tasks +=((tasks=='')? '':',') + arr_company[j];
            }
            }
            arr_company = tasks.split(',');
            if(tasks==''){
               localStorage.removeItem('key_company');
            }else{
               localStorage.setItem('key_company', tasks);
            }
            
            localStorage.removeItem(rem_);
               location.href='Edit_Company.html';
            })
         //------------------------------------------

         //-------------Remove-----------------------
         $('.remove_').click(function(){
            var rem_ = $(this).prev().prev().prev().prev().prev().prev().html();
            $(this).closest('.tr').remove();
            var tasks ='';
            for(let j=0; j<arr_company.length; j++){
              if(arr_company[j] !=rem_){
                 tasks +=((tasks=='')? '':',') + arr_company[j];
               }
            }
            arr_company = tasks.split(',');
            if(tasks==''){
               localStorage.removeItem('key_company');
            }else{
               localStorage.setItem('key_company', tasks);
            }
            localStorage.removeItem(rem_);
         })
         //------------------------------------------  

         })
         //------------------------------------------

         //---------------Delete---------------------
          $('#delete_company').click(function(){
            var name_ = $('.company_name');
            var checkboxes = $('.checkbox_');
            var d=0;
            for(let i=0; i<checkboxes.length; i++){
               var tasks_remove='';
               if($(checkboxes[i]).is(":checked")){
                  tasks_remove = $(name_[i]).html();
                  localStorage.removeItem($(name_[i]).html());
                  $(checkboxes[i]).closest('.tr').remove();
                  i--;
                  var tasks ='';
                  for(let q=0; q<arr_company.length; q++){
                  if(arr_company[q] != tasks_remove){
                     tasks +=((tasks=='')? '':',') + arr_company[q];
                  }
               }
                  arr_company = tasks.split(',');
                  if(tasks ==''){
                     localStorage.removeItem('key_company');
                  }else{
                     localStorage.setItem('key_company', tasks);
                  }
                  checkboxes = $('.checkbox_');
                  name_ = $('.company_name');
               }   
               }
               var get_local = localStorage.getItem('key_company');
               if(get_local==null){
               $('#checkAll').prop('checked', false);
            }
         })
         //------------------------------------------

         //--------------Check_All-------------------
         $('#checkAll').change(function(){
            var n = $(this).is(':checked');
            var class_check = $('.checkbox_');
            for(let i = 0; i< class_check.length; i++){
               if(n){
                  $(class_check[i]).prop('checked', true);
               }else{
                  $(class_check[i]).prop('checked', false);
               }
             }
         })
         //-----------------------------------------
         
         }else{
            alert('No company!..');
         }
         