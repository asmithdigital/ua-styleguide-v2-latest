---
title: Audio
description: Static demonstration of audio.
layout: static
static: true
test-javascript: audio-player
---

<audio controls
       style="width:100%;"
       width="100%">
  <source src="assets/audio/audio.mp3" type="audio/mp3">
</audio>


<div class="c-audio-playlist js-audio-playlist">
  <audio controls
         class="c-audio-playlist__audio"
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
      <td><a class="c-audio-playlist__track" href="assets/audio/audio.mp3">Acoustic breeze</a></td>
      <td>2:37</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/02-sunny.mp3">Sunny</td>
      <td>2:20</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/03-pianomoment.mp3">Piano moment</a></td>
      <td>1:50</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track is-active" href="assets/audio/04-house.mp3">House</a></td>
      <td>4:19</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/05-dubstep.mp3">Dubstep</a></td>
      <td>2:04</td>
    </tr>
    </tbody>
  </table>
  <div class="c-audio-playlist__caption">
    <p class="c-audio-playlist__caption-text">Example mp3 files sourced from <a href="http://www.bensound.com">http://www.bensound.com</a>.</p>
  </div>
</div>

<div class="c-audio-playlist js-audio-playlist">
  <audio controls
         class="c-audio-playlist__audio"
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
      <td><a class="c-audio-playlist__track" href="assets/audio/audio.mp3">Acoustic breeze</a></td>
      <td>2:37</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/02-sunny.mp3">Sunny</td>
      <td>2:20</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track is-active" href="assets/audio/03-pianomoment.mp3">Piano moment</a></td>
      <td>1:50</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/04-house.mp3">House</a></td>
      <td>4:19</td>
    </tr>
    <tr>
      <td><a class="c-audio-playlist__track" href="assets/audio/05-dubstep.mp3">Dubstep</a></td>
      <td>2:04</td>
    </tr>
    </tbody>
  </table>
  <div class="c-audio-playlist__caption">
    <p class="c-audio-playlist__caption-text">Example mp3 files sourced from <a href="http://www.bensound.com">http://www.bensound.com</a>.</p>
  </div>
</div>
