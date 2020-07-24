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
        var infoObj = function(box, company, color, maxHours, zones, status) {
          this.box = box;
          this.company = company;
          this.color = color;
          this.maxHours = maxHours;
          this.zones = zones;
          this.status = status;
        };

        var info = new infoObj(
          '<input type="checkbox" class="data">',
          $('#company').val(),
          $('#color').val(),
          $('#hours').val(),
          $('#listed').text(),
          $('#status').val()
        );

        var data = '';
        var oldData = localStorage.getItem('info');
        var infoString = JSON.stringify(info);

        data = (oldData == null) ? infoString : oldData + ';' + infoString; 
        localStorage.setItem('info', data);
        alert('Data save to localStorage!');
        location.href = 'http://127.0.0.1:5500/jQuery/home.html';
      }
    });
  });

  $('#add').click(function() {
    var valueArr = $('#list').val();
    var valueStr = '';

    for (let i of valueArr) {
      valueStr += `<option value="${i}">${i}</option>`;
      $('#listed').html(valueStr);
    }
  });

  $('#remove').click(function() {
    var valueArr = $('#listed').val();

    for (let i of valueArr) {
      $("#listed").find(`[value="${i}"]`).remove();
    }
  });

  $('#cancel').click(function() {
    location.href = 'http://127.0.0.1:5500/Finally_Đô_Phong/home.html';
  })
});


