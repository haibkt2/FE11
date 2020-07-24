function trans(){
    location.href = "../HTML/edit.html";
}
window.onload = function(){
    var storage = localStorage.getItem('COMPANY');
    var arr_new = JSON.parse(storage);
    var body = document.getElementsByTagName("tbody")[0];
    var html= '';
    for(i in arr_new){
        html = '<tr>'
                    +'<td>'+'<input type="checkbox" value='+arr_new[i].opeating+'>'+ '</td>' 
                    +'<td>'+'<h5 style="text-align: center;">'+arr_new[i].name+'</h5>' + '</td>'
                    +'<td>'+'<input value='+arr_new[i].color+' type="color">' + '</td>'
                    +'<td>'+'<h5 style="text-align: center;">'+arr_new[i].working_hour+'</h5>' + '</td>'
                    +'<td>'+'<h5 style="text-align: center;">'+arr_new[i].zone+'</h5>' + '</td>'
                    +'<td>'+'<h5 style="text-align: center;">'+arr_new[i].status+'</h5>' + '</td>'
                    +'<td>'+'<a href="#">'+'<i class="fas fa-pencil-alt">'+'</i>'+'</a>'+'    '+'<a href="#">'+'<i class="fas fa-trash-alt">'+'</i>'+'</a>' +'</td>'
                +'</tr>';
    }
    body.innerHTML = html;
}