function $(id){
   return document.getElementById(id);
}
function trans(){
   location.href = "../HTML/edit.html";
}
var zone = $("zone");
function validateSelectBox(id){
   var options = id.children;
   var html = '';
   for (var i = 0; i < options.length; i++){
       if (options[i].selected){
           html += '<p>' +options[i].value+ '</p>';
       }
   }
      //$('result').innerHTML = html;
      return html;    
}
function display(){
   $('result').innerHTML = validateSelectBox(zone);
}
//Constructor
var info = function(com_name,color,working_hour, zone){
   this.com_name = com_name;
   this.color = color;
   this.working_hour = working_hour;
   this.zone = zone;
}

function add_info(){
   var com_name = $('com_name').value;
   var information = new info(
      com_name,
      $('color').value,
      $('working_hour').value,
      $('zone').value);
var info1 = information.com_name + ':' + information.color + ':' +information.working_hour + ':' +information.zone;
localStorage.setItem(com_name,info1);
alert("Dữ liệu đã được lưu");
//Show data
   //location.href = "../HTML/management.html";
}
function show_info(){
   var v_comName = $('com_name').value;
   var show = localStorage.getItem(v_comName)
   var tbody = document.getElementsByTagName("h2")[0];
   tbody.innerHTML = '<p><span  class="p_info">Company Name:</span>' + show.split(':')[0] +'</p>'
                     + '<p><span  class="p_info">Color:</span>' + show.split(':')[1] +'</p>'
                     + '<p><span  class="p_info">Working hours:</span>' + show.split(':')[2] +'</p>'
                     + '<p><span  class="p_info">Zone:</span>' + show.split(':')[3] +'</p>'
}
// function test(){
//    var body = document.getElementsByTagName("tbody")[0];
//    body.innerHTML = '<tr>'+'<td>'+'<p>Ni đây</p>' + '</td>' +'<td>'+'<p>Ni đây</p>' + '</td>'+'<td>'+'<p>Ni đây</p>' + '</td>'+'<td>'+'<p>Ni đây</p>' + '</td>'+ '</tr>';
// }
