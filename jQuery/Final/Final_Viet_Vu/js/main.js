//                  MANAGEMENT                         //

// đi đến trang Edit
$("#btnAdd").click(function () {
  location.replace("http://127.0.0.1:5500/Final_Viet_Vu/html/edit.html");
});
// chọn tất cả checkbox bằng checkbox tổng
function toggle_(source) {
  var checkboxes = $(":checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != source) checkboxes[i].checked = source.checked;
  }
}
// xoá nhiều el
function Delete() {
  
  var checkboxes = $(":checkbox");
  for (var i = 1; i < checkboxes.length; i++) {
    if ($(checkboxes[i]).prop("checked") == true) {
      checkboxes[i].parentElement.parentElement.remove();
        
    }
  }
 

}
$("#chkTotal").click(function () {
  toggle_(this);
});
$("#btnDelete").click(Delete);


// ----------  show value   ---------------
$("#table").ready(function () {
  var values = JSON.parse(localStorage.getItem("FINAL")); //get value đang có trong local
 
  if(values != null){
    for (var i = 0; i < values.length; i++) {
      var addTag =
        ' <tr class="new_management">' 
              +  '<td><input type="checkbox" ></td>' 
              +  "<td>"  + values[i].name + "</td>" 
              + '<td><input type = "color" value = "'  + values[i].color  + '"</td>' 
              + "<td>"  + values[i].maxHours  + "</td>" 
              + "<td>"  + values[i].status  + "</td>" 
              + "<td class = 'ok'>"  + values[i].zoneList   + "</td>" 
              + '<td class = "ok">' 
                      + '  <i class="fas fa-pencil-alt"></i>' 
                      + ' <i   class="fas fa-trash"></i>' 
              + "</td>" 
          +"</tr>";
      $("#show_values").append(addTag); // add vào tbody
  }
  }

  // xoá ở thẻ i thùng rác - xoá 1 el
  $(".fa-trash").click(function () {
    $(this).parents(".new_management").remove(); // phải đặt vào trong vì phải load xong table thì mới có thể xoá được
  });
});


//--------------------------------------------------------------------------------------------------------------//

            //                          EDIT                               //

//quay lai trang management
$("#btnManage").click(function () {
  location.href = "http://127.0.0.1:5500/Final_Viet_Vu/html/management.html";
});

//tạo mới validator cho input Max Hours
$.validator.addMethod("maxHours", function (maxHours) {
  if (isNaN(maxHours) || parseInt(maxHours)<0 || parseInt(maxHours) > 24) return false;
  else return true;
});
//tạo mới validator cho select Whitelisted
$.validator.addMethod("new_selWhitelisted", function () {
  if ($("#selWhitelisted").has("option").length > 0) return true;
  else return false;
});

// validate cho form
function validate_(){

  $("#form_edit").validate({
    rules: {
      edtName: "required",
      chkOperating: "required",
      edtMaxHours: {
        required: true,
        maxHours: true,
      },
      selWhitelisted: {
        new_selWhitelisted: true,
      }
     
    },
    messages: {
      edtName: "Vui lòng nhập trường này",
      chkOperating: "Vui lòng nhập trường này",
      edtMaxHours: {
        required: "Vui lòng nhập trường này",
        maxHours: "Nhập sai vui lòng nhập lại",
      },
      selWhitelisted: {
        new_selWhitelisted: 'Vui lòng kick chọn mục "Zone List"',
      },
      
    }   
  });

}
// phải gọi ra để khi blur thì check validate luôn
validate_();

// chuyển option được chọn từ List sang Whitelisted
function toRight() {
  var value = $("#selList").val();
  for (var i = 0; i < value.length; i++) {
    $("#selWhitelisted").append(new Option(value[i], value[i])); // add thẻ option(text, value) vào select
  }
}
// xoá bỏ option được chọn bên select Whitelisted
function toLeft() {
  var valBack = $("#selWhitelisted").val();
  for (var i = 0; i < valBack.length; i++) {
    $("#selWhitelisted")
      .find('[value="' + valBack[i] + '"]')
      .remove();
    //hoặc dung    $("#selWhitelisted").children($(this).has("value", valBack[i])).remove();
  }
}



$("#btnRight").click(toRight);
$("#btnLeft").click(toLeft);


//------------------ LƯU VALUE---------------------------/
//tạo contructor
var valInput_obj = function (name, maxHours, status, color, zoneList) {
  this.name = name;
  this.maxHours = maxHours;
  this.status = status;
  this.color = color;
  this.zoneList = zoneList;
};

function saveValue() {
  validate_();
  var arr_input = [];
  var a = JSON.parse(localStorage.getItem("FINAL")); //get value trong local rồi add vào arr

  if (a != null)
    // check trong trường hợp đầu tiên chưa có value trong local
    arr_input = a;

  // get value option  selWhitelisted
  var options = $("#selWhitelisted option");
  var values_option = $.map(options, function (option) {
    return option.value;
  });
  var valInput = new valInput_obj(
    $("#edtName").val().trim(),
    $("#edtMaxHours").val().trim(),
    $("#selStatus").val(),
    $("#favColor").val(),
    values_option
  );

  arr_input.push(valInput); //thêm obj mới được tạo vào arr
  //chuyển từ obj sang json
  var json_arr = JSON.stringify(arr_input);
  localStorage.setItem("FINAL", json_arr);
}

$("#btnSave").click(saveValue);
