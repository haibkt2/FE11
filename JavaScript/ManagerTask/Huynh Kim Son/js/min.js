var $ = function(id){
    return document.getElementById(id);

}

function gettask(){
    var tasks = localStorage.getItem("task"); // 1 string task
    var task_arr = (tasks == null) ? [] : tasks.split(":");
    displaytask(task_arr);
}

function displaytask(task_arr){
    var out_task = "";
    for(task in task_arr) {
        out_task += 
        '<tr >' 
        + '<td>' 
            + '<label>'
            +       '<input type="checkbox" class="form-check-input" name="name_task" >'
            + task_arr[i] 
            + '</label>'
            + '</td>' 
        '</tr>';
    }
    $("div_task").innerHTML = out_task;
    
}
function addtask(){
    
    var v_input = $("list").value.trim();
    if (v_input == ""){
        alert("Pls, enter input. Thanks!");
        //$("task").focus();
    } else {
        var task = localStorage.getItem("task");
        task = (task == null) ? v_input : task + ":" + v_input; 
        localStorage.setItem("task",task);
       //gettask();
       // add v_input into block out_put
       var out_put = $("div_task").innerHTML;
       out_put +=
            '<tr >'
            + '<td>' 
                + '<label>'
                +       '<input type="checkbox" class="form-check-input" name="name_task">'
                + v_input 
                + '</label>'
            + '</td>'    
            '</tr>';
        $("div_task").innerHTML = out_put;    
       // $("task").value = ""; // for tag input
        // $("task").focus(); 

    }
 
}
  

function clearAlltask(){
    localStorage.removeItem("task");
    $("div_task").innerHTML = "";
}

function selectAlltask(){
    var checkboxs= document.getElementsByName("name_task");
    for (var checkbox of checkboxs) {
    checkbox.checked = this.checked;
  }
}

function deletetask(){
  var arr_task = document.getElementsByClassName("form-check-input");
  var tasks = "";
  for( let i = 0; i < arr_task.length; i++){
      if(arr_task[i].checked){
          arr_task[i].parentElement.parentElement.remove();
            
      }else{
          // create task to save local
          var task = arr_task[i].parentElement.textContent;
          tasks += ((tasks == '') ? "" : ":") + task;
      }
  }
  // save local
  localStorage.setItem("task", tasks);
  // get date local
  // display local
}
$("add_task").onclick = addtask;
$("clear_all").onclick = clearAlltask;
$("remove").onclick = deletetask;
$("selectAll").onchange = selectAlltask;
