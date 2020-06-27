function $(id){
    return document.getElementById(id);
}

function getTask(){
    var tasks = localStorage.getItem("task"); 
    var task_arr = (tasks == null) ? [] : tasks.split(":");
    displayTask(task_arr);
}
function displayTask(task_arr){
    var out_task = "";
    for(i in task_arr){
        out_task +="<tr>"
                           + "<td><input type='checkbox' class='radio_task'></td>"
                          + " <td>"+task_arr[i]+"</td>"
                      + " </tr>";
    }
    $("tbody").innerHTML= out_task;
}
function addTask(){
    var input = $("input").value.trim();
    if(/^[a-zA-Z0-9- ]*$/.test(input) == false || input == "") {
        alert("Please enter input");
        $("input").focus();
    }
    else {
    var task = localStorage.getItem('task');
    task = (task == null) ? input : task + ':' + input;
    localStorage.setItem('task', task);
    //add input into block output
    var out_put = $("tbody").innerHTML;
    out_put +="<tr>"
    + "<td><input type='checkbox' class='radio_task'></td>"
    + " <td>"+ input +"</td>"
    + " </tr>";
    $("tbody").innerHTML= out_put;  
    $("input").value = " "; //for tag input
    $("input").focus();
}
}

function clearAllTask(){
    localStorage.removeItem("task");
    $("tbody").innerHTML = "";
}
 function selectAll(){
        var checkboxes = document.getElementsByClassName('radio_task');
        for (var checkbox of checkboxes) {
          checkbox.checked = this.checked;
        }
}
function deleteTask(){
    var checkboxes=document.getElementsByClassName("radio_task");
    var tasks ='';
    for(var i =0; i<checkboxes.length ;i++){
        if(checkboxes[i].checked){
            checkboxes[i].parentElement.parentElement.remove();
            i--;
        } else{
            var task = checkboxes[i].parentElement.nextElementSibling.textContent;
            tasks += ((tasks == '') ? '' : ':' ) + task;
        }

        }
        if(tasks == ''){
            localStorage.removeItem('task');
        }else{
            localStorage.setItem('task', tasks);
        }

}
var fn_ = function(e){
    if(e.keyCode == 13){
        addTask();
    }
}
getTask();
$("input").onkeypress = fn_;
$("add").onclick = addTask;
$("clear").onclick = clearAllTask;
$("select").onchange     = selectAll;
$("remove").onclick = deleteTask;