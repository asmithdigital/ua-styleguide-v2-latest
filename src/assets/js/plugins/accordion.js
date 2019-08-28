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
/******/ 	return __webpack_require__(__webpack_require__.s = 335);
/******/ })
/************************************************************************/
/******/ ({

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var _this = this;

  var $accordion = $('.js-accordion');
  var $accordionNested = $('.js-accordion-nested');
  var accordionOptions = {
    allowAllClosed: true,
    multiExpand: true,
    deepLink: true,
    deepLinkSmudge: true,
    deepLinkSmudgeDelay: 600
  };
  // Create new instance of accordion
  var accordion = new Foundation.Accordion($accordion, accordionOptions); // eslint-disable-line no-unused-vars 

  // Create new settings for new nested instance of accordion
  var nestedAccordionOptions = {
    deepLink: false
  };
  var newNestedAccordionOptions = $.extend({}, accordionOptions, nestedAccordionOptions);
  var accordionNested = new Foundation.Accordion($accordionNested, newNestedAccordionOptions); // eslint-disable-line no-unused-vars 

  // Toggle expand or collapse
  var accordionToggle = function accordionToggle($element) {
    var $this = $element;
    var $items = $($this).find('.c-accordion__item');
    var allExpanded = false;
    var $toggleButton = $($this).find('[data-expand-all]');
    var expandText = 'Expand';
    var collapseText = 'Collapse';
    $this.accordionItemOpenArray = [];

    var expandAccordion = function expandAccordion($thisToggleButton) {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=true]').click();
      $thisToggleButton.text(collapseText);
      allExpanded = true;
    };

    var contractAccordion = function contractAccordion($thisToggleButton) {
      $thisToggleButton.parent($accordion).find('.c-accordion__title').not('[aria-expanded=false]').click();
      $thisToggleButton.text(expandText);
      allExpanded = false;
    };

    var handleClickToggle = function handleClickToggle(itemHasClass, itemIndex, accordionArray) {
      if (itemHasClass) {
        accordionArray.push(itemIndex);
      } else {
        accordionArray.splice($.inArray(itemIndex, accordionArray), 1);
      }
      if (accordionArray.length === $items.length) {
        allExpanded = true;
        $toggleButton.text(collapseText).attr('aria-expanded', true);
      }
      if (accordionArray.length === 0) {
        allExpanded = false;
        $toggleButton.text(expandText).attr('aria-expanded', true);
      }
    };

    // Toggle all when click toggle buttons
    $toggleButton.on('click', function () {
      var $thisToggleButton = $(this);
      if (allExpanded === false) {
        expandAccordion($thisToggleButton);
      } else {
        contractAccordion($thisToggleButton);
      }
    });

    // Set toggle button text on page load
    $toggleButton.text(expandText);

    // Set index and click handler for each toggle item
    $.each($items, function (itemIndex) {
      this.index = itemIndex;
      var accordiontItemindex = this.index;
      var $anchor = $(this).find('> a');
      var $parentAccordion = $(this).parent();

      $anchor.on('click', function () {
        var itemHasClass = $(this).parent().hasClass('is-active');
        // Send this item index and this item parent array instances to handleClickToggle method
        handleClickToggle(itemHasClass, accordiontItemindex, $parentAccordion[0].accordionItemOpenArray, $toggleButton);
      });
    });

    // Check for an open element on load()
    $(window).on('load', function () {
      $.each($items, function () {
        if ($(this).hasClass('is-active')) {
          $(this).parent()[0].accordionItemOpenArray.push(this.index);
        }
      });
    });

    // Need to reinit equaliser nested within accordion
    if (!$(_this).closest('.js-equalize').length) {
      $($accordion).on('down.zf.accordion', function () {
        var reinitEqualiser = new Foundation.Equalizer($(this).find('.js-equalize')); // eslint-disable-line no-unused-vars
      });
    }
  };

  // Loop the accordion or nested accordion elements and call the toggle function
  $.each($accordion, function () {
    accordionToggle(this);
  });
  $.each($accordionNested, function () {
    accordionToggle(this);
  });
})(jQuery);

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(233);


/***/ })

/******/ });