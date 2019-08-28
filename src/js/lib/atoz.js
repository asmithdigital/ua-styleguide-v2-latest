(function($) {
  const disableClass = 'is-disabled';
  const azBodyClass = '.c-az-list__body';
  const azMenuClass = '.c-az-list__menu > li > a';
  const anchorElement = '.c-az-list__content-item';

  $(function() {
    let $azBody = $(azBodyClass);
    // Foreach azBody we want find all anchor elements and return each heading 2 tag id attribute.
    let $activeHeadings = $azBody.find(anchorElement).map(function () { return $(this).attr('id'); }).get();
    let $azMenu = $(azMenuClass);
    // Loop over each a to z menu - anything that is not in activeHeadings will have disabled class
    // added to it.
    $.each($azMenu, function (index, value) {
      if ($(this).attr('href')) {
        let href = $(value).attr('href').split('#')[1];
        if ($.inArray(href, $activeHeadings) === -1) {
          $(this).parent().addClass(disableClass);
          $(this).removeAttr('href');
        }
      }
    });
    // Smooth scroll for the menu items
    $(azMenuClass).foundation();
  });
})(jQuery);
