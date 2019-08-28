import '../../../node_modules/isotope-layout/dist/isotope.pkgd.min.js';

(function($) {

  let isotopeSettings =  {
    itemSelector: '.c-filter-nav__column',
    percentPosition: true,
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        const weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  };
  
  // for each filters
  $('.c-filter-nav__container').each( function( i, buttonGroup ) {
    let $buttonGroup = $( buttonGroup );
    let $grid = $buttonGroup.next('.c-filter-nav');
    let $loadFirst = $buttonGroup.find('.u-filter-load-first');
    let $buttonGroupFilter = $buttonGroup.find('.js-filter-nav-filter');
    let $buttonGroupFilterCombination = $buttonGroup.find('.js-filter-nav-filter-combination');
    
    // init Isotope
    $grid.isotope(isotopeSettings);

    // bind sort button click
    $buttonGroup.find('.js-filter-nav-sorts').on( 'click', '.c-filter-nav__button', function() {
      var sortByValue = $(this).attr('data-sort-by');
      $grid.isotope({ sortBy: sortByValue });
    });

    // change is-checked class on buttons
    $buttonGroup.find('.c-filter-nav__group').each( function( j, filterButtonGroup ) {
      const $filterButtonGroup = $( filterButtonGroup );
      $filterButtonGroup.on( 'click', '.c-filter-nav__button', function() {
        $filterButtonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    // if standard filter
    // bind filter button click
    $buttonGroupFilter.on( 'click', '.c-filter-nav__button', function() {
      const filterValue = $( this ).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // if combination filter
    // store filter for each group
    const filters = {};

    $buttonGroupFilterCombination.on('click', '.c-filter-nav__button', function(event) {
      let $button = $(event.currentTarget);
      filterFunction($button);
    });

    //  Check for combination filters
    if ($buttonGroupFilterCombination.length) {
      // Check for loadFirst className
      if ($loadFirst.length) {
        $.each($loadFirst, function() {
          let $loadFirstButton = $(this);
          filterFunction($loadFirstButton);
        });
      }
    } 
    else { // if not combination filter, just filter with data-filter attribute
      if ($loadFirst.length) {
        $grid.isotope({ filter: $loadFirst.attr('data-filter') });
      }
    }

    // Setting up the filter object on pageLoad or click
    function filterFunction($filterButtonContext) {
      // get group key
      const $parentButtonGroup = $filterButtonContext.parents('.c-filter-nav__group');
      let filterGroup = $parentButtonGroup.attr('data-filter-group');
      // set filter for group
      filters[ filterGroup ] = $filterButtonContext.attr('data-filter');
      // concatenate the filter object into the format required for isotope
      let filterValue = concatValues( filters );
      // set filter for Isotope
      return $grid.isotope({ filter: filterValue });
    }

    // flatten object by concatting values
    function concatValues( obj ) {
      let value = '';
      for ( let prop in obj ) { // eslint-disable-line guard-for-in
        value += obj[ prop ];
      }
      return value;
    }    
  });

})(jQuery);
