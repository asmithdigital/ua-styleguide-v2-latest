import '../../../node_modules/vegas/dist/vegas.js';

// Vegas slider
// =========================================
(function($) {

const $vegasSliderElement = $('.js-vegas-slider');
const $fixedVegasSliderElement = $('.js-vegas-slider-is-fixed');
const vegasSlidesData = $vegasSliderElement.data('vegas-slides');
const fixedvegasSlidesData = $fixedVegasSliderElement.data('vegas-slides');
const sliderNavigation = $('.js-vegas-slider__navigation');
const sliderTransitionDuration = $vegasSliderElement.data('vegas-transition-duration');
const sliderOverlay = $vegasSliderElement.data('vegas-overlay');

// The vegas plugin init
function loadVegasSlider($element, slidesData) {

  $element.vegas({
    preload: true,
    overlay: sliderOverlay ? sliderOverlay : '//global.adelaide.edu.au/v/style-guide2/assets/img/overlay/01.png',
    transitionDuration: 4000,
    delay: 10000,
    slides: slidesData,
    transition: 'fade',
    firstTransition: 'fade',
    firstTransitionDuration: 2000,
    init: function(){
      this.removeAttr('data-vegas-slides');
    }
  });

  if (sliderNavigation.length) {
    $element.vegas('options', 'transition', 'slideLeft2');
  }

  if (sliderTransitionDuration !== 'undefined') {
    $element.vegas('options', 'transitionDuration', sliderTransitionDuration);
  }

  $('#vegas-slider-previous').on('click', function (e) {
    e.preventDefault();
    $element.vegas('options', 'transition', 'slideRight2').vegas('previous');
    $element.vegas('options', 'transition', 'slideLeft2');
  });

  $('#vegas-slider-next').on('click', function (e) {
    e.preventDefault();
    $element.vegas('options', 'transition', 'slideLeft2').vegas('next');
  });
}



$(function() {
  loadVegasSlider($vegasSliderElement, vegasSlidesData);

  if (Foundation.MediaQuery.is('medium') && $fixedVegasSliderElement.length) {
    loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
  }
});

// Check for window resize and load imagie plugin if medium and above
$(window).on('changed.zf.mediaquery', function(event, newSize) {
  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
  if (newSize === 'medium' || newSize === 'large' || newSize === 'xlarge' || newSize === 'xxlarge') {
    if ($vegasSliderElement.length) {
      loadVegasSlider($vegasSliderElement, vegasSlidesData);
    }
    else if ($fixedVegasSliderElement.length) {
      loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
    }
  }
  // Destroy the plugin if resize to small breakpoint
  else if (newSize === 'small') {
    $fixedVegasSliderElement.vegas('destroy');
  }
});

})(jQuery);
