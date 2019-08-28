import '../global-settings';

(function($) {
  let $serviceMenu = $('.js-services-menu');

  if ($serviceMenu.length) {
    let serviceMenu = new Foundation.OffCanvas($serviceMenu); // eslint-disable-line no-unused-vars
  }

})(jQuery);
