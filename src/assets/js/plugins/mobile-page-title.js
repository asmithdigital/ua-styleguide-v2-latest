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
/******/ 	return __webpack_require__(__webpack_require__.s = 357);
/******/ })
/************************************************************************/
/******/ ({

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
  var $pageTitle = $('#ua-page-title');
  var $window = $(window);
  var prev = 0;
  var paddingTop = $pageTitle.outerHeight();
  var titleOffsetTop = $pageTitle.offset().top;
  var toBottomOfTitle = titleOffsetTop + paddingTop;

  // Sticky mobile page title
  // ===============================
  // Create new instance of sticky for pagetitle
  var pageTitleOptions = {
    containerClass: 'c-page-title__sticky-menu-container',
    stickyClass: 'c-page-title__sticky-menu',
    marginTop: 0,
    topAnchor: 'ua-page-title:top',
    stickyOn: 'small'
  };

  // Destroy sticky page title on medium up
  if (Foundation.MediaQuery.is('small only')) {
    var pageTitle = new Foundation.Sticky($pageTitle, pageTitleOptions); // eslint-disable-line no-unused-vars
  }

  // Destroy sticky page title when resize browser from medium up
  $(window).on('changed.zf.mediaquery', function () {
    if (Foundation.MediaQuery.atLeast('medium')) {
      $pageTitle.foundation('_destroy');
    }
  });

  function paddingScroll() {
    if (Foundation.MediaQuery.is('small only')) {
      var scrollTop = $window.scrollTop();
      $pageTitle.toggleClass('mobile-hidden', scrollTop > prev && scrollTop > toBottomOfTitle);
      prev = scrollTop;
    }
  }

  $window.on('scroll', function () {
    paddingScroll();
  });

  $window.on('resize', function () {
    paddingScroll();
  });

  $window.on('load', function () {
    setTimeout(function () {
      paddingScroll();
    }, 1);
  });
})(jQuery);

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(251);


/***/ })

/******/ });