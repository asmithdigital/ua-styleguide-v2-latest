import '../../../node_modules/imagesloaded/imagesloaded.pkgd.min';

(function($) {
  let $equalizer = $('.js-equalize');

  // Create new instance of equalizer
  let equalizerOptions = {
    equalizeByRow: true,
    equalizeOn: 'medium'
  };

  $equalizer.imagesLoaded(function() {
    let equalizer = new Foundation.Equalizer($equalizer, equalizerOptions); // eslint-disable-line no-unused-vars
  });

})(jQuery);
