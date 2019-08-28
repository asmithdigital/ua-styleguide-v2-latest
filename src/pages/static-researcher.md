---
title: Researcher profiles
description: Static demonstration of researcher profiles.
layout: static
static: true
full-width: true
hide-title-data: true
hide-local-footer: true
custom-title: Researcher profiles
pagination: true
centered-pagination: true
minimal-banner: true
---

<p class="u-lead-text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>

<div class="c-autocomplete">
  <h2>Find a Researcher</h2>
  <p>Lorem Ipsum is simply <a href="dummy1.html">dummy text of the</a>.</p>
  <form method="get" action="">
    <div class="c-autocomplete__input-group">
      <input class="c-autocomplete__input-group-field" name="autocomplete" placeholder="Search" type="text">
      <div class="c-autocomplete__input-group-button">
        <button class="c-autocomplete__button" type="submit" title="Search">Search</button>
      </div>
    </div>
    <div class="u-inline-label-wrapper">
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Supervisors only</label>
    </div>
  </form>
</div>

<form>
  <div class="c-autocomplete">
    <div class="o-layout__content-row">
      <div class="o-layout__content-column-full">
        <h2>Browse by</h2>
        <p>Lorem Ipsum is simply <a href="dummy1.html">dummy text of the</a>.</p>
      </div>
      <div class="o-layout__content-column-half">
        <h3>Research Interests</h3>
        <div class="c-autocomplete__input-group">
          <input class="c-autocomplete__input-group-field" name="autocomplete" placeholder="Search" type="text">
          <div class="c-autocomplete__input-group-button">
            <button class="c-autocomplete__button c-btn c-btn--success" type="submit" title="Search"><i class="fa fa-fw fa-search" style="font-size: 25px;"  aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="u-inline-label-wrapper">
          <input id="checkbox2" type="checkbox"><label for="checkbox2">Supervisors only</label>
        </div>
      </div>
      <div class="o-layout__content-column-half">
        <h3>Schools & Divisions</h3>
        <div class="c-autocomplete__input-group">
          <input class="c-autocomplete__input-group-field" name="autocomplete" placeholder="Search" type="text">
          <div class="c-autocomplete__input-group-button">
            <button class="c-autocomplete__button c-btn c-btn--success" type="submit" title="Search"><i class="fa fa-fw fa-search" style="font-size: 25px;" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="u-inline-label-wrapper">
          <input id="checkbox3" type="checkbox"><label for="checkbox3">Supervisors only</label>
        </div>
      </div>
    </div>
  </div>
</form>

<h2>Recently updated</h2>
<div class="c-media-object__row is-stacked has-four-columns js-equalize">
  {{#repeat 5}}
  <section class="c-media-object__column">
    <div class="c-media-object" data-equalizer-watch>
      <div class="c-media-object__section">
        <div class="c-media-object__image-wrapper">
          <a href="static-researcher-profile.html" class="c-media-object__image-link">
            <img src="https://via.placeholder.com/1166x1166/">
          </a>
        </div>
      </div>
      <div class="c-media-object__section c-media-object__section--content">
        <h2 class="c-media-object__heading"><a href="static-researcher-profile.html">John Citizen Kane Verylongsurname</a></h2>
        <p>I'm going to improvise. Listen, there's something you should know about me...</p>
      </div>
    </div>
  </section>
  <section class="c-media-object__column">
    <div class="c-media-object" data-equalizer-watch>
      <div class="c-media-object__section">
        <div class="c-media-object__image-wrapper">
          <a href="static-researcher-profile.html" class="c-media-object__image-link">
            <img src="https://via.placeholder.com/1166x1166/">
          </a>
        </div>
      </div>
      <div class="c-media-object__section c-media-object__section--content">
        <h2 class="c-media-object__heading"><a href="static-researcher-profile.html">John Citizen Kane</a></h2>
        <p>I'm going to improvise. Listen, there's something you should know about me...</p>
        <p><i class="fa fa-fw fa-check" aria-hidden="true"></i> Eligible to supervise Masters and PhD</p>
      </div>
    </div>
  </section>
  {{/repeat}}
</div>
