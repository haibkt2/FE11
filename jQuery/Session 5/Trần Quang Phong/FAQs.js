function toggle() {
  $('#why').toggleClass('text-primary');
  $('#text').toggle();
  $('#icon').toggleClass('fa-plus-circle');
}

$('#icon').click(toggle);