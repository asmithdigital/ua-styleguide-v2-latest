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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
/******/ })
/************************************************************************/
/******/ ({

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

  // Get the media query styles string and parse to object
  var extractedStyles = $('.foundation-mq').css('font-family');
  var namedQueries = void 0;
  namedQueries = parseStyleToObject(extractedStyles);

  // Define new custom queries to be used interchange elements
  Foundation.Interchange.SPECIAL_QUERIES.smallRetina = buildMediaQueryString(namedQueries.small);
  Foundation.Interchange.SPECIAL_QUERIES.mediumRetina = buildMediaQueryString(namedQueries.medium);
  Foundation.Interchange.SPECIAL_QUERIES.largeRetina = buildMediaQueryString(namedQueries.large);
  Foundation.Interchange.SPECIAL_QUERIES.xlargeRetina = buildMediaQueryString(namedQueries.xlarge);
  Foundation.Interchange.SPECIAL_QUERIES.xxlargeRetina = buildMediaQueryString(namedQueries.xxlarge);

  // Build the size and retina media query string
  function buildMediaQueryString(minWidth) {
    return 'only screen and (min-width: ' + minWidth + ') and (-webkit-min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min--moz-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (-o-min-device-pixel-ratio: 2/1), only screen and (min-width: ' + minWidth + ') and (min-device-pixel-ratio: 2), only screen and (min-width: ' + minWidth + ') and (min-resolution: 192dpi), only screen and (min-width: ' + minWidth + ') and (min-resolution: 2dppx)';
  }

  // Thank you: https://github.com/sindresorhus/query-string
  function parseStyleToObject(str) {
    var styleObject = {};

    if (typeof str !== 'string') {
      return styleObject;
    }

    str = str.trim().slice(1, -1); // browsers re-quote string style values

    if (!str) {
      return styleObject;
    }

    styleObject = str.split('&').reduce(function (ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];
      key = decodeURIComponent(key);

      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }
      return ret;
    }, {});

    return styleObject;
  }

  // Activate Foundation on interchange elements
  $('.js-interchange').foundation();
})(jQuery);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(249);


/***/ })

/******/ });