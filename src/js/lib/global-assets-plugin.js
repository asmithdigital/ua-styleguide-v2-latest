import '../global-settings';

export default class GlobalAssets {
  constructor(selectors) {
    let $ = jQuery;
    // @todo - make these over writable.
    this.megaOptions = {
      closeOnClickInside: false
    };
    if(selectors.megamenu && selectors.quicklinks) {
      this.$megaMenu = $(selectors.megamenu);
      this.$quickLinks = $(selectors.quicklinks);
      this.megaMenu = new Foundation.DropdownMenu(this.$megaMenu, this.megaOptions);
      this.mediaQuery();
      this.quickLinks();
    }
    if (selectors.search) {
      this.$searchSelector = $(selectors.search);
      this.search = new Foundation.OffCanvas(this.$searchSelector);
    }
  }
  mediaQuery() {
    // Need to manually init MediaQuery plugin
    Foundation.MediaQuery._init();
    // Destroy the drop down menu on medium and small
    if(Foundation.MediaQuery.current === 'small' || Foundation.MediaQuery.current === 'medium') {
      this.$megaMenu.foundation('_destroy');
    }
  }
  quickLinks() {
    this.$quickLinks.foundation();
  }
}

// Add to global scope.
window.GlobalAssets = GlobalAssets;
