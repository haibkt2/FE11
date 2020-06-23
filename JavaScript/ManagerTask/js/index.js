var $ = function(id){
    return document.getElementById(id);
}
function getTask(){
    var tasks = localStorage.getItem('task'); // 1 string task
    var task_arr = (tasks == null) ? [] : tasks.split(':');
    displayTask(task_arr);
}
function displayTask(task_arr){
    var out_task = '';
    for(i in task_arr) {
        out_task += '<tr>'
            + '<td>'
            +    '<input type="checkbox" value="checkedValue">'
            + '</td>'
            + '<td>' + task_arr[i] + '</td>'
        '</tr>';
    }
    $("tbody").innerHTML = out_task;
}

function addTask(){
    var v_input = $("task").value.trim();
    var task = localStorage.getItem('task');
    task = (task == null) ? v_input : task + ':' + v_input;
    localStorage.setItem('task', task);
    //getTask();
    // add v_input into block out_put
    var out_put = $("tbody").innerHTML;
    out_put += '<tr>'
            + '<td>'
            +    '<input type="checkbox" value="checkedValue">'
            + '</td>'
            + '<td>' + v_input + '</td>'
        '</tr>';
    $("tbody").innerHTML = out_put;
    $("task").value = ""; // for tag input
    $("task").focus();
}

function clearAllTask(){
    localStorage.removeItem("task");
    $("tbody").innerHTML = "";
}

function selectAll() {
}

function deleteTask() { 
}
getTask();
$('add').onclick = addTask;
$('clear').onclick = clearAllTask;
$('selectAll').onclick = selectAll;
$('delTask').onclick = deleteTask;












