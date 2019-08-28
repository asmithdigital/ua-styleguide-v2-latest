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
/******/ 	return __webpack_require__(__webpack_require__.s = 345);
/******/ })
/************************************************************************/
/******/ ({

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _degreeFinderPlugin = __webpack_require__(55);

var _degreeFinderPlugin2 = _interopRequireDefault(_degreeFinderPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {
  apiBaseUrl: '/webteam/dfsearch/'
};

if ($('#df-searchfield').length) {
  var autocomplete = new _degreeFinderPlugin2.default($('#df-searchfield'), settings); // eslint-disable-line no-unused-vars
}

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
  apiBaseUrl: 'https://www.adelaide.edu.au/webteam/dfsearch/',
  locationBaseUrl: 'https://www.adelaide.edu.au/degree-finder/',
  advancedContentSelector: '.js-degree-finder-advanced',
  advancedToggleSelector: '.js-degree-finder-advanced-toggle'
};

// Create a scope alias of jQuery.
var $ = jQuery;

var DegreeFinder = function () {
  function DegreeFinder(element, options) {
    _classCallCheck(this, DegreeFinder);

    this.options = $.extend(true, defaults, options);
    this.dfDataRequested = false;

    this.$searchField = $(element);
    this.$advanced = $(this.options.advancedContentSelector);
    this.$advanced.hide();

    this.searchYear = this.$searchField.data('js-year') ? parseInt(this.$searchField.data('js-year'), 10) : new Date().getYear() + 1900;

    this.searchList = [];

    this.init();
  }

  _createClass(DegreeFinder, [{
    key: 'init',
    value: function init() {
      this.bindAdvancedToggleEvent();
      this.createWidget();
      this.bindSearchFieldEvents();
    }
  }, {
    key: 'bindAdvancedToggleEvent',
    value: function bindAdvancedToggleEvent() {
      var _this = this;

      $(this.options.advancedToggleSelector).on('click', function (e) {
        e.preventDefault();
        _this.$advanced.toggle();
      });
    }
  }, {
    key: 'createWidget',
    value: function createWidget() {
      $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function _create() {
          this._super();
          this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function _renderMenu(ul, items) {
          var that = this,
              currentCategory = "";
          $.each(items, function (index, item) {
            var li = void 0;
            if (item.category !== currentCategory) {
              ul.append('<li class=\'ui-autocomplete-category\'>' + item.category + '</li>');
              currentCategory = item.category;
            }
            li = that._renderItemData(ul, item);
            if (item.category) {
              li.attr("aria-label", item.category + ' : ' + item.label);
            }
          });
        },
        _renderItem: function _renderItem(ul, item) {
          return $('<li />').data('item.autocomplete', item).append($('<a />').text(item.label)).appendTo(ul);
        }
      });
    }
  }, {
    key: 'dfSearchForm',
    value: function dfSearchForm(action, searchVal) {
      var params = {
        m: 'view',
        dsn: 'program.source_program',
        year: this.searchYear,
        // eslint-disable-next-line camelcase
        v_avail_comm: 1
      };
      params[action] = searchVal;
      window.location = this.options.locationBaseUrl + '?' + jQuery.param(params);
    }
  }, {
    key: 'bindSearchFieldEvents',
    value: function bindSearchFieldEvents() {
      var _this2 = this;

      this.$searchField.catcomplete({
        source: this.searchList
      });

      // triggers on every focus
      this.$searchField.focus(function () {
        // Only will call the ajax post until we have a successful retrieve, hopefully only once.
        if (!_this2.dfDataRequested) {
          _this2.dfDataRequested = true;

          // Ajax call to get JSON object.
          $.ajax({
            type: 'GET',
            async: false,
            url: _this2.options.apiBaseUrl + _this2.searchYear,
            dataType: 'json',
            cache: true,
            success: function success(json) {
              _this2.searchList = json.data;
            }
          });

          _this2.$searchField.catcomplete({
            disabled: false,
            source: _this2.searchList,
            minLength: 2,
            select: function select(event, ui) {
              if (ui.item.category === 'Undergraduate Programs' || ui.item.category === 'Postgraduate Coursework Programs' || ui.item.category === 'Higher Degrees by Research') {
                window.location = _this2.options.locationBaseUrl + ui.item.dest + '.html';
              } else if (ui.item.category === 'Careers') {
                _this2.dfSearchForm('v_career', ui.item.dest);
              } else if (ui.item.category === 'Subjects') {
                _this2.dfSearchForm('v_subject', ui.item.dest);
              }

              return true;
            }
          });
        }
      });
    }
  }]);

  return DegreeFinder;
}();

exports.default = DegreeFinder;


window.DegreeFinder = DegreeFinder;

/***/ })

/******/ });