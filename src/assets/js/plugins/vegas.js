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
/******/ 	return __webpack_require__(__webpack_require__.s = 366);
/******/ })
/************************************************************************/
/******/ ({

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(331);

// Vegas slider
// =========================================
(function ($) {

  var $vegasSliderElement = $('.js-vegas-slider');
  var $fixedVegasSliderElement = $('.js-vegas-slider-is-fixed');
  var vegasSlidesData = $vegasSliderElement.data('vegas-slides');
  var fixedvegasSlidesData = $fixedVegasSliderElement.data('vegas-slides');
  var sliderNavigation = $('.js-vegas-slider__navigation');
  var sliderTransitionDuration = $vegasSliderElement.data('vegas-transition-duration');
  var sliderOverlay = $vegasSliderElement.data('vegas-overlay');

  // The vegas plugin init
  function loadVegasSlider($element, slidesData) {

    $element.vegas({
      preload: true,
      overlay: sliderOverlay ? sliderOverlay : '//global.adelaide.edu.au/v/style-guide2/assets/img/overlay/01.png',
      transitionDuration: 4000,
      delay: 10000,
      slides: slidesData,
      transition: 'fade',
      firstTransition: 'fade',
      firstTransitionDuration: 2000,
      init: function init() {
        this.removeAttr('data-vegas-slides');
      }
    });

    if (sliderNavigation.length) {
      $element.vegas('options', 'transition', 'slideLeft2');
    }

    if (sliderTransitionDuration !== 'undefined') {
      $element.vegas('options', 'transitionDuration', sliderTransitionDuration);
    }

    $('#vegas-slider-previous').on('click', function (e) {
      e.preventDefault();
      $element.vegas('options', 'transition', 'slideRight2').vegas('previous');
      $element.vegas('options', 'transition', 'slideLeft2');
    });

    $('#vegas-slider-next').on('click', function (e) {
      e.preventDefault();
      $element.vegas('options', 'transition', 'slideLeft2').vegas('next');
    });
  }

  $(function () {
    loadVegasSlider($vegasSliderElement, vegasSlidesData);

    if (Foundation.MediaQuery.is('medium') && $fixedVegasSliderElement.length) {
      loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
    }
  });

  // Check for window resize and load imagie plugin if medium and above
  $(window).on('changed.zf.mediaquery', function (event, newSize) {
    // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
    if (newSize === 'medium' || newSize === 'large' || newSize === 'xlarge' || newSize === 'xxlarge') {
      if ($vegasSliderElement.length) {
        loadVegasSlider($vegasSliderElement, vegasSlidesData);
      } else if ($fixedVegasSliderElement.length) {
        loadVegasSlider($fixedVegasSliderElement, fixedvegasSlidesData);
      }
    }
    // Destroy the plugin if resize to small breakpoint
    else if (newSize === 'small') {
        $fixedVegasSliderElement.vegas('destroy');
      }
  });
})(jQuery);

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!-----------------------------------------------------------------------------
 * Vegas - Fullscreen Backgrounds and Slideshows.
 * v2.4.0 - built 2017-01-04
 * Licensed under the MIT License.
 * http://vegas.jaysalvat.com/
 * ----------------------------------------------------------------------------
 * Copyright (C) 2010-2017 Jay Salvat
 * http://jaysalvat.com/
 * --------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    var defaults = {
        slide: 0,
        delay: 5000,
        loop: true,
        preload: false,
        preloadImage: false,
        preloadVideo: false,
        timer: true,
        overlay: false,
        autoplay: true,
        shuffle: false,
        cover: true,
        color: null,
        align: 'center',
        valign: 'center',
        firstTransition: null,
        firstTransitionDuration: null,
        transition: 'fade',
        transitionDuration: 1000,
        transitionRegister: [],
        animation: null,
        animationDuration: 'auto',
        animationRegister: [],
        slidesToKeep: 1,
        init: function init() {},
        play: function play() {},
        pause: function pause() {},
        walk: function walk() {},
        slides: [
            // {
            //  src:                null,
            //  color:              null,
            //  delay:              null,
            //  align:              null,
            //  valign:             null,
            //  transition:         null,
            //  transitionDuration: null,
            //  animation:          null,
            //  animationDuration:  null,
            //  cover:              true,
            //  video: {
            //      src: [],
            //      mute: true,
            //      loop: true
            // }
            // ...
        ]
    };

    var videoCache = {};

    var Vegas = function Vegas(elmt, options) {
        this.elmt = elmt;
        this.settings = $.extend({}, defaults, $.vegas.defaults, options);
        this.slide = this.settings.slide;
        this.total = this.settings.slides.length;
        this.noshow = this.total < 2;
        this.paused = !this.settings.autoplay || this.noshow;
        this.ended = false;
        this.$elmt = $(elmt);
        this.$timer = null;
        this.$overlay = null;
        this.$slide = null;
        this.timeout = null;
        this.first = true;

        this.transitions = ['fade', 'fade2', 'blur', 'blur2', 'flash', 'flash2', 'negative', 'negative2', 'burn', 'burn2', 'slideLeft', 'slideLeft2', 'slideRight', 'slideRight2', 'slideUp', 'slideUp2', 'slideDown', 'slideDown2', 'zoomIn', 'zoomIn2', 'zoomOut', 'zoomOut2', 'swirlLeft', 'swirlLeft2', 'swirlRight', 'swirlRight2'];

        this.animations = ['kenburns', 'kenburnsLeft', 'kenburnsRight', 'kenburnsUp', 'kenburnsUpLeft', 'kenburnsUpRight', 'kenburnsDown', 'kenburnsDownLeft', 'kenburnsDownRight'];

        if (this.settings.transitionRegister instanceof Array === false) {
            this.settings.transitionRegister = [this.settings.transitionRegister];
        }

        if (this.settings.animationRegister instanceof Array === false) {
            this.settings.animationRegister = [this.settings.animationRegister];
        }

        this.transitions = this.transitions.concat(this.settings.transitionRegister);
        this.animations = this.animations.concat(this.settings.animationRegister);

        this.support = {
            objectFit: 'objectFit' in document.body.style,
            transition: 'transition' in document.body.style || 'WebkitTransition' in document.body.style,
            video: $.vegas.isVideoCompatible()
        };

        if (this.settings.shuffle === true) {
            this.shuffle();
        }

        this._init();
    };

    Vegas.prototype = {
        _init: function _init() {
            var $wrapper,
                $overlay,
                $timer,
                isBody = this.elmt.tagName === 'BODY',
                timer = this.settings.timer,
                overlay = this.settings.overlay,
                self = this;

            // Preloading
            this._preload();

            // Wrapper with content
            if (!isBody) {
                this.$elmt.css('height', this.$elmt.css('height'));

                $wrapper = $('<div class="vegas-wrapper">').css('overflow', this.$elmt.css('overflow')).css('padding', this.$elmt.css('padding'));

                // Some browsers don't compute padding shorthand
                if (!this.$elmt.css('padding')) {
                    $wrapper.css('padding-top', this.$elmt.css('padding-top')).css('padding-bottom', this.$elmt.css('padding-bottom')).css('padding-left', this.$elmt.css('padding-left')).css('padding-right', this.$elmt.css('padding-right'));
                }

                this.$elmt.clone(true).children().appendTo($wrapper);
                this.elmt.innerHTML = '';
            }

            // Timer
            if (timer && this.support.transition) {
                $timer = $('<div class="vegas-timer"><div class="vegas-timer-progress">');
                this.$timer = $timer;
                this.$elmt.prepend($timer);
            }

            // Overlay
            if (overlay) {
                $overlay = $('<div class="vegas-overlay">');

                if (typeof overlay === 'string') {
                    $overlay.css('background-image', 'url(' + overlay + ')');
                }

                this.$overlay = $overlay;
                this.$elmt.prepend($overlay);
            }

            // Container
            this.$elmt.addClass('vegas-container');

            if (!isBody) {
                this.$elmt.append($wrapper);
            }

            setTimeout(function () {
                self.trigger('init');
                self._goto(self.slide);

                if (self.settings.autoplay) {
                    self.trigger('play');
                }
            }, 1);
        },

        _preload: function _preload() {
            var img, i;

            for (i = 0; i < this.settings.slides.length; i++) {
                if (this.settings.preload || this.settings.preloadImages) {
                    if (this.settings.slides[i].src) {
                        img = new Image();
                        img.src = this.settings.slides[i].src;
                    }
                }

                if (this.settings.preload || this.settings.preloadVideos) {
                    if (this.support.video && this.settings.slides[i].video) {
                        if (this.settings.slides[i].video instanceof Array) {
                            this._video(this.settings.slides[i].video);
                        } else {
                            this._video(this.settings.slides[i].video.src);
                        }
                    }
                }
            }
        },

        _random: function _random(array) {
            return array[Math.floor(Math.random() * array.length)];
        },

        _slideShow: function _slideShow() {
            var self = this;

            if (this.total > 1 && !this.ended && !this.paused && !this.noshow) {
                this.timeout = setTimeout(function () {
                    self.next();
                }, this._options('delay'));
            }
        },

        _timer: function _timer(state) {
            var self = this;

            clearTimeout(this.timeout);

            if (!this.$timer) {
                return;
            }

            this.$timer.removeClass('vegas-timer-running').find('div').css('transition-duration', '0ms');

            if (this.ended || this.paused || this.noshow) {
                return;
            }

            if (state) {
                setTimeout(function () {
                    self.$timer.addClass('vegas-timer-running').find('div').css('transition-duration', self._options('delay') - 100 + 'ms');
                }, 100);
            }
        },

        _video: function _video(srcs) {
            var video,
                source,
                cacheKey = srcs.toString();

            if (videoCache[cacheKey]) {
                return videoCache[cacheKey];
            }

            if (srcs instanceof Array === false) {
                srcs = [srcs];
            }

            video = document.createElement('video');
            video.preload = true;

            srcs.forEach(function (src) {
                source = document.createElement('source');
                source.src = src;
                video.appendChild(source);
            });

            videoCache[cacheKey] = video;

            return video;
        },

        _fadeOutSound: function _fadeOutSound(video, duration) {
            var self = this,
                delay = duration / 10,
                volume = video.volume - 0.09;

            if (volume > 0) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeOutSound(video, duration);
                }, delay);
            } else {
                video.pause();
            }
        },

        _fadeInSound: function _fadeInSound(video, duration) {
            var self = this,
                delay = duration / 10,
                volume = video.volume + 0.09;

            if (volume < 1) {
                video.volume = volume;

                setTimeout(function () {
                    self._fadeInSound(video, duration);
                }, delay);
            }
        },

        _options: function _options(key, i) {
            if (i === undefined) {
                i = this.slide;
            }

            if (this.settings.slides[i][key] !== undefined) {
                return this.settings.slides[i][key];
            }

            return this.settings[key];
        },

        _goto: function _goto(nb) {
            if (typeof this.settings.slides[nb] === 'undefined') {
                nb = 0;
            }

            this.slide = nb;

            var $slide,
                $inner,
                $video,
                $slides = this.$elmt.children('.vegas-slide'),
                src = this.settings.slides[nb].src,
                videoSettings = this.settings.slides[nb].video,
                delay = this._options('delay'),
                align = this._options('align'),
                valign = this._options('valign'),
                cover = this._options('cover'),
                color = this._options('color') || this.$elmt.css('background-color'),
                self = this,
                total = $slides.length,
                video,
                img;

            var transition = this._options('transition'),
                transitionDuration = this._options('transitionDuration'),
                animation = this._options('animation'),
                animationDuration = this._options('animationDuration');

            if (this.settings.firstTransition && this.first) {
                transition = this.settings.firstTransition || transition;
            }

            if (this.settings.firstTransitionDuration && this.first) {
                transitionDuration = this.settings.firstTransitionDuration || transitionDuration;
            }

            if (this.first) {
                this.first = false;
            }

            if (cover !== 'repeat') {
                if (cover === true) {
                    cover = 'cover';
                } else if (cover === false) {
                    cover = 'contain';
                }
            }

            if (transition === 'random' || transition instanceof Array) {
                if (transition instanceof Array) {
                    transition = this._random(transition);
                } else {
                    transition = this._random(this.transitions);
                }
            }

            if (animation === 'random' || animation instanceof Array) {
                if (animation instanceof Array) {
                    animation = this._random(animation);
                } else {
                    animation = this._random(this.animations);
                }
            }

            if (transitionDuration === 'auto' || transitionDuration > delay) {
                transitionDuration = delay;
            }

            if (animationDuration === 'auto') {
                animationDuration = delay;
            }

            $slide = $('<div class="vegas-slide"></div>');

            if (this.support.transition && transition) {
                $slide.addClass('vegas-transition-' + transition);
            }

            // Video

            if (this.support.video && videoSettings) {
                if (videoSettings instanceof Array) {
                    video = this._video(videoSettings);
                } else {
                    video = this._video(videoSettings.src);
                }

                video.loop = videoSettings.loop !== undefined ? videoSettings.loop : true;
                video.muted = videoSettings.mute !== undefined ? videoSettings.mute : true;

                if (video.muted === false) {
                    video.volume = 0;
                    this._fadeInSound(video, transitionDuration);
                } else {
                    video.pause();
                }

                $video = $(video).addClass('vegas-video').css('background-color', color);

                if (this.support.objectFit) {
                    $video.css('object-position', align + ' ' + valign).css('object-fit', cover).css('width', '100%').css('height', '100%');
                } else if (cover === 'contain') {
                    $video.css('width', '100%').css('height', '100%');
                }

                $slide.append($video);

                // Image
            } else {
                img = new Image();

                $inner = $('<div class="vegas-slide-inner"></div>').css('background-image', 'url("' + src + '")').css('background-color', color).css('background-position', align + ' ' + valign);

                if (cover === 'repeat') {
                    $inner.css('background-repeat', 'repeat');
                } else {
                    $inner.css('background-size', cover);
                }

                if (this.support.transition && animation) {
                    $inner.addClass('vegas-animation-' + animation).css('animation-duration', animationDuration + 'ms');
                }

                $slide.append($inner);
            }

            if (!this.support.transition) {
                $slide.css('display', 'none');
            }

            if (total) {
                $slides.eq(total - 1).after($slide);
            } else {
                this.$elmt.prepend($slide);
            }

            $slides.css('transition', 'all 0ms').each(function () {
                this.className = 'vegas-slide';

                if (this.tagName === 'VIDEO') {
                    this.className += ' vegas-video';
                }

                if (transition) {
                    this.className += ' vegas-transition-' + transition;
                    this.className += ' vegas-transition-' + transition + '-in';
                }
            });

            self._timer(false);

            function go() {
                self._timer(true);

                setTimeout(function () {
                    if (transition) {
                        if (self.support.transition) {
                            $slides.css('transition', 'all ' + transitionDuration + 'ms').addClass('vegas-transition-' + transition + '-out');

                            $slides.each(function () {
                                var video = $slides.find('video').get(0);

                                if (video) {
                                    video.volume = 1;
                                    self._fadeOutSound(video, transitionDuration);
                                }
                            });

                            $slide.css('transition', 'all ' + transitionDuration + 'ms').addClass('vegas-transition-' + transition + '-in');
                        } else {
                            $slide.fadeIn(transitionDuration);
                        }
                    }

                    for (var i = 0; i < $slides.length - self.settings.slidesToKeep; i++) {
                        $slides.eq(i).remove();
                    }

                    self.trigger('walk');
                    self._slideShow();
                }, 100);
            }
            if (video) {
                if (video.readyState === 4) {
                    video.currentTime = 0;
                }

                video.play();
                go();
            } else {
                img.src = src;

                if (img.complete) {
                    go();
                } else {
                    img.onload = go;
                }
            }
        },

        _end: function _end() {
            this.ended = true;
            this._timer(false);
            this.trigger('end');
        },

        shuffle: function shuffle() {
            var temp, rand;

            for (var i = this.total - 1; i > 0; i--) {
                rand = Math.floor(Math.random() * (i + 1));
                temp = this.settings.slides[i];

                this.settings.slides[i] = this.settings.slides[rand];
                this.settings.slides[rand] = temp;
            }
        },

        play: function play() {
            if (this.paused) {
                this.paused = false;
                this.next();
                this.trigger('play');
            }
        },

        pause: function pause() {
            this._timer(false);
            this.paused = true;
            this.trigger('pause');
        },

        toggle: function toggle() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        },

        playing: function playing() {
            return !this.paused && !this.noshow;
        },

        current: function current(advanced) {
            if (advanced) {
                return {
                    slide: this.slide,
                    data: this.settings.slides[this.slide]
                };
            }
            return this.slide;
        },

        jump: function jump(nb) {
            if (nb < 0 || nb > this.total - 1 || nb === this.slide) {
                return;
            }

            this.slide = nb;
            this._goto(this.slide);
        },

        next: function next() {
            this.slide++;

            if (this.slide >= this.total) {
                if (!this.settings.loop) {
                    return this._end();
                }

                this.slide = 0;
            }

            this._goto(this.slide);
        },

        previous: function previous() {
            this.slide--;

            if (this.slide < 0) {
                if (!this.settings.loop) {
                    this.slide++;
                    return;
                } else {
                    this.slide = this.total - 1;
                }
            }

            this._goto(this.slide);
        },

        trigger: function trigger(fn) {
            var params = [];

            if (fn === 'init') {
                params = [this.settings];
            } else {
                params = [this.slide, this.settings.slides[this.slide]];
            }

            this.$elmt.trigger('vegas' + fn, params);

            if (typeof this.settings[fn] === 'function') {
                this.settings[fn].apply(this.$elmt, params);
            }
        },

        options: function options(key, value) {
            var oldSlides = this.settings.slides.slice();

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                this.settings = $.extend({}, defaults, $.vegas.defaults, key);
            } else if (typeof key === 'string') {
                if (value === undefined) {
                    return this.settings[key];
                }
                this.settings[key] = value;
            } else {
                return this.settings;
            }

            // In case slides have changed
            if (this.settings.slides !== oldSlides) {
                this.total = this.settings.slides.length;
                this.noshow = this.total < 2;
                this._preload();
            }
        },

        destroy: function destroy() {
            clearTimeout(this.timeout);

            this.$elmt.removeClass('vegas-container');
            this.$elmt.find('> .vegas-slide').remove();
            this.$elmt.find('> .vegas-wrapper').clone(true).children().appendTo(this.$elmt);
            this.$elmt.find('> .vegas-wrapper').remove();

            if (this.settings.timer) {
                this.$timer.remove();
            }

            if (this.settings.overlay) {
                this.$overlay.remove();
            }

            this.elmt._vegas = null;
        }
    };

    $.fn.vegas = function (options) {
        var args = arguments,
            error = false,
            returns;

        if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            return this.each(function () {
                if (!this._vegas) {
                    this._vegas = new Vegas(this, options);
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var instance = this._vegas;

                if (!instance) {
                    throw new Error('No Vegas applied to this element.');
                }

                if (typeof instance[options] === 'function' && options[0] !== '_') {
                    returns = instance[options].apply(instance, [].slice.call(args, 1));
                } else {
                    error = true;
                }
            });

            if (error) {
                throw new Error('No method "' + options + '" in Vegas.');
            }

            return returns !== undefined ? returns : this;
        }
    };

    $.vegas = {};
    $.vegas.defaults = defaults;

    $.vegas.isVideoCompatible = function () {
        return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent);
    };
})(window.jQuery || window.Zepto);

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(260);


/***/ })

/******/ });