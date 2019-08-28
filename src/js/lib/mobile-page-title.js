(function($) {
  let $pageTitle = $('#ua-page-title');
  let $window = $(window);
  let prev = 0;
  let paddingTop = $pageTitle.outerHeight();
  let titleOffsetTop = $pageTitle.offset().top;
  let toBottomOfTitle = titleOffsetTop + paddingTop;


  // Sticky mobile page title
  // ===============================
  // Create new instance of sticky for pagetitle
  let pageTitleOptions = {
    containerClass: 'c-page-title__sticky-menu-container',
    stickyClass: 'c-page-title__sticky-menu',
    marginTop: 0,
    topAnchor: 'ua-page-title:top',
    stickyOn: 'small'
  };

  // Destroy sticky page title on medium up
  if (Foundation.MediaQuery.is('small only')) {
    let pageTitle = new Foundation.Sticky($pageTitle, pageTitleOptions); // eslint-disable-line no-unused-vars
  }

  // Destroy sticky page title when resize browser from medium up
  $(window).on('changed.zf.mediaquery', function() {
    if (Foundation.MediaQuery.atLeast('medium')) {
      $pageTitle.foundation('_destroy');
    }
  });

  function paddingScroll() {
    if (Foundation.MediaQuery.is('small only')) {
      let scrollTop = $window.scrollTop();
      $pageTitle.toggleClass('mobile-hidden', scrollTop > prev && scrollTop > toBottomOfTitle);
      prev = scrollTop;
    }
  }

  $window.on('scroll', function () {
    paddingScroll();
  });

  $window.on('resize', function () {
    paddingScroll();
  });

  $window.on('load', function () {
    setTimeout(function () {
      paddingScroll();
    }, 1);
  });
})(jQuery);
