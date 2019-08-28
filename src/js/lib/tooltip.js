(function($) {

  // FD tooltip
  // ============
  let $tooltip = $('.js-tooltip');
  // Create new instance of tooltip
  let tooltipOptions = {
    tooltipClass: "c-tooltip"
  };

  if($tooltip.length) {
    let tooltip = new Foundation.Tooltip($tooltip, tooltipOptions); // eslint-disable-line no-unused-vars
  }

})(jQuery);
