---
title: A-Z list
description: Documentation for a-z list.
static-demo: static-az-list
---

## Default

Each of the menu items within the element with the class `c-az-list__menu` represents each letter of the alphabet. You must display every letter of the alphabet from **A-Z**. Each of these menu items contains an anchor link to the `id` of an item within the body list which has the class `c-az-list__body`. Each of these ids and anchor links must be unique.
 
Within each `c-az-list__content-item` element there must contain one single `<h2>` element which must contain the letter of the alphabet in which that particular item represents. Also, within each of these menu items there contains **only one** `<ul>` element with the class of `c-az-list__link-list`. You may then display a list of items which relate to the particular letter of the alphabet.

You **must not** include any other text within the `<h2>` element other than what is mentioned above. You also **must not** add anything else to the `c-az-list__content-item` element other than a single `<ul>` element with the class of `c-az-list__link-list`.

```html
<div class="c-az-list js-az-list">
  <ul class="c-az-list__menu">
    <li class="c-az-list__menu-item"><a href="#a" data-smooth-scroll>A</a></li>
    <!-- ... -->
  </ul>
  <ul class="c-az-list__body">
    <li id="a" class="c-az-list__content-item">
      <h2>A</h2>
      <ul class="c-az-list__link-list">
        <li><a href="#0">Adelaide</a></li>
        <!-- ... -->
      </ul>
    </li>
    <!-- ... -->
  </ul>
</div>
```

## JavaScript

- `js/plugins/atoz.js`
