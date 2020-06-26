var $ = function(id){
   return document.getElementById(id);
}
function addTask(){
   var v_input = $("task").value.trim();
   var task = localStorage.getItem('task');
   task = (task== null) ? v_input : task + ':' + v_input;
   localStorage.setItem('task', task);
   var out_put = $("tbody").innerHTML;
   out_put += '<tr>'
           + '<td class="text-center">'
           +    '<input type="checkbox"  value="checkedValue" class="task_">'
           + '</td>'
           + '<td>' + v_input + '</td>'
       +'</tr>';
   $("tbody").innerHTML = out_put;
   $("task").value = "";
   $("task").focus();
}
function clearAllTask(){
   localStorage.removeItem("task");
   $("tbody").innerHTML = "";
}
function selectAll() {
 var checkboxes = document.getElementsByClassName('task_');

for (var i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = true;
}
}
function deselectAll(){
 var checkboxes = document.getElementsByClassName('task_');
for (var i = 0; i < checkboxes.length; i++){
    checkboxes[i].checked = false;
}
}
function deleteTask() { 
 var checkboxes=document.getElementsByClassName("task_");
 var tasks ='';
   for(var i =0;i<checkboxes.length;i++){
       if(checkboxes[i].checked){
       checkboxes[i].parentElement.parentElement.remove();
       i--;
   } else{
     var task = checkboxes[i].parentElement.nextElementSibling.textContent;
     tasks += ((tasks == '') ? '' : ':' ) + task;
     
   }

}
if(tasks==''){
   localStorage.removeItem("task");
}else{
   localStorage.setItem('task', tasks);
}
}
$('add').onclick = addTask;
$('clear').onclick = clearAllTask;
$('selectAll').onclick = selectAll;
$('deselectAll').onclick = deselectAll;
$('delTask').onclick = deleteTask;