// Animate the logo
// =========================================

let elem = $('.c-header__logo');
let elemMobile = $('.c-header__logo--mobile');

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if (oldSize === 'large' && newSize === 'medium') {
    Foundation.Motion.animateIn(elemMobile, 'slide-in-down fast short-delay ease', function() {
      elemMobile.show();
    });
  }
  else if (oldSize === 'medium' && newSize === 'large') {
    Foundation.Motion.animateIn(elem, 'slide-in-down fast short-delay ease', function() {
      elem.show();
    });
  }
});
