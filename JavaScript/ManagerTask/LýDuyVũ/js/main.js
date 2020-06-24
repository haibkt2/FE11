function $(id) {
    return document.getElementById(id);
}
function getTask(){
    var tasks=localStorage.getItem('task');// 1 string task
    var  task_arr= (task==null)?[]: tasks.split(':');
    displayTask(task_arr);
}
function displayTask(task_arr){
    var out_task="";
    for(i in task_arr){
        out_task +=
        "<tr>"+
       " <td>"+
   "<input type='checkbox' value='checkboxValue'>"+
        "</td>"+
       " <td>"+task_arr[i]+"</td>"+
   " </tr>"
    }
    $("tbody").innerHTML=out_task;
}
function add_task(){
    var v_input=$("input").value.trim();
    if(v_input==""){
        alert("pls enter value");
    }
    else{
        var task=localStorage.getItem("task");
        task=(task==null)? task : task +":" + v_input;
        localStorage.setItem("task",task);
        //getTask();
        //add v_input into block out_put
        var out_put= $("tbody").innerHTML;
        out_put+= "<tr>"+
        " <td>"+
        "<input type='checkbox' name=checked value='checkboxValue'>"+
         "</td>"+
        " <td>"+v_input+"</td>"+
        " </tr>"
        $("tbody").innerHTML=out_put;
        $("input").value="";
        $("input").focus();
    }
    
}
function selectAllTask(){
    var checkboxes = document.getElementsByName("checked");
    for(var i =0;i<checkboxes.length;i++){
        checkboxes[i].checked=true;
    }
    // for (var checkbox of checkboxes) {
    //     checkbox.checked = this.checked;
    //   }
}
function deleteTask(){
    var checkboxes=document.getElementsByName("checked");
    for(var i =0;i<checkboxes.length;i++){
        if(checkboxes[i].checked==true)
        checkboxes[i].parentElement.parentElement.remove();
    }
}
function clearTask(){
    localStorage.removeItem("task");
    $("tbody").innerHTML="";
}

$("add_task").onclick=add_task;
$("clear_task").onclick=clearTask;
$("task1").onclick=selectAllTask;
$("delete").onclick=deleteTask;


