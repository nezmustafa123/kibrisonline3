$(".trigger").on('click', function(e) {
  $('.title').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  $('.content').not($(this).next('.content')).slideUp();
  $(this).next('.content').slideToggle();
});

