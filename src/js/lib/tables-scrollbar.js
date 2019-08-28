import SimpleBar from 'simplebar';

if (Modernizr.hiddenscroll && !Modernizr.cssscrollbar) { // eslint-disable-line no-undef
  $.each($('table:not(.js-table-sortable)'), function(i, element) {
    let tableScrollbar = new SimpleBar(element, { autoHide: false }); // eslint-disable-line no-unused-vars
  });
}
