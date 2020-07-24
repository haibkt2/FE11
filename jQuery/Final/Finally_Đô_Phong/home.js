function show() {
  var infoString = localStorage.getItem('info');
  var infoArr = infoString.split(';');
  var data;

  for (let i of infoArr) {
    var dataRow = JSON.parse(i);
    
    for (let j in dataRow) {
      data += `<td>${dataRow[j]}</td>`;
    }
    data = `<tr>${data}<td>
      <i class="fas fa-pencil-alt"></i>
      <i class="far fa-trash-alt"></i>
      </td></tr>`;
  }
  $('#tbody').html(data);
}

$(document).ready(function() {
  show();

  $('#box').click(function() { 
    if ($('#box').prop('checked') == true) {
      $('[type="checkbox"]').attr('checked', true);
    } else {
      $('[type="checkbox"]').attr('checked', false);
    }
  });
  
  $('#delete').click(function() {
    var checkBox = $('.data');
    for (let i in checkBox) {
      if ($(checkBox[i]).prop('checked') == true) {
        checkBox[i].parentElement.parentElement.remove();
      }  
    }
  });
});