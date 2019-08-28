/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 339);
/******/ })
/************************************************************************/
/******/ ({

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _autocompleteSearchPlugin = __webpack_require__(53);

var _autocompleteSearchPlugin2 = _interopRequireDefault(_autocompleteSearchPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var autocompleteSettings = {
  noResults: true,
  noResultsParams: {
    sitePath: 'adelaide.edu.au',
    url: 'https://search.adelaide.edu.au/s/search.html?collection=uoa-search&q={{query}}&sitesearch={{site}}'
  }
};

var autocomplete = new _autocompleteSearchPlugin2.default($('.js-autocomplete__search-wrapper'), autocompleteSettings); // eslint-disable-line no-unused-vars

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(236);


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
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
    suggestion: function suggestion(link) {
      if (link.hasOwnProperty('target')) {
        return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" target="' + link.target + '" href="' + link.href + '">' + link.text + '</a></div>';
      }
      return '<div class="c-autocomplete__results-item"><a class="c-autocomplete__results-item-link" href="' + link.href + '">' + link.text + '</a></div>';
    }
  }
};

// Create a scope alias of jQuery.
var $ = jQuery;

var AutocompleteSearch = function () {
  function AutocompleteSearch(element, options) {
    _classCallCheck(this, AutocompleteSearch);

    this.element = element;
    this.$element = $(element);
    this.$links = this.$element.find('a[href]:not([href^="#"])').not(':has(img)');
    this.$input = this.$element.find('input[name="autocomplete"]');
    this.$go = this.$element.find('button[type="submit"]');
    this.selectedLink = false;
    this.settings = $.extend(true, defaults, options);
    this.init();
  }

  _createClass(AutocompleteSearch, [{
    key: 'init',
    value: function init() {
      // Google search is being used.
      if (this.settings.noResults) {
        // Template to be complied.
        this.settings.noResultsParams.template = this.settings.templates.notFound;
        this.settings.templates.notFound = this.buildNoResultsTemplate.bind(this);
      }

      this.$input.typeahead({
        highlight: true,
        classNames: this.settings.classNames
      }, {
        name: 'links',
        limit: this.settings.linkLimit,
        // Bind the context to this method. That way we have access to Plugin scope.
        source: this.suggestions.bind(this),
        display: this.display,
        templates: this.settings.templates
      });
      this.bindTypeaheadEvents();
    }
  }, {
    key: 'suggestions',
    value: function suggestions(query, callback) {
      var text = void 0;
      var link = void 0;
      var matches = [];
      var regex = new RegExp(query, 'i');
      this.$links.each(function () {
        text = $(this).text();
        if (regex.test(text)) {
          link = { text: text, href: $(this).attr('href'), target: $(this).attr('target') };
          matches.push(link);
        }
      });
      callback(matches);
    }
  }, {
    key: 'display',
    value: function display(link) {
      return link.text;
    }
  }, {
    key: 'bindTypeaheadEvents',
    value: function bindTypeaheadEvents() {
      var context = this;

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
  }, {
    key: 'focusFirstItem',
    value: function focusFirstItem(event, suggestions) {
      // eslint-disable-line no-unused-vars
      var $firstItem = this.$input.parent().find('.c-autocomplete__results-item:first');
      $firstItem.addClass('is-active');
      $firstItem.focus();
      this.selectedLink = $firstItem.find('a')[0]; // Pull the native javascript element here.
    }
  }, {
    key: 'goToLink',
    value: function goToLink(link) {
      // Respect target blank.
      if (link.hasOwnProperty('target') && link.target) {
        window.open(link.href, link.target);
        return;
      }
      window.location = link.href;
    }
  }, {
    key: 'buildNoResultsTemplate',
    value: function buildNoResultsTemplate(query) {
      var template = this.settings.noResultsParams.template;
      template = template.replace('{{noResults}}', this.buildNoResultsSearchUrl(query.query));
      template = template.replace('{{link}}', query.query);
      return template;
    }
  }, {
    key: 'buildNoResultsSearchUrl',
    value: function buildNoResultsSearchUrl(query) {
      var url = this.settings.noResultsParams.url;
      var sitePath = this.settings.noResultsParams.sitePath;
      url = url.replace('{{site}}', sitePath);
      url = url.replace('{{query}}', query);
      return url;
    }
  }]);

  return AutocompleteSearch;
}();

exports.default = AutocompleteSearch;


window.AutocompleteSearch = AutocompleteSearch;

/***/ })

/******/ });