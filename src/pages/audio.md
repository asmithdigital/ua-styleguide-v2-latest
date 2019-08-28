---
title: Audio
description: Documentation for audio.
static-demo: static-audio
---

## Audio player

The audio player uses the native HTML5 audio player markup. If the browser does not support this functionality a pollyfill will be loaded from the `global.adelaide` web server to provide this functionality to the user browser.

```html
<audio controls
       class="js-mediaelementplayer"
       style="width:100%;"
       width="100%">
  <source src="assets/audio/audio.mp3" type="audio/mp3">
</audio>
```


## Audio playlist

The audio playlist uses the same native audio player and also includes the table and wrapper element as seen in the demo below. The class `js-audio-playlist` is used to control the playlist with the JavaScript plugin. 

The class `is-active` can be placed on the `c-audio-playlist__track` element which you want to load first. By default the plugin will load the first track in the playlist.

```html
<div class="c-audio-playlist js-audio-playlist">
  <audio controls
         class="js-mediaelementplayer c-audio-playlist__audio"
         style="width:100%;"
         width="100%">
    <source src="" type="audio/mp3">
  </audio>
  <table class="c-table c-table--striped c-audio-playlist__playlist" style="display: table;">
    <caption>Table Caption</caption>
    <tbody>
    <tr>
      <th>Track</th>
      <th style="width: 20%">Mins:Secs</th>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="path/to/mp3-file.mp3">Track 1</a></td>
      <td>2:37</td>
    </tr>
    <! -- >
    </tbody>
  </table>
  <div class="c-audio-playlist__caption">
    <p class="c-audio-playlist__caption-text">Example mp3 files sourced from <a href="http://www.bensound.com">http://www.bensound.com</a>.</p>
  </div>
</div>
```


## JavaScript

- `js/plugins/audio-player.js`
