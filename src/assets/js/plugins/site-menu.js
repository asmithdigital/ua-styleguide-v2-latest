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
/******/ 	return __webpack_require__(__webpack_require__.s = 361);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// OffCanvas global settings
Foundation.OffCanvas.defaults.transitionTime = '.2s';
Foundation.OffCanvas.defaults.transition = 'overlap';

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

(function ($) {
  var $siteMenu = $('.js-site-menu');
  var $siteMenu2 = $('.js-site-menu-toggle-both');
  var $siteMenu3 = $('.js-site-menu-toggle-item-only');
  var $siteMenuOffCanvas = $('.js-site-menu-offcanvas');
  var $siteMenuItem = $('.c-site-menu__item').not('.is-current');

  // Site menu Options object
  var siteMenuOptions = {
    submenuToggle: true
  };

  // Offcanvas functionality required for all site menus
  if ($siteMenuOffCanvas.length) {
    var siteMenuOffCanvas = new Foundation.OffCanvas($siteMenuOffCanvas); // eslint-disable-line no-unused-vars
  }

  // Default/recommended option - linked submenu parent item with toggle button
  if ($siteMenu.length) {
    var siteMenu = new Foundation.AccordionMenu($siteMenu, siteMenuOptions); // eslint-disable-line no-unused-vars
  }

  // Both the submenu parent item and toggle button will toggle the submenu
  if ($siteMenu2.length) {
    var siteMenu2 = new Foundation.AccordionMenu($siteMenu2, siteMenuOptions); // eslint-disable-line no-unused-vars

    // Custom toggle link for siteMenu2
    $siteMenu2.find('li').each(function () {
      var $submenu = $(this).children('[data-submenu]');
      if ($submenu.length) {
        $(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
          e.preventDefault();
          $siteMenu2.foundation('toggle', $submenu);
        });
      }
    });
  }

  // No toggle button and the submenu parent item will toggle the submenu
  if ($siteMenu3.length) {
    var siteMenu3 = new Foundation.AccordionMenu($siteMenu3); // eslint-disable-line no-unused-vars
  }

  // Toggle class for style
  $siteMenuItem.on('click', '.submenu-toggle', function () {
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

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);


/***/ })

/******/ });