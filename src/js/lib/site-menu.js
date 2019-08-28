import '../global-settings';

(function($) {
  let $siteMenu = $('.js-site-menu');
  let $siteMenu2 = $('.js-site-menu-toggle-both');
  let $siteMenu3 = $('.js-site-menu-toggle-item-only');
  let $siteMenuOffCanvas = $('.js-site-menu-offcanvas');
  let $siteMenuItem = $('.c-site-menu__item').not('.is-current');

  // Site menu Options object
  let siteMenuOptions = {
    submenuToggle: true
  };

  // Offcanvas functionality required for all site menus
  if ($siteMenuOffCanvas.length) {
    let siteMenuOffCanvas = new Foundation.OffCanvas($siteMenuOffCanvas); // eslint-disable-line no-unused-vars
  }

  // Default/recommended option - linked submenu parent item with toggle button
  if ($siteMenu.length) {
    let siteMenu = new Foundation.AccordionMenu($siteMenu, siteMenuOptions); // eslint-disable-line no-unused-vars
  }

  // Both the submenu parent item and toggle button will toggle the submenu
  if ($siteMenu2.length) {
    let siteMenu2 = new Foundation.AccordionMenu($siteMenu2, siteMenuOptions); // eslint-disable-line no-unused-vars

    // Custom toggle link for siteMenu2
    $siteMenu2.find('li').each(function() {
      var $submenu = $(this).children('[data-submenu]');
      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function(e) {
          e.preventDefault();
          $siteMenu2.foundation('toggle', $submenu);
        });
      }
    });
  }

  // No toggle button and the submenu parent item will toggle the submenu
  if ($siteMenu3.length) {
    let siteMenu3 = new Foundation.AccordionMenu($siteMenu3); // eslint-disable-line no-unused-vars
  }

  // Toggle class for style
  $siteMenuItem.on('click', '.submenu-toggle', function() {
    $(this).parent().toggleClass('is-open');
  });

  // Override the keyboard events
  Foundation.Keyboard.register('AccordionMenu', {
    'ENTER': 'toggle',
    'SPACE': 'toggle',
    // 'ARROW_RIGHT': 'open',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    // 'ARROW_LEFT': 'close',
    'ESCAPE': 'closeAll'
  });

})(jQuery);
