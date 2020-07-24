function ID(id){
    return document.getElementById(id);
 }
 //Select ZONE
 var zone = ID("zone");
 function validateSelectBox(id){
    var options = id.children;
    var html = '';
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html += '<option>' +options[i].value+ '</option>';
        }
    }
       return html;    
 }
 function display(){
    ID('result_zone').innerHTML = validateSelectBox(zone);
 }
 //remove zone
 function remove(){
    var zone_remove = ID("result_zone").children;
    for(var i = 0; i < zone_remove.length; i++){
       if(zone_remove[i].selected){
          zone_remove[i].remove();
       }
    }
 }
 //Constructor

 var info = function(operating, name,color,working_hour, zone, status){
    this.operating = operating;
    this.name = name;
    this.color = color;
    this.working_hour = working_hour;
    this.zone = zone;
    this.status = status;
 }
 var arr=[];
 //Show data
 $("#myForm").validate({
    rules:{
       working_hour:{
          required: true,
          min: 1,
       },
       com_name:{
          required: true
       }
    },
    messages:{
       working_hour: "Please enter valid hours working",
       com_name: "Please input Company Name"
    },
    submitHandler: function add_info(){
        var information = new info(
            $('#operating').val(),
            $('#com_name').val(),
            $('#color').val(),
            $('#working_hour').val(),
            $('#zone').val(),
            $('#status').val());
     alert("Information is saved");
     arr.push(information);
     JSON.stringify(arr);
     
     localStorage.setItem('COMPANY',JSON.stringify(arr));
     ID("myForm").reset();
    }
 });

 function show1(){
    location.href = "../HTML/management.html";
 }