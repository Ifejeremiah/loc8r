$(function () {
  const alert = $('.alert.alert-danger');
  $('#addReview').on('submit', (evt) => {
    alert.hide();
    if (!$('input#name').val() || !$('textarea#review').val() || !$('select#rating').val()) {
      if (alert.length) {
        alert.show();
      } else {
        $(this).prepend('<div class="alert alert-danger" role="alert"> All fields required, please try again.</div>');
      }
      return false;
    }
  });
});