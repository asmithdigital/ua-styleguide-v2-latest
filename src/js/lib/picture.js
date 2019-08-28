(function($) {

  let $picture = $('picture');

  if ($picture.length && !Modernizr.srcset && !Modernizr.picture) { // eslint-disable-line no-undef
    $.getScript("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/picturefill.min.js");
  }
})(jQuery);
