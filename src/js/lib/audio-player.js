import '../ES5/ua-audio-playlist';

(function ($) {
  var $audioPlaylist = $('.js-audio-playlist');
  
  var loadCSS = function(href) {

    var cssLink = $("<link>");
    $("head").append(cssLink); //IE hack: append before setting href

    cssLink.attr({
      rel:  "stylesheet",
      type: "text/css",
      href: href
    });

  };

  // Init the audio playlist plugin
  $audioPlaylist.ua_audioplaylist();

  if ($('audio').length && !Modernizr.audio.mp3) { // eslint-disable-line no-undef
    loadCSS("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelementplayer.css");

    $.getScript("https://global.adelaide.edu.au/style-guide-v2/latest/js/vendor/mediaelement-and-player.js", function(){
      $('audio').mediaelementplayer();
    });
  }

  // Quick pollyfill for video, just in case. I tried using mediaelementplayer but its too buggy and not worth the hassle.
  if ($('video').length && !Modernizr.video.h264) { // eslint-disable-line no-undef
    $.getScript("http://api.html5media.info/1.1.8/html5media.min.js");
  }
})(jQuery);
