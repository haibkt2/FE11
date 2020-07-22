$(document).ready(function() {
  $('#save').click(function() {
    $.validator.addMethod('maxHours', function(value) {
      if (isNaN(value) || parseInt(value) <= 0) {
        return false;
      } else {
        return true;
      }
    });

    $.validator.addMethod('listedZone', function() {    
      if ($('#listed').has('option').length > 0)
        return true;
      else {
        return false;
      }
    });

    $('#form').validate({
      rules: {
        company: 'required',
        operating: 'required',
        hours: {
          required: true,
          maxHours: true
        },
        listed: {
          listedZone: true
        }
      },
      messages: {
        company: 'This field is required!',
        operating: 'This field is required!',
        hours: {
          required: 'The value must be a positive number!',
          maxHours: 'The value must be a positive number!'
        },
        listed: 'Please choose in zone list!'
      },
      submitHandler: function() {
        alert('Validated!')
      }
    });
  });

  $('#add').click(function() {
    var valueArr = $('#list').val();
    var valueStr = '';

    for (let i in valueArr) {
      valueStr += `<option value="${valueArr[i]}">${valueArr[i]}</option>`;
      $('#listed').html(valueStr);
    }
  });

  $('#remove').click(function() {
    var valueArr = $('#listed').val();

    for (let i in valueArr) {
      $("#listed").find(`[value="${valueArr[i]}"]`).remove();
    }
  });
});


