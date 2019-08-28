(function($) {
  let $smoothScrollElement = $('.js-smooth-scroll');

  if ($smoothScrollElement.length) {
    let smoothScroll = new Foundation.SmoothScroll($smoothScrollElement); // eslint-disable-line no-unused-vars
  }

  let $backTopGlobal = $('.js-back-top');
  $backTopGlobal.hide();

  let idleTimer = null;
  let idleWait = 2000;

  $(window).on('mousemove mousewheel DOMMouseScroll keydown scroll', function () {
    clearTimeout(idleTimer);

    if ($(this).scrollTop() >= 100 && $(this).scrollTop() !== 0) {
      $backTopGlobal.fadeIn();
    }

    idleTimer = setTimeout(function () {
      $backTopGlobal.fadeOut();
    }, idleWait);
  });

  $('body').trigger('mousemove');
})(jQuery);
