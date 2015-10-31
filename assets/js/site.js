function navbox() {
  var body = $('body');
  var navbox = $('#navbox');
  var navboxShow = $('#navboxShow');
  var navboxClose = $('#navboxClose');

  function showActions() {
    body.css('overflow','hidden');
    navbox.addClass('open');
    navbox.on('click', 'a', closeActions);
  }

  function closeActions() {
    body.css('overflow','');
    navbox.removeClass('open');
    navbox.off('click', 'a', closeActions);
  }

  navboxShow.click(function() {
    showActions();
  });

  navboxClose.click(function() {
    closeActions();
  });

}

$(document).ready(function(){
  navbox();
});