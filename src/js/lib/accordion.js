(function($) {
  let $accordion = $('.js-accordion');
  let $accordionNested = $('.js-accordion-nested');
  let accordionOptions = {
    allowAllClosed: true,
    multiExpand: true,
    deepLink: true,
    deepLinkSmudge: true,
    deepLinkSmudgeDelay: 600
  };
  // Create new instance of accordion
  let accordion = new Foundation.Accordion($accordion, accordionOptions); // eslint-disable-line no-unused-vars 
  
  // Create new settings for new nested instance of accordion
  let nestedAccordionOptions = {
    deepLink: false
  }
  let newNestedAccordionOptions = $.extend({}, accordionOptions, nestedAccordionOptions);
  let accordionNested = new Foundation.Accordion($accordionNested, newNestedAccordionOptions); // eslint-disable-line no-unused-vars 
  
  // Toggle expand or collapse
  const accordionToggle = ($element) => {  
    let $this = $element;
    let $items = $($this).find('.c-accordion__item');
    let allExpanded = false;
    let $toggleButton = $($this).find('[data-expand-all]');
    let expandText = 'Expand';
    let collapseText = 'Collapse';
    $this.accordionItemOpenArray = [];
    
    const expandAccordion = ($thisToggleButton) => {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=true]').click();
      $thisToggleButton.text(collapseText);
      allExpanded = true;
    };

    const contractAccordion = ($thisToggleButton) => {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=false]').click();
      $thisToggleButton.text(expandText);
      allExpanded = false;
    };

    const handleClickToggle = (itemHasClass, itemIndex, accordionArray) => {
      if (itemHasClass) {
        accordionArray.push(itemIndex);
      } 
      else {
        accordionArray.splice( $.inArray(itemIndex, accordionArray), 1);
      }
      if (accordionArray.length === $items.length) {
        allExpanded = true;
        $toggleButton.text(collapseText).attr('aria-expanded', true);
      } 
      if (accordionArray.length === 0) {
        allExpanded = false;
        $toggleButton.text(expandText).attr('aria-expanded', true);
      }
    }

    // Toggle all when click toggle buttons
    $toggleButton.on('click', function() {
      let $thisToggleButton = $(this);
      if (allExpanded === false) {
        expandAccordion($thisToggleButton);
      } else {
        contractAccordion($thisToggleButton);
      }
    });

    // Set toggle button text on page load
    $toggleButton.text(expandText);
    
    // Set index and click handler for each toggle item
    $.each($items, function(itemIndex) {
      this.index = itemIndex;
      let accordiontItemindex = this.index;
      let $anchor = $(this).find('> a');
      let $parentAccordion = $(this).parent();

      $anchor.on('click', function() {  
        let itemHasClass = $(this).parent().hasClass('is-active');
        // Send this item index and this item parent array instances to handleClickToggle method
        handleClickToggle(itemHasClass, accordiontItemindex, $parentAccordion[0].accordionItemOpenArray, $toggleButton);
      });
    });

    // Check for an open element on load()
    $(window).on('load', function() {
      $.each($items, function() {
        if ($(this).hasClass('is-active')) {
          $(this).parent()[0].accordionItemOpenArray.push(this.index);
        }
      });
    });

    // Need to reinit equaliser nested within accordion
    if (!$(this).closest('.js-equalize').length) {
      $($accordion).on('down.zf.accordion', function() {
        let reinitEqualiser = new Foundation.Equalizer($(this).find('.js-equalize')); // eslint-disable-line no-unused-vars
      });
    }
  };

  // Loop the accordion or nested accordion elements and call the toggle function
  $.each($accordion, function() {
    accordionToggle(this);
  });
  $.each($accordionNested, function() {
    accordionToggle(this);
  });

})(jQuery);
