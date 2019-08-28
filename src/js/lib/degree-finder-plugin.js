const defaults = {
  apiBaseUrl: 'https://www.adelaide.edu.au/webteam/dfsearch/',
  locationBaseUrl: 'https://www.adelaide.edu.au/degree-finder/',
  advancedContentSelector: '.js-degree-finder-advanced',
  advancedToggleSelector: '.js-degree-finder-advanced-toggle',
};

// Create a scope alias of jQuery.
let $ = jQuery;

export default class DegreeFinder {
  constructor(element, options) {
    this.options = $.extend(true, defaults, options);
    this.dfDataRequested = false;

    this.$searchField = $(element);
    this.$advanced = $(this.options.advancedContentSelector);
    this.$advanced.hide();

    this.searchYear = this.$searchField.data('js-year') ? parseInt(this.$searchField.data('js-year'), 10) : (new Date()).getYear() + 1900 ;

    this.searchList = [];

    this.init();
  }

  init() {
    this.bindAdvancedToggleEvent();
    this.createWidget();
    this.bindSearchFieldEvents();
  }

  bindAdvancedToggleEvent() {
    $(this.options.advancedToggleSelector).on('click', (e) =>{
      e.preventDefault();
      this.$advanced.toggle();
    });
  }

  createWidget() {
    $.widget("custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
      },
      _renderMenu: function (ul, items) {
        let that = this,
        currentCategory = "";
        $.each(items, (index, item) => {
          let li;
          if (item.category !== currentCategory) {
            ul.append(`<li class='ui-autocomplete-category'>${item.category}</li>`);
            currentCategory = item.category;
          }
          li = that._renderItemData(ul, item);
          if ( item.category ) {
            li.attr("aria-label", `${item.category} : ${item.label}`);
          }
        });
      },
      _renderItem: (ul, item) => {
        return $('<li />')
          .data('item.autocomplete', item)
          .append($('<a />').text(item.label))
          .appendTo(ul);
      }
    });
  }

  dfSearchForm(action, searchVal) {
    const params = {
      m: 'view',
      dsn: 'program.source_program',
      year: this.searchYear,
      // eslint-disable-next-line camelcase
      v_avail_comm: 1
    };
    params[action] = searchVal;
    window.location = this.options.locationBaseUrl + '?' + jQuery.param(params);
  }

  bindSearchFieldEvents() {
    this.$searchField.catcomplete({
      source: this.searchList
    });

    // triggers on every focus
    this.$searchField.focus(() => {
      // Only will call the ajax post until we have a successful retrieve, hopefully only once.
      if (!this.dfDataRequested) {
        this.dfDataRequested = true;

        // Ajax call to get JSON object.
        $.ajax({
          type: 'GET',
          async: false,
          url: this.options.apiBaseUrl + this.searchYear,
          dataType: 'json',
          cache: true,
          success: (json) => {
            this.searchList = json.data;
          }
        });

        this.$searchField.catcomplete({
          disabled: false,
          source: this.searchList,
          minLength: 2,
          select: (event, ui) => {
            if (ui.item.category === 'Undergraduate Programs' ||
                ui.item.category === 'Postgraduate Coursework Programs' ||
                ui.item.category === 'Higher Degrees by Research') {
              window.location = this.options.locationBaseUrl + ui.item.dest + '.html';
            }
            else if (ui.item.category === 'Careers') {
              this.dfSearchForm('v_career', ui.item.dest);
            }
            else if (ui.item.category === 'Subjects') {
              this.dfSearchForm('v_subject', ui.item.dest);
            }

            return true;
          },
        });
      }
    });
  }
}

window.DegreeFinder = DegreeFinder;
