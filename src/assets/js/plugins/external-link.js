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
/******/ 	return __webpack_require__(__webpack_require__.s = 347);
/******/ })
/************************************************************************/
/******/ ({

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(333);

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This code is copied from the following js plugin files from SG V1 and combined temporarily:
// - js/plugins/ua-ext-icons.js
// - js/plugins/ua-linkie.js

// TODO: This needs to be written as ES6 module and also needs more work for exclude custom domains

(function ($) {

  var externalLinkClass = 'fa-external-link';
  var newWindowIconClass = 'fa-window-restore';
  var excludeIconsClass = 'js-hide-icon';
  var hiddenTextClass = 'u-hidden-text';

  var hostnameString = location.hostname.toLowerCase();
  var excludeExternalLink = ['adelaide.edu.au']; // needs to be able to be customised
  // var includeExternalLink = []

  var fileIconExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx'];
  var fileLinkSelectors = fileIconExtensions.map(function (type) {
    return '.o-layout__main a[href$=".' + type + '"]';
  });

  // File extensions icons.
  // ========================
  $(fileLinkSelectors.join()).each(function () {
    var extension = $(this).attr('href').split('.').pop();
    var spanClasses = ['fa-file-' + extension + '-o'];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // New window icon.
  // ========================
  $('.o-layout__main a[target="_blank"]').each(function () {
    var spanClasses = [newWindowIconClass];
    if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
      spanClasses.push(hiddenTextClass);
    }
    $(this).append(' <i class="fa fa-ext fa-fw ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
  });

  // External link icon.
  // ========================
  $('.o-layout__main a[href^="http"], .o-layout__main a[href^="//"]').each(function () {
    var href = $(this).attr('href');
    var isExternalLinkInHref = true;
    var i;
    var len;

    for (i = 0, len = excludeExternalLink.length; i < len; i++) {
      if (href.indexOf(excludeExternalLink[i]) > -1) {
        isExternalLinkInHref = false;
        break;
      }
    }

    // for (i = 0, len = includeExternalLink.length; i < len; i++) {
    //   if (href.indexOf(includeExternalLink[i]) > -1) {
    //     isExternalLinkInHref = true;
    //     break;
    //   }
    // }

    if (href.indexOf(hostnameString) < 0 && isExternalLinkInHref === true) {
      var spanClasses = [externalLinkClass];
      if ($(this).find('img').length || $(this).hasClass(excludeIconsClass)) {
        spanClasses.push(hiddenTextClass);
      }
      $(this).append(' <i class="fa fa-ext ' + spanClasses.join(' ') + '" aria-hidden="true"></i>');
    }
  });
})(jQuery);

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);


/***/ })

/******/ });