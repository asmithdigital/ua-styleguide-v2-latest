---
title: Degree finder search
description: Documentation for the degree finder search.
static-demo: static-degree-finder-search
---

## Degree finder search

The `is-standard` class is to be used on the standard layout **ONLY** as seen on the [content layouts page](content-layouts.html). If using the campaign layout, then this class must be removed.

The advanced search, as seen in the section below titled [advanced search](#advanced-search), is optional.

```html
<div class="c-degree-finder is-standard home-df">
  <div class="c-degree-finder-advanced__content">
    <h4 class="c-degree-finder__title">
      <a href="#0" class="c-degree-finder__title-link">Lorem Ipsum is simply dummy text</a>
    </h4>
    <p>Lorem Ipsum is simply <a href="#0">dummy text of the</a> printing and typesetting industry. <a href="#0">Lorem Ipsum has</a> been the industry's standard.</p>
    <div class="c-degree-finder__search">
      <form id="df-searchform-action" method="get" action="//www.adelaide.edu.au/degree-finder/">
        <div class="c-degree-finder__input-group">
          <input id="df-searchfield" class="c-degree-finder__input-group-field" name="v__s" placeholder="e.g. Engineering" type="text" data-df-year="2016">
          <input type="hidden" value="view" name="">
          <input type="hidden" value="program.source_program" name="">
          <input type="hidden" value="1" name="">
          <div class="c-degree-finder__input-group-button">
            <button class="c-degree-finder__button" id="ui-widget-search-search-btn" type="submit" title="Search the website for this term">Search</button>
          </div>
        </div>
        <!-- Degree finder advanced search -->
      </form>
    </div>
    <p>Lorem <a href="#0">bacon ipsum</a>.</p>
  </div>
</div>
```

## Advanced search

The optional advanced search markup sits in the position where you see the comment `<!-- Degree finder advanced search -->`.

```html
<div class="c-degree-finder-advanced__wrap js-degree-finder-advanced">
  <div class="c-degree-finder-advanced has-four-columns">
    <div class="c-degree-finder-advanced__column">
      <label for="adv_acad_career">Level of Study</label>
      <select id="adv_acad_career" name="">
        <option value="0" selected="">All</option>
        <option value="8">Higher Degree by Research</option>
      </select>
    </div>
    <div class="c-degree-finder-advanced__column">
      <label for="adv_degree_type">Degree Type</label>
      <select id="adv_degree_type" name="">
        <option value="0" selected="">All</option>
        <option value="17">Advanced Certificate</option>
      </select>
    </div>
    <div class="c-degree-finder-advanced__column">
      <label for="adv_atar">ATAR</label>
      <select id="adv_atar" name="">
        <option value="0" selected="">All</option>
        <option value="65">65-69</option>
      </select>
    </div>
    <div class="c-degree-finder-advanced__column">
      <label for="adv_year">Year</label>
      <select id="adv_year" name="">
        <option value="2019">2019</option>
        <option value="2018" selected="">2018</option>
      </select>
    </div>
  </div>
  <div class="c-degree-finder-advanced has-three-columns">
    <div class="c-degree-finder-advanced__column">
      <label for="adv_subject">Subject Area</label>
      <select id="adv_subject" name="">
        <option value="0" selected="">All</option>
        <option value="1">Accounting</option>
      </select>
    </div>
    <div class="c-degree-finder-advanced__column">
      <label for="adv_career">Career</label>
      <select id="adv_career" name="">
        <option value="0" selected="">All</option>
        <option value="549">Academic</option>
      </select>
    </div>
    <div class="c-degree-finder-advanced__column">
      <label for="adv_campus">Campus</label>
      <select id="adv_campus" name="">
        <option value="0" selected="">All</option>
        <option value="24">North Terrace Campus</option>
      </select>
    </div>
  </div>
  <div class="c-degree-finder-advanced__toggle js-degree-finder-advanced-toggle">
    <a href="#">Advanced</a>
  </div>
</div>
```

## JavaScript

- `js/vendor/jquery-ui.min.js`
- `js/plugins/degree-finder.js`
