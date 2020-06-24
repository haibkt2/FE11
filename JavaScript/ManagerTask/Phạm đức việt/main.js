function $(id){
    return document.getElementById(id);
}
function getTask(){
    var tasks= localStorage.getItem("task"); // 1 string task
    var task_arr = (tasks == null) ? [] : tasks.split(":");
    displayTask(task_arr);
   
}
function displayTask(task_arr){
    var out_task = "";
    for(i in task_arr){
        out_task +="<tr>"
                           + "<td><input type='checkbox'></td>"
                          + " <td>"+task_arr[i]+"</td>"
                      + " </tr>";
    }
    $("tbody").innerHTML= out_task;
}
function AddTask(){
    var v_input = $("input").value.trim();
    if(v_input==""){
        alert("ngu lam");
    }
    else{
        var task = localStorage.getItem("task"); 
    task =(task == null) ? v_input : task +":"+ v_input; 
    localStorage.setItem("task", task);
    // getTask();
    //ADD  v_input into block out_put
    var out_put = $("tbody").innerHTML;
    out_put +="<tr>"
    + "<td><input type='checkbox'></td>"
    + " <td>"+v_input+"</td>"
    + " </tr>";
    $("tbody").innerHTML= out_put;  
    $("input").value = " "; //for tag input
    $("input").focus();
    }
}
function ClearTask(){
    localStorage.removeItem("task");
    $("tbody").innerHTML= "";  

}
function Delete_(){
  
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 1; i < checkboxes.length; i++) {
        if(checkboxes[i].checked){
            checkboxes[i].parentElement.parentElement.remove();
        }
    }
}
function selectAll(origin){
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != origin)
            checkboxes[i].checked = origin.checked;
    }
}

$("AddTask").onclick = AddTask;
$("ClearTask").onclick = ClearTask;
$("delete").onclick = Delete_;
$("selectAll").onclick = function(){
    selectAll(this);
};