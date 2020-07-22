$(document).ready(function() {
  $('#email').focus();

  $(':radio').change(function() {
    var value = $(':radio:checked').val();

    if (value == 'individual') {
      $('#company').attr('disabled', true);
      $('#company').next().text('');
    } else {
      $('#company').attr('disabled', false);
      $('#company').next().text('*');
    }
  });

  $('#submit').click(function() {
    $('#form').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        verify: {
          required: true,
          equalTo: '#password'
        },
        firstName: {
          required: true,
          newRule: true
        },
        lastName: 'required',
        phone: {
          required: true,
          number: true
        }
      },
      messages: {
        email: {
          required: 'This field is required!',
          email: 'Wrong email format!'
        },
        password: {
          required: 'This field is required!',
          minlength: jQuery.validator.format('The password must be at least {0} characters!')
        },
        verify: {
          required: 'This field is required!',
          equalTo: 'The verify password did not match!'
        },
        firstName: {
          required: 'This field is required!',
          newRule: 'Wrong new rule!'
        },
        lastName: 'This field is required!',
        phone: {
          required: 'This field is required!',
          number: 'Must be a number!'
        }
      },
      submitHandler: function() {
        $('#result').html(
          '<p>Email: ' + $("#email").val() + '</p>' +
          '<p>Company name: ' + $("#company").val() + '</p>' +
          '<p>First name: ' + $("#first-name").val() + '</p>' +
          '<p>Last name: ' + $("#last-name").val() + '</p>' +
          '<p>Phone number: ' + $("#phone").val() + '</p>');
      }
    });
  });

  $.validator.addMethod('newRule', function(value) {
    return value.indexOf('abc') != -1 ? true : false;
  })
});
