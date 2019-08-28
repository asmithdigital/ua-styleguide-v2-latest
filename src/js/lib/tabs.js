(function($) {
  const tabsOptions = {
    linkClass: 'c-tabs__title',
    panelClass: 'c-tabs__panel',
    deepLink: true,
    deepLinkSmudge: true,
    linkActiveClass: 'is-active-item',
    panelActiveClass: 'is-active-panel'
  };

  $('.js-tabs').each(function () {
    let $tabs = new Foundation.Tabs($(this), tabsOptions); // eslint-disable-line no-unused-vars
  });

})(jQuery);
