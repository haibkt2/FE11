function $(id) {
    return document.getElementById(id);
}

function getTask() {
    var old_task = localStorage.getItem('task');
    var old_task_arr = (old_task == null) ? [] : old_task.split(':');
    return old_task_arr;
}

function displayTask(old_task_arr) {
    var displayTaskArr = getTask(old_task_arr);
    var out_task = '';
    for (i in displayTaskArr) {
        out_task += '<input type="checkbox" class="checkedValue mr-2">' + '<span>' + displayTaskArr[i] + '</span>' + '</br>';
    }
    $('outputDiv').innerHTML = out_task;
}

function addTask() {
    var v_input = $('taskInput').value.trim();
    var new_task = localStorage.getItem('task');
    if (v_input == "") {
        alert('Enter a task name pls!');
        $('taskInput').focus();
    } else {
        new_task = (new_task == null) ? v_input : new_task + ':' + v_input;
        localStorage.setItem('task', new_task);
        var out_put = $('outputDiv').innerHTML;
        out_put += '<input type="checkbox" class="checkedValue mr-2">' + '<span>' + v_input + '</span>' + '</br>';
        $('outputDiv').innerHTML = out_put;
        $('taskInput').value = "";
    }
}

function checkAll() {
    var task_arr = document.getElementsByClassName('checkedValue mr-2');
    var all_checked = false;
    if (task_arr.length == 0) {
        alert('Task not found, enter a task pls!');
        $('taskInput').focus();
        $('checkAll').checked = false;
    } else if ($('checkAll').checked == true && all_checked == false){
        for (let i = 0; i < task_arr.length; i++) {
            task_arr[i].checked = true;
        }
        all_checked = true;
    } else {
        for (let i = 0; i < task_arr.length; i++) {
            task_arr[i].checked = false;
        }
        all_checked = false;
    }
}

function clearSomeTask() {
    var task_arr = document.getElementsByClassName('checkedValue mr-2');
    var task_span = document.getElementsByTagName('span');
    var task_br = document.getElementsByTagName('br');
    var taskRests = '';
    if (task_arr.length == 0) {
        alert('Task not found, enter a task pls!');
        $('taskInput').focus();
    } else if($('checkAll').checked == true) {
        clearAllTask();
        $('checkAll').checked = false;
    } else {
        for (let z = 0; z < task_arr.length; z++) {
            if (task_arr[z].checked == true) {
                task_arr[z].remove();
                task_span[z].remove();
                task_br[z].remove();
            } else {
                var taskRest = task_span[z].textContent;
                taskRests += ((taskRests == '') ? '' : ':') + taskRest;
            }
            localStorage.setItem('task', taskRests);
        }
    }
    displayTask();
}

function clearAllTask() {
    var task_arr = document.getElementsByClassName('checkedValue mr-2');
    if (task_arr.length == 0) {
        alert('Task not found, enter a task pls!');
        $('taskInput').focus();
    } else {
        localStorage.removeItem('task');
        $('outputDiv').innerHTML = '';
    }
}
displayTask();
$('addTask').onclick = addTask;
$('clearTask').onclick = clearAllTask;
$('checkAll').onchange = checkAll;
$('clearSome').onclick = clearSomeTask;