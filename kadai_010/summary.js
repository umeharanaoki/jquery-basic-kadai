$(function() {
  $('#change-color').on('click', () => {
    $('#target').css('color', 'pink');
  });
  $('#change-text').on('click', () => {
    $('#target').text('Hello!');
  });
  $('#fade-out').on('click', () => {
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', () => {
    $('#target').fadeIn();
  });
});