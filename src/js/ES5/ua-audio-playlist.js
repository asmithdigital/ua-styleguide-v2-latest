/**
 *  ua_audioplaylist() an HTML5 <audio> playlist plugin
 *
 *  A table of mp3 references listed below an <audio> element which can update the current playing audio and auto play.
 *
 *  Options:
 *  - audio_playlist (string): a string which defines the player CSS class name.
 *  - audio_playlist_track (string): a string which defines the track CSS class name.
 *  - active_track_class (string): a string which defines the active track CSS class name.
 *  - current_track_name (string): a string which defines the current track CSS class name.
 *  - playlist (string): a string which defines the playlist CSS class name.
 *  - player_start_volume (number): a number whicih defines the starting volume setting for the audio player.
 *  - is_playing_text (string): text to display before the track title when audio player is playing.
 *  - is_paused_text (string): text to display before the track title when audio player is paused.
 *
 *  Made by Andrew Smith andrew.smith03@adelaide.edu.au
 *
 */

/* global mejs*/
/* eslint strict: ["error", "function"] */

(function ($) {
  'use strict';
  var pluginName = 'ua_audioplaylist';
  var defaults = {
    audio_playlist: 'c-audio-playlist__audio',
    audio_playlist_track: 'c-audio-playlist__track',
    active_track_class: 'is-active',
    current_track_name: 'c-audio-playlist__track-info-text',
    playlist: 'c-audio-playlist__playlist',
    player_start_volume: .50,
    track_info_text: true,
    is_playing_text: 'Currently playing',
    is_paused_text: 'Ready to play'
  };

  // The actual plugin constructor
  function Plugin(element, options) {
    this.element = element;
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, {

    init: function () {
      var self = this;
      var $el = $(self.element);
      var $link;
      var $audio = $el.find('.' + self.settings.audio_playlist)[0];
      var $playlist = $el.find('.' + self.settings.playlist);
      var $tracks = $playlist.find('.' + self.settings.audio_playlist_track);
      var tracksLength = $tracks.length - 1;
      self.settings.tracksLength = tracksLength;
      self.settings.playing_state = false;
      self.settings.current = 0;

      $el.each(function () {
        var $tracks = $el.find('.' + self.settings.audio_playlist_track);
        var $activeElement;
        var activeTrackHTML;
        var activeClassExists = false;
        var current;
        var autoPlay;

        // Check for the active class on page load.
        // If so, assign current index to the index of this track.
        $tracks.each(function (index) {
          this.index = index;
          if ($(this).hasClass(self.settings.active_track_class)) {
            self.settings.current = this.index;
            activeClassExists = true;
            $activeElement = $(this);
          }
        });

        // If active class wasn't set in HTML on page load,
        // assign the current index to the first tracks index
        // and give the first track the active class.
        current = self.settings.current;
        if (!activeClassExists) {
          $activeElement = $($tracks[current]);
        }

        // If use track help text is true, add element to the DOM and pass the
        // default active track to the update Track Info Text method.
        if (self.settings.track_info_text) {
          activeTrackHTML = $($activeElement).html();
          $el.prepend('<p class="' + self.settings.current_track_name + '"</p>');
          self.updateTrackInfoText(activeTrackHTML);
        }

        // Detect whether the pollyfill is in use - mediaelement.js
        // The pollyfill has slightly different API methods than native HTML5 JavaScript API.
        if ($.fn.mediaelementplayer) {
          var whichplayer = $el.find('.mejs__container').attr('id');
          var playerInUse = mejs.players[whichplayer];
          $audio = playerInUse.media;
          $audio.setVolume(self.settings.player_start_volume);
        }
        else {
          $audio.volume = self.settings.player_start_volume;
        }

        // Set the audio player source with the current track
        // but do not start playing automatically.
        self.run($activeElement, $audio, false);

        // Listen for native HTML5 API play or pause events
        // and then update the track info text accordingly.
        function playPause(playing_state) {
          activeTrackHTML = $playlist.find($('.' + self.settings.active_track_class)).html();
          self.settings.playing_state = playing_state;
          self.updateTrackInfoText(activeTrackHTML);
        }
        $($audio).on('play', function () {
          playPause(true);
        });
        $($audio).on('pause', function () {
          playPause(false);
        });

        // Send the clicked audio link href to the run method in order
        // to update the current audio player source and begin playing.
        $tracks.click(function (e) {
          e.preventDefault();
          current = this.index;
          self.settings.current = current;
          self.settings.user_clicked = true;
          self.run($(this), $audio, true);
        });

        // Begin playing the next audio track in the playlist once the currently playing audio is ended.
        $audio.addEventListener('ended', function () {
          current++;
          if (current > tracksLength) {
            current = 0;
            autoPlay = false;
            $link = $playlist.find('.' + self.settings.audio_playlist_track)[0];

            // Ensure the track info text is updated after last track ended.
            self.updateTrackInfoText($($link).html());
          }
          else {
            $link = $playlist.find('.' + self.settings.audio_playlist_track)[current];
            autoPlay = true;
          }
          self.settings.current = current;
          self.settings.user_clicked = false;
          self.run($($link), $audio, autoPlay);
        });
      });
    },
    run: function (link, player, autoPlay) {
      var self = this;
      var $el = $(self.element);
      var newSrc = link.attr('href');

      // Switch the active class to the newly playing audio track.
      $el.find('.' + self.settings.audio_playlist_track).removeClass(self.settings.active_track_class);
      link.addClass(self.settings.active_track_class);

      // Again, slightly different way to set the src to the audio player
      // depending on whether using native or the pollyfill API.
      if ($.fn.mediaelementplayer) {
        player.setSrc(newSrc);
      }
      else {
        player.src = newSrc;
      }

      // Load and then play the new audio track.
      // Both native and pollyfill API use the same method names for this functionality.
      player.load();

      // Only play if autoplay is passed in as true.
      // False is passed in when its the initial page load and
      // also when the last track finishes playing.
      if (autoPlay) {
        player.play();
      }

      return false;
    },
    updateTrackInfoText: function (element) {
      var self = this;
      var $el = $(self.element);
      var playingText;
      var playing_state = self.settings.playing_state;

      // Store the track info text in a variable depending on playing state.
      if (playing_state) {
        playingText = self.settings.is_playing_text;
      }
      else {
        playingText = self.settings.is_paused_text;
      }

      // Set up the new track info text and update the HTML.
      var helpText = playingText + ': <strong>' + element + '</strong>';
      $el.find('.' + self.settings.current_track_name).html(helpText);

      return false;
    }
  });

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' +
          pluginName, new Plugin(this, options));
      }
    });
  };

})(jQuery);
