const defaults = {
  classNames: {
    dataset: 'c-autocomplete__results is-active',
    suggestion: 'c-autocomplete__results-item',
    cursor: 'is-active'
  },
  linkLimit: 10,
  // Flag to turn on forwards to google search.
  noResults: false,
  noResultsParams: {
    sitePath: '',
    url: ''
  },
  templates: {
    notFound: '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" href="{{noResults}}"><em>Search for {{link}}</em></a>',
    suggestion: function (link) {
      if (link.hasOwnProperty('target')) {
        return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" target="' + link.target + '" href="' + link.href + '">' + link.text + '</a></div>';
      }
      return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" href="' + link.href + '">' + link.text + '</a></div>';
    }
  }
};

// Create a scope alias of jQuery.
var $ = jQuery;

export default class AutocompleteSearch {

  constructor(element, options) {
    this.element = element;
    this.$element = $(element);
    this.$links = this.$element.find('a[href]:not([href^="#"])').not(':has(img)');
    this.$input = this.$element.find('input[name="autocomplete"]');
    this.$go = this.$element.find('button[type="submit"]');
    this.selectedLink = false;
    this.settings = $.extend(true, defaults, options);
    this.init();
  }
  init() {
    // Google search is being used.
    if (this.settings.noResults) {
      // Template to be complied.
      this.settings.noResultsParams.template = this.settings.templates.notFound;
      this.settings.templates.notFound = this.buildNoResultsTemplate.bind(this);
    }

    this.$input.typeahead(
      {
        highlight: true,
        classNames: this.settings.classNames
      },
      {
        name: 'links',
        limit: this.settings.linkLimit,
        // Bind the context to this method. That way we have access to Plugin scope.
        source: this.suggestions.bind(this),
        display: this.display,
        templates: this.settings.templates
      });
    this.bindTypeaheadEvents();
  }
  suggestions(query, callback) {
    let text;
    let link;
    let matches = [];
    let regex = new RegExp(query, 'i');
    this.$links.each(function () {
      text = $(this).text();
      if (regex.test(text)) {
        link = {text: text, href: $(this).attr('href'), target: $(this).attr('target')};
        matches.push(link);
      }
    });
    callback(matches);
  }
  display(link) {
    return link.text;
  }
  bindTypeaheadEvents() {
    let context = this;

    this.$input.bind('typeahead:autocomplete', function (event, link) {
      context.selectedLink = link;
    });

    this.$input.bind('typeahead:render', this.focusFirstItem.bind(this));

    this.$input.bind('typeahead:open', function () {
      context.$element.find('.tt-menu').width('100%');
    });

    this.$input.bind('typeahead:cursorchange', function (event, link) {
      context.selectedLink = link;
    });

    this.$input.bind('typeahead:select', function (event, link) {
      context.goToLink(link);
    });

    this.$input.on('keypress', function (event) {
      if (event.which === 13) {
        event.preventDefault();
        if (context.selectedLink) {
          context.goToLink(context.selectedLink);
        }
      }
    });
    this.$go.on('click', function (event) {
      event.preventDefault();
      if (context.selectedLink) {
        context.goToLink(context.selectedLink);
      }
    });

    $('.twitter-typeahead').css('display', 'block');
  }
  focusFirstItem(event, suggestions) { // eslint-disable-line no-unused-vars
    let $firstItem = this.$input.parent().find('.c-autocomplete__results-item:first');
    $firstItem.addClass('is-active');
    $firstItem.focus();
    this.selectedLink = $firstItem.find('a')[0]; // Pull the native javascript element here.
  }
  goToLink(link) {
    // Respect target blank.
    if (link.hasOwnProperty('target') && link.target) {
      window.open(link.href, link.target);
      return;
    }
    window.location = link.href;
  }
  buildNoResultsTemplate(query) {
    let template = this.settings.noResultsParams.template;
    template = template.replace('{{noResults}}', this.buildNoResultsSearchUrl(query.query));
    template = template.replace('{{link}}', query.query);
    return template;
  }
  buildNoResultsSearchUrl(query) {
    let url = this.settings.noResultsParams.url;
    let sitePath = this.settings.noResultsParams.sitePath;
    url = url.replace('{{site}}', sitePath);
    url = url.replace('{{query}}', query);
    return url;
  }
}

window.AutocompleteSearch = AutocompleteSearch;
