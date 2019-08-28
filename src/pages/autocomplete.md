---
title: Autocomplete
description: Documentation for autocomplete.
static-demo: static-autocomplete
---

## Base structure

The autocomplete base structure may be used in any autocomplete component that you wish. We have also 

```html
<div class="c-autocomplete">
  <h2>Find what you're looking for</h2>
  <p>Lorem Ipsum is simply <a href="dummy1.html">dummy text of the</a>.</p>
  <form method="get" action="">
    <div class="c-autocomplete__input-group">
      <input class="c-autocomplete__input-group-field" name="autocomplete" placeholder="Search" type="text">
      <div class="c-autocomplete__input-group-button">
        <button class="c-autocomplete__button" type="submit" title="Search">Search</button>
      </div>
    </div>
  </form>
  <p>Lorem Ipsum is simply <a href="dummy2.html">dummy text of the</a>.</p>
</div>
```

## Searchable container

Anything that sits within the searchable container with the class of `js-autocomplete__search-wrapper` will be searched by the above autocomplete component. 

```html
<div class="js-autocomplete__search-wrapper">
 <ul>
    <li><a href="California.html">California</a></li>
    <li><a href="Camarasaurus.html">Camarasaurus</a></li>
    <li><a href="Canada.html">Canada</a></li>
    <li><a href="Camouflage.html">Camouflage</a></li>
    <li><a href="Calculator.html">Calculator</a></li>
  </ul>
</div>
```

## JavaScript

- `js/vendor/typeahead.bundle.min.js`
- `js/autocomplete-search.js`
